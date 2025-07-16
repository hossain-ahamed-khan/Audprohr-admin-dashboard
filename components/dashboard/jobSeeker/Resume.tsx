import { AlertDialogCancel, AlertDialogTitle } from '@/components/ui/alert-dialog'
import Image from "next/image";
import resumeImg from "@/public/images/resume-image.png"
import React from 'react'
import { ImCross } from 'react-icons/im'

export default function Resume() {
    return (
        <>
            <div className="w-full flex justify-between">
                <div></div>
                <AlertDialogTitle>
                </AlertDialogTitle>
                <AlertDialogCancel className="text-right"><ImCross className="text-[#1A1A1A]" /></AlertDialogCancel>
            </div>

            <div>
                <div className="text-center">
                    <div className="flex justify-center">
                        <Image
                            src={resumeImg}
                            width={60}
                            height={60}
                            alt="resume image"

                        />
                    </div>
                    <h2 className="text-2xl text-[#1A1A40] font-semibold">Rahamatullah Alam</h2>
                    <p className="text-sm my-1">UI/UX Designer</p>
                    <p className="text-sm flex gap-2 justify-center">
                        <span>Itunuoluwa@gmail.com</span>
                        <span>+880 173101292373</span>
                        <span>Dhaka, Bangladesh</span>
                    </p>
                </div>
                <div className="my-2">
                    <h2 className="text-lg text-[#1A1A40]">Career Objective:</h2>
                    <p className="text-sm">To obtain a challenging position in a growth-oriented organization where I can apply my skills, contribute to meaningful projects, and continue developing professionally while supporting the company’s goals and vision.</p>
                </div>
                <div>
                    <h2 className="text-lg text-[#1A1A40]">Skills:</h2>
                    <ul className="list-outside text-sm grid grid-cols-2">
                        <li>UI/UX Designer</li>
                        <li>UI/UX Designer</li>
                        <li>UI/UX Designer</li>
                    </ul>
                </div>
                <div className="flex my-2">
                    <div className="flex-1">
                        <h2 className="text-lg text-[#1A1A40]">Available Time Slots:</h2>
                        <ul className="text-sm">
                            <li>10:00 AM - 11:00 AM</li>
                            <li>10:00 AM - 11:00 AM</li>
                            <li>10:00 AM - 11:00 AM</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg text-[#1A1A40]">Languages</h2>
                        <p className="text-sm">English - Professional</p>
                    </div>
                </div>
                <div className="my-2">
                    <h2 className="text-lg text-[#1A1A40]">Do you have any upcoming vacation planned?</h2>
                    <p className="text-sm">No</p>
                </div>
                <div className="flex my-2">
                    <div className="flex-1">
                        <h2 className="text-lg text-[#1A1A40]">Availability</h2>
                        <p className="text-sm">1 Week Notice</p>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg text-[#1A1A40]">Work Authorization</h2>
                        <p className="text-sm">Permanent Resident</p>
                    </div>
                </div>
                <div className="flex">
                    <div className="flex-1">
                        <h2 className="text-lg text-[#1A1A40]">LinkedIn Profile</h2>
                        <p className="text-sm">linkedin.com/ovierahaman</p>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-lg text-[#1A1A40]">Salary Expectations</h2>
                        <p className="text-sm">Hourly- $2k</p>
                    </div>
                </div>
            </div>
        </>
    )
}
