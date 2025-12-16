import styles from "./Place.module.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function Place() {
    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.utils.toArray(".box").forEach(item => {
            gsap.from(item, {
                opacity: 0,
                scaleX:0.5,
                scaleY:0.5,
                y: 60,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            });
        });
    })

    return (
        <section className={styles.place}>
            <h2 className={styles.place__title}>Conheça nosso espaço</h2>

            <div className={styles.place__container}>
                <div style={{ gridArea: "box-1" }} className={styles.place__box + " box"}>
                    <img src="/src/img/place-1.jpg" alt="" />
                </div>
                <div style={{ gridArea: "box-2" }} className={styles.place__box + " box"}>
                    <img src="/src/img/place-2.jpg" alt="" />
                </div>
                <div style={{ gridArea: "box-3" }} className={styles.place__box + " box"}>
                    <img src="/src/img/place-3.jpg" alt="" />
                </div>
                <div style={{ gridArea: "box-4" }} className={styles.place__box + " box"}>
                    <img src="/src/img/place-4.jpg" alt="" />
                </div>
                <div style={{ gridArea: "box-5" }} className={styles.place__box + " box"}>
                    <img src="/src/img/place-5.jpg" alt="" />
                </div>
                <div style={{ gridArea: "box-6" }} className={styles.place__box + " box"}>
                    <img src="/src/img/place-6.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Place