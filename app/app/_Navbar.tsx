"use client";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Bot, BrainCircuit, User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { UserProfile, useClerk } from "@clerk/nextjs";
import Link from "next/link";
import { UserAvatar } from "@/components/UserAvatar";

export function Navbar({ user }: { user: { name: string; imageUrl: string } }) {
  const router = useRouter();
  const { signOut, openUserProfile } = useClerk();
  return (
    <nav
      className="w-full border-b border-border h-[var(--spacing-header)] flex items-center justify-between px-6 bg-background"
      style={{ height: "var(--spacing-header)" }}
    >
      <Link href="/app" className="flex items-center gap-2">
        <Bot className="size-6 text-primary" />
        <span className="font-bold text-lg tracking-tight">IntraAI</span>
      </Link>
      <div className="flex items-center gap-4">
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <UserAvatar user={user} />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => openUserProfile()}
            >
              <User className="mr-2 size-4" /> Profile
            </DropdownMenuItem>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => signOut(() => router.push("/"))}
            >
              <LogOut className="mr-2 size-4" /> Logout
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}
