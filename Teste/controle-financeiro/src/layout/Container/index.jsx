import style from './style.module.css'

export const Container = ({children}) => {
    return(
        <div className={style.container}>
            {children}
        </div>
    )
}