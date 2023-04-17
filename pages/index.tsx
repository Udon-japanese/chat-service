import Link from "next/link";

export default function Home() {
  return (
    <Link href="/chat" className="dark:text-white hover:text-blue-400 hover:underline">ここからチャットしよう</Link>
  );
}