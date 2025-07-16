import { AlertDialogCancel, AlertDialogTitle } from '@/components/ui/alert-dialog'
import React from 'react'
import { ImCross } from 'react-icons/im'

export default function AllResume() {
    return (
        <>
            <div className="w-full flex justify-between">
                <div></div>
                <AlertDialogTitle className='text-[#1A1A40] text-2xl font-bold'>All Resume/CV</AlertDialogTitle>
                <AlertDialogCancel className="text-right"><ImCross className="text-[#1A1A1A]" /></AlertDialogCancel>
            </div>
            <div className='flex text-[#1A1A40] text-lg font-semibold mt-10'>
                <p className='flex-1'>Resume/CV</p>
                <p className='flex-1'>Date</p>
            </div>

            <div className='flex justify-around'>
                <p className='flex-1 text-[#4B2A99]'>kathrynwpcv.pdf</p>
                <p className='flex-1'>25 May 2025, 08:44 PM</p>
            </div>

            <div className='flex justify-around'>
                <p className='flex-1 text-[#4B2A99]'>kathrynwpcv.pdf</p>
                <p className='flex-1'>25 May 2025, 08:44 PM</p>
            </div>

            <div className='flex justify-around'>
                <p className='flex-1 text-[#4B2A99]'>kathrynwpcv.pdf</p>
                <p className='flex-1'>25 May 2025, 08:44 PM</p>
            </div>

            <div className='flex justify-around'>
                <p className='flex-1 text-[#4B2A99]'>kathrynwpcv.pdf</p>
                <p className='flex-1'>25 May 2025, 08:44 PM</p>
            </div>
        </>
    )
}
