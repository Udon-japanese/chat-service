import { Icon } from "@iconify/react";
import Form from "@/components/Form";
import Link from "next/link";
import { Channels } from "@/types/Channels";

export default function Home() {
  const channels: Channels[] = [
    {
      id: 1,
      name: "general",
    },
    {
      id: 2,
      name: "random",
    },
    {
      id: 3,
      name: "雑談",
    },
  ];
  return (
    <>
      <div className="flex h-screen">
        <div className="channel-list w-1/4 border-r border-gray-300 dark:border-gray-700 dark:bg-gray-950">
          <h1 className="my-5 ml-10 text-2xl font-bold text-gray-900 dark:text-white">
            Slack風
          </h1>
          <div className="mt-5 flex items-center justify-between">
            <div className="ml-10 text-lg font-bold opacity-50 dark:text-white">
              チャンネル
            </div>
            <div className="ml-10 opacity-50 dark:text-white">
              {channels.map(channel => (
                <p key={channel.id}>
                  # {channel.name}
                </p>
              ))}
            </div>
            <div className="mr-4 text-white opacity-25">
              <Icon icon="material-symbols:add-circle" width={24} />
            </div>
            <span className="sr-only">Add channel</span>
          </div>
        </div>
        <div className="flex flex-grow flex-col">
          <div className="chat-list h-full border-gray-300 bg-gray-900 dark:border-gray-700">
            <div className="flex-shrink-0 self-end">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
