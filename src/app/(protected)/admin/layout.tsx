import type { Metadata } from "next";

import AdminMobileSideBar from "@/components/layouts/AdminMobileSideBar";
import AdminSideBar from "@/components/layouts/AdminSideBar";
import BreadCrumbNav from "@/components/layouts/BreadCrumbNav";
import ProfileMenu from "@/components/layouts/ProfileMenu";

export const metadata: Metadata = {
  title: "Mcwale Admin",
  description: "This is the mcwale admin panel",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <AdminSideBar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <AdminMobileSideBar />
          <BreadCrumbNav />
          <div className="relative ml-auto flex-1 md:grow-0">&nbsp;</div>
          <ProfileMenu />
        </header>
        {children}
      </div>
    </div>
  );
}
