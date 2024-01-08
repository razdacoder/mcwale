"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  BedSingleIcon,
  CalendarDaysIcon,
  HomeIcon,
  SettingsIcon,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function MainNav() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex flex-col gap-y-3">
        <li>
          <Button
            size="lg"
            className={cn(
              "w-full flex bg-transparent justify-start pl-3 hover:text-white hover:bg-primary",
              pathname === "/admin" && "text-white bg-primary"
            )}
            asChild
          >
            <Link className="flex items-center gap-[1.2rem] " href="/admin">
              <HomeIcon className="w-6 h-6" />
              <span className="text-base font-semibold">Dashboard</span>
            </Link>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            size="lg"
            className={cn(
              "w-full flex bg-transparen justify-start pl-3 hover:text-white hover:bg-primary",
              pathname.startsWith("/bookings") && "text-white bg-primary"
            )}
            asChild
          >
            <Link className="flex items-center gap-[1.2rem]" href="/bookings">
              <CalendarDaysIcon className="w-6 h-6" />
              <span className="text-base font-semibold">Bookings</span>
            </Link>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            size="lg"
            className={cn(
              "w-full flex bg-transparen justify-start pl-3 hover:text-white hover:bg-primary",
              pathname === "/rooms" && "text-white bg-primary"
            )}
            asChild
          >
            <Link className="flex items-center gap-[1.2rem]" href="/rooms">
              <BedSingleIcon className="w-6 h-6" />
              <span className="text-base font-semibold">Rooms</span>
            </Link>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            size="lg"
            className={cn(
              "w-full flex bg-transparen justify-start pl-3 hover:text-white hover:bg-primary",
              pathname === "/manage-users" && "text-white bg-primary"
            )}
            asChild
          >
            <Link
              className="flex items-center gap-[1.2rem]"
              href="/manage-users"
            >
              <UsersRound className="w-6 h-6" />
              <span className="text-base font-semibold">Manege Users</span>
            </Link>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            size="lg"
            className={cn(
              "w-full flex bg-transparen justify-start pl-3 hover:text-white hover:bg-primary",
              pathname === "/settings" && "text-white bg-primary"
            )}
            asChild
          >
            <Link className="flex items-center gap-[1.2rem]" href="/settings">
              <SettingsIcon className="w-6 h-6" />
              <span className="text-base font-semibold">Settings</span>
            </Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
}
