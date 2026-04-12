# Content JSON Template

Use this file as the single reusable template for the JSON section with CSS. Replace the copy and add your images later when they are ready.

## JSON section with CSS

```json
{
	"title": "Why Enterprise Delivery Is Different",
	"eyebrow": "Enterprise retailers face a perfect storm",
	"bullets": [
		"Sky-high customer expectations for same-day and express delivery",
		"Multi-warehouse routing across regions and countries",
		"Growing 3PL and carrier networks",
		"Regulatory constraints, SLA enforcement, and real-time tracking demands"
	],
	"body": "In short: The complexity, volume, and variability are nothing like SMB logistics. And neither is the tech stack.",
	"quote": "One misrouted truck can delay hundreds of orders.",
	"styles": {
		"sectionClass": "enterprise-delivery-section",
		"titleClass": "enterprise-delivery-title",
		"eyebrowClass": "enterprise-delivery-eyebrow",
		"bodyClass": "enterprise-delivery-body",
		"quoteClass": "enterprise-delivery-quote"
	}
}
```

```css
.enterprise-delivery-section {
	background: #ffffff;
	padding: 4rem 1.5rem;
}

.enterprise-delivery-title {
	color: #2f1c8c;
	font-size: clamp(1.75rem, 4vw, 3rem);
	font-weight: 600;
	line-height: 1.1;
	letter-spacing: -0.03em;
}

.enterprise-delivery-eyebrow {
	color: #6c757d;
	font-size: 1rem;
	font-weight: 500;
}

.enterprise-delivery-body {
	color: #6c757d;
	font-size: 1rem;
	line-height: 1.7;
}

.enterprise-delivery-quote {
	color: #2f1c8c;
	font-size: 1rem;
	font-weight: 600;
}
```

## JSON table with CSS

```json
{
	"title": "Enterprise vs. SMB: A Side-by-Side Comparison",
	"columns": ["Feature", "Enterprise Retail", "SMB Retail"],
	"rows": [
		{
			"feature": "Stops Per Day",
			"enterprise": "1,000s across regions",
			"smb": "Dozens, locally"
		},
		{
			"feature": "Network",
			"enterprise": "Multi-warehouse, multi-depot",
			"smb": "Single local hub"
		},
		{
			"feature": "Routing",
			"enterprise": "Real-time, AI-driven, multi-modal",
			"smb": "Static or once-daily"
		},
		{
			"feature": "Carriers",
			"enterprise": "Dozens of 3PLs",
			"smb": "One or two partners"
		},
		{
			"feature": "Tech Stack",
			"enterprise": "ERP, OMS, WMS integrations",
			"smb": "Manual imports, limited tools"
		},
		{
			"feature": "Compliance",
			"enterprise": "ESG, emissions, HOS, etc.",
			"smb": "Basic delivery rules"
		},
		{
			"feature": "Visibility",
			"enterprise": "Real-time control tower dashboards",
			"smb": "Simple driver tracking"
		}
	],
	"styles": {
		"sectionClass": "comparison-table-section",
		"tableClass": "comparison-table",
		"headerRowClass": "comparison-table-header-row",
		"headerCellClass": "comparison-table-header-cell",
		"featureCellClass": "comparison-table-feature-cell",
		"enterpriseCellClass": "comparison-table-enterprise-cell",
		"smbCellClass": "comparison-table-smb-cell"
	}
}
```

```css
.comparison-table-section {
	background: #ffffff;
	padding: 4rem 1.5rem;
}

.comparison-table {
	width: 100%;
	border-collapse: separate;
	border-spacing: 0;
	font-family: inherit;
}

.comparison-table-header-row th {
	padding: 1rem 1.25rem;
	text-align: left;
	font-weight: 700;
	font-size: 0.95rem;
	color: #ffffff;
	border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}

.comparison-table-header-cell {
	background: #f4f2fb;
	color: #2f1c8c;
}

.comparison-table-feature-cell {
	background: #ffffff;
	color: #111827;
	font-weight: 600;
	width: 28%;
}

.comparison-table-enterprise-cell {
	background: #7a7f8c;
	color: #ffffff;
	font-weight: 600;
	width: 36%;
}

.comparison-table-smb-cell {
	background: #3a1d9e;
	color: #ffffff;
	font-weight: 600;
	width: 36%;
}

.comparison-table td {
	padding: 1rem 1.25rem;
	vertical-align: middle;
	border-bottom: 1px solid #ece8f6;
	font-size: 0.95rem;
}

.comparison-table tbody tr:last-child td {
	border-bottom: 0;
}

@media (max-width: 768px) {
	.comparison-table,
	.comparison-table thead,
	.comparison-table tbody,
	.comparison-table tr,
	.comparison-table th,
	.comparison-table td {
		display: block;
	}

	.comparison-table thead {
		display: none;
	}

	.comparison-table tr {
		margin-bottom: 1rem;
		border: 1px solid #ece8f6;
		border-radius: 16px;
		overflow: hidden;
	}

	.comparison-table td {
		border-bottom: 1px solid #ece8f6;
	}

	.comparison-table td::before {
		content: attr(data-label);
		display: block;
		font-size: 0.8rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		margin-bottom: 0.35rem;
		color: rgba(17, 24, 39, 0.7);
	}

	.comparison-table-feature-cell,
	.comparison-table-enterprise-cell,
	.comparison-table-smb-cell {
		width: 100%;
	}
}
```

## JSON content section with CSS

```json
{
	"title": "How Finmile Powers Retail Giants",
	"intro": "Finmile is built from the ground up for enterprise delivery optimization.",
	"listTitle": "Clicks you are in to:",
	"highlights": [
		"Action across regions in real time",
		"Auto-consolidate parcels and plan efficient multi-day routes",
		"Reduce mileage, emissions, and failed delivery attempts",
		"Achieve consistent double-digit cost savings and 99% on-time delivery"
	],
	"quote": "One misrouted truck can delay hundreds of orders.",
	"useCase": {
		"label": "Use Case:",
		"description": "A shin-style fast fashion retailer handles over 1 million packages per day using Finmile.",
		"resultsTitle": "Results:",
		"results": [
			"Consolidated domestic sortation at origin",
			"Real-time fleet optimization across regions",
			"Cut vehicle miles and improved ETAs across tens of thousands of stops"
		]
	},
	"scaleSection": {
		"title": "Built for Scale. Proven in the Field.",
		"intro": "Whether you're:",
		"bullets": [
			"A global e-commerce platform scaling across warehouses",
			"A retailer coordinating multiple 3PLs across Europe and North America",
			"A logistics ops leader trying to control spiraling costs and SLAs",
			"Finmile is the platform that makes complexity scalable"
		]
	},
	"cta": {
		"title": "Running thousands of deliveries a day? Don't settle for SMB software.",
		"description": "Download the Finmile whitepaper and see how retail giants scale delivery - without scaling cost.",
		"buttonText": "Download the Whitepaper"
	},
	"audience": {
		"title": "Who Should Read This",
		"intro": "If you are a:",
		"roles": [
			"COO or Head of Operations",
			"Logistics Director or Fleet Manager",
			"Last-Mile Tech Lead",
			"Retail or 3PL Delivery Strategist"
		],
		"closing": "...this whitepaper is for you."
	},
	"styles": {
		"sectionClass": "retail-giants-section",
		"titleClass": "retail-giants-title",
		"introClass": "retail-giants-intro",
		"listTitleClass": "retail-giants-list-title",
		"highlightListClass": "retail-giants-highlights",
		"quoteClass": "retail-giants-quote",
		"useCaseCardClass": "retail-giants-use-case-card",
		"useCaseLabelClass": "retail-giants-use-case-label",
		"useCaseDescriptionClass": "retail-giants-use-case-description",
		"resultsTitleClass": "retail-giants-results-title",
		"resultsListClass": "retail-giants-results-list",
		"scaleSectionClass": "retail-giants-scale-section",
		"ctaCardClass": "retail-giants-cta-card",
		"ctaTitleClass": "retail-giants-cta-title",
		"ctaDescriptionClass": "retail-giants-cta-description",
		"ctaButtonClass": "retail-giants-cta-button",
		"audienceSectionClass": "retail-giants-audience-section",
		"audienceRolesClass": "retail-giants-audience-roles"
	}
}
```

```css
.retail-giants-section {
	background: #ffffff;
	padding: 4rem 1.5rem;
	color: #111827;
}

.retail-giants-title {
	color: #3923a6;
	font-size: clamp(2rem, 4vw, 3rem);
	font-weight: 700;
	line-height: 1.1;
	margin-bottom: 1rem;
}

.retail-giants-intro,
.retail-giants-list-title,
.retail-giants-use-case-description,
.retail-giants-scale-section,
.retail-giants-cta-description {
	color: #6b7280;
	font-size: 1rem;
	line-height: 1.7;
}

.retail-giants-list-title,
.retail-giants-results-title {
	font-weight: 600;
	margin-top: 1.25rem;
	margin-bottom: 0.75rem;
}

.retail-giants-highlights,
.retail-giants-results-list,
.retail-giants-audience-roles {
	margin: 0;
	padding-left: 1.25rem;
	color: #111827;
}

.retail-giants-highlights li,
.retail-giants-results-list li,
.retail-giants-audience-roles li {
	margin-bottom: 0.5rem;
}

.retail-giants-quote {
	color: #3923a6;
	font-weight: 700;
	margin: 1.5rem 0;
}

.retail-giants-use-case-card {
	background: linear-gradient(135deg, #351d9d 0%, #4322b8 100%);
	color: #ffffff;
	border-radius: 18px;
	padding: 1.5rem;
	margin: 1.5rem 0 2rem;
	box-shadow: 0 24px 60px rgba(53, 29, 157, 0.25);
}

.retail-giants-use-case-label {
	font-size: 1.2rem;
	font-weight: 700;
	margin-bottom: 0.5rem;
}

.retail-giants-results-title {
	color: rgba(255, 255, 255, 0.78);
	margin-top: 1rem;
}

.retail-giants-results-list {
	color: #ffffff;
}

.retail-giants-scale-section {
	margin: 2rem 0 1rem;
	padding-top: 0.5rem;
}

.retail-giants-cta-card {
	background: linear-gradient(180deg, #f8f5ff 0%, #f3efff 100%);
	border-radius: 18px;
	padding: 2rem;
	text-align: center;
	margin: 1rem 0 2rem;
}

.retail-giants-cta-title {
	font-size: 1.35rem;
	font-weight: 700;
	color: #111827;
	margin-bottom: 0.75rem;
}

.retail-giants-cta-button {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	margin-top: 1rem;
	padding: 0.85rem 1.5rem;
	border-radius: 999px;
	background: #6d28d9;
	color: #ffffff;
	font-weight: 700;
	font-size: 0.95rem;
}

.retail-giants-audience-section {
	margin-top: 2rem;
}

@media (max-width: 768px) {
	.retail-giants-section {
		padding: 3rem 1rem;
	}

	.retail-giants-use-case-card,
	.retail-giants-cta-card {
		padding: 1.25rem;
	}
}
```

## Notes

- Keep `slug` lowercase and hyphenated when you add content later.
- Replace the text and add the final images once you send them.
