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
import ProdutoItem from "../components/produtoItem"
import ProdutoType from "../types/ProdutoType"

function Home() {
    const [isMobile, setIsMobile] = useState(true)
    const [erroProdutos, setErroProdutos] = useState(true)
    const [emoji, setEmoji] = useState(loading)
    const [mensagem, setMensagem] = useState("Carregando Produtos...")
    const [isLoading, setIsLoading] = useState(true)
    const [produtos, setProdutos] = useState<ProdutoClass[]>([])

    const newProd: ProdutoType[] = [
        {
            "_id": "1",
            "nome": "Smartphone XYZ",
            "preco": "2999.99",
            "frete": 15.50,
            "quantidade": 50,
            "imagem": "https://example.com/images/smartphone_xyz.jpg",
            "descricao": "Um smartphone moderno com excelente câmera e bateria de longa duração.",
            "estoque": 1
        },
        {
            "_id": "2",
            "nome": "Notebook ABC",
            "preco": "5499.99",
            "frete": 0,
            "quantidade": 30,
            "imagem": "https://example.com/images/notebook_abc.jpg",
            "descricao": "Notebook de alta performance, ideal para trabalho e estudos.",
            "estoque": 0
        },
        {
            "_id": "3",
            "nome": "Fone de Ouvido Wireless",
            "preco": "399.99",
            "frete": null,
            "quantidade": 100,
            "imagem": "https://example.com/images/fone_ouvido_wireless.jpg",
            "descricao": "Fone de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
            "estoque": 24
        },
        {
            "_id": "4",
            "nome": "Fone de Ouvido Wireless",
            "preco": "399.99",
            "frete": null,
            "quantidade": 100,
            "imagem": "https://example.com/images/fone_ouvido_wireless.jpg",
            "descricao": "Fone de ouvido sem fio com cancelamento de ruído e som de alta qualidade.",
            "estoque": 24
        }
    ]

    const links: LinkType[] = [
        { url: "/produto/cadastro", text: "Cadastrar Produtos" },
        { url: "/", text: "Comprar Produtos" },
        { url: "/compras", text: "Histórico de Compras" }
    ]

    const buscarProdutos = async () => {
        try {
            // const data: ProdutoType[] = await get("http://localhost:3001/produtos")
            // if (data.length === 0) {
            //     setEmoji(sadFace)
            //     setMensagem("Nenhum produto encontrado.")
            //     return
            // }
            const newProdutos: ProdutoClass[] = newProd.map((produto: ProdutoType) => new ProdutoClass(produto))
            setProdutos(newProdutos)
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
        buscarProdutos()
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
                    <section className={css.produtos + " " + css.comProdutos}>
                        {produtos.map((produto, index) => (
                            <ProdutoItem key={index} produto={produto} />
                        ))}
                    </section>
                )}
            </main>
        </>
    )
}

export default Home