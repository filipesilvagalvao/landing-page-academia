import styles from "./About.module.css"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { memo } from "react";

function About() {

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".aboutText").forEach(item => {
      gsap.from(item, {
        opacity: 0,
        x: -250,
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
    <section className={styles.about}>
      <div className={styles.about__container}>

        <div className={styles.about__title}>

          <h2>
            <span>s</span>
            <span>o</span>
            <span>b</span>
            <span>r</span>
            <span>e</span>
          </h2>

        </div>

        <div className={styles.about__content}>
          <p className="aboutText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui voluptate quaerat quasi vero repellat autem? Dignissimos velit non odio corrupti error ea voluptatibus nihil ut est fuga, sapiente minus! Aut.</p>

          <p className="aboutText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eaque quos placeat? Voluptatem sunt rem laudantium consectetur eos quisquam, quis quia omnis quasi repudiandae repellat. Enim error voluptates cumque neque!</p>

          <p className="aboutText">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic delectus minus ipsum consequuntur iste sed quas! Impedit, commodi distinctio pariatur autem dignissimos voluptatum totam repellat debitis maiores labore repudiandae inventore!</p>
        </div>
      </div>

    </section>
  )
}

export default memo(About)