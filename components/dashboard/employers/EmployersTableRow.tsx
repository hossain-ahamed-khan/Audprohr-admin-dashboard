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
import { TbCancel } from "react-icons/tb";
import { ImCross } from "react-icons/im";
import { Switch } from "@/components/ui/switch"
import { RiDeleteBin6Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";

export default function EmployersTableRow() {
    return (
        <TableRow>
            <TableCell className="font-medium">#1233</TableCell>
            <TableCell>Kathryn Murp</TableCell>
            <TableCell>bockely@att.com</TableCell>
            <TableCell>core.com</TableCell>
            <TableCell>Dhaka, Bangladesh</TableCell>
            <TableCell>Built for the future.</TableCell>
            <TableCell>All Job Posts</TableCell>
            <TableCell>simply dummy text</TableCell>
            <TableCell className="text-right">
                <AlertDialog>
                    <AlertDialogTrigger><TbCancel className="text-white bg-[#FF2E63] size-8 rounded-lg" /></AlertDialogTrigger>
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
