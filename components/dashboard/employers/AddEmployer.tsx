'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertDialogCancel } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const schema = z.object({
    companyName: z.string().min(2),
    email: z.string().email().min(2),
    password: z.string().min(2),
    website: z.string().min(2),
    location: z.string().min(2),
    industryDetails: z.string().min(2),
});

export default function AddEmployer() {
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
                    <label className="font-medium w-1/2">Company Name</label>
                    <input {...register("companyName")} className="input border rounded-lg w-1/2 py-1.5 px-2" />
                </div>
                {errors.companyName && <p className="text-red-500 text-sm">{errors.companyName.message}</p>}
            </div>

            <div>
                <div className="w-full flex justify-between items-center">
                    <label className="font-medium w-1/2">Email</label>
                    <input {...register("email")} className="input border rounded-lg w-1/2 py-1.5 px-2" />
                </div>
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
                <div className="w-full flex justify-between items-center">
                    <label className="font-medium w-1/2">Password</label>
                    <input {...register("password")} className="input border rounded-lg w-1/2 py-1.5 px-2" />
                </div>
                {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <div>
                <div className="w-full flex justify-between items-center">
                    <label className="font-medium w-1/2">Website</label>
                    <input {...register("website")} className="input border rounded-lg w-1/2 py-1.5 px-2" />
                </div>
                {errors.website && <p className="text-red-500 text-sm">{errors.website.message}</p>}
            </div>
            <div>
                <div className="w-full flex justify-between items-center">
                    <label className="font-medium w-1/2">Location</label>
                    <input {...register("location")} className="input border rounded-lg w-1/2 py-1.5 px-2" />
                </div>
                {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
            </div>
            <div>
                <div className="w-full flex justify-between items-center">
                    <label className="font-medium w-1/2">Industry Details</label>
                    <input {...register("industryDetails")} className="input border rounded-lg w-1/2 py-1.5 px-2" />
                </div>
                {errors.industryDetails && <p className="text-red-500 text-sm">{errors.industryDetails.message}</p>}
            </div>

            <div className="w-full flex justify-between gap-4 mt-10">
                <AlertDialogCancel asChild>
                    <Button variant="outline" className="w-1/2 text-[#4B2A99] border-[#4B2A99] rounded-3xl py-6 cursor-pointer">
                        Cancel
                    </Button>
                </AlertDialogCancel>
                <Button type="submit" className="w-1/2 py-6 rounded-3xl">Create</Button>
            </div>
        </form>
    );
}
