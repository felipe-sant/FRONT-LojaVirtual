import ProdutoItemProps from "../types/ProdutoItemProps";
import css from "../styles/produtoItem.module.css"

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props

    return (
        <div className={css.produto}>
            <div className={css.imagem}>
                <img src={produto.imagem} alt="imagem do produto" />
            </div>
            <div className={css.texto}>
                <h3>{produto.nome}</h3>
                <p className={css.preco}>{produto.preco}</p>
                <p className={css.desc}>{produto.descricao}</p>
            </div>
            <div className={css.linha} />
        </div>
    )
}