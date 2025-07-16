import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    AlertDialog,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { ImCross } from "react-icons/im";
import AddAdministrator from "@/components/dashboard/administrators/AddAdministrator";
import AdministratorTableRow from "@/components/dashboard/administrators/AdministratorTableRow";
import DashboardPagination from "@/components/dashboard/shared/DashboardPagination";
import { FiPlus } from "react-icons/fi";


export default function AdministratorPage() {
    return (
        <div className="bg-[#FFFFFF] w-full h-screen mx-auto rounded-2xl py-4 px-12 mt-4 shadow-md">
            <AlertDialog>
                <AlertDialogTrigger className="flex gap-2 items-center bg-[#4B2A99] text-white px-4 py-2 rounded-3xl cursor-pointer"><FiPlus />New Administrator Profile Create</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>

                        <div className="w-full flex justify-between">
                            <div></div>
                            <AlertDialogTitle className="text-center text-2xl font-bold mt-10 mb-5">New Administrator Profile Create</AlertDialogTitle>
                            <AlertDialogCancel className="text-right"><ImCross className="text-[#333333]" /></AlertDialogCancel>
                        </div>

                        <AddAdministrator />

                        <AlertDialogDescription>
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">SL no.</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact Number</TableHead>
                        <TableHead>Has Access to</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <AdministratorTableRow />
                    <AdministratorTableRow />
                    <AdministratorTableRow />
                    <AdministratorTableRow />
                    <AdministratorTableRow />
                    <AdministratorTableRow />
                    <AdministratorTableRow />
                    <AdministratorTableRow />
                    <AdministratorTableRow />
                    <AdministratorTableRow />
                </TableBody>
            </Table>

            <DashboardPagination />
        </div>
    )
}
