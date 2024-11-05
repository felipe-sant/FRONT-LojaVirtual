import ProdutoType from "../types/ProdutoType";

export default class ProdutoClass {
    protected _id: string;
    public nome: string;
    public preco: string;
    public frete: number | null;
    public quantidade: number;
    public imagem: string;
    public descricao: string;
    public estoque: number;

    constructor(json: ProdutoType) {
        this._id = json._id;
        this.nome = json.nome;
        this.preco = json.preco;
        this.frete = json.frete;
        this.quantidade = json.quantidade;
        this.imagem = json.imagem;
        this.descricao = json.descricao;
        this.estoque = json.estoque;
    }

    get id() { return this._id; }
}