import {  memo, useRef } from "react"
import styles from "./GrowUp.module.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

function GrowUp({ num, text }) {
    const refNumber = useRef(null)
    let number = null


    useGSAP(() => {
        const span = refNumber.current
        number = Number(refNumber.current.innerText)
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(refNumber.current, {
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: span,
                start: "top 100%",  // aparece quando chega na parte visível
                onEnter: () => {
                    putNumbers(span);
                }
            }
        });
    })



    function putNumbers(span) {
        let start = 1

        const timer = setInterval(() => {

            start *= 2

            span.innerText = start

            if (start >= number) {
                span.innerText = number
                clearInterval(timer)
            }

        }, 60)
    }


    return (
        <div className={styles.growup}>
            <p className={styles.growup__info}>+<span className={styles.growup__number} ref={refNumber}>{num}</span> <br />{text}</p>
        </div>
    )
}

export default memo(GrowUp)