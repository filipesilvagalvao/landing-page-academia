import { memo } from "react"
import styles from "./Range.module.css"

function Range() {
  return (
    <div className={styles.range}>
        <div className={styles.range__line}></div>
    </div>
  )
}

export default memo(Range)