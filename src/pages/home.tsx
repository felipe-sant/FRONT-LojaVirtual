import { useEffect, useState } from "react"
import Navbar from "../components/navbar"
import NavbarMobile from "../components/navbarMobile"
import LinkType from "../types/LinkType"
import css from "../styles/home.module.css"
import loading from "../images/loading.svg"
import wifiOff from "../images/wifi-off.svg"
import sadFace from "../images/sad-face.svg"
import ProdutoClass from "../models/ProdutoClass"
import get from "../functions/get"
import TestButton from "../components/testButton"

function Home() {
    const [isMobile, setIsMobile] = useState(true)
    const [erroProdutos, setErroProdutos] = useState(true)
    const [emoji, setEmoji] = useState(loading)
    const [mensagem, setMensagem] = useState("Carregando Produtos...")
    const [isLoading, setIsLoading] = useState(true)
    const [produtos, setProdutos] = useState<ProdutoClass[]>([])

    const links: LinkType[] = [
        { url: "/produto/cadastro", text: "Cadastrar Produtos" },
        { url: "/", text: "Comprar Produtos" },
        { url: "/compras", text: "Histórico de Compras" }
    ]

    const buscarProdutos = async () => {
        try {
            const data: {}[] = await get("http://localhost:3001/produtos")
            console.log(data)
            if (data.length === 0) {
                setEmoji(sadFace)
                setMensagem("Nenhum produto encontrado.")
                return
            }
            setErroProdutos(false)
        } catch (error) {
            console.log(error)
            setErroProdutos(true)
            setEmoji(wifiOff)
            setMensagem("Erro ao carregar produtos.")
        } finally {
            setIsLoading(false)
        }
    }

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
            <main className={css.main}>
                <div className={css.pesquisa}>
                    <input
                        type="text"
                        placeholder="Pesquisar"
                    />
                </div>
                {erroProdutos ? (
                    <section className={css.produtos + " " + css.erroProdutos}>
                        {isLoading ? (
                            <img src={emoji} alt="logo de erro" className={css.rotate} />
                        ) : (
                            <img src={emoji} alt="logo de erro" />
                        )}
                        <p>{mensagem}</p>
                    </section>
                ) : (
                    <section className={css.produtos}>

                    </section>
                )}
            </main>
            <TestButton test={buscarProdutos} />
        </>
    )
}

export default Home