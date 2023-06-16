import style from "./Header.module.css"

export function Header() {
    return (
        <header>
            <div className={style.container}>
                <p className={style.paragrafoHeader}>Lista de Tarefas</p>
            </div>
        </header>
    )
}