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

import DashboardPagination from "@/components/dashboard/shared/DashboardPagination"
import { FiPlus } from "react-icons/fi"
import { ImCross } from "react-icons/im"
import AddEmployer from "@/components/dashboard/employers/AddEmployer"
import EmployersTableRow from "@/components/dashboard/employers/EmployersTableRow"

export default function EmployersPage() {
    return (
        <div className="bg-[#FFFFFF] w-full h-screen mx-auto rounded-2xl py-4 px-12 mt-4 shadow-md">

            <AlertDialog>
                <AlertDialogTrigger className="flex gap-2 items-center px-8 py-2 rounded-3xl bg-[#4B2A99] text-white cursor-pointer"><FiPlus />New Employer Profile Create</AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>

                        <div className="w-full flex justify-between">
                            <div></div>
                            <AlertDialogTitle className="text-center text-2xl font-bold mt-10 mb-5">New Employer Profile Create</AlertDialogTitle>
                            <AlertDialogCancel className="text-right"><ImCross className="text-[#221800]" /></AlertDialogCancel>
                        </div>

                        <AddEmployer />

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
                        <TableHead>Company Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Website</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Industry Details</TableHead>
                        <TableHead>Job Post</TableHead>
                        <TableHead>Feedback/Nots</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <EmployersTableRow />
                    <EmployersTableRow />
                    <EmployersTableRow />
                    <EmployersTableRow />
                    <EmployersTableRow />
                    <EmployersTableRow />
                    <EmployersTableRow />
                </TableBody>
            </Table>

            <DashboardPagination />
        </div>
    )
}

