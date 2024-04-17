import style from './style.module.css'

export const Container = (props) => {
    return (
        <div className={style.container}>
            {props.children}
        </div>
    )
}