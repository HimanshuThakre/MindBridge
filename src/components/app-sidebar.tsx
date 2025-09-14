"use client";

import { usePathname } from "next/navigation";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarContent,
  SidebarFooter,
} from "./ui/sidebar";
import {
  LayoutDashboard,
  MessageSquare,
  BookOpen,
  Calendar,
  Users,
  Settings,
  LifeBuoy,
  Bot,
} from "lucide-react";
import type { NavItem } from "@/lib/types";
import Link from "next/link";

const navItems: NavItem[] = [
  { href: "/", title: "Dashboard", icon: LayoutDashboard },
  { href: "/chat", title: "AI Assistant", icon: Bot },
  { href: "/resources", title: "Resources", icon: BookOpen },
  { href: "/appointments", title: "Appointments", icon: Calendar },
  { href: "/forum", title: "Peer Forum", icon: Users },
];

const bottomNavItems: NavItem[] = [
  { href: "/help", title: "Help", icon: LifeBuoy },
  { href: "/settings", title: "Settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    // Handle the case where the current path is a sub-path of the link.
    // For example, if href is "/resources" and pathname is "/resources/1", it should be active.
    // But we also need to handle the root path "/" correctly.
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <MessageSquare className="size-8 text-primary" />
          <div className="flex flex-col">
            <h2 className="text-lg font-bold tracking-tighter">
              Student Wellness Hub
            </h2>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={isActive(item.href)}
                  tooltip={{ children: item.title }}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          {bottomNavItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <Link href={item.href}>
                <SidebarMenuButton
                  isActive={isActive(item.href)}
                  tooltip={{ children: item.title }}
                >
                  <item.icon />
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarFooter>
    </>
  );
}
