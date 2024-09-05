const Skills = () => {
    const styles = {
        main: 'w-full h-screen md:ml-[60px] text-base-mid',
        container:
            'max-w-[1000px] w-full h-full mx-auto px-8 flex flex-col justify-center',
        heading: 'text-4xl sm:text-5xl lg:6xl text-text font-bold',
        text: 'text-[16px] sm:text-[18px] md:text-[20px] p-6',
        skillsList:
            'grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-16 mt-8 mx-auto',
        skillCard:
            'flex flex-col justify-center items-center gap-2 py-4 shadow-md shadow-gray-600 rounded hover:scale-110 hover:shadow-text duration-500',
        skillIcon: 'w-[60px] sm:w-[75px] lg:w-[120px]',
    };
    return (
        <main
            name='skills'
            className={styles.main}
        >
            {/* Container */}
            <section className={styles.container}>
                <h1 className={styles.heading}>
                    Skills
                </h1>
                <p className={styles.text}>
                    Here are a few of the technologies that I have worked with.
                </p>
                <ul className={styles.skillsList}>
                    <li className={styles.skillCard}>
                        <img
                            className={styles.skillIcon}
                            src='src/images/javascript.svg'
                            alt=''
                        />
                        <span className='font-light'>JavaScript</span>
                    </li>
                    <li className={styles.skillCard}>
                        <img
                            className={styles.skillIcon}
                            src='src/images/react.png'
                            alt=''
                        />
                        <span className='font-light'>React</span>
                    </li>
                    <li className={styles.skillCard}>
                        <img
                            className={styles.skillIcon}
                            src='src/images/python.svg'
                            alt=''
                        />
                        <span className='font-light'>Python</span>
                    </li>
                    <li className={styles.skillCard}>
                        <img
                            className={styles.skillIcon}
                            src='src/images/tailwind.svg'
                            alt=''
                        />
                        <span className='font-light'>TailwindCSS</span>
                    </li>
                    <li className={styles.skillCard}>
                        <img
                            className={styles.skillIcon}
                            src='src/images/html.svg'
                            alt=''
                        />
                        <span className='font-light'>HTML</span>
                    </li>
                    <li className={styles.skillCard}>
                        <img
                            className={styles.skillIcon}
                            src='src/images/css.svg'
                            alt=''
                        />
                        <span className='font-light'>CSS</span>
                    </li>
                </ul>
            </section>
        </main>
    );
};
export default Skills;
