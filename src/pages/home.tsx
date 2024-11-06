import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import NavbarMobile from "../components/navbarMobile"
import LinkType from "../types/LinkType"

function Home() {
    const [isMobile, setIsMobile] = useState(true)

    const links: LinkType[] = [
        { url: "/produto/cadastro", text: "Cadastrar Produtos" },
        { url: "/", text: "Comprar Produtos" },
        { url: "/compras", text: "Histórico de Compras" }
    ]

    useEffect(() => {
        function handleSize(): void { setIsMobile(window.innerWidth < 900) }
        handleSize()
        window.addEventListener("resize", handleSize)
        return () => window.removeEventListener("resize", handleSize)
    }, [])

    return (
        <>
            {isMobile ? (
                <NavbarMobile location="/" links={links} />
            ) : (
                <Navbar location="/" links={links} />
            )}
            <main></main>
        </>
    )
}

export default Home