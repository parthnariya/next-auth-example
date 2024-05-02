import { WithChildren } from "@/lib/types";

const AuthLayout = ({ children }: WithChildren) => {
  return (
    <div className="h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500">
      {children}
    </div>
  );
};

export default AuthLayout;
