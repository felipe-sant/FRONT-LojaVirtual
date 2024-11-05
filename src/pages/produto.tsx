import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import get from "../functions/get";
import ProdutoClass from "../models/ProdutoClass";
import ProdutoType from "../types/ProdutoType";

export default function Produto() {
    const { id } = useParams();
    const [produto, setProduto] = useState<ProdutoClass | undefined>(undefined);

    async function getProduto() {
        const produtos: ProdutoType[] = await get(`http://localhost:3001/produtos`);

        const produto = produtos.find(produto => produto._id === id);
        if (produto) setProduto(new ProdutoClass(produto))
    }
    
    useEffect(() => {
        getProduto();
    }, [produto])

    if (!produto) return <h1>Carregando...</h1>

    return (
        <div>
            <h1>Produto</h1>
            <h2>{produto.nome}</h2>
            <p>{produto.descricao}</p>
            <p>R$ {produto.preco}</p>
        </div>
    );
}