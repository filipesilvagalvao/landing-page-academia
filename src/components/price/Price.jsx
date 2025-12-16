import styles from "./Price.module.css"
import Card from '../card/Card'
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Price() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

   
      gsap.from(".card", {
        opacity: 0,
        x: 250,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".card",
          start: "top 85%",
          toggleActions: "play none none reverse",
        }
      });
    });
  return (
    <section className={styles.price}>
      <h2 className={styles.price__title}>Planos</h2>
      <div className={styles.price__container}>
        <Card
          plan={"Plano 3 Meses — Essencial"}
          price={389.79}
          feature={[
            "Acesso total à academia",
            "Avaliação física inicial",
            "Treinos personalizados básicos",
            "Aulas coletivas (limitadas)"
          ]}
        />
        <Card
          plan={"Plano 6 Meses — Performance"}
          price={659.49}
          feature={[
            "Tudo do plano Essencial",
            "Acompanhamento mensal com personal",
            "Aulas coletivas ilimitadas",
            "Acesso ao app de treinos"
          ]}
        />
        <Card
          plan={"Plano 9 Meses — Avançado"}
          price={899.25}
          feature={[
            "Acesso total à academia",
            "Avaliação física completa",
            "Treino personalizado intermediário",
            "Aulas coletivas ilimitadas"
          ]}
        />
        <Card
          plan={"Plano 12 Meses — Elite"}
          price={1078.85}
          feature={[
            "Tudo do Plano Performance",
            "Consultoria avançada com personal",
            "Reavaliação física a cada 60 dias",
            "Workshops exclusivos"
          ]}
        />
      </div>
    </section>
  )
}

export default Price