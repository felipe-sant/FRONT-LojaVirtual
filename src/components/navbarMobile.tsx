import NavbarProps from "../types/NavbarProps";
import css from "../styles/navbarMobile.module.css"
import LinkType from "../types/LinkType";
import { useEffect, useState } from "react";
import gato from "../images/gato-black.svg"
import shopping_cart_alert from "../images/shopping-cart_alert_white.svg"
import shopping_cart from "../images/shopping-cart.svg"
import redirect from "../utils/redirect";
import NavbarMenu from "./navbarMenu";

export default function NavbarMobile(props: NavbarProps) {
    const [shoppingCart_Alert, setShoppingCart_Alert] = useState(false)
    const [openHamburguer, setOpenHamburguer] = useState(false)
    const links: LinkType[] = props.links
    const location: string = props.location

    return (
        <>
            <header className={css.header}>
                <div className={css.line}></div>
                <div className={css.items}>
                    <div className="logo" onClick={() => redirect("/")}>
                        <img src={gato} alt="logo" />
                    </div>
                    <div className={css.navbar}>
                        <div className={css.shopping_cart} onClick={() => setShoppingCart_Alert(!shoppingCart_Alert)}>
                            {shoppingCart_Alert ? <img src={shopping_cart_alert} alt="shopping_cart" /> : <img src={shopping_cart} alt="shopping_cart" />}
                        </div>
                        <div className={openHamburguer ? css.hamb + " " + css.open : css.hamb + " " + css.close} onClick={() => { setOpenHamburguer(!openHamburguer) }}>
                            <div className={css.hamburguer} />
                        </div>
                    </div>
                </div>
            </header>
            <NavbarMenu isOpen={openHamburguer} setIsOpen={setOpenHamburguer} links={links} location={location} />
        </>
    )
}