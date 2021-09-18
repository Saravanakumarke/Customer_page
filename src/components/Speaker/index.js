import React from 'react'
import styles from './style.module.css'

export default function Speaker() {

    const data = [
        {
            imgurl:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b44b0fbd743c77a3360/9a8e42b5-cf93-4d2e-942e-b39a4126065c",
            name:"Girish Mathrubootham",
            company:"Freshworks",
            position:"Co-founder and CEO",
            linkimg:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b44b0fbd743c77a3363/3ed61a5c-6270-4210-b3de-75f901d90b54"
        },
        {
            imgurl:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b44b0fbd743c77a3366/36fb62c1-ccbe-4e27-8979-6b4b2671d709",
            name:"Stacey Epstein",
            company:"Freshworks",
            position:"Chief Marketing Officer",
            linkimg:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b44b0fbd743c77a3363/3ed61a5c-6270-4210-b3de-75f901d90b54"
        },
        {
            imgurl:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b45b0fbd743c77a336c/d630cf5e-1c83-45f8-b7c5-066bb12253bc",
            name:"Subharun Mukherjee",
            company:"Freshworks",
            position:"Director, Product Marketing",
            linkimg:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b44b0fbd743c77a3363/3ed61a5c-6270-4210-b3de-75f901d90b54"
        },
        {
            imgurl:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b46b0fbd743c77a3373/63cd0bbb-4f73-4aec-9483-16ab64e98494",
            name:"Ash Mathur",
            company:"Edifecs Inc.",
            position:"Global Head of Customer Operations",
            linkimg:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b44b0fbd743c77a3363/3ed61a5c-6270-4210-b3de-75f901d90b54"
        },
        {
            imgurl:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b46b0fbd743c77a3379/fbf220a7-8030-4f53-96aa-97cdf13d487f",
            name:"David Krauss",
            company:"Freshworks CRM",
            position:"Sr Director, Product Marketing",
            linkimg:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b44b0fbd743c77a3363/3ed61a5c-6270-4210-b3de-75f901d90b54"
        },
        {
            imgurl:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b47b0fbd743c77a337f/f1c284b4-00a8-4a9c-9df3-06366098a249",
            name:"Brad Christ",
            company:"Eastern Washington University",
            position:"Associate VP for IT & CIO",
            linkimg:"https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b44b0fbd743c77a3363/3ed61a5c-6270-4210-b3de-75f901d90b54"
        },
    ]
    return (
    <>    
        <div className = {styles.container}>
            <div className = {styles.bg}>
                <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b43b0fbd743c77a3358/3e99ead2-284c-4444-aa10-6e5582719015" alt = "img"/>
            </div> 
            <div className = {styles.bgone}>
                <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b47b0fbd743c77a3384/27cea45c-2d85-41d7-b88a-7e933b279445" alt = "img"/>
            </div> 
            <div className = {styles.heading}>
                <h2><span>Ou</span>r Speaker</h2>
            </div>
            <div className = {styles.speakerlist}>
            {data.map((x,index) =>{
                    return(
                     <>   
                <div className = {styles.card}>
                    <div className = {styles.cardimg}>
                        <img src = {x.imgurl}alt= "img" />
                    </div>
                    <div className = {styles.content}>
                        <p className = {styles.name}>{x.name}</p>
                        <p className = {styles.po}>{x.position}</p>
                        <p className = {styles.com}>{x.company}</p>
                        <div className = {styles.linkimg}>
                        <img src = {x.linkimg} alt = "img" />
                        </div>
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
