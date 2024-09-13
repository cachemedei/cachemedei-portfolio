import { HiArrowNarrowRight } from 'react-icons/hi';

const Projects = () => {
    const styles = {
        card: 'flex flex-col justify-between gap-4 mb-[40px] mx-auto',
        cardTitle:
            'font-bold text-2xl border-b-2 border-b-secondary text-base-mid w-[50%]',
        cardText: 'max-w-[300px] ml-6 font-light',
        appImg: 'w-[340px] sm:w-[450px] md:w-[500px] lg:w-[400px] rounded',
        link: 'border-2 border-secondary flex items-center justify-center py-2 px-4 md:text-xl rounded-sm group duration-500 max-w-[120px]',
        arrow: 'ml-3 group-hover:ml-[20px] duration-500',
    };
    return (
        <main
            name='projects'
            className='w-full min-h-screen flex flex-col justify-center py-[50px] bg-text'
        >
            {/* Heading Container */}
            <section className='max-w-[1000px] w-full h-full mx-auto p-4 flex flex-col justify-between'>
                <h1 className='text-4xl sm:text-5xl lg:6xl text-secondary font-bold mb-[30px] text-center lg:text-left'>
                    Projects
                </h1>

                {/* Cards Container */}
                <section className='grid grid-cols-1 lg:grid-cols-2 gap-2 w-full '>
                    {/* Pickster App */}
                    <article className={styles.card}>
                        <h2 className={styles.cardTitle}>Pickster</h2>
                        <p className={styles.cardText}>
                            A ReactJS powered web app that suggests a random
                            movies to watch based on the users genre of choice.
                            Styled with TailwindCSS, integrated with The Movie
                            Database - TMDb API to fetch movie data and provide
                            streaming services that offer the movie to buy, rent
                            or watch with a subscription. Uses Firease for user
                            authentication.
                        </p>
                        <img
                            src='src/images/pickster-app.png'
                            alt='The homepage of the app'
                            className={styles.appImg}
                        />
                        <button>
                            <a
                                href='https://github.com/cachemedei/Pickster-App'
                                className={styles.link}
                            >
                                Code
                                <HiArrowNarrowRight className={styles.arrow} />
                            </a>
                        </button>
                    </article>

                    {/* Sorting App */}
                    <article className={styles.card}>
                        <h2 className={styles.cardTitle}>
                            Sorting Algorithm Visualiser
                        </h2>
                        <p className={styles.cardText}>
                            A dynamic web app to visually demonstrate how
                            various sorting algorithms work. Built using ReactJS
                            and styled using TailwindCSS.
                        </p>
                        <img
                            src='src/images/sorting-bubble.png'
                            alt='The homepage of the app'
                            className={styles.appImg}
                        />
                        <button>
                            <a
                                href='https://github.com/cachemedei/sorting-visualiser'
                                className={styles.link}
                            >
                                Code
                                <HiArrowNarrowRight className={styles.arrow} />
                            </a>
                        </button>
                    </article>

                    {/* Weather App */}
                    <article className={styles.card}>
                        <h2 className={styles.cardTitle}>Weather App</h2>
                        <p className={styles.cardText}>
                            An app built with ReactJS that uses Open Weather
                            Map's API for generating up to date weather in
                            Australian cities.
                        </p>
                        <img
                            src='src/images/weather.png'
                            alt='The homepage of the app'
                            className={styles.appImg}
                        />
                        <button>
                            <a
                                href='https://github.com/cachemedei/weather-app'
                                className={styles.link}
                            >
                                Code
                                <HiArrowNarrowRight className={styles.arrow} />
                            </a>
                        </button>
                    </article>
                </section>
            </section>
        </main>
    );
};
export default Projects;
