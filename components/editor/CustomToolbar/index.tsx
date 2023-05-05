import { useEffect } from "react";

export default function CustomToolbar() {
  useEffect(() => {
    const btnNamesMap: Map<string, string> = new Map([
      ["bold", "太字 Ctrl+B(⌘+B)"],
      ["italic", "斜体 Ctrl+I(⌘+I)"],
      ["strike", "取り消し線"],
      ["link", "リンク Ctrl+K(⌘+K)"],
      ["image", "画像を添付 Ctrl+O(⌘+O)"],
      ["ordered", "順序付きリスト"],
      ["bullet", "箇条書き"],
      ["blockquote", "引用"],
      ["code-block", "コードブロック"],
      ["clean", "書式をクリア"],
    ]);
    function showTooltips() {
      let toolbarElement = document.querySelector(".ql-toolbar");
      if (toolbarElement) {
        let matches = toolbarElement.querySelectorAll("button");
        for (let btnEl of matches) {
          let btnName: string | undefined = btnEl.className.replace("ql-", "");
          if (btnName === "list") {
            btnName = btnEl.value;
          }
          btnName = btnNamesMap.get(btnName);
          if (typeof btnName !== "undefined") {
            btnEl.setAttribute("title", btnName);
          }
        }
      }
    }
    showTooltips();
  }, []);
  return (
    <div
      id="toolbar"
      className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x"
    >
      <span className="ql-formats">
        <button className="ql-bold" />
        <button className="ql-italic" />
        <button className="ql-strike" />
      </span>
      <span className="ql-formats pl-3">
        <button className="ql-link" />
        <button className="ql-image" />
      </span>
      <span className="ql-formats pl-3">
        <button className="ql-list" value="ordered" />
        <button className="ql-list" value="bullet" />
      </span>
      <span className="ql-formats pl-3">
        <button className="ql-blockquote" />
      </span>
      <span className="ql-formats pl-3">
        <button className="ql-code-block" />
      </span>
      <span className="ql-formats pl-3">
        <button className="ql-clean" />
      </span>
    </div>
  );
}
