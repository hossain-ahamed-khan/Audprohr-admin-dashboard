import {
    TableCell,
    TableRow,
} from "@/components/ui/table"

import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImCross } from "react-icons/im";
import { Switch } from "@/components/ui/switch"
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { MdRadioButtonChecked } from "react-icons/md";
import Resume from "./Resume";
import AllResume from "./AllResume";

export default function JobSeekerTableRow() {
    return (
        <TableRow>
            <TableCell className="font-medium">#1233</TableCell>
            <TableCell>Kathryn Murp</TableCell>
            <TableCell>bockely@att.com</TableCell>
            <TableCell>(201) 555-0124</TableCell>
            <TableCell>Dhaka, Bangladesh</TableCell>
            <TableCell>Civil Engineer</TableCell>
            <TableCell className="text-[#4B2A99] flex gap-2 items-center">

                <AlertDialog>
                    <AlertDialogTrigger>kathrynwpcv.pdf</AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>

                            <Resume />

                            <AlertDialogDescription></AlertDialogDescription>
                        </AlertDialogHeader>
                    </AlertDialogContent>
                </AlertDialog>

                <AlertDialog>
                    <AlertDialogTrigger><MdRadioButtonChecked className="size-5" /></AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>

                            <AllResume />

                            <AlertDialogDescription></AlertDialogDescription>
                        </AlertDialogHeader>
                    </AlertDialogContent>
                </AlertDialog>

            </TableCell>
            <TableCell>Pre-Vetted</TableCell>
            <TableCell className="text-right">
                <AlertDialog>
                    <AlertDialogTrigger><BsThreeDotsVertical /></AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <div className="w-full flex justify-between">
                                <div></div>
                                <AlertDialogTitle className="text-center text-[#4B2A99] text-2xl font-bold">Action</AlertDialogTitle>
                                <AlertDialogCancel className="text-right"><ImCross className="text-[#1A1A1A]" /></AlertDialogCancel>
                            </div>

                            <div>
                                <div className="flex justify-between mt-8">
                                    <span className="text-[#1A1A1A] text-lg font-semibold text-left">Disable User Access</span>
                                    <Switch />
                                </div>
                                <div className="flex justify-between mt-4">
                                    <span className="text-[#1A1A1A] text-lg font-semibold text-left">Delete User Account
                                    </span>
                                    <Button className="flex items-center gap-2 px-4 text-white py-1.5 rounded-3xl"><RiDeleteBin6Line /> Delete</Button>
                                </div>
                            </div>
                            <AlertDialogDescription></AlertDialogDescription>
                        </AlertDialogHeader>
                    </AlertDialogContent>
                </AlertDialog>
            </TableCell>
        </TableRow>
    )
}
