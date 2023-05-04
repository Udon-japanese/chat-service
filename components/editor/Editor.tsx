import React, { useState, useEffect, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import QuillComponent, { ReactQuillProps } from "react-quill";
const ReactQuill = (
  typeof window === "object" ? require("react-quill") : () => false
) as React.FC<ReactQuillProps & { ref: React.Ref<QuillComponent> }>;

export default function Editor() {
  const [content, setContent] = useState<string>("");
  const quillRef = useRef<QuillComponent | null>(null);

  useEffect(() => {
    quillRef.current?.focus();
  }, []);

  // useEffect(() => {
  //     if (typeof window !== "undefined") {
  //       const Quill = require("react-quill").Quill;
  //       const italic = Quill.import("formats/italic");
  //       italic.tagName = "em";
  //       Quill.register(italic, true);
  //     }
  // }, []);

function Content() {
  return (
    React.createElement("div", {dangerouslySetInnerHTML: {__html: content}})
  )
}
  const modules = {
    toolbar: [
      ["bold", "italic", "strike"],
      ["link", "image"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote"],
      ["code-block"],
      ["clean"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <>
      <ReactQuill
        ref={quillRef}
        placeholder="#general へのメッセージ"
        modules={modules}
        className="dark:text-white"
        value={content}
        onChange={(newContent) => {
          setContent(newContent);
        }}
        theme="snow"
      />
      <Content />
    </>
  );
}
