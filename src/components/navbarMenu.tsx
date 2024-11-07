import css from "../styles/navbarMenu.module.css"
import redirect from "../utils/redirect";
import NavMenuProps from "../types/NavbarMenuProps";

export default function NavbarMenu(props: NavMenuProps) {
    const { isOpen, setIsOpen, links, location } = props

    if (!isOpen) return null

    return (
        <>
            <div className={css.background} onClick={() => setIsOpen(!isOpen)} />
            <nav className={css.nav}>
                <div className={css.header} />
                <hr />
                <ul>
                    {links.map((link, index) => {
                        if (link.url === location) {
                            return (
                                <li className={css.link + " " + css.mark} onClick={() => redirect(link.url)} key={index}>
                                    <p className={css.active}>{link.text}</p>
                                    <div className={css.line} />
                                </li>
                            )
                        } else {
                            return (
                                <li className={css.link} onClick={() => redirect(link.url)} key={index}>
                                    <p>{link.text}</p>
                                </li>
                            )
                        }
                    })}
                </ul>
            </nav>
        </>
    )
}