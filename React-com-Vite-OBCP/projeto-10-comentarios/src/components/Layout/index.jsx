import style from './style.module.css'

export const Layout = (props) =>{
    return(
        <div className={style.container}>
            {props.children}
        </div>
    )
}