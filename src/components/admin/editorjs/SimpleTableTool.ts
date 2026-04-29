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

function cloneContent(content: string[][]) {
  return content.map((row) => row.slice());
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export default class SimpleTableTool {
  api: any;

  readOnly: boolean;

  data: Required<TableData>;

  wrapper: HTMLDivElement;

  tableElement: HTMLTableElement | null = null;

  selection: TableSelection = { row: 0, column: 0 };

  constructor({ data, api, readOnly }: { data: TableData; api: any; readOnly: boolean }) {
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

      cell.addEventListener('paste', (event) => {
        event.preventDefault();
        const text = event.clipboardData?.getData('text/plain') ?? '';

        if (text && document.queryCommandSupported?.('insertText')) {
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
      });
    }

    return cell;
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