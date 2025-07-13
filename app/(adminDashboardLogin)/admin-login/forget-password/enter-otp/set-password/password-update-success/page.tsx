import Image from "next/image";
import mainLogo from '@/public/images/main-logo.png';

export default function PasswordUpdateSuccessPage() {
    return (
        <div className='bg-[#F8F8FF] w-full h-screen flex justify-center items-center flex-col'>
            <div className="w-11/12 md:w-1/4 mx-auto space-y-4 text-[#1A1A40]">
                <div className="flex justify-center">
                    <Image
                        src={mainLogo}
                        width={150}
                        height={150}
                        alt="main logo"
                    />
                </div>
                <h1 className="text-3xl font-semibold text-center">Password Updated Successfully!</h1>
                <p className="text-lg text-center">Your new password has been saved. You can now continue securely.</p>
            </div>
        </div>
    )
}
