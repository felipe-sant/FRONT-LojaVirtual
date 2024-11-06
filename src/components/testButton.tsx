import css from "../styles/buttonTest.module.css"

export default function TestButton(props: { test: () => void }) {
    return (
        <button className={css.button} onClick={props.test}>TESTAR</button>
    )
}