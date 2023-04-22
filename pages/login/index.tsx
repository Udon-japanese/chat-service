import type { AuthText } from "@/types/Text/Auth/AuthText";
import Authenticate from "@/components/Form/Authenticate";
const text: AuthText = {
  head: "アカウントでログイン",
  subhead: {
    p: "アカウントがありませんか？",
    link: "こちらでサインアップ",
  },
  googleText: "ログイン",
  authBtnText: "ログイン"
};

export default function Home() {
  return (
    <Authenticate {...text}/>
  );
}
