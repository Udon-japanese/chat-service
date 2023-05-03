import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => (
    <div className="flex justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
    </div>
  ),
});
export default function Editor() {
  const [content, setContent] = useState("");

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const Quill = require("react-quill").Quill;
  //     const italic = Quill.import("formats/italic");
  //     italic.tagName = "em";
  //     Quill.register(italic, true);
  //   }
  // }, []);

  const modules = {
    toolbar: [
      ["bold", "italic", "strike"],
      ["link", "image"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["blockquote"],
      ["code-block"],
    ],
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <>
      <ReactQuill
        placeholder="メッセージを入力..."
        modules={modules}
        className="dark:text-white"
        value={content}
        onChange={(newContent) => {
          setContent(newContent);
        }}
        theme="snow"
      />
    </>
  );
}
