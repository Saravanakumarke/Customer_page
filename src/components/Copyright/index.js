import React from 'react'
import styles from './style.module.css'

export default function Copyright() {
    return (
    <>    
       <div className = {styles.copyright}>
            <div className = {styles.one}>
                Terms of service Privacy Notice Takedown Policy GDPR Security Unsubscribe
            </div>
            <div className = {styles.two}>
                Copyright © Freshworks Inc. All Rights Reserved
            </div>
        </div>
    </>    
    )
}
