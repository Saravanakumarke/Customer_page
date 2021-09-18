import React from 'react'
import styles from './style.module.css'
import logo from '../../Images/logofr.svg'
import {FaFacebook} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {TiSocialYoutubeCircular,TiSocialLinkedinCircular} from 'react-icons/ti'
import {SiGlassdoor} from 'react-icons/si'
 
export default function Footer() {
    return (
    <>    
        <div className = {styles.main}>
            <footer>
                <div className = {styles.leftside}>
                    <div className = {styles.freshwork}>
                       <ul>
                           <li className = {styles.img}><img src = {logo} alt = "logo" /></li>
                           <li className = {styles.one}>Freshworks</li>
                           <li>Freshdesk</li>
                           <li>Freshservice</li>
                           <li>Freshsales</li>
                           <li>Freshcaller</li>
                           <li>Freshchat</li>
                           <li>Freshteam</li>
                           <li>Freshworks</li>
                           <li>Freshconnect</li>
                           <li>Freshworks</li>
                           <li>Freshworks</li>
                           <li>Freshworks</li>
                           <li>Freshconnect</li>
                           <li>Freshworks</li>
                           <li>Freshworks</li>
                       </ul>

                    </div>
                    <div>
                    </div>
                </div>
                <div className = {styles.rightside}>
                    <div className = {styles.freshwork}>
                       <ul>
                           <li className = {styles.name}>Company</li>
                           <li >About</li>
                           <li>Leadership</li>
                           <li>Board of Directors</li>
                           <li>Investors</li>
                           <li>Customers</li>
                           <li>Solutions</li>
                           <li>Affiliates</li>
                           <li>Partners</li>
                           <li>Careers</li>
                           <li>News room</li>
                           <li>Contact us</li>
                           <li>GDPR</li>
                       </ul>

                    </div>
                    <div>
                    </div>
                </div>
                <div className = {styles.events}>
                    <div className = {styles.eventname}>
                        <ul>
                            <li>EVENTS</li>
                            <li>Refresh19</li>
                            <li>Customer First Summit</li>
                            <li>Customer First Summit</li>
                        </ul>
                    </div>
                    <div className = {styles.case}>
                       <ul>
                            <li>CASE STUDIES</li>
                            <li>Citizens Advice</li>
                        </ul>
                    </div>
                    <div className = {styles.contact}>
                        <p>CONNECT WITH US</p>
                        <ul>
                            <li><FaFacebook  size = {30} className = {styles.facebook}/></li>
                            <li><AiFillTwitterCircle  size = {35} className = {styles.twitter}/></li>
                            <li><TiSocialYoutubeCircular  size = {40} className = {styles.youtube}/></li>
                            <li><TiSocialLinkedinCircular  size = {40} className = {styles.linkedin}/></li>
                            <li><SiGlassdoor size = {30} className = {styles.glassdoor}/></li>
                        </ul>
                    </div>

                </div>
 
             </footer> 
        </div>
    </>    
    )
}
