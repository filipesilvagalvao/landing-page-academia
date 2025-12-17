import GrowUp from "/src/components/growUp/GrowUp"
import styles from "./Filler.module.css"
import { memo } from "react"

function Filler() {
  return (
    <section className={styles.filler}>
        <div className={styles.filler__container}>
            <GrowUp num={140} text={"Instrutores qualificados"}/>
            <GrowUp num={978} text={"Alunos inscritos"}/>
            <GrowUp num={50} text={"Programas de treino"}/>
        </div>
    </section>
  )
}

export default memo(Filler)