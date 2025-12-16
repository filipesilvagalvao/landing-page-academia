import { gsap } from "gsap";
import styles from "./Cascate.module.css"
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

function Cascate({ words }) {
    const refWord = useRef(null)
    const tl = gsap.timeline({ repeat: -1 })

    let listword = null

    useGSAP(() => {
        listword = refWord.current?.querySelectorAll("div")
        animeCascate()
    })

    function animeCascate() {
        listword.forEach((word) => {
            const w = word.querySelectorAll(".cascate__letter")

            tl.from(w, {
                y: -200,
                stagger: 0.05,
                opacity: 0,
                ease: "power4.out"
            })

                .to(w, {
                    y: -200,
                    stagger: 0.05,
                    opacity: 0,
                    ease: "power4.in"
                }, "+=1")


        });
    }

    return (
        <div className={styles.cascate} ref={refWord}>
            {words.map((word) => (
                <div key={word} className={styles.cascate__word}>{word.split("").map((letter, index) => (
                    <span key={index} className="cascate__letter">{letter}</span>
                ))}</div>
            ))}
        </div>
    )
}

export default Cascate