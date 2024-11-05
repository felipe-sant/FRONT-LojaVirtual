import css from "../styles/navbarSimple.module.css"
import NavbarSimpleProps from "../types/NavbarSimpleProps"
import arrow_back from "../images/arrow_back.svg"

export default function NavbarSimple(props: NavbarSimpleProps) {
    const { link, titulo } = props

    function redirect() {
        window.location.href = link
    }

    return (
        <>
            <nav className={css.nav} />
            <div className={css.back} onClick={redirect}>
                <img src={arrow_back} alt="Voltar" />
            </div>
        </>
    )
}