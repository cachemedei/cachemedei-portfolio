import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Homepage = () => {
    const styles = {
        main: 'w-full h-screen md:ml-[60px] text-base-mid',
        container: 'max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full gap-4',
        aboutLink: 'border-2 border-text flex items-center py-2 px-4 md:text-xl rounded-sm group hover:scale-125 duration-500 cursor-pointer'
    }
    return (
        <main
            name='home'
            className={styles.main}
        >
            {/* Container */}
            <section className={styles.container}>
                <h2 className='text-2xl md:text-3xl'>Hi, my name is</h2>
                <h1 className='font-bold text-5xl md:text-6xl text-text px-6'>
                    Caitlin Achemedei
                </h1>
                <h4 className='font-light md:text-2xl'>
                    aspiring full-stack developer.
                </h4>
                <div className='self-center'>
                    <Link
                        to='about'
                        smooth={true}
                        duration={500}
                        className={styles.aboutLink}
                    >
                        About
                        <HiArrowNarrowRight className='ml-3 group-hover:rotate-90 duration-500' />
                    </Link>
                </div>
            </section>
        </main>
    );
};
export default Homepage;
