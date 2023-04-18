import Form from "@/components/Form";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1 className="my-5 ml-10 text-4xl font-bold text-gray-900 dark:text-white">
        チャットしましょう
      </h1>
      <Form />
      <div className="my-6 text-center hover:text-blue-400 hover:underline dark:text-white">
        <Link href="/">トップに戻る</Link>
      </div>
    </>
  );
}
