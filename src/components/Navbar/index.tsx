import Link from "next/link";
import { useRouter } from "next/router";
// import Image from 'next/image';

export default function Navbar() {
  const router = useRouter();
  return (
    <nav className="absolute bg-transparent w-full border-gray-200 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-around mx-auto h-20">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="text-white self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            DIMATA
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="hidden justify-end w-full md:block md:w-auto"
          id="navbar-default"
        >
          <ul className="font-medium text-xl flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className={`block py-2 px-3 ${
                  router.pathname === "/"
                    ? "text-amber-500"
                    : "text-white hover:text-amber-600"
                } md:p-0`}
                aria-current={router.pathname === "/" ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`block py-2 px-3 ${
                  router.pathname === "/about"
                    ? "text-amber-500"
                    : "text-white hover:text-amber-600"
                } md:p-0`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className={`block py-2 px-3 ${
                  router.pathname === "/services"
                    ? "text-amber-500"
                    : "text-white hover:text-amber-600"
                } md:p-0`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={`block py-2 px-3 ${
                  router.pathname === "/products"
                    ? "text-amber-500"
                    : "text-white hover:text-amber-600"
                } md:p-0`}
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className={`block py-2 px-3 ${
                  router.pathname === "/projects"
                    ? "text-amber-500"
                    : "text-white hover:text-amber-600"
                } md:p-0`}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className={`block py-2 px-3 ${
                  router.pathname === "/contact"
                    ? "text-amber-500"
                    : "text-white hover:text-amber-600"
                } md:p-0`}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="/auth"
                className="block px-5 text-white bg-amber-500 rounded hover:bg-amber-600"
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
