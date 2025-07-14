import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import Link from "next/link"

export default function DashboardPagination() {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious className="rounded-3xl" href="#" />
                </PaginationItem>
                <PaginationItem>
                    <Link href="#">1</Link>
                </PaginationItem>
                <PaginationItem>
                    <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext className="rounded-3xl" href="#" />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    )
}
