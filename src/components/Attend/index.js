import React from 'react'
import styles from './style.module.css'

export default function Attend() {
    return (
    <>    
        <div className = {styles.container}>
            <div className = {styles.bg}>
                <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b42b0fbd743c77a3334/8fff366b-48a3-48e4-b9cb-151f59937704" alt = "img"/>
            </div>
            <div className = {styles.bgone}>
                <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b42b0fbd743c77a3330/7eccda27-ef39-4425-a4f3-12203e3bdc03" alt = "img"/>
            </div>
            <div className = {styles.heading}>
                <h1>Why <span>At</span>tend</h1>
   
            </div>
        </div>
    </>    
    )
}
