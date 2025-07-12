import { RiDeleteBin6Line } from "react-icons/ri";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function DeleteAdministrator() {
    return (
        <div className="w-full flex justify-between gap-4 mt-10">
            <AlertDialogCancel asChild>
                <Button variant="outline" className="w-1/2 text-[#0030A8] border-[#0030A8] rounded-lg py-6 cursor-pointer">
                    Cancel
                </Button>
            </AlertDialogCancel>
            <Button type="submit" className="w-1/2 bg-[#0030A8] py-6 rounded-lg text-white flex justify-center items-center gap-2 cursor-pointer"><RiDeleteBin6Line />Delete Account</Button>
        </div>
    )
}
