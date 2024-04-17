import style from './style.module.css'

export const Container = (props) => {
    return (
    <div className={`${style.container} ${style[props.customClass]}`}>{props.children}</div>
    )
}