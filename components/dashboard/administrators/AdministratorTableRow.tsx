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
import DeleteAdministrator from "./DeleteAdministrator";

export default function AdministratorTableRow() {
    return (
        <TableRow>
            <TableCell className="font-medium">#1233</TableCell>
            <TableCell>Kathryn Murp</TableCell>
            <TableCell>bockely@att.com</TableCell>
            <TableCell>(201) 555-0124</TableCell>
            <TableCell>Admin</TableCell>
            <TableCell className="text-right space-x-2">

                <AlertDialog>
                    <AlertDialogTrigger className="bg-[#0030A8] p-3 rounded-lg text-white text-xl cursor-pointer">
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

                <AlertDialog>
                    <AlertDialogTrigger className="bg-[#E30000] p-3 rounded-lg text-white text-xl cursor-pointer">
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
                </AlertDialog>

            </TableCell>
        </TableRow>
    )
}
