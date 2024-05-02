"use client";

import { useRouter } from "next/navigation";

type PropsType = {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
};

function LoginButton({ children, asChild, mode = "redirect" }: PropsType) {
  const router = useRouter();
  const onClickHandler = () => {
    // console.log("login button clicked");
    router.push("/auth/login");
  };
  if (mode === "modal") {
    return <span>TODO : Implement Modal</span>;
  }
  return (
    <span className="cursor-pointer" onClick={onClickHandler}>
      {children}
    </span>
  );
}

export default LoginButton;
