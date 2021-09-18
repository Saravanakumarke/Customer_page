import React from 'react'
import styles from './style.module.css'
import video from '../../Images/home.mp4'
import group from '../../Images/Group.svg'

export default function Home() {
    return (
    <>    
        <div className = {styles.container}>
           <div className = {styles.video}>
              <video src={video}  
               autoPlay loop muted 
              className = {styles.videocontainer}/>  
           </div>
        <div className = {styles.redbb}>
            <img src = "https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b40b0fbd743c77a3311/7f953eb4-2206-4369-a6b2-1c6b36ffa162" alt = "img"/>
        </div>
        <div className = {styles.vi}>
            <div className = {styles.virtubb}>
                <img src = {group} alt = "img" />
            </div>
            <div className = {styles.btn}>
                <button>WATCH TRAILER</button>
            </div>
            <div className = {styles.content}>
                 <p >
                    <span className = {styles.date}>Date: 3rd August 2021</span>
                     <span>Time: 3.00 PM Dubai / 1.00 PM SAST</span>
                </p>              
            </div>
        </div>
        <div className = {styles.bubble}>
            <img src = "https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b40b0fbd743c77a3315/d879ace5-bcf9-4a72-8a69-3fba33fbab13" alt = "img"/>
        </div>
        </div>
    </>    
    )
}
