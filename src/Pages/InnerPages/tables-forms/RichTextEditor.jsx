import { useState } from "react";
import { TextEditor } from "oks-ui";
import SectionTitle from "../../../Components/ui/SectionTitle";
import Surface from "../../../Components/ui/Surface";

const RichTextEditor = () => {
  const [blocks, setBlocks] = useState([]);

  return (
    <div className="space-y-6">
      <SectionTitle
        title="Rich text editor"
        subtitle="oks-ui <TextEditor> — a block editor with headings, lists, quotes and inline formatting."
      />
      <Surface padding="md">
        <TextEditor
          value={blocks}
          onChange={setBlocks}
          placeholder="Write something…"
        />
      </Surface>
    </div>
  );
};

export default RichTextEditor;
