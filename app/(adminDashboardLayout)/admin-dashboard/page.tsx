import Image from 'next/image';
import React from 'react';
import barchartImg from "@/public/images/barchart-icon.png";
import userImg from "@/public/images/user-icon.png";

export default function AdminDashboardPage() {
    return (
        <>
            <div className='w-full mx-auto m-4 p-8 bg-white rounded-lg'>
                <p className='text-[#1A1A1A]'>Hi, Good Morning</p>
                <h2 className='text-[#1A1A1A] text-2xl font-semibold'>Moni Roy</h2>
            </div>

            <div className='w-full mx-auto flex-col lg:flex lg:flex-row gap-4'>
                <div className='w-full lg:w-8/12 bg-white rounded-lg p-8'>
                    <h2 className='text-[#1A1A1A] text-2xl font-semibold mb-8'>User&apos;s Overview</h2>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div className='text-[#1A1A1A] w-56 h-44 bg-[#EFF5FF] p-8 rounded-2xl'>
                            <Image
                                src={barchartImg}
                                width={40}
                                height={40}
                                alt="barchart icon"
                            />
                            <h2 className='text-2xl font-semibold mt-4'>1320</h2>
                            <p className='font-medium mt-1'>Total Users</p>
                        </div>
                        <div className='text-[#1A1A1A] w-56 h-44 bg-[#EFF5FF] p-8 rounded-2xl'>
                            <Image
                                src={barchartImg}
                                width={40}
                                height={40}
                                alt="barchart icon"
                            />
                            <h2 className='text-2xl font-semibold mt-4'>20</h2>
                            <p className='font-medium mt-1'>Today&apos;s New User</p>
                        </div>
                        <div className='text-[#1A1A1A] w-56 h-44 bg-[#EFF5FF] p-8 rounded-2xl'>
                            <Image
                                src={barchartImg}
                                width={40}
                                height={40}
                                alt="barchart icon"
                            />
                            <h2 className='text-2xl font-semibold mt-4'>132</h2>
                            <p className='font-medium mt-1'>Total Subscribers</p>
                        </div>
                        <div className='text-[#1A1A1A] w-56 h-44 bg-[#EFF5FF] p-8 rounded-2xl'>
                            <Image
                                src={barchartImg}
                                width={40}
                                height={40}
                                alt="barchart icon"
                            />
                            <h2 className='text-2xl font-semibold mt-4'>12</h2>
                            <p className='font-medium mt-1'>New Subscribers</p>
                        </div>

                    </div>
                </div>

                <div className='w-full lg:w-4/12 bg-white rounded-lg p-8'>
                    <h2 className='text-[#1A1A1A] text-2xl font-semibold mb-8'>Income</h2>
                    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='text-[#1A1A1A] w-56 h-44 bg-[#EFF5FF] p-8 rounded-2xl'>
                            <Image
                                src={userImg}
                                width={40}
                                height={40}
                                alt="barchart icon"
                            />
                            <h2 className='text-2xl font-semibold mt-4'>$1320</h2>
                            <p className='font-medium mt-1'>Total Revenue</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
