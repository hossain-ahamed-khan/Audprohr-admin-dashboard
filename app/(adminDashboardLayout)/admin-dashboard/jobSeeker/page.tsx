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

import DashboardPagination from "@/components/dashboard/userManagement/DashboardPagination"
import { FiPlus } from "react-icons/fi"
import { ImCross } from "react-icons/im"
import JobSeekerTableRow from "@/components/dashboard/jobSeeker/JobSeekerTableRow"
import AddJobSeeker from "@/components/dashboard/jobSeeker/AddJobSeeker"

export default function JobSeekerPage() {
    return (
        <div className="bg-[#FFFFFF] w-full mx-auto rounded-2xl py-4 px-12 mt-4 shadow-md">

            <AlertDialog>
                <AlertDialogTrigger className="flex gap-2 items-center px-8 py-2 rounded-3xl bg-[#4B2A99] text-white cursor-pointer"><FiPlus />New Job Seeker Profile Create </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>

                        <div className="w-full flex justify-between">
                            <div></div>
                            <AlertDialogTitle className="text-center text-2xl font-bold mt-10 mb-5">New Job Seeker Profile Create</AlertDialogTitle>
                            <AlertDialogCancel className="text-right"><ImCross className="text-[#221800]" /></AlertDialogCancel>
                        </div>

                        <AddJobSeeker />

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
                        <TableHead>Full Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone Number</TableHead>
                        <TableHead>Location</TableHead>
                        <TableHead>Title</TableHead>
                        <TableHead>Resume/CV</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <JobSeekerTableRow />
                    <JobSeekerTableRow />
                    <JobSeekerTableRow />
                    <JobSeekerTableRow />
                    <JobSeekerTableRow />
                    <JobSeekerTableRow />
                    <JobSeekerTableRow />
                </TableBody>
            </Table>

            <DashboardPagination />
        </div>
    )
}

