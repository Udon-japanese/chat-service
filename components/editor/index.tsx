import { Icon } from "@iconify/react";
import React, { useState, useEffect, useRef } from "react";
import "react-quill/dist/quill.snow.css";
import "react-quill/dist/quill.core.css";
import QuillComponent, { ReactQuillProps } from "react-quill";
import CustomToolbar from "./CustomToolbar";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css";
import AutoLinks from "quill-auto-links";
const ReactQuill = (
  typeof window === "object" ? require("react-quill") : () => false
) as React.FC<ReactQuillProps & { ref: React.Ref<QuillComponent> }>;
const Quill =
  typeof window === "object" ? require("react-quill").Quill : () => false;

hljs.configure({
  languages: [
    "javascript",
    "php",
    "html",
    "css",
    "ruby",
    "python",
    "rust",
    "scala",
    "bash",
    "kotlin",
    "cs",
    "java",
    "json",
    "sql",
    "ts",
    "cpp",
    "golang",
    "perl",
    "c",
    "swift",
    "vbnet",
  ],
});

Quill.register("modules/autoLinks", AutoLinks);

const modules = {
  syntax: {
    highlight: (text: string) => hljs.highlightAuto(text).value,
  },
  toolbar: {
    container: "#toolbar",
  },
  clipboard: {
    matchVisual: false,
  },
  autoLinks: {
    paste: true,
    type: true,
  },
};

export default function Editor() {
  const [content, setContent] = useState<string>("");
  const quillRef = useRef<QuillComponent | null>(null);

  useEffect(() => {
    quillRef.current?.focus();
  }, []);

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <>
      <div className="w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
        <div className="flex items-center justify-between border-b px-2 dark:border-gray-600">
          <CustomToolbar />
        </div>
        <div className="relative max-h-[38rem] overflow-auto bg-white text-sm text-gray-800 dark:bg-gray-800 dark:text-white">
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
        </div>
        <div className="flex items-center justify-between border-t px-0.5 py-0.5 dark:border-gray-600">
          <div className="ml-auto">
            <button
              type="button"
              title="送信"
              className="cursor-pointer rounded p-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Icon icon="material-symbols:send" width={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
