import Image from 'next/image';
import React from 'react';
import barchartImg from "@/public/images/barchart-icon.png";

export default function AdminDashboardPage() {
    return (
        <div>
            <div className='w-full mx-auto m-4 p-8 bg-[#F8F8FF] rounded-lg'>
                <p className='text-[#1A1A1A]'>Hi, Good Morning</p>
                <h2 className='text-[#1A1A1A] text-2xl font-semibold'>Moni Roy</h2>
            </div>

            <div className='w-full mx-auto flex-col lg:flex lg:flex-row gap-4'>
                <div className='w-full bg-[#F8F8FF] rounded-lg p-8'>
                    <h2 className='text-[#1A1A1A] text-2xl font-semibold mb-8'>User&apos;s Overview</h2>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5'>
                        <div className='text-[#1A1A1A] w-60 h-44 p-8 rounded-2xl'>
                            <Image
                                src={barchartImg}
                                width={40}
                                height={40}
                                alt="barchart icon"
                            />
                            <h2 className='text-2xl font-semibold mt-4'>1320</h2>
                            <p className='font-medium mt-1'>Active Job Seeker</p>
                        </div>
                        <div className='text-[#1A1A1A] w-60 h-44 p-8 rounded-2xl'>
                            <Image
                                src={barchartImg}
                                width={40}
                                height={40}
                                alt="barchart icon"
                            />
                            <h2 className='text-2xl font-semibold mt-4'>20</h2>
                            <p className='font-medium mt-1'>Total Employer</p>
                        </div>
                        <div className='text-[#1A1A1A] w-60 h-44 p-8 rounded-2xl'>
                            <Image
                                src={barchartImg}
                                width={40}
                                height={40}
                                alt="barchart icon"
                            />
                            <h2 className='text-2xl font-semibold mt-4'>32</h2>
                            <p className='font-medium mt-1'>Today&apos;s New Job Seeker</p>
                        </div>
                        <div className='text-[#1A1A1A] w-60 h-44 p-8 rounded-2xl'>
                            <Image
                                src={barchartImg}
                                width={40}
                                height={40}
                                alt="barchart icon"
                            />
                            <h2 className='text-2xl font-semibold mt-4'>12</h2>
                            <p className='font-medium mt-1'>Today&apos;s New Employer</p>
                        </div>
                        <div className='text-[#1A1A1A] w-60 h-44 p-8 rounded-2xl'>
                            <Image
                                src={barchartImg}
                                width={40}
                                height={40}
                                alt="barchart icon"
                            />
                            <h2 className='text-2xl font-semibold mt-4'>6</h2>
                            <p className='font-medium mt-1'>Open Jobs</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
