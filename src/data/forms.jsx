// Configs for the FormPage archetype (src/Pages/InnerPages/FormPage.jsx).
// Pure data — each section.fields entry is spread straight onto <FormFieldSet>.
// `fullWidth: true` makes a field span both columns in a 2-col section.
// `media` renders an upload dropzone in the aside; `tips` renders a checklist.

const ROLE_OPTIONS = [
  { label: "Owner", value: "owner" },
  { label: "Admin", value: "admin" },
  { label: "Editor", value: "editor" },
  { label: "Member", value: "member" },
  { label: "Viewer", value: "viewer" },
];

const TEAM_OPTIONS = [
  { label: "Product", value: "product" },
  { label: "Engineering", value: "engineering" },
  { label: "Design", value: "design" },
  { label: "Marketing", value: "marketing" },
  { label: "Sales", value: "sales" },
  { label: "Support", value: "support" },
];

export const FORM_CONFIGS = {
  "/user-management/add-user": {
    title: "Add user",
    subtitle: "Invite a teammate and set their access.",
    backTo: "/user-management/all-users",
    backLabel: "All users",
    submitLabel: "Send invite",
    media: { title: "Profile photo", hint: "Optional — PNG or JPG" },
    tips: {
      title: "Good to know",
      items: [
        "Invites expire after 7 days.",
        "Owners can change roles later from the user's profile.",
        "Billing access is separate from the Admin role.",
      ],
    },
    sections: [
      {
        title: "Details",
        subtitle: "Basic profile information.",
        columns: 2,
        fields: [
          { name: "firstName", label: "First name", placeholder: "Jane" },
          { name: "lastName", label: "Last name", placeholder: "Doe" },
          { type: "email", name: "email", label: "Work email", placeholder: "jane@acme.io", fullWidth: true },
          { name: "jobTitle", label: "Job title", placeholder: "Product Designer" },
          { type: "phone", name: "phone", label: "Phone" },
        ],
      },
      {
        title: "Access",
        subtitle: "What this person can see and do.",
        fields: [
          { type: "select", name: "role", label: "Role", placeholder: "Choose a role", options: ROLE_OPTIONS },
          { type: "checkbox", name: "teams", label: "Teams", options: TEAM_OPTIONS },
          { type: "switch", name: "admin", label: "Grant billing access" },
        ],
      },
      {
        title: "Invitation",
        fields: [
          { type: "textarea", name: "message", label: "Personal message", placeholder: "Welcome aboard!" },
          { type: "switch", name: "notify", label: "Email the invite now" },
        ],
      },
    ],
  },

  "/projects/create-project": {
    title: "Create project",
    subtitle: "Set up a new project and its first sprint.",
    backTo: "/projects/all-projects",
    backLabel: "All projects",
    submitLabel: "Create project",
    tips: {
      title: "Setup tips",
      items: [
        "The key prefixes every issue ID (e.g. MAR-101).",
        "You can switch templates until the first issue is created.",
        "Private projects are only visible to their members.",
      ],
    },
    sections: [
      {
        title: "Basics",
        columns: 2,
        fields: [
          { name: "name", label: "Project name", placeholder: "Mobile app redesign", fullWidth: true },
          { name: "key", label: "Key", placeholder: "MAR" },
          { type: "select", name: "template", label: "Template", placeholder: "Blank", options: [
            { label: "Blank", value: "blank" },
            { label: "Scrum", value: "scrum" },
            { label: "Kanban", value: "kanban" },
          ] },
          { type: "textarea", name: "description", label: "Description", placeholder: "What are we building and why?", fullWidth: true },
        ],
      },
      {
        title: "Timeline",
        columns: 2,
        fields: [
          { type: "datepicker", name: "startDate", label: "Start date" },
          { type: "datepicker", name: "dueDate", label: "Target date" },
        ],
      },
      {
        title: "Team",
        fields: [
          { type: "select", name: "lead", label: "Project lead", placeholder: "Choose a lead", options: [
            { label: "Amara Bello", value: "amara" },
            { label: "Jonas Weber", value: "jonas" },
            { label: "Maya Chen", value: "maya" },
          ] },
          { type: "checkbox", name: "members", label: "Members", options: TEAM_OPTIONS },
          { type: "switch", name: "private", label: "Private project" },
        ],
      },
    ],
  },

  "/ecommerce/add-product": {
    title: "Add product",
    subtitle: "Create a new product listing.",
    backTo: "/ecommerce/product-list",
    backLabel: "Products",
    submitLabel: "Publish product",
    media: { title: "Media", hint: "First image is the thumbnail" },
    tips: {
      title: "Publishing checklist",
      items: [
        "Add at least one image before publishing.",
        "Compare-at price shows as a strikethrough.",
        "Draft products are hidden from the storefront.",
      ],
    },
    sections: [
      {
        title: "Product information",
        fields: [
          { name: "name", label: "Title", placeholder: "Merino wool sweater" },
          { type: "textarea", name: "description", label: "Description", placeholder: "Describe the product…" },
        ],
      },
      {
        title: "Pricing",
        columns: 2,
        fields: [
          { type: "number", name: "price", label: "Price", placeholder: "0.00" },
          { type: "number", name: "compareAt", label: "Compare-at price", placeholder: "0.00" },
          { type: "number", name: "cost", label: "Cost per item", placeholder: "0.00" },
          { type: "switch", name: "taxable", label: "Charge tax on this product" },
        ],
      },
      {
        title: "Inventory",
        columns: 2,
        fields: [
          { name: "sku", label: "SKU", placeholder: "SWT-MER-01" },
          { name: "barcode", label: "Barcode", placeholder: "ISBN, UPC, GTIN…" },
          { type: "number", name: "quantity", label: "Quantity", placeholder: "0" },
          { type: "switch", name: "track", label: "Track quantity" },
        ],
      },
      {
        title: "Organization",
        fields: [
          { type: "select", name: "category", label: "Category", placeholder: "Choose a category", options: [
            { label: "Apparel", value: "apparel" },
            { label: "Accessories", value: "accessories" },
            { label: "Footwear", value: "footwear" },
            { label: "Home", value: "home" },
          ] },
          { name: "tags", label: "Tags", placeholder: "wool, winter, unisex" },
          { type: "radio", name: "status", label: "Status", options: [
            { label: "Active", value: "active" },
            { label: "Draft", value: "draft" },
          ] },
        ],
      },
    ],
  },

  "/ecommerce/create-order": {
    title: "Create order",
    subtitle: "Draft an order on a customer's behalf.",
    backTo: "/ecommerce/orders",
    backLabel: "Orders",
    submitLabel: "Create order",
    tips: {
      title: "Order tips",
      items: [
        "Draft orders don't reserve inventory until confirmed.",
        "Discounts apply per line item, before tax.",
        "A receipt email includes a payment link when status is Pending.",
      ],
    },
    sections: [
      {
        title: "Customer",
        columns: 2,
        fields: [
          { name: "customer", label: "Customer", placeholder: "Search or add a customer" },
          { type: "email", name: "email", label: "Email", placeholder: "customer@example.com" },
        ],
      },
      {
        title: "Line item",
        columns: 2,
        fields: [
          { name: "product", label: "Product", placeholder: "Search products", fullWidth: true },
          { type: "number", name: "qty", label: "Quantity", placeholder: "1" },
          { type: "number", name: "unitPrice", label: "Unit price", placeholder: "0.00" },
          { type: "number", name: "discount", label: "Discount %", placeholder: "0" },
        ],
      },
      {
        title: "Shipping address",
        columns: 2,
        fields: [
          { name: "address1", label: "Address", placeholder: "123 Market St", fullWidth: true },
          { name: "city", label: "City", placeholder: "San Francisco" },
          { name: "postal", label: "Postal code", placeholder: "94103" },
          { name: "country", label: "Country", placeholder: "United States" },
          { type: "select", name: "method", label: "Shipping method", placeholder: "Choose", options: [
            { label: "Standard (5–7 days)", value: "standard" },
            { label: "Express (2 days)", value: "express" },
            { label: "Overnight", value: "overnight" },
          ] },
        ],
      },
      {
        title: "Payment",
        fields: [
          { type: "select", name: "payment", label: "Payment status", placeholder: "Choose", options: [
            { label: "Pending", value: "pending" },
            { label: "Paid", value: "paid" },
            { label: "Refunded", value: "refunded" },
          ] },
          { type: "textarea", name: "notes", label: "Order notes", placeholder: "Internal notes for this order…" },
          { type: "switch", name: "sendReceipt", label: "Email a receipt to the customer" },
        ],
      },
    ],
  },
};
