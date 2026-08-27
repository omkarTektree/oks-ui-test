# Page map

Mirrors the Vela admin template. Every leaf is a route in `src/data/nav.js`;
unbuilt ones render the themed `ComingSoon` page. Build order roughly follows
the dashboards first, then the sections that reuse the same widgets.

Legend: **✅ built** · 🔨 next · ⬜ planned

## Dashboards  `/dashboards/*`
| Page | Route | Status |
| --- | --- | --- |
| Analytics | `/dashboards/analytics` | ✅ (KPIs · revenue chart · donut · funnel · device meters · goal gauge · products table · activity) |
| CRM | `/dashboards/crm` | ✅ (KPIs · pipeline stages · win/loss donut · lead sources · activity tiles · rep leaderboard) |
| Ecommerce | `/dashboards/ecommerce` | ✅ (KPIs · sales column chart · fulfilment donut · stat strip · category meters · two DataTables) |
| Finance | `/dashboards/finance` | ✅ (KPIs · cash-flow cards · revenue-vs-expenses multi-series chart · expense donut · budget meters · transactions table) |
| Sales | `/dashboards/sales` | ✅ (KPIs · pipeline stats · sales-trend chart · quota gauge with rep rows · region donut · leaderboard · deals table) |
| Marketing | `/dashboards/marketing` | ✅ (KPIs · spend/leads chart · channel donut · marketing funnel · campaign ROAS meters · campaigns table) |
| Logistics | `/dashboards/logistics` | ✅ (KPIs · warehouse meters · delivery donut · volume chart · on-time gauge · fleet + regional tiles · shipments table) |
| Projects | `/dashboards/projects` | ✅ (KPIs · health strip · project-progress table · team-workload list · deadlines timeline · sprint-velocity chart · activity) |
| SaaS | `/dashboards/saas` | ✅ (KPIs · health tiles · MRR chart · plan-mix donut · cohort retention heatmap · signups table) |
| Business Intelligence | `/dashboards/business-intelligence` | ✅ (KPIs · AI-insight Alerts · KPI-vs-target table · data sources · report library · regional donut) |

## Orders  `/orders` ⬜

## Apps  `/apps/*`
Chat · Contacts · File Manager · Notes · Task Manager · Help Desk · Group Chat ·
Support Tickets · Email · Calendar

## User Management  `/user-management/*`
All Users · My Profile · Add User · Roles · Permissions · Teams · Departments ·
Activity Logs

## Projects  `/projects/*`
All Projects · Create Project · Timeline · Team Board · Sprint Board · Gantt View ·
Project Analytics · Kanban View

## Finance  `/finance/*`
Transactions · Payments · Expenses · Profit & Loss · Budget Management · Invoices ·
Financial Reports

## CRM  `/crm/*`
CRM Dashboard · CRM App · Leads · Opportunities · Customers · Deals · Pipeline ·
Sales Funnel · Campaigns · Customer Journey

## HR Management  `/hr/*`
Employees · Attendance · Leave Requests · Payroll · Departments · Recruitment ·
Job Applications

## Logistics  `/logistics/*`
Shipments · Delivery Tracking · Fleet Management · Warehouse Management ·
Route Planning

## Ecommerce  `/ecommerce/*`
Product Grid · Product List · Add Product · Categories · Orders · Create Order ·
Customers · Customer Analytics · Reviews · Inventory · Coupons · Wishlist ·
Promotions

## Tables & Forms  `/tables-forms/*`
Responsive Table · Filter Table · Basic Table · Data Table · Advanced Table ·
Form Elements · Form Layouts · Form Validation · Multi-Step Wizard · File Upload ·
Rich Text Editor · Date Pickers · Select Components · Input Masks

## Charts & Analytics  `/charts/*`
Apex Charts · Chart.js · Statistics · KPI Analytics · Heatmaps · Revenue Analytics ·
User Analytics

## Components  `/components`, `/components/:slug`  ✅ (the promo gallery)

`/components` is a card grid; each `/components/:slug` renders live examples +
copyable source. Registry: `src/data/gallery.jsx`.

- **oks-ui:** Button · Chip · Badge · Avatar · Alert · Tabs · Tooltip · Dropdown ·
  Toast · Loader · Divider · PageTitle
- **Composed (`src/Components/ui`):** Surface · KpiCard · TrendChip · StatusChip ·
  EntityCell · ChartCard · DonutStat · MeterList · GoalCard · DataTable · ActivityFeed

More entries are just data — add an object to the registry.

## Account  `/account/*`
Profile · Settings · Security · Billing · Notifications · Connected Apps · API

## Marketing  `/marketing/*`
Overview · Email Campaigns · SMS Campaigns · Landing Pages · Segments · Analytics

## Reports  `/reports/*`
Sales Report · Revenue Report · Customer Report · Project Report · Marketing Report ·
Custom Builder

## Settings  `/settings/*`
General · Company · Theme · Appearance · Locale · Notifications · Integrations · API

## Utility  `/utility/*`
FAQ · Help Center · Knowledge Base · Documentation · Search Results ·
Notifications Center · Activity Feed · Pricing · Widget Gallery · UI Playground

## Pages  `/pages/*`
Theme Customizer · RTL / Dark / Light Preview · Starter Kit · Changelog · Roadmap

## Auth & system  (outside the app shell)
| Page | Route | Status |
| --- | --- | --- |
| Login | `/` | ✅ |
| Register | `/register` | ✅ |
| Forgot Password | `/forgot-password` | ✅ |
| Terms | `/terms` | ✅ |
| 404 Error | `/404-error` | ⬜ |
| Maintenance | `/maintenance` | ⬜ |
| Release Notes | `/pages/release-notes` | ⬜ |
