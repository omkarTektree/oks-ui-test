import { useState } from "react";
import { Button } from "oks-ui";
import {
  ChevronRight, Folder, FileText, FileSpreadsheet, FileImage, FileVideo,
  FileCode, File as FileIcon, Upload, FolderPlus, LayoutGrid, List as ListIcon,
  HardDrive,
} from "lucide-react";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";
import CardHeader from "../../../Components/ui/CardHeader";
import { FILE_TREE } from "../../../data/apps";

const KIND_ICON = {
  doc: FileText, slide: FileImage, sheet: FileSpreadsheet, image: FileImage,
  video: FileVideo, pdf: FileText, code: FileCode,
};
const KIND_TONE = {
  doc: "info", slide: "warning", sheet: "success", image: "primary",
  video: "danger", pdf: "danger", code: "default",
};

const FileManager = () => {
  const [view, setView] = useState("grid");
  const { crumbs, folders, files, storage } = FILE_TREE;

  return (
    <div>
      <SectionTitle
        title="File manager"
        subtitle="Browse folders and files with a breadcrumb trail."
        actions={
          <>
            <Button size="sm" variant="bordered" startContent={<FolderPlus size={15} />}>
              New folder
            </Button>
            <Button size="sm" color="primary" startContent={<Upload size={15} />}>
              Upload
            </Button>
          </>
        }
      />

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_18rem]">
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-3">
            <nav className="flex items-center gap-1 text-sm text-[color:var(--app-fg-muted)]">
              {crumbs.map((c, i) => (
                <span key={c} className="flex items-center gap-1">
                  {i > 0 && <ChevronRight size={14} className="opacity-50" />}
                  <span className={i === crumbs.length - 1 ? "font-medium text-[var(--app-fg)]" : ""}>
                    {c}
                  </span>
                </span>
              ))}
            </nav>
            <div className="flex items-center gap-1 rounded-[var(--oks-radius-md)] border border-[color:var(--app-border)] p-0.5">
              <button
                type="button"
                onClick={() => setView("grid")}
                className={`rounded p-1.5 ${view === "grid" ? "bg-[var(--app-surface-2)] text-[var(--app-fg)]" : "text-[color:var(--app-fg-subtle)]"}`}
              >
                <LayoutGrid size={15} />
              </button>
              <button
                type="button"
                onClick={() => setView("list")}
                className={`rounded p-1.5 ${view === "list" ? "bg-[var(--app-surface-2)] text-[var(--app-fg)]" : "text-[color:var(--app-fg-subtle)]"}`}
              >
                <ListIcon size={15} />
              </button>
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
              Folders
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              {folders.map((f) => (
                <Surface key={f.name} padding="sm" interactive className="cursor-pointer">
                  <Folder size={22} className="text-[var(--oks-color-primary-500)]" />
                  <p className="mt-2 truncate text-sm font-medium text-[var(--app-fg)]">{f.name}</p>
                  <p className="text-xs text-[color:var(--app-fg-subtle)]">
                    {f.items} items · {f.size}
                  </p>
                </Surface>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
              Files
            </p>
            {view === "grid" ? (
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {files.map((f) => {
                  const Icon = KIND_ICON[f.kind] ?? FileIcon;
                  return (
                    <Surface key={f.name} padding="sm" interactive className="cursor-pointer">
                      <Icon size={22} style={{ color: `var(--oks-color-${KIND_TONE[f.kind] ?? "default"}-500)` }} />
                      <p className="mt-2 truncate text-sm font-medium text-[var(--app-fg)]">{f.name}</p>
                      <p className="text-xs text-[color:var(--app-fg-subtle)]">{f.size} · {f.modified}</p>
                    </Surface>
                  );
                })}
              </div>
            ) : (
              <Surface padding="none" className="overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[color:var(--app-border)] text-left text-xs font-semibold uppercase tracking-wide text-[color:var(--app-fg-subtle)]">
                      <th className="px-4 py-2.5">Name</th>
                      <th className="px-4 py-2.5">Owner</th>
                      <th className="px-4 py-2.5">Modified</th>
                      <th className="px-4 py-2.5 text-right">Size</th>
                    </tr>
                  </thead>
                  <tbody>
                    {files.map((f) => {
                      const Icon = KIND_ICON[f.kind] ?? FileIcon;
                      return (
                        <tr key={f.name} className="border-b border-[color:var(--app-border)] last:border-0 hover:bg-[var(--app-surface-2)]">
                          <td className="flex items-center gap-2 px-4 py-2.5 font-medium text-[var(--app-fg)]">
                            <Icon size={15} style={{ color: `var(--oks-color-${KIND_TONE[f.kind] ?? "default"}-500)` }} />
                            {f.name}
                          </td>
                          <td className="px-4 py-2.5 text-[color:var(--app-fg-muted)]">{f.by}</td>
                          <td className="px-4 py-2.5 text-[color:var(--app-fg-muted)]">{f.modified}</td>
                          <td className="px-4 py-2.5 text-right text-[color:var(--app-fg-muted)]">{f.size}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </Surface>
            )}
          </div>
        </div>

        <Surface>
          <CardHeader title="Storage" subtitle={`${storage.usedLabel} of ${storage.totalLabel} used`} />
          <div className="flex items-center gap-3">
            <HardDrive size={20} className="text-[color:var(--app-fg-muted)]" />
            <div className="flex-1">
              <div className="h-2 overflow-hidden rounded-full bg-[var(--app-surface-2)]">
                <div
                  className="h-full rounded-full bg-[var(--oks-color-primary-500)]"
                  style={{ width: `${storage.used}%` }}
                />
              </div>
            </div>
            <span className="text-sm font-medium text-[var(--app-fg)]">{storage.used}%</span>
          </div>
          <ul className="mt-4 space-y-2 text-sm text-[color:var(--app-fg-muted)]">
            <li className="flex justify-between"><span>Documents</span><span>12 GB</span></li>
            <li className="flex justify-between"><span>Images</span><span>21 GB</span></li>
            <li className="flex justify-between"><span>Video</span><span>29 GB</span></li>
            <li className="flex justify-between"><span>Other</span><span>6 GB</span></li>
          </ul>
        </Surface>
      </div>
    </div>
  );
};

export default FileManager;
