"use client"
import mainLogo from "@/public/images/main-logo.png"
import { FaUsers } from "react-icons/fa6";
import { IoChatboxOutline } from "react-icons/io5";
import { RiDashboard3Line } from "react-icons/ri";
import { IoListOutline } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";
import { RiShieldUserLine } from "react-icons/ri";
import * as React from "react"
import { usePathname } from "next/navigation"

import {
    Sidebar,
    SidebarContent,
    SidebarHeader,
} from "@/components/ui/sidebar"
import { NavMain } from "./nav-main"
import Image from "next/image"

// This is sample data.
const data = [
    {
        title: "DashBoard",
        url: "/admin-dashboard",
        icon: RiDashboard3Line,
        isActive: true,
    },
    {
        title: "Candidates",
        url: "/admin-dashboard/candidates",
        icon: FaUsers,
    },
    {
        title: "Employers",
        url: "/admin-dashboard/employers",
        icon: IoChatboxOutline,
    },
    {
        title: "Payments & Plans",
        url: "/admin-dashboard/payments-plans",
        icon: IoListOutline,
    },
    {
        title: "Administrators",
        url: "/admin-dashboard/administrators",
        icon: RiShieldUserLine,
    },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname()
    const navItems = data.map(item => ({
        ...item,
        isActive: pathname === item.url,
    }))
    return (
        <Sidebar collapsible="icon" {...props} className="border-none bg-[#FFFFFF] pt-8">
            <SidebarHeader className="flex items-center justify-center h-16 shrink-10 bg-[#FFFFFF]">
                <Image
                    src={mainLogo}
                    alt="Dashboard Logo"
                    style={{
                        width: '35%',
                        height: 'auto',
                    }}
                    priority
                />
            </SidebarHeader>
            <SidebarContent className="bg-[#FFFFFF] pt-4">
                <NavMain items={navItems} />
            </SidebarContent>
        </Sidebar>
    )
}
