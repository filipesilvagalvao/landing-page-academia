import { memo } from "react"
import styles from "./Footer.module.css"

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>

                <div className={styles.brand}>
                    <h3 className={styles.name}>Academia FIT+</h3>
                    <p className={styles.tag}>Treine com foco. Resultados reais.</p>
                </div>

                <nav className={styles.links} aria-label="links do rodapé">
                    <a href="#planos">Planos</a>
                    <a href="#sobre">Sobre</a>
                </nav>

                <div className={styles.contact}>
                    <p className={styles.contactLine}><i className="fa-solid fa-location-dot"></i> Rua Exemplo, 123 - Centro</p>
                    <div className={styles.mapWrapper}>
                        <iframe
                            title="Mapa - Rua Exemplo"
                            src="https://www.google.com/maps?q=Rua+Exemplo+123+Centro&output=embed"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className={styles.map}
                        ></iframe>
                    </div>
                    <p className={styles.contactLine}><i className="fa-solid fa-phone"></i> (11) 91234-5678</p>
                    <p className={styles.contactLine}><i className="fa-regular fa-envelope"></i> contato@fitmais.com</p>

                    <div className={styles.social}>
                        <a href="#" aria-label="whatsapp"><i className="fa-brands fa-whatsapp"></i></a>
                        <a href="#" aria-label="instagram"><i className="fa-brands fa-instagram"></i></a>
                        <a href="#" aria-label="facebook"><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
            </div>

            <div className={styles.bar}>
                <p>© {new Date().getFullYear()} Academia FIT+ — Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}

export default memo(Footer)