import React from 'react'
import styles from './style.module.css'

export default function List() {

    const data = [
        {
            imgurl:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b42b0fbd743c77a333b/27df1e07-2794-4616-b6bb-9596b4095a17",
            heading:"Influence",
            text:"Get exclusive previews into our product roadmaps and get a chance to influence the design process.",
        },
        {
            imgurl:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b43b0fbd743c77a3345/fa74b870-1c81-4a45-868b-836bce570ad6",
            heading:"Learn & Grow",
            text:"Unlock the full potential of Freshworks products, learn best practices, and deep dive into unique use cases.",
        },
        {
            imgurl:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b43b0fbd743c77a334f/38940088-fd87-476a-94c0-a199a2baef9d",
            heading:"Network",
            text:"Grow your network; interact with peers to exchange ideas on new use cases and gain new perspectives.",
        },
    ]
    return (
    <>    
        <div className = {styles.container}>
            <div className = {styles.content}>
                {data.map((x,index) =>{
                    return(
                     <> 
                    <div className = {styles.final}>  
                        <img src={x.imgurl} alt = "img" />

                        <div className = {styles.info}>
                            <p className = {styles.heading}>{x.heading}</p>
                            <p className = {styles.text}>{x.text}</p>
                         </div>
                    </div>  
                    </>
                    )
                })}
            </div>
        </div>
    </>    
    )
}
