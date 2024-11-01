import Link from 'next/link';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return(
        <footer className="flex flex-col lg:flex-row justify-between bg-indigo-900 px-8 lg:px-32 py-10">
            <div className="flex flex-col gap-5">
                <span className="text-white text-3xl font-semibold whitespace-nowrap dark:text-white">DIMATA</span>
                <span className="text-white text-lg dark:text-white lg:w-[25rem]">Jl. Danau Tempe No.21A, Sidakarya, Denpasar Selatan, Kota Denpasar, Bali 80224</span>
                <div className="flex flex-col">
                    <span className="text-white text-xl font-semibold whitespace-nowrap dark:text-white">Contact Us</span>
                    <span className="text-white text-lg dark:text-white">marketing@dimata.com</span>
                    <span className="text-white text-lg dark:text-white">+62 361 448-4425</span>
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-white text-xl font-semibold whitespace-nowrap dark:text-white">Follow Us</span>
                    <div className="flex gap-4">
                        <Link href="https://www.facebook.com" passHref>
                            <FaFacebook size={35} className="cursor-pointer text-white hover:text-blue-600" />
                        </Link>
                        <Link href="https://www.linkedin.com" passHref>
                            <FaLinkedin size={35} className="cursor-pointer text-white hover:text-blue-800" />
                        </Link>
                        <Link href="https://www.instagram.com" passHref>
                            <FaInstagram size={35} className="cursor-pointer text-white hover:text-pink-500" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-16 lg:gap-8 mt-8 lg:mt-0'>
                <div className='flex flex-col gap-3 text-white'>
                    <span className="text-lg font-bold">Company</span>
                    <Link href="/about" passHref>
                        <span className="cursor-pointer hover:underline">About</span>
                    </Link>
                    <Link href="/services" passHref>
                        <span className="cursor-pointer hover:underline">Our Services</span>
                    </Link>
                    <Link href="/products" passHref>
                        <span className="cursor-pointer hover:underline">Our Products</span>
                    </Link>
                    <Link href="/projects" passHref>
                        <span className="cursor-pointer hover:underline">Our Projects</span>
                    </Link>
                    <Link href="/contact" passHref>
                        <span className="cursor-pointer hover:underline">Contact</span>
                    </Link>
                </div>
                <div className='flex flex-col gap-3 text-white'>
                    <span className="text-lg font-bold">Resource</span>
                    <Link href="/help" passHref>
                        <span className="cursor-pointer hover:underline">Help</span>
                    </Link>
                    <Link href="/community" passHref>
                        <span className="cursor-pointer hover:underline">Community</span>
                    </Link>
                    <Link href="/forum" passHref>
                        <span className="cursor-pointer hover:underline">Forum</span>
                    </Link>
                    <Link href="/training" passHref>
                        <span className="cursor-pointer hover:underline">Training</span>
                    </Link>
                </div>
                <div className='flex flex-col gap-3 text-white'>
                    <span className="text-lg font-bold">Legal</span>
                    <Link href="/terms" passHref>
                        <span className="cursor-pointer hover:underline">Terms & Conditions</span>
                    </Link>
                    <Link href="/privacy" passHref>
                        <span className="cursor-pointer hover:underline">Privacy</span>
                    </Link>
                    <Link href="/licenses" passHref>
                        <span className="cursor-pointer hover:underline">Licenses</span>
                    </Link>
                </div>
            </div>
        </footer>

    )
}

export default Footer;