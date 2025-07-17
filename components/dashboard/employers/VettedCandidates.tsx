import React from 'react'
import { CircularProgress } from './CircularProgress'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import candidateImg from "@/public/images/resume-image.png"

export default function VettedCandidates() {
    return (
        <div>
            {[1, 2, 3, 4].map((_, idx) => (
                <div
                    key={idx}
                    className='flex justify-between items-center border border-gray-400 p-2 mb-3 rounded-lg'
                >
                    <div className='flex items-center'>
                        <Avatar className="w-[60px] h-[60px] mr-3">
                            <AvatarImage src={candidateImg.src} alt="vetted candidate" />
                            <AvatarFallback>RA</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className='font-semibold'>Rahamatullah Alam</h1>
                            <p className='text-xs'>UI/UX Designer</p>
                            <button className='text-xs bg-[#479347] px-4 py-0.5 rounded-xl text-white'>Pre Vetted</button>
                        </div>
                    </div>
                    <div>
                        <CircularProgress value={75} />
                    </div>
                </div>
            ))}
        </div>
    )
}