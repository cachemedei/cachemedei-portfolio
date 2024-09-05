import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const styles = {
        footer: 'w-full h-[80px] lg:h-[100px] bg-secondary flex justify-end items-center pr-6 gap-4',
        label: 'self-end pb-[20px] lg:text-xl lg:pb-[26px]',
        logo: 'text-5xl lg:text-6xl',
    };
    return (
        <footer className={styles.footer}>
            <p className={styles.label}>GitHub</p>
            <a href='https://github.com/cachemedei'>
                <FaGithub className={styles.logo} />
            </a>
            <p className={styles.label}>LinkedIn</p>
            <a href='https://www.linkedin.com/in/caitlin-achemedei-4616762b3/'>
                <FaLinkedin className={styles.logo} />
            </a>
        </footer>
    );
};
export default Footer;
