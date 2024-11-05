type ProdutoType = {
    _id: string;
    nome: string;
    preco: string;
    frete: number | null;
    quantidade: number;
    imagem: string;
    descricao: string;
    estoque: number;
}

export default ProdutoType;