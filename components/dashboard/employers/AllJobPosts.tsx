import { AlertDialogCancel, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import React from 'react'
import { ImCross } from 'react-icons/im'

export default function AllJobPosts() {
    return (
        <>
            <div className="w-full flex justify-between mb-4">
                <div></div>
                <AlertDialogTitle className='text-[#1A1A40] text-2xl font-bold'>All Job Posts</AlertDialogTitle>
                <AlertDialogCancel className="text-right"><ImCross className="text-[#1A1A1A]" /></AlertDialogCancel>
            </div>

            <div className='my-2'>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-semibold'>Creative UI/UX Designer</h2>
                    <p className='text-xs'>16 February 2026</p>
                </div>
                <p className='my-2 text-sm'>Bringing ideas to life through intuitive design and pixel-perfect precision. Blending creativity with user empathy to craft seamless, aesthetic digital experiences that speak louder than words.</p>
                <Button className='rounded-3xl'>See Vetted Candidates</Button>
            </div>

            <div className='my-2'>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-semibold'>Creative UI/UX Designer</h2>
                    <p className='text-xs'>16 February 2026</p>
                </div>
                <p className='my-2 text-sm'>Bringing ideas to life through intuitive design and pixel-perfect precision. Blending creativity with user empathy to craft seamless, aesthetic digital experiences that speak louder than words.</p>
                <Button className='rounded-3xl'>See Vetted Candidates</Button>
            </div>

            <div className='my-2'>
                <div className='flex justify-between'>
                    <h2 className='text-xl font-semibold'>Creative UI/UX Designer</h2>
                    <p className='text-xs'>16 February 2026</p>
                </div>
                <p className='my-2 text-sm'>Bringing ideas to life through intuitive design and pixel-perfect precision. Blending creativity with user empathy to craft seamless, aesthetic digital experiences that speak louder than words.</p>
                <Button className='rounded-3xl'>See Vetted Candidates</Button>
            </div>
        </>
    )
}
