import Logo from "@/components/ui/Logo";
import MainNav from "./Mainnav";

export default function Sidebar() {
  return (
    <aside className="py-4 px-3 border-r flex flex-col gap-y-6 row-[1/-1]">
      <div className="flex gap-x-3 items-center justify-center">
        <Logo />
      </div>
      <MainNav />
    </aside>
  );
}
