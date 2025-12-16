import styles from "./Card.module.css"

function Card({plan, price, feature}) {
  return (
    <article className={styles.card + " card"}>
      <h2 className={styles.title}>{plan}</h2>

      <div className={styles.content}>
        <span className={styles.price}>R$ {price}</span>

        <ul className={styles.features}>
          {feature.map((feat,index)=>(
            <li key={index} className={styles.feature}>{feat}</li>
          ))}
        </ul>
      </div>

      <button className={styles.cta}>Inscreva-se</button>
    </article>
  )
}

export default Card