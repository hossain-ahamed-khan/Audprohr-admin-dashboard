import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function DeleteAdministrator() {
    return (
        <div className="w-full flex justify-between gap-4 mt-10">
            <AlertDialogCancel asChild>
                <Button variant="outline" className="w-1/2 text-[#4B2A99] border-[#4B2A99] rounded-3xl py-6">
                    Cancel
                </Button>
            </AlertDialogCancel>
            <Button type="submit" className="w-1/2 py-6 rounded-3xl flex justify-center items-center gap-2"><RiDeleteBin6Line />Delete Account</Button>
        </div>
    )
}
