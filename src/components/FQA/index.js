import React,{useState} from 'react'
import styles from './style.module.css'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'

export default function FQA() {

    const [faqs, setFaq] = useState([
        {
          question: "Do I need to download or install to attend this event?",
          more:"No. You do not need to download or install any software to join the Customer Success Day. All you need to have is access to the Internet. No webcams will be required for attendees.",
          isActive: false,
        },
        {
          question: "How do I register for Customer Success Day?",
          more:"You can use the form above to register for free! On registering, you will receive a confirmation email from us with the subject line “Customer Success Day by Freshworks” where you can find your personal link to access the event online. We recommend you to quickly use the “Add to calendar” button to make sure you don't miss out.",
          isActive: false,
        },
        {
            question: "How do I log in on the event date (August 19th)?",
            more:"On the event date (August 19th, 2021) you can join the event by simply clicking on the personal link provided to you via email. Search your inbox for the subject line 'You're registered! Customer Success Day by Freshworks'. You'll find your personal link there. We recommend you quickly use the “Add to calendar” button to make sure you don't miss out.",
            isActive: false,
          },
          {
            question: "I’m having trouble logging in or completing my registration, who do I contact?",
            more:"If you’re experiencing any problems signing in, please contact experience@freshworks.com – we’ll be happy to help you out.",
            isActive: false,
          },
          {
            question: "How much do the tickets to Customer Success Day by Freshworks cost?",
            more:"Tickets for Customer Success Day are completely FREE and include online access to all the sections of our virtual event platform. Register using the form above to save your spot.",
            isActive: false,
          },
      ])

      const [faqsone, setFaqone] = useState([
        {
          question: "Do I need to download or install to attend this event?",
          more:"No. You do not need to download or install any software to join the Customer Success Day. All you need to have is access to the Internet. No webcams will be required for attendees.",
          isActive: false,
        },
        {
          question: "How do I register for Customer Success Day?",
          more:"You can use the form above to register for free! On registering, you will receive a confirmation email from us with the subject line “Customer Success Day by Freshworks” where you can find your personal link to access the event online. We recommend you to quickly use the “Add to calendar” button to make sure you don't miss out.",
          isActive: false,
        },
        {
            question: "How do I log in on the event date (August 19th)?",
            more:"On the event date (August 19th, 2021) you can join the event by simply clicking on the personal link provided to you via email. Search your inbox for the subject line 'You're registered! Customer Success Day by Freshworks'. You'll find your personal link there. We recommend you quickly use the “Add to calendar” button to make sure you don't miss out.",
            isActive: false,
          },
          {
            question: "I’m having trouble logging in or completing my registration, who do I contact?",
            more:"If you’re experiencing any problems signing in, please contact experience@freshworks.com – we’ll be happy to help you out.",
            isActive: false,
          },
          {
            question: "How much do the tickets to Customer Success Day by Freshworks cost?",
            more:"Tickets for Customer Success Day are completely FREE and include online access to all the sections of our virtual event platform. Register using the form above to save your spot.",
            isActive: false,
          },
      ])

    const toggleActive = (index) => {
        let faqCopy = faqs
        faqCopy.forEach((faq, i) => (index===i) ? faq.isActive = !faq.isActive : faq.isActive = false)
        setFaq([...faqCopy])
    }
    const toggleActiveone = (index) => {
        let faqCopy = faqsone
        faqCopy.forEach((faq, i) => (index===i) ? faq.isActive = !faq.isActive : faq.isActive = false)
        setFaqone([...faqCopy])
    }
    return (
    <>
    <div className = {styles.main}>

        <p className={styles.headerText}>F<span>AQ</span>'s</p>
        <div className={styles.EthfaqWrapper}>
            <div></div>
            <div className={styles.faqContainer}>
                <div className={styles.expandableCard}>
                    {faqs.map((faq, index) => {
                        return(
                            <div className={styles.question}>
                            <div className={styles.divident}>
                            <div className={styles.leftSection}>
                            <h3 onClick={() => toggleActive(index)}>{faq.question}</h3>
                        </div>
                        <div className={styles.rightSection} onClick={() => toggleActive(index)}>
                        {faq.isActive ? <AiOutlineMinus size = "15"/> : <AiOutlinePlus size = "15"/>}
                        </div>
                        </div>
                        <div className={faq.isActive === true ?`${styles.moreDataopen}`:`${styles.moreData}`}>
                            {faq.more}
                        </div> 
                    </div>
                        )
                    })}
                </div>
            </div>
            <div className={styles.faqContainer}>
                <div className={styles.expandableCard}>
                    {faqsone.map((faq, index) => {
                        return(
                            <div className={styles.question}>
                            <div className={styles.divident}>
                            <div className={styles.leftSection}>
                            <h3 onClick={() => toggleActiveone(index)}>{faq.question}</h3>
                        </div>
                        <div className={styles.rightSection} onClick={() => toggleActiveone(index)}>
                        {faq.isActive ? <AiOutlineMinus size = "15"/> : <AiOutlinePlus size = "15"/>}
                        </div>
                        </div>
                         <div className={faq.isActive === true ?`${styles.moreDataopen}`:`${styles.moreData}`}>
                            {faq.more}
                        </div> 
                    </div>
                        )
                    })}
                </div>
            </div>
        </div>
        <div className = {styles.support}></div>
        </div>
    </>  
    )
}
