import { useState } from 'react';
import style from './style.module.css'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CiTrash } from "react-icons/ci";


export const Trail = ({ trail }) => {

    const HeartRating =  ({totalHearts=5, chooseHeart}) => {
        const hearts = []
        for (let i = 0; i < chooseHeart; i++){
            hearts.push(<FaHeart key={i} className={style.heartClass}/>)
        }
        for (let i = 0; i < (totalHearts - chooseHeart); i++){
            hearts.push(<FaRegHeart key={i} className={style.heartClass}/>)
        }
        return hearts;
    }

    return(
        <div className={style.containerTrail}>
            <div className={style.imgSide}>
                <img src={trail.img} alt="" />
            </div>
            <div className={style.textSide}>
                <div className={style.textContainer}>
                        <h3 className={style.title}>{trail.nomeDaTrilha} - {trail.cidade} / {trail.estado}</h3>
                        <div className={style.line}></div>
                        <p className={style.author}>por: {trail.fotografo}</p>
                        <div className={style.trailInfos}>
                            <p>Duração: {trail.duracao}h</p>
                            <p>Trajeto: {trail.trajeto}km</p>
                            <div className={style.dificuldade}>{trail.dificuldade}</div>
                            <div className={style.avaliacaoArea}>
                                <div className={style.heart}>
                                    <HeartRating chooseHeart={3}/>
                                </div>
                                <div>
                                    <CiTrash className={style.trashClass}/>   
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    )
}