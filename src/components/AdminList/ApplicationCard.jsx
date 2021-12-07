import React from 'react'
import styles from './ApplicationCard.module.css'

export default function ApplicationCard ({ cats }) {
    console.log(cats)
    return (
        <button className = {styles.appCard}>
            <div className={styles.container}> 
                <p>{cats.name}</p>
                <p>{cats.species}</p>
                <p>{cats.email}</p>
                <p>{cats.phone}</p>

                <p>Chester</p>
                <p>cat</p>
                <p>abc@xyz.com</p>
                <p>678733470</p>
            </div>
            <div className={styles.container}>
                <h2>View More</h2>
            </div>
        </button>
    )
}