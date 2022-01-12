import React from 'react';
import styles from './Card.module.css';
import {useRouter} from 'next/router';

const Card = ({name,phone,email,image,id}) =>{

    const router = useRouter()

    return(
        <div className={styles.card} onClick={()=>router.push(`/cats/${id}`)}>
            <div className={styles["card-header"]}>
                <img alt={image.alt} src={image.url} className={styles["card-img"]}/>
            </div>
            <div>
                <h3>{name}</h3>
                <p>{phone}</p>
                <p>{email}</p>
                
            </div>
        </div>
    );
}
export default Card;



