import React from 'react'
import styles from './style.module.css'
import {CgProfile} from 'react-icons/cg'
import {HiOutlineMail} from 'react-icons/hi'
import {IoBagAddOutline} from 'react-icons/io5'

export default function Event() {
    return (
    <>
        <div className = {styles.container}>
            <div className = {styles.leftside}>
                <div className = {styles.content}>
                    <h1><span>Ab</span>out the Event</h1>
                    <div className = {styles.sub}>
                        The Virtual Customer Success day is <strong>all about celebrating YOU </strong>— sharing stories,
                        exchanging ideas with peers, and being a part of the Freshworks community.
                        Join us for a <strong>series of interactive sessions </strong>featuring customer champions like 
                        you and product leaders. Learn how to <strong>derive maximum value</strong> from your Freshworks 
                        subscription.This is an invite-only event exclusive to Freshworks customers with limited seats.Register now to save yours. 

                    </div>
                </div>
            </div>
            <div className = {styles.rightside}>
                <div className = {styles.bg}>
                    <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b41b0fbd743c77a3327/8282a174-8080-4c4d-80ce-26e2fb685257" alt = "img"/>
                </div>
                <div className = {styles.formbox}>
                    <h3>SAVE YOUR SEAT</h3>
                    <div className = {styles.in}>
                    <input type = "text" 
                    className = {styles.input_text}
                    placeholder = "Full Name"
                    
                    />
                    <CgProfile  color = "838488" size = "30" className = {styles.Profile}/>
                    </div>
                    <div className = {styles.in}>
                    <input type = "email" 
                    className = {styles.input_text}
                    placeholder = "Email Id"
                    
                    />
                    <HiOutlineMail  color = "838488" size = "30" className = {styles.Profile}/>
                    </div>
                    <div className = {styles.in}>
                    <input type = "text" 
                    className = {styles.input_text}
                    placeholder = "Job Title"
                    
                    />
                    <IoBagAddOutline  color = "838488" size = "30" className = {styles.Profile}/>
                    </div>
                    <button>REGISTER NOW</button>
                    <div className = {styles.info}>
                        <p>By clicking on <strong>REGISTER NOW</strong>,
                         you acknowledge having read our <a href = "##">Privacy notice</a></p>
                    </div>
                </div>
            </div>
            <div className = {styles.ball}>
                 <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b41b0fbd743c77a331e/a8c361a6-2d2b-4c09-a76f-a86b8e9bbf99" alt = "img"/>
            </div>
        </div>
    </>    
    )
}
