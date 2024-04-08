import styles from './Card.module.css'

export const Card = (props, img) => {
    return (
        <div className={styles.container}>
            <img src="https://static.tvtropes.org/pmwiki/pub/images/pokemon_ranger_and_the_temple_of_the_sea.png" alt="Pokemon poster" />
            <div className={styles.containerName}>
                <h1>{props.title}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptates eaque soluta architecto cumque consectetur quae ab deserunt cum? Modi incidunt fuga quia laborum reiciendis sequi veniam impedit saepe eveniet!</p>
                <button>Comprar poster</button>
            </div>
        </div>
    )
}