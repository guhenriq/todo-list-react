import style from "./Footer.module.css"
import { LinkedIn, GitHub, Email, WhatsApp } from "@mui/icons-material"

export function Footer() {
    return (
        <div className={style.footer}>
            <p>&copy; Developed By Gustavo Henrique</p>
            <div className={style.divIcons}>
                <a href="https://www.linkedin.com/in/gustavo-henrique-oliveira-dos-santos-028aa4181/" target="_blank" rel="noreferrer">
                    <LinkedIn/>
                </a>
                <a href="https://github.com/guhenriq" target="_blank" rel="noreferrer">
                    <GitHub />
                </a>
                <a href="mailto:gustavo.henrique.oliveira50@gmail.com" target="_blank" rel="noreferrer">
                    <Email />
                </a>
                <a href="https://api.whatsapp.com/send?phone=11952516534" target="_blank" rel="noreferrer">
                    <WhatsApp />
                </a>
            </div>
        </div>
    )
}