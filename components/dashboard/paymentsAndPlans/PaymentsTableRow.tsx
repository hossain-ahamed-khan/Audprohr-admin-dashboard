import {
    TableCell,
    TableRow,
} from "@/components/ui/table"

export default function PaymentsTableRow() {
    return (
        <TableRow>
            <TableCell className="font-medium">#1233</TableCell>
            <TableCell>Kathryn Murp</TableCell>
            <TableCell>bockely@att.com</TableCell>
            <TableCell>(201) 555-0124</TableCell>
            <TableCell>Employer</TableCell>
            <TableCell className="text-right">$700</TableCell>
        </TableRow>
    )
}
