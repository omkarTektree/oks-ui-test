import { Button, Chip, SelectField, SwitchField, TextField } from "oks-ui";
import { loginEmail } from "./login";

const sw = (defaultChecked = false) => (
  <SwitchField defaultChecked={defaultChecked} aria-label="toggle" />
);
const sel = (options, def) => (
  <SelectField size="sm" defaultValue={def} options={options} className="w-44" />
);
const txt = (defaultValue, w = "w-56") => (
  <div className={w}>
    <TextField size="sm" defaultValue={defaultValue} />
  </div>
);

export const SETTINGS_CONFIGS = {
  "/settings/general": {
    title: "General",
    subtitle: "Organization name, URL and defaults.",
    sections: [
      {
        title: "Organization",
        rows: [
          { title: "Organization name", control: txt("Acme Inc.") },
          { title: "Workspace URL", description: "acme.oks.app", control: txt("acme") },
          {
            title: "Default timezone",
            control: sel(
              [
                { label: "UTC", value: "utc" },
                { label: "Eastern (US)", value: "est" },
                { label: "Central Europe", value: "cet" },
              ],
              "cet"
            ),
          },
        ],
      },
      {
        title: "Danger zone",
        rows: [
          {
            title: "Delete organization",
            description: "Permanently remove this org and all its data.",
            control: (
              <Button size="sm" variant="soft" color="danger">
                Delete
              </Button>
            ),
          },
        ],
      },
    ],
  },
  "/settings/company": {
    title: "Company",
    subtitle: "Legal entity and billing address.",
    sections: [
      {
        title: "Company details",
        rows: [
          { title: "Legal name", control: txt("Acme Incorporated") },
          { title: "Tax ID", control: txt("EU-123456789") },
          { title: "Billing email", control: txt(loginEmail) },
          {
            title: "Country",
            control: sel(
              [
                { label: "United States", value: "us" },
                { label: "Germany", value: "de" },
                { label: "United Kingdom", value: "uk" },
              ],
              "de"
            ),
          },
        ],
      },
    ],
  },
  "/settings/appearance": {
    title: "Appearance",
    subtitle: "How the workspace looks for you.",
    sections: [
      {
        title: "Theme",
        rows: [
          {
            title: "Colour mode",
            description: "Light, dark, or match your system.",
            control: sel(
              [
                { label: "System", value: "system" },
                { label: "Light", value: "light" },
                { label: "Dark", value: "dark" },
              ],
              "system"
            ),
          },
          {
            title: "Density",
            control: sel(
              [
                { label: "Comfortable", value: "comfortable" },
                { label: "Compact", value: "compact" },
              ],
              "comfortable"
            ),
          },
          { title: "Reduce motion", description: "Minimise non-essential animation.", control: sw() },
        ],
      },
    ],
  },
  "/settings/locale": {
    title: "Locale",
    subtitle: "Language, date and number formats.",
    sections: [
      {
        title: "Formats",
        rows: [
          {
            title: "Language",
            control: sel(
              [
                { label: "English", value: "en" },
                { label: "Deutsch", value: "de" },
                { label: "Français", value: "fr" },
              ],
              "en"
            ),
          },
          {
            title: "Date format",
            control: sel(
              [
                { label: "DD/MM/YYYY", value: "dmy" },
                { label: "MM/DD/YYYY", value: "mdy" },
                { label: "YYYY-MM-DD", value: "iso" },
              ],
              "iso"
            ),
          },
          { title: "Start week on Monday", control: sw(true) },
        ],
      },
    ],
  },
  "/settings/notifications": {
    title: "Notifications",
    subtitle: "Where and when we contact you.",
    sections: [
      {
        title: "Email",
        rows: [
          { title: "Product updates", control: sw(true) },
          { title: "Weekly digest", control: sw(true) },
          { title: "Security alerts", description: "Always on for account safety.", control: sw(true) },
          { title: "Billing receipts", control: sw(true) },
        ],
      },
      {
        title: "In-app",
        rows: [
          { title: "Mentions & comments", control: sw(true) },
          { title: "Task assignments", control: sw(true) },
          { title: "Marketing", control: sw(false) },
        ],
      },
    ],
  },
  "/settings/integrations": {
    title: "Integrations",
    subtitle: "Connect the tools your team already uses.",
    showSave: false,
    sections: [
      {
        title: "Connected",
        rows: [
          {
            title: "Slack",
            description: "Posting to #general",
            control: (
              <div className="flex items-center gap-2">
                <Chip size="sm" variant="dot" color="success">
                  Connected
                </Chip>
                <Button size="sm" variant="bordered">
                  Manage
                </Button>
              </div>
            ),
          },
          {
            title: "GitHub",
            description: "2 repositories linked",
            control: (
              <div className="flex items-center gap-2">
                <Chip size="sm" variant="dot" color="success">
                  Connected
                </Chip>
                <Button size="sm" variant="bordered">
                  Manage
                </Button>
              </div>
            ),
          },
        ],
      },
      {
        title: "Available",
        rows: [
          { title: "Linear", description: "Sync issues and projects.", control: <Button size="sm" variant="soft" color="primary">Connect</Button> },
          { title: "Figma", description: "Embed designs in docs.", control: <Button size="sm" variant="soft" color="primary">Connect</Button> },
          { title: "Zapier", description: "Automate with 5,000+ apps.", control: <Button size="sm" variant="soft" color="primary">Connect</Button> },
        ],
      },
    ],
  },
  "/settings/api": {
    title: "API",
    subtitle: "Keys and webhooks for programmatic access.",
    showSave: false,
    sections: [
      {
        title: "API keys",
        rows: [
          {
            title: "Production key",
            description: "sk_live_••••••••••••4f2a — created 12 Mar 2026",
            control: (
              <div className="flex gap-2">
                <Button size="sm" variant="bordered">
                  Reveal
                </Button>
                <Button size="sm" variant="soft" color="danger">
                  Revoke
                </Button>
              </div>
            ),
          },
          {
            title: "Create a new key",
            control: (
              <Button size="sm" color="primary">
                Generate key
              </Button>
            ),
          },
        ],
      },
      {
        title: "Webhooks",
        rows: [
          { title: "Endpoint URL", control: txt("https://acme.io/hooks", "w-64") },
          { title: "Send test event", control: <Button size="sm" variant="bordered">Send</Button> },
        ],
      },
    ],
  },

  /* ------------------------------------------------------------- account -- */
  "/account/profile": {
    title: "Profile",
    subtitle: "Your personal information.",
    sections: [
      {
        title: "Details",
        rows: [
          { title: "Full name", control: txt("Admin User") },
          { title: "Email", control: txt(loginEmail) },
          { title: "Job title", control: txt("Administrator") },
          { title: "Bio", control: txt("Keeping the lights on.", "w-64") },
        ],
      },
    ],
  },
  "/account/security": {
    title: "Security",
    subtitle: "Password and multi-factor authentication.",
    sections: [
      {
        title: "Password",
        rows: [
          {
            title: "Change password",
            description: "Last changed 3 months ago.",
            control: <Button size="sm" variant="bordered">Update</Button>,
          },
        ],
      },
      {
        title: "Two-factor authentication",
        rows: [
          { title: "Authenticator app", description: "Recommended.", control: sw(true) },
          { title: "SMS backup", control: sw(false) },
          { title: "Recovery codes", control: <Button size="sm" variant="bordered">View</Button> },
        ],
      },
      {
        title: "Sessions",
        rows: [
          {
            title: "Sign out everywhere",
            description: "Ends all sessions except this one.",
            control: <Button size="sm" variant="soft" color="danger">Sign out</Button>,
          },
        ],
      },
    ],
  },
  "/account/billing": {
    title: "Billing",
    subtitle: "Plan, payment method and invoices.",
    showSave: false,
    sections: [
      {
        title: "Plan",
        rows: [
          {
            title: "Growth — $49 / seat / month",
            description: "12 of 20 seats used. Renews 1 Aug 2026.",
            control: <Button size="sm" variant="bordered">Change plan</Button>,
          },
        ],
      },
      {
        title: "Payment method",
        rows: [
          { title: "Visa ending 4242", description: "Expires 08 / 27", control: <Button size="sm" variant="bordered">Update</Button> },
        ],
      },
    ],
  },
  "/account/notifications": {
    title: "Notifications",
    subtitle: "Your personal notification preferences.",
    sections: [
      {
        title: "Email me about",
        rows: [
          { title: "Comments on my work", control: sw(true) },
          { title: "New followers", control: sw(false) },
          { title: "Weekly summary", control: sw(true) },
        ],
      },
    ],
  },
  "/account/connected-apps": {
    title: "Connected apps",
    subtitle: "Third-party apps with access to your account.",
    showSave: false,
    sections: [
      {
        title: "Authorized",
        rows: [
          { title: "Raycast", description: "Read profile · authorized 4 Jun 2026", control: <Button size="sm" variant="soft" color="danger">Revoke</Button> },
          { title: "Vercel", description: "Read repositories · authorized 22 May 2026", control: <Button size="sm" variant="soft" color="danger">Revoke</Button> },
        ],
      },
    ],
  },
  "/account/api": {
    title: "Personal access tokens",
    subtitle: "Tokens scoped to your account.",
    showSave: false,
    sections: [
      {
        title: "Tokens",
        rows: [
          { title: "CLI token", description: "Full access · last used 2h ago", control: <Button size="sm" variant="soft" color="danger">Revoke</Button> },
          { title: "New token", control: <Button size="sm" color="primary">Generate</Button> },
        ],
      },
    ],
  },
};

// alias — the sidebar's Account "Settings" item
SETTINGS_CONFIGS["/account/settings"] = SETTINGS_CONFIGS["/settings/general"];
