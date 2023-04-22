import { UtilButton } from "@/types/Button/UtilButton";
import { Icon } from "@iconify/react";

export default function Form() {
  const formattingButtons: UtilButton[] = [
    {
      desc: "太文字",
      target: "Bold text",
      iconName: "material-symbols:format-bold",
    },
    {
      desc: "斜体",
      target: "Italic text",
      iconName: "material-symbols:format-italic",
    },
    {
      desc: "取り消し線",
      target: "Strikethrough",
      iconName: "material-symbols:format-strikethrough",
    },
  ];

  const contentEditingButtons: UtilButton[] = [
    {
      desc: "リンクを追加",
      target: "Add link",
      iconName: "material-symbols:add-link",
    },
    {
      desc: "引用タグ",
      target: "Quote",
      iconName: "material-symbols:format-quote",
    },
    {
      desc: "コードブロック",
      target: "Code blocks",
      iconName: "material-symbols:code-off",
    },
  ];
  return (
    <>
      <form action="/api/posts" method="post">
        <div className="w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
          <div className="flex items-center justify-between border-b px-2 py-1 dark:border-gray-600">
            <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
              <div className="flex items-center space-x-1 sm:pr-4">
                {renderButtons(formattingButtons)}
              </div>
              <div className="flex items-center space-x-1 sm:pl-4">
                {renderButtons(contentEditingButtons)}
              </div>
            </div>
          </div>
          <div className="bg-white px-4 py-2 dark:bg-gray-800">
            <textarea
              id="message"
              name="message"
              rows={5}
              className="block w-full resize-none border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 outline-none"
              placeholder="#general へのメッセージ"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between border-t px-2 py-1 dark:border-gray-600">
            <div className="ml-auto">
              <span className="relative group">
                <span className="tooltip">
                  送信
                </span>
                <button
                  type="submit"
                  className="cursor-pointer p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <Icon icon="material-symbols:send" width={20} />
                  <span className="sr-only">Send message</span>
                </button>
              </span>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

function renderButtons(buttons: UtilButton[]): JSX.Element[] {
  return buttons.map(
    (button: UtilButton, i: number): JSX.Element => (
      <span
        key={i}
        className="relative group"
      >
        <span className="tooltip">
          {button.desc}
        </span>
        <button
          type="button"
          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Icon icon={button.iconName} width={20} />
          <span className="sr-only">{button.target}</span>
        </button>
      </span>
    )
  );
}
