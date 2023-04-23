import { useState } from "react";

const TextEditor = () => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isCode, setIsCode] = useState(false);
  const [text, setText] = useState("");

  const handleBoldClick = () => {
    setIsBold(!isBold);
  };

  const handleItalicClick = () => {
    setIsItalic(!isItalic);
  };

  const handleCodeClick = () => {
    setIsCode(!isCode);
  };

  const getStyle = () => {
    let className = "";
    if (isBold) {
      className += "font-semibold ";
    }
    if (isItalic) {
      className += "italic ";
    }
    if (isCode) {
      className +=
        "font-mono text-orange-400 bg-gray-900 border border-white rounded ";
    }
    return className.trim();
  };

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center">
        <button
          onClick={handleBoldClick}
          className={`rounded px-4 py-2 font-bold ${
            isBold ? "bg-gray-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          Bold
        </button>
        <button
          onClick={handleItalicClick}
          className={`rounded px-4 py-2 italic ${
            isItalic ? "bg-gray-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          Italic
        </button>
        <button
          onClick={handleCodeClick}
          className={`rounded px-4 py-2 ${
            isCode ? "bg-gray-500 text-white" : "bg-white text-gray-700"
          }`}
        >
          Code
        </button>
      </div>
      <textarea
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        className={`h-40 w-full rounded-md border border-gray-300 px-4 py-2 ${getStyle()}`}
      />
    </div>
  );
};

export default TextEditor;
