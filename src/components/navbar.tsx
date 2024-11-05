import css from "../styles/navbar.module.css"
import LinkType from "../types/LinkType"
import NavbarProps from "../types/NavbarProps"
import gato from "../images/gato-white.svg"
import redirect from "../utils/redirect"
import shopping_cart from "../images/shopping-cart.svg"
import shopping_cart_alert from "../images/shopping-cart_alert_yellow.svg"
import { useState } from "react"

export default function Navbar(props: NavbarProps) {
    const [shoppingCart_Alert, setShoppingCart_Alert] = useState(false)
    const links: LinkType[] = props.links
    const location: string = props.location

    return (
        <>
            <header className={css.header}>
                <div className={css.logo} onClick={() => redirect("/")}>
                    <img src={gato} alt="logo" />
                </div>
                <div className={css.navbar}>
                    <nav className={css.nav}>
                        {links.map((link, index) => {
                            if (link.url === location) {
                                return (
                                    <div className={css.link + " " + css.mark} onClick={() => redirect(link.url)} key={index}>
                                        <p className={css.active}>{link.text.toUpperCase()}</p>
                                        <div className={css.line} />
                                    </div>
                                )
                            } else {
                                return (
                                    <div className={css.link} onClick={() => redirect(link.url)} key={index}>
                                        <p>{link.text.toUpperCase()}</p>
                                    </div>
                                )
                            }
                        })}
                    </nav>
                    <div className={css.shopping_cart} onClick={() => setShoppingCart_Alert(!shoppingCart_Alert)}>
                        {shoppingCart_Alert ? <img src={shopping_cart_alert} alt="shopping_cart" /> : <img src={shopping_cart} alt="shopping_cart" />}
                    </div>
                </div>
            </header>
        </>
    )
}