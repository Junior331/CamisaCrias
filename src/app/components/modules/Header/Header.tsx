import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm">
      <div className="px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Camisa<span className="text-primary italic">Crias</span>
        </Link>
      </div>
    </header>
  );
}
