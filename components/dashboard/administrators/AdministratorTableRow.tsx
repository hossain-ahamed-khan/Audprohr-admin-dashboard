"use client"
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
import { ImCross } from "react-icons/im";
import { RiDeleteBin6Line } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import EditAdministrator from "./EditAdministrator";
import { Button } from "@/components/ui/button";
import Swal from "sweetalert2";

function deleteAccount() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF2E63",
        cancelButtonColor: "#d1d5db",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            // TODO: Add your delete logic here
            Swal.fire("Deleted!", "The account has been deleted.", "success");
        }
    });
}

export default function AdministratorTableRow() {
    return (
        <TableRow>
            <TableCell className="font-medium">#1233</TableCell>
            <TableCell>Kathryn Murp</TableCell>
            <TableCell>bockely@att.com</TableCell>
            <TableCell>(201) 555-0124</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell className="text-right space-x-2 flex items-center justify-end">

                <AlertDialog>
                    <AlertDialogTrigger className="bg-[#4B2A99] p-2 rounded-lg text-white text-xl cursor-pointer">
                        <MdOutlineEdit />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <div className="w-full flex justify-between">
                                <div></div>
                                <AlertDialogTitle className="text-2xl font-bold mt-10 mb-5">Edit Administrator</AlertDialogTitle>
                                <AlertDialogCancel><ImCross className="text-[#333333]" /></AlertDialogCancel>
                            </div>

                            <EditAdministrator />

                            <AlertDialogDescription></AlertDialogDescription>
                        </AlertDialogHeader>
                    </AlertDialogContent>
                </AlertDialog>

                {/* <AlertDialog>
                    <AlertDialogTrigger className="bg-[#FF2E63] p-3 rounded-lg text-white text-xl cursor-pointer">
                        <RiDeleteBin6Line />
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <div className="w-full flex justify-between">
                                <div></div>
                                <AlertDialogTitle className="text-center text-2xl font-bold pt-10 pb-5">Confirm Account Deletion</AlertDialogTitle>
                                <AlertDialogCancel className="text-right"><ImCross className="text-[#333333]" /></AlertDialogCancel>
                            </div>

                            <DeleteAdministrator />

                            <AlertDialogDescription></AlertDialogDescription>
                        </AlertDialogHeader>
                    </AlertDialogContent>
                </AlertDialog> */}


                <Button onClick={deleteAccount} className="bg-[#FF2E63] p-2 rounded-lg text-white text-xl cursor-pointer"><RiDeleteBin6Line /></Button>

            </TableCell>
        </TableRow>
    )
}
