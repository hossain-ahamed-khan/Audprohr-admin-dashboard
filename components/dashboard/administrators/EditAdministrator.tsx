'use client'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const schema = z.object({
    Name: z.string().min(2),
    email: z.string().email(),
    phone: z.string().min(10, "Phone number is required"),
    role: z.enum(["admin", "superAdmin"], {
        errorMap: () => ({ message: "Select a role" }),
    }),
});

export default function EditAdministrator() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema),
    });

    const onSubmit = (data: any) => {
        console.log(data);
        // Call API or mutate state
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
                <div className="w-full flex justify-between items-center">
                    <label className="font-medium w-1/2">Name</label>
                    <input {...register("Name")} className="input border rounded-lg w-1/2 py-1.5 px-2" defaultValue={"Ovie Rahaman Sheikh"} />
                </div>
                {errors.Name && <p className="text-red-500 text-sm">{errors.Name.message}</p>}
            </div>

            <div>
                <div className="w-full flex justify-between items-center">
                    <label className="font-medium w-1/2">Email</label>
                    <input type="email" {...register("email")} className="input border rounded-lg w-1/2 py-1.5 px-2" defaultValue={"ovierahaman1@gmail.com"} />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
                <div className="w-full flex justify-between items-center">
                    <label className="font-medium w-1/2">Phone</label>
                    <input
                        type="tel"
                        {...register("phone")}
                        className="input border rounded-lg w-1/2 py-1.5 px-2"
                        defaultValue={"+88084454556444"}
                    />
                </div>
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
            </div>

            <div>
                <div className="w-full flex justify-between items-center">
                    <label className="font-medium w-1/2">Role</label>
                    <select
                        {...register("role")}
                        className="input border rounded-lg w-1/2 p-1.5"
                        defaultValue={"admin"}
                    >
                        <option value="">Select a Role</option>
                        <option value="admin">Admin</option>
                        <option value="superAdmin">Super Admin</option>
                    </select>
                </div>
                {errors.role && <p className="text-red-500 text-sm">{errors.role.message}</p>}
            </div>

            <div className="w-full flex justify-between gap-4 mt-10">
                <AlertDialogCancel asChild>
                    <Button variant="outline" className="w-1/2 text-[#4B2A99] border-[#4B2A99] rounded-3xl py-6">
                        Cancel
                    </Button>
                </AlertDialogCancel>
                <Button type="submit" className="w-1/2 py-6 rounded-3xl">Save</Button>
            </div>
        </form>
    );
}
