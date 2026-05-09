type TableData = {
  withHeadings?: boolean;
  content?: string[][];
};

type TableSelection = {
  row: number;
  column: number;
};

function createEmptyRow(columns: number) {
  return Array.from({ length: Math.max(columns, 1) }, () => '');
}

function normalizeContent(content?: string[][]) {
  const rows = Array.isArray(content) && content.length > 0 ? content : [createEmptyRow(2)];
  const width = rows.reduce((max, row) => Math.max(max, Array.isArray(row) ? row.length : 0), 0) || 2;

  return rows.map((row) => {
    const nextRow = Array.isArray(row) ? row.slice(0, width) : [];
    while (nextRow.length < width) {
      nextRow.push('');
    }
    return nextRow.map((cell) => String(cell ?? ''));
  });
}

function normalizeGridRow(row: string[]) {
  return row.map((cell) => String(cell ?? '').replace(/\u00a0/g, ' ').trim());
}

function parsePlainTextGrid(text: string) {
  const normalizedText = String(text || '').replace(/\r\n/g, '\n').replace(/\r/g, '\n').trim();
  if (!normalizedText) {
    return null;
  }

  const lines = normalizedText
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => line.length > 0);

  if (lines.length === 0) {
    return null;
  }

  const containsTabs = lines.some((line) => line.includes('\t'));
  if (!containsTabs) {
    return null;
  }

  return lines.map((line) => normalizeGridRow(line.split('\t')));
}

function parseHtmlTable(html: string) {
  const markup = String(html || '').trim();
  if (!markup || !markup.toLowerCase().includes('<table')) {
    return null;
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(markup, 'text/html');
  const table = doc.querySelector('table');

  if (!table) {
    return null;
  }

  const rows = Array.from(table.querySelectorAll('tr')).map((row) =>
    normalizeGridRow(Array.from(row.querySelectorAll('th,td')).map((cell) => cell.textContent || '')),
  );

  return rows.filter((row) => row.length > 0);
}

function cloneContent(content: string[][]) {
  return content.map((row) => row.slice());
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

type EditorJsToolApi = Record<string, unknown>;

type EditorJsToolConstructorArgs = {
  data?: TableData;
  api: EditorJsToolApi;
  readOnly: boolean;
};

export default class SimpleTableTool {
  api: EditorJsToolApi;

  readOnly: boolean;

  data: Required<TableData>;

  wrapper: HTMLDivElement;

  tableElement: HTMLTableElement | null = null;

  selection: TableSelection = { row: 0, column: 0 };

  constructor({ data, api, readOnly }: EditorJsToolConstructorArgs) {
    this.api = api;
    this.readOnly = readOnly;
    this.data = {
      withHeadings: Boolean(data?.withHeadings),
      content: normalizeContent(data?.content),
    };
    this.wrapper = document.createElement('div');
  }

  static get toolbox() {
    return {
      title: 'Table',
      icon: '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="3" width="14" height="12" rx="2" stroke="currentColor" stroke-width="1.5"/><path d="M2 7H16" stroke="currentColor" stroke-width="1.5"/><path d="M2 11H16" stroke="currentColor" stroke-width="1.5"/><path d="M6 3V15" stroke="currentColor" stroke-width="1.5"/><path d="M12 3V15" stroke="currentColor" stroke-width="1.5"/></svg>',
    };
  }

  static get isReadOnlySupported() {
    return true;
  }

  static get pasteConfig() {
    return {
      tags: ['TABLE'],
      patterns: {
        tabular: /\t/,
      },
    };
  }

  render() {
    this.wrapper.className = 'editorjs-table-tool';
    this.wrapper.innerHTML = '';

    if (!this.readOnly) {
      this.wrapper.appendChild(this.renderControls());
    }

    const tableWrap = document.createElement('div');
    tableWrap.className = 'editorjs-table-tool__table-wrap';

    this.tableElement = document.createElement('table');
    this.tableElement.className = 'editorjs-table-tool__table';
    tableWrap.appendChild(this.tableElement);

    this.wrapper.appendChild(tableWrap);
    this.renderTable();

    return this.wrapper;
  }

  save() {
    this.syncFromDom();

    return {
      withHeadings: this.data.withHeadings,
      content: this.data.content,
    };
  }

  onPaste(event: { type?: string; detail?: { data?: unknown } }) {
    if (this.readOnly) {
      return;
    }

    const eventType = event?.type;
    let nextGrid: string[][] | null = null;

    if (eventType === 'tag') {
      const data = event?.detail?.data;
      if (data instanceof HTMLTableElement) {
        const rows = Array.from(data.querySelectorAll('tr')).map((row) =>
          normalizeGridRow(Array.from(row.querySelectorAll('th,td')).map((cell) => cell.textContent || '')),
        );
        nextGrid = rows.filter((row) => row.length > 0);
      } else if (typeof data === 'string') {
        nextGrid = parseHtmlTable(data);
      }
    }

    if (eventType === 'pattern' && typeof event?.detail?.data === 'string') {
      nextGrid = parsePlainTextGrid(event.detail.data);
    }

    if (!nextGrid || nextGrid.length === 0) {
      return;
    }

    this.data.content = normalizeContent(nextGrid);
    this.selection = { row: 0, column: 0 };
    this.renderTable();
  }

  renderControls() {
    const controls = document.createElement('div');
    controls.className = 'editorjs-table-tool__controls';

    const actions: Array<{ label: string; onClick: () => void; tone?: 'default' | 'danger' }> = [
      { label: 'Add row', onClick: () => this.insertRow(this.selection.row + 1) },
      { label: 'Delete row', onClick: () => this.deleteRow(this.selection.row), tone: 'danger' },
      { label: 'Add column', onClick: () => this.insertColumn(this.selection.column + 1) },
      { label: 'Delete column', onClick: () => this.deleteColumn(this.selection.column), tone: 'danger' },
    ];

    actions.forEach(({ label, onClick, tone }) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `editorjs-table-tool__button${tone === 'danger' ? ' editorjs-table-tool__button--danger' : ''}`;
      button.textContent = label;
      button.addEventListener('click', onClick);
      controls.appendChild(button);
    });

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = `editorjs-table-tool__button${this.data.withHeadings ? ' editorjs-table-tool__button--active' : ''}`;
    toggle.textContent = this.data.withHeadings ? 'Header row on' : 'Header row off';
    toggle.addEventListener('click', () => {
      this.syncFromDom();
      this.data.withHeadings = !this.data.withHeadings;
      toggle.textContent = this.data.withHeadings ? 'Header row on' : 'Header row off';
      toggle.classList.toggle('editorjs-table-tool__button--active', this.data.withHeadings);
      this.renderTable();
    });
    controls.appendChild(toggle);

    return controls;
  }

  renderTable() {
    if (!this.tableElement) {
      return;
    }

    const content = normalizeContent(this.data.content);
    this.data.content = content;
    this.tableElement.innerHTML = '';

    const headerRows = this.data.withHeadings && content.length > 0 ? [content[0]] : [];
    const bodyRows = this.data.withHeadings ? content.slice(1) : content;

    if (headerRows.length > 0) {
      const thead = document.createElement('thead');
      headerRows.forEach((row) => {
        const tr = document.createElement('tr');
        row.forEach((cell, columnIndex) => {
          tr.appendChild(this.createCell('th', cell, 0, columnIndex, true));
        });
        thead.appendChild(tr);
      });
      this.tableElement.appendChild(thead);
    }

    const tbody = document.createElement('tbody');
    bodyRows.forEach((row, rowIndex) => {
      const actualRowIndex = this.data.withHeadings ? rowIndex + 1 : rowIndex;
      const tr = document.createElement('tr');
      row.forEach((cell, columnIndex) => {
        tr.appendChild(this.createCell('td', cell, actualRowIndex, columnIndex, false));
      });
      tbody.appendChild(tr);
    });

    this.tableElement.appendChild(tbody);
  }

  createCell(tagName: 'th' | 'td', value: string, row: number, column: number, isHeading: boolean) {
    const cell = document.createElement(tagName);
    cell.className = `editorjs-table-tool__cell${isHeading ? ' editorjs-table-tool__cell--heading' : ''}`;
    cell.contentEditable = String(!this.readOnly);
    cell.spellcheck = true;
    cell.dataset.row = String(row);
    cell.dataset.column = String(column);
    cell.dataset.heading = String(isHeading);
    cell.textContent = value;

    if (!this.readOnly) {
      cell.addEventListener('focus', () => {
        this.selection = { row, column };
      });

      cell.addEventListener('mousedown', () => {
        this.selection = { row, column };
      });

      cell.addEventListener('input', () => {
        this.selection = { row, column };
      });

      // Robust paste handling: prevent duplicate insertions and stop propagation
      cell.addEventListener('paste', (event) => {
        try {
          // Prevent other handlers (including EditorJS) from processing this paste
          event.preventDefault();
          // Stop bubbling to avoid other listeners on ancestors
          event.stopPropagation();
          // Stop other listeners on the same element
          if (typeof (event as unknown as { stopImmediatePropagation?: () => void }).stopImmediatePropagation === 'function') {
            (event as unknown as { stopImmediatePropagation: () => void }).stopImmediatePropagation();
          }

          // Guard against double-handling within a short time window
          const last = Number(cell.dataset.__lastPasteAt || '0');
          const now = Date.now();
          if (now - last < 300) {
            return;
          }
          cell.dataset.__lastPasteAt = String(now);

          const html = event.clipboardData?.getData('text/html') ?? '';
          const text = event.clipboardData?.getData('text/plain') ?? '';
          const grid = parseHtmlTable(html) || parsePlainTextGrid(text);

          if (grid && grid.length > 0) {
            this.pasteGridAt(row, column, grid);
            return;
          }

          if (text && document.queryCommandSupported?.('insertText')) {
            // Use execCommand as the preferred insertion method for compatibility
            document.execCommand('insertText', false, text);
            return;
          }

          const selection = window.getSelection();
          if (!selection || selection.rangeCount === 0) {
            cell.textContent = text;
            return;
          }

          selection.deleteFromDocument();
          selection.getRangeAt(0).insertNode(document.createTextNode(text));
        } catch {
          // If anything goes wrong, fallback to a safe assignment
          try {
            const text = (event as ClipboardEvent).clipboardData?.getData('text/plain') ?? '';
            cell.textContent = text;
          } catch {
            /* ignore */
          }
        }
      });
    }

    return cell;
  }

  pasteGridAt(startRow: number, startColumn: number, grid: string[][]) {
    this.syncFromDom();

    const content = cloneContent(this.data.content);
    const normalizedGrid = grid
      .map((row) => normalizeGridRow(row))
      .filter((row) => row.length > 0);

    if (normalizedGrid.length === 0) {
      return;
    }

    const requiredRows = startRow + normalizedGrid.length;
    const currentWidth = content[0]?.length || 1;
    const gridWidth = normalizedGrid.reduce((max, row) => Math.max(max, row.length), 0) || 1;
    const requiredColumns = startColumn + gridWidth;
    const targetWidth = Math.max(currentWidth, requiredColumns);

    while (content.length < requiredRows) {
      content.push(createEmptyRow(targetWidth));
    }

    content.forEach((row) => {
      while (row.length < targetWidth) {
        row.push('');
      }
    });

    normalizedGrid.forEach((rowValues, rowOffset) => {
      rowValues.forEach((cellValue, columnOffset) => {
        const rowIndex = startRow + rowOffset;
        const columnIndex = startColumn + columnOffset;
        content[rowIndex][columnIndex] = cellValue;
      });
    });

    this.data.content = normalizeContent(content);
    this.selection = {
      row: clamp(startRow + normalizedGrid.length - 1, 0, this.data.content.length - 1),
      column: clamp(startColumn + gridWidth - 1, 0, this.data.content[0].length - 1),
    };
    this.renderTable();
  }

  syncFromDom() {
    if (!this.tableElement) {
      return;
    }

    const rows = Array.from(this.tableElement.querySelectorAll('tr'));
    const nextContent = rows.map((row) =>
      Array.from(row.querySelectorAll('th,td')).map((cell) =>
        String(cell.textContent ?? '').replace(/\u00a0/g, ' ').replace(/\s+/g, ' ').trim(),
      ),
    );

    this.data.content = normalizeContent(nextContent);
  }

  insertRow(index: number) {
    this.syncFromDom();
    const content = cloneContent(this.data.content);
    const nextIndex = clamp(index, 0, content.length);
    const width = content[0]?.length || 2;
    content.splice(nextIndex, 0, createEmptyRow(width));
    this.data.content = normalizeContent(content);
    this.renderTable();
  }

  deleteRow(index: number) {
    this.syncFromDom();
    const content = cloneContent(this.data.content);

    if (content.length <= 1) {
      content[0] = createEmptyRow(content[0]?.length || 2);
      this.data.content = normalizeContent(content);
      this.renderTable();
      return;
    }

    const nextIndex = clamp(index, 0, content.length - 1);
    content.splice(nextIndex, 1);
    this.data.content = normalizeContent(content);
    this.selection.row = clamp(nextIndex, 0, this.data.content.length - 1);
    this.renderTable();
  }

  insertColumn(index: number) {
    this.syncFromDom();
    const content = cloneContent(this.data.content);
    const nextIndex = clamp(index, 0, content[0]?.length || 1);

    content.forEach((row) => {
      row.splice(nextIndex, 0, '');
    });

    this.data.content = normalizeContent(content);
    this.renderTable();
  }

  deleteColumn(index: number) {
    this.syncFromDom();
    const content = cloneContent(this.data.content);
    const width = content[0]?.length || 1;

    if (width <= 1) {
      content.forEach((row) => {
        row[0] = '';
      });
      this.data.content = normalizeContent(content);
      this.renderTable();
      return;
    }

    const nextIndex = clamp(index, 0, width - 1);
    content.forEach((row) => {
      row.splice(nextIndex, 1);
    });

    this.data.content = normalizeContent(content);
    this.selection.column = clamp(nextIndex, 0, this.data.content[0].length - 1);
    this.renderTable();
  }
}