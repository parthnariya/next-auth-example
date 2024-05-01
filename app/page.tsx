import Image from "next/image";

export default function Home() {
  return <main className="h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-500">
    <div className="space-y-6 text-center">
      <h1 className="text-6xl font-semibold text-white drop-shadow-md">Auth</h1>
      <p className="text-white text-lg"> Authentication Example</p>
    </div>
  </main>;
}
