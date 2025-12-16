import styles from "./Home.module.css"
import Cascate from '../cascate/Cascate'
import video from "/src/videos/exercicio.mp4"

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.home__container}>
                <p>Fit+ é</p>
                <Cascate words={["musculação", "crossfit", "natação", "saúde"]} />
            </div>
            <div className={styles.bgVideo}>
                <video autoPlay muted loop playsInline>
                    <source src={video} type="video/mp4"/>
                </video>
            </div>

        </section>
    )
}

export default Home