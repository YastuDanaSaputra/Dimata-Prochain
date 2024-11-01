import { useRouter } from "next/router";
import { Montserrat } from "next/font/google"; 
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import('../Navbar'));

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['400', '700'], 
});

type AppShellProps = {
    children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
    const { children } = props;
    const { pathname } = useRouter();

    return (
        <main className={montserrat.className}> 
            {!disableNavbar.includes(pathname) && <Navbar />}
            {children}
        </main>
    );
};

export default AppShell;
