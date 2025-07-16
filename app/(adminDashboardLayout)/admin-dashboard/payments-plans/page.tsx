import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import DashboardPagination from "@/components/dashboard/shared/DashboardPagination";
import PaymentsTableRow from "@/components/dashboard/paymentsAndPlans/PaymentsTableRow";


export default function PaymentsAndPlansPage() {
    return (
        <div className="bg-[#FFFFFF] w-full h-screen mx-auto rounded-2xl py-4 px-12 mt-4 shadow-md">

            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">SL no.</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Contact Number</TableHead>
                        <TableHead>User Type</TableHead>
                        <TableHead className="text-right">Payment</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <PaymentsTableRow />
                    <PaymentsTableRow />
                    <PaymentsTableRow />
                    <PaymentsTableRow />
                    <PaymentsTableRow />
                    <PaymentsTableRow />
                    <PaymentsTableRow />
                </TableBody>
            </Table>

            <DashboardPagination />
        </div>
    )
}
