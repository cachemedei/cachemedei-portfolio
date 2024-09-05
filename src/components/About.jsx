const About = () => {
    const styles = {
        main: 'w-full h-screen text-base-mid bg-text flex flex-col justify-center',
        container: 'max-w-[1000px] w-full mx-auto px-8 grid grid-cols-2 gap-2',
        heading:
            'text-4xl sm:text-5xl lg:6xl text-secondary font-bold sm:text-right',
        img: 'w-[120px] sm:w-[150px] md:w-[180px] mx-auto',
        text: 'max-w-[400px] text-[14px] mt-[-110px] sm:ml-[100px] md:mt-[-170px] sm:text-[16px] md:text-[20px]',
    };
    return (
        <main
            name='about'
            className={styles.main}
        >
            {/* Container */}
            <section className={styles.container}>
                <h1 className={styles.heading}>
                    About
                </h1>
                <img
                    src='src/images/girl.png'
                    alt='Simple line drawing of a girl with long hair in a pony tail, looking over her shoulder'
                    className={styles.img}
                />
                <p className={styles.text}>
                    A passionate chef transitioning into the tech world, I am
                    currently part of the 2024/25 She Codes Australia Plus
                    program. I have a strong a love for creativity and
                    problem-solving. Through the Plus program, I hope to gain
                    proficiency in coding, expand my technical knowledge, and
                    open new career opportunities in tech.
                </p>
            </section>
        </main>
    );
};
export default About;
