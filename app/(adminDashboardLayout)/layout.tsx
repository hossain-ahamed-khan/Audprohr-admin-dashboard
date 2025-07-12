import { AppSidebar } from "@/components/modules/dashboard/sidebar/app-sidebar"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import Image from "next/image"
import { IoIosArrowDropdown } from "react-icons/io";
import profileImage from "@/public/images/profile-image.png";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import ProfileCard from "@/components/dashboard/profile/ProfileCard";

export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="bg-[#F8F8FF] flex justify-between h-20 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
                    <div className="flex items-center gap-2 px-4">
                        <SidebarTrigger className="-ml-1" />
                    </div>

                    <Popover>
                        <PopoverTrigger>
                            <div className="w-48 border border-[#E5E5E5] rounded-2xl flex justify-between items-center gap-2 px-4 py-2 mr-8 cursor-pointer transition-transform duration-300 hover:scale-105">
                                <Image
                                    src={profileImage}
                                    // style={{ width: "40px", height: "auto" }}
                                    width={40}
                                    height={40}
                                    alt="admin image"
                                    className="rounded-full"
                                />
                                <div>
                                    <h2 className="text-sm font-medium">Moni Roy</h2>
                                    <p className="text-xs text-muted-foreground">Super Admin</p>
                                </div>
                                <IoIosArrowDropdown className="text-2xl text-muted-foreground" />
                            </div>
                        </PopoverTrigger>
                        <PopoverContent>
                            <ProfileCard />
                        </PopoverContent>
                    </Popover>

                </header>
                <div className="bg-[#E7E4F5] flex flex-1 flex-col gap-4 overflow-y-auto py-4 px-8 rounded-tl-3xl">
                    {children}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}
