import profileImage from "@/public/images/profile-image.png";
import Image from "next/image";
import { RiArrowRightSLine } from 'react-icons/ri'
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ImCross } from "react-icons/im";
import EditProfile from "./EditProfile";
import PasswordChange from "./PasswordChange";

export default function ProfileCard() {
    return (
        <div>
            <div className="flex gap-4 mt-4 mb-8">
                <Image
                    src={profileImage}
                    // style={{ width: "40px", height: "auto" }}
                    width={60}
                    height={60}
                    alt="admin image"
                    className="rounded-full"
                />
                <div className="space-y-2">
                    <h1 className="text-[#1A1A1A] font-semibold">Ovie Rahaman </h1>
                    <p className="bg-[#0030A8] text-xs text-white px-4 py-1 rounded-3xl text-center">Super Admin</p>
                </div>
            </div>
            <hr />


            <AlertDialog>
                <AlertDialogTrigger className="w-full flex justify-between items-center mt-2 cursor-pointer p-2 hover:bg-slate-200 rounded-lg">
                    Profile
                    <RiArrowRightSLine />
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <div className="w-full flex justify-between">
                            <div></div>
                            <AlertDialogTitle className="text-2xl font-bold mt-10 mb-5">Account Setting</AlertDialogTitle>
                            <AlertDialogCancel><ImCross className="text-slate-800" /></AlertDialogCancel>
                        </div>

                        <EditProfile />

                        <AlertDialogDescription></AlertDialogDescription>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>


            <AlertDialog>
                <AlertDialogTrigger className="w-full flex justify-between items-center mt-2 cursor-pointer p-2 hover:bg-slate-200 rounded-lg">
                    Change Password
                    <RiArrowRightSLine />
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <div className="w-full flex justify-between">
                            <div></div>
                            <AlertDialogTitle className="text-2xl font-bold mt-10 mb-5">Password Change</AlertDialogTitle>
                            <AlertDialogCancel><ImCross className="text-slate-800" /></AlertDialogCancel>
                        </div>

                        <PasswordChange />

                        <AlertDialogDescription></AlertDialogDescription>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>

            <button className="bg-[#0030A8] text-white w-full rounded-4xl py-2 mt-4">
                Logout
            </button>
        </div>
    )
}
