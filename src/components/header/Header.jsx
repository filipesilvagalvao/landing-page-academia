import styles from "./Header.module.css"

function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>

                <h1 className={styles.header__logo}>FIT+</h1>

                <div className={styles.header__socials}>
                    
                    <a href="#">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>


                    <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header