import { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

const styles = {
    nav: 'fixed w-full h-[80px] flex justify-between items-center px-4 text-base-mid bg-text/70',
    logo: 'w-[80px] mt-2 md:w-[100px] md:mt-4 mb-2',
    desktopMenu: 'hidden md:flex text-xl',
    desktopMenuItem: 'hover:scale-125 duration-500',
    mobileMenuItem: 'py-6 text-3xl font-light hover:scale-125 duration-500',
    socials:
        'w-[150px] h-[60px] flex justify-between items-center bg-secondary text-lg md:text-2xl md:w-[180px] ml-[-90px] md:ml-[-115px] hover:ml-[-5px] duration-300',
    socialIcon: 'flex justify-between w-full items-center',
};
const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);

    return (
        <nav className={styles.nav}>
            <img
                src='src/images/ca-logo.png'
                alt='The initials C and A combined in a cursive style to create a logo'
                className={styles.logo}
            />
            {/* Menu */}
            <ul className={styles.desktopMenu}>
                <li className={styles.desktopMenuItem}>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className={styles.desktopMenuItem}>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className={styles.desktopMenuItem}>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className={styles.desktopMenuItem}>
                    <Link to='projects' smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <IoMdMenu size={30} /> : <IoMdClose size={30} />}
            </div>

            {/* Mobile Menu */}
            <ul
                className={
                    !nav
                        ? 'hidden'
                        : 'absolute top-0 left-0 w-full h-screen bg-secondary flex flex-col justify-center items-center'
                }
            >
                <li className={styles.mobileMenuItem}>
                    {' '}
                    <Link
                        to='home'
                        smooth={true}
                        duration={500}
                        onClick={handleClick}
                    >
                        Home
                    </Link>
                </li>
                <li className={styles.mobileMenuItem}>
                    {' '}
                    <Link
                        to='about'
                        smooth={true}
                        duration={500}
                        onClick={handleClick}
                    >
                        About
                    </Link>
                </li>
                <li className={styles.mobileMenuItem}>
                    {' '}
                    <Link
                        to='skills'
                        smooth={true}
                        duration={500}
                        onClick={handleClick}
                    >
                        Skills
                    </Link>
                </li>
                <li className={styles.mobileMenuItem}>
                    {' '}
                    <Link
                        to='projects'
                        smooth={true}
                        duration={500}
                        onClick={handleClick}
                    >
                        Projects
                    </Link>
                </li>
            </ul>

            {/* Socials */}
            <ul className='hidden lg:flex flex-col fixed top-[75%] left-0'>
                <li className='w-[150px] h-[60px] flex justify-between items-center text-gray-200 bg-[#333] text-lg md:text-2xl md:w-[180px] ml-[-90px] md:ml-[-115px] hover:ml-[-5px] duration-500'>
                    <a
                        href='https://github.com/cachemedei'
                        className={styles.socialIcon}
                    >
                        GitHub{' '}
                        <FaGithub className='text-3xl md:text-4xl text-white' />
                    </a>
                </li>
                <li className='w-[150px] h-[60px] flex justify-between items-center text-gray-200 bg-[#0077B5] text-lg md:text-2xl md:w-[180px] ml-[-90px] md:ml-[-115px] hover:ml-[-5px] duration-300'>
                    <a
                        href='https://www.linkedin.com/in/caitlin-achemedei-4616762b3/'
                        className={styles.socialIcon}
                    >
                        LinkedIn{' '}
                        <FaLinkedin className='text-3xl md:text-4xl text-white' />
                    </a>
                </li>
            </ul>
        </nav>
    );
};
export default Navbar;
