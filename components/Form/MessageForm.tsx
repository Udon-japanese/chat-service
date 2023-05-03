import { UtilButton } from "@/types/Button/UtilButton";
import { Icon } from "@iconify/react";

const formattingButtons: UtilButton[] = [
  {
    desc: "太文字",
    target: "Bold text",
    iconName: "material-symbols:format-bold",
    onClick: () => {},
  },
  {
    desc: "斜体",
    target: "Italic text",
    iconName: "material-symbols:format-italic",
    onClick: () => {},
  },
  {
    desc: "取り消し線",
    target: "Strikethrough",
    iconName: "material-symbols:format-strikethrough",
    onClick: () => {},
  },
];

const contentEditingButtons: UtilButton[] = [
  {
    desc: "リンクを追加",
    target: "Add link",
    iconName: "material-symbols:add-link",
    onClick: () => {},
  },
  {
    desc: "引用タグ",
    target: "Quote",
    iconName: "material-symbols:format-quote",
    onClick: () => {},
  },
  {
    desc: "コードブロック",
    target: "Code blocks",
    iconName: "material-symbols:code-off",
    onClick: () => {},
  },
];

// const headingButtons: UtilButton[] = [
//   {
//     desc: "見出し1",
//     target: "Heading 1",
//     iconName: "material-symbols:format-h1",
//     onClick: () => {},
//   },
//   {
//     desc: "見出し2",
//     target: "Heading 2",
//     iconName: "material-symbols:format-h2",
//     onClick: () => {},
//   },
//   {
//     desc: "見出し3",
//     target: "Heading 3",
//     iconName: "material-symbols:format-h3",
//     onClick: () => {},
//   },
// ];

export default function Form() {
  const buttonsArray = [
    formattingButtons,
    contentEditingButtons,
  ];

  return (
    <>
      <div className="w-full rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-600 dark:bg-gray-700">
        <div className="flex items-center justify-between border-b px-2 py-0.5 dark:border-gray-600">
          <div className="flex flex-wrap items-center divide-gray-200 dark:divide-gray-600 sm:divide-x">
            {renderButtons(buttonsArray)}
          </div>
        </div>
        <div className="relative max-h-[38rem] overflow-auto bg-white px-2 py-2 text-sm text-gray-800 dark:bg-gray-800 dark:text-white min-h-[12rem]">
          {/* <textarea
              id="message"
              name="message"
              rows={5}
              className="block w-full resize-none border-0 bg-white px-0 text-sm text-gray-800 focus:ring-0 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 outline-none"
              placeholder="#general へのメッセージ"
              required
            ></textarea> */}
        </div>
        <div className="flex items-center justify-between border-t px-0.5 py-0.5 dark:border-gray-600">
          <div className="ml-auto">
            <span className="group relative">
              <span className="tooltip">送信</span>
              <button
                type="button"
                className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <Icon icon="material-symbols:send" width={20} />
                <span className="sr-only">Send message</span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function renderButtons(buttonsArray: UtilButton[][]): JSX.Element[] {
  const renderButtons: JSX.Element[] = [];
  for (let i = 0; i < buttonsArray.length; i++) {
    const buttons = buttonsArray[i];
    const btns: JSX.Element[] = buttons.map((button: UtilButton, i: number) => (
      <span key={i} className="group relative">
        <span className="tooltip">{button.desc}</span>
        <button
          onClick={button.onClick}
          type="button"
          className="cursor-pointer rounded p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <Icon icon={button.iconName} width={20} />
          <span className="sr-only">{button.target}</span>
        </button>
      </span>
    ));
    let className: string = "flex items-center space-x-1";
    if (i < 1) {
      className += " sm:pr-4";
    } else if (i < buttonsArray.length - 1) {
      className += " flex-wrap sm:pl-4 sm:pr-4";
    } else {
      className += " flex-wrap sm:pl-4";
    }
    renderButtons.push(
      <div key={buttons[0].target.replace(/\s/g, "")} className={className}>
        {btns}
      </div>
    );
  }

  return renderButtons;
}
