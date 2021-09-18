import React from 'react'
import styles from './style.module.css'

export default function Subnav() {
    return (
    <>
        <div className = {styles.container}>

            <div className = {styles.list}>
                <ul className = {styles.navul}>
                    <li>About</li>
                    <li>Why Attend</li>
                    <li>Speakers</li>
                    <li>Agenda</li>
                    <li>FAQ</li>
                </ul>
            </div>

        </div>
    </>
    )
}
