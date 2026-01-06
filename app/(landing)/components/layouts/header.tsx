import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi";

export const Header = () => {
    return (
        <header>
            <div className="flex justify-between gap-10 container mx-auto py-7">
                <Image src="/images/logo.svg" alt="SportsOn Logo" width={127} height={30} />
                <nav className="flex gap-44 font-medium">
                    <Link href="#"
                        className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-0.75 after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after-transalte-y-1">Home</Link>
                    <Link href="#">Category</Link>
                    <Link href="#">Explore Products</Link>
                </nav>
                <div className="flex gap-10">
                    <FiSearch size={24} />
                    <div className="relative">
                        <FiShoppingBag size={24} />
                        <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-2 -right-2 text-[9px] text-white text-center">4</div>
                    </div>
                </div>
            </div>
        </header>
    );
};