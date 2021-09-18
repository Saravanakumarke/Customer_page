import React from 'react'
import styles from './style.module.css'
import {AiOutlineClockCircle} from 'react-icons/ai'

export default function Agenda() {
    return (
    <>    
        <div className = {styles.container}>
            <div className = {styles.bg}>
                <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b48b0fbd743c77a3388/488655cc-4fdf-4d0f-b3af-94ca24c5c327" alt = "img"/>
            </div> 
            <div className = {styles.firstinfo}>
                <div className = {styles.col}>
                    <h1>Agenda</h1>
                    <p className = {styles.date}>Thursday, August 19th</p>
                    <p className = {styles.time}>9 AM PST / 12 PM EST</p>
                </div>
                <div className = {styles.col2}>
                    <p><span><AiOutlineClockCircle color = "#fff" size = {20}/></span>2hrs 50mins</p>
                </div>
                <div className = {styles.col3}>
                    <button>Regsister Here</button>
                </div>
            </div>
            <div className={styles.lineWrapper}>
                <div className={styles.line}></div>
            </div>

            <div className = {styles.kick_off}>
               <div className = {styles.col}>
                    <p className = {styles.time}>9:00 AM-9:20 AM</p>
                    <p className = {styles.duration}>20 mins</p>
                </div>
                <div className = {styles.col2}>
                    <h3>Event Kick-off by Oz Pearlman</h3>
                </div>
                <div className = {styles.col3}>
                    <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b48b0fbd743c77a339d/aa42ae1f-a114-443f-8113-a74fc382b6d7" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Oz Pearlman</a></p>
                    </div>
                </div>
            </div>

            <div className = {styles.kick_off}>
               <div className = {styles.col}>
                    <p className = {styles.time}>9:20 AM-9:30 AM</p>
                    <p className = {styles.duration}>10 mins</p>
                </div>
                <div className = {styles.col2}>
                    <h3>Welcome Note</h3>
                </div>
                <div className = {styles.col3}>
                    <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b49b0fbd743c77a33aa/940c9431-a300-4fc3-a27f-7779d95c02d8" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Girish Mathrubootham</a></p>
                        <p className = {styles.po}>Co-founder and CEO</p>
                        <p className = {styles.comp}>Freshworks</p>
                    </div>
                </div>
            </div>

            <div className = {styles.road_ahead}>
               <div className = {styles.col}>
                    <p className = {styles.time}>9:30 AM-10:00 AM</p>
                    <p className = {styles.duration}>30 mins</p>
                    <p className = {styles.about}>Run Simultaneously</p>
                </div>
                <div className = {styles.col2}>
                    <h3>The Road Ahead</h3>
                    <h4>(Product roadmap sessions)</h4>
                </div>
                <div className = {styles.col3}>
                </div>
            </div>

            <div className = {styles.track}>
               <div className = {styles.col}>
                    <p className = {styles.time}>Track 1</p>
                </div>
                <div className = {styles.col2}>
                    <h3>Building exceptional CX for businesses</h3>
                </div>
                <div className = {styles.col3}>
                <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b49b0fbd743c77a33c2/8194d498-a21b-40b0-946a-db3f2838eb6e" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Subharun Mukherjee</a></p>
                        <p className = {styles.po}>Director, Product Marketing,</p>
                        <p className = {styles.comp}>Freshworks</p>
                    </div>
                </div>
            </div>

            <div className = {styles.track}>
               <div className = {styles.col}>
                    <p className = {styles.time}>Track 2</p>
                </div>
                <div className = {styles.col2}>
                    <h3>Crafting the right-sized ITSM strategy for your organization</h3>
                </div>
                <div className = {styles.col3}>
                    <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b4ab0fbd743c77a33cf/09827d72-19f9-4bfa-83ce-2e2139b3fc2d" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Chad Haftorson</a></p>
                        <p className = {styles.po}>Sr Director, Product,</p>
                        <p className = {styles.comp}>Management, Freshworks</p>
                    </div>
                </div>
            </div>

            <div className = {styles.track}>
               <div className = {styles.col}>
                    <p className = {styles.time}>Track 3</p>
                </div>
                <div className = {styles.col2}>
                    <h3>Grow customer relationships with a digital-first 360° CRM</h3>
                </div>
                <div className = {styles.col3}>
                    <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b4ab0fbd743c77a33dc/18ce778a-4ac8-4443-858e-b72f26d57fba" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">David Krauss</a></p>
                        <p className = {styles.po}>Sr Director, Product</p>
                        <p className = {styles.comp}>Marketing, Freshworks CRM</p>
                    </div>
                </div>
            </div>

            <div className = {styles.track}>
               <div className = {styles.col}>
                    <p className = {styles.time}>Track 4</p>
                </div>
                <div className = {styles.col2}>
                    <h3>Unify experiences across the board using Freshworks Neo platform</h3>
                </div>
                <div className = {styles.col3}>
                    <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b4db0fbd743c77a33e9/6e03079a-6e87-44a7-932b-4629d5d3c182" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Preethy Padmanabhan</a></p>
                        <p className = {styles.po}>Sr Director, Product Marketing,</p>
                        <p className = {styles.comp}>Freshworks Neo Platform</p>
                    </div>
                </div>
            </div>

            <div className = {styles.road_ahead}>
               <div className = {styles.col}>
                    <p className = {styles.time}>10:00 AM-10:30 AM</p>
                    <p className = {styles.duration}>30 mins</p>
                    <p className = {styles.about}>Run Simultaneously</p>
                </div>
                <div className = {styles.col2}>
                    <h3>Experience Freshworks</h3>
                    <h4>(Product demo session)</h4>
                </div>
                <div className = {styles.col3}>
                    <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b4fb0fbd743c77a33f7/35964c52-e67a-4e26-9294-8cdc980c7a2a" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Mukesh Mirchandani</a></p>
                        <p className = {styles.po}>VP of Global Field Solution,</p>
                        <p className = {styles.comp}>Engineering, Freshworks</p>
                    </div>
                </div>
            </div>

            <div className = {styles.track}>
               <div className = {styles.col}>
                    <p className = {styles.time}>Track 1</p>
                </div>
                <div className = {styles.col2}>
                    <h3>Customer experience on the Freshworks platform</h3>
                </div>
                <div className = {styles.col3}>
                <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b4fb0fbd743c77a3405/53a12899-8f5a-4fd4-8c01-13fc8255355b" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Leslie Chan</a></p>
                        <p className = {styles.po}>Sr Solutions Engineer</p>
                        <p className = {styles.comp}>Freshworks</p>
                    </div>
                </div>
            </div>

            <div className = {styles.track}>
               <div className = {styles.col}>
                    <p className = {styles.time}>Track 2</p>
                </div>
                <div className = {styles.col2}>
                    <h3>Modern employee experience for the digital workplace</h3>
                </div>
                <div className = {styles.col3}>
                    <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b50b0fbd743c77a3413/1769ab40-755e-4216-8fe7-e135d41a6a1b" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Palak Setia</a></p>
                        <p className = {styles.po}>Enterprise Solutions Engineer</p>
                        <p className = {styles.comp}>Freshworks</p>
                    </div>
                </div>
            </div>

            <div className = {styles.road_ahead}>
               <div className = {styles.col}>
                    <p className = {styles.time}>10:30 AM-11:15 AM</p>
                    <p className = {styles.duration}>45 mins</p>
                </div>
                <div className = {styles.col2}>
                    <h3>Chronicles of Delight</h3>
                    <h4>(Success stories from Freshworks’ champions)</h4>
                </div>
                <div className = {styles.col3}>
                    <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b50b0fbd743c77a3420/082a932b-65d6-4e5d-8d13-952a7255bcb9" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Pradeep Rathinam</a></p>
                        <p className = {styles.po}>Chief Customer Officer,</p>
                        <p className = {styles.comp}>Freshworks</p>
                    </div>
                </div>
            </div>

            <div className = {styles.road_ahead}>
               <div className = {styles.col}>
                    <p className = {styles.time}>10:30 AM-10:45 AM</p>
                    <p className = {styles.duration}>15 mins</p>
                </div>
                <div className = {styles.col2}>
                    <h4>Fireside Chat: Edifecs delivers the care in healthcare through personalized experience</h4>
                </div>
                <div className = {styles.col3}>
                    <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b50b0fbd743c77a342e/e3e7f31b-ef95-4dc6-8354-8f9c624f8470" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Ash Mathur</a></p>
                        <p className = {styles.po}>Global Head of Customer</p>
                        <p className = {styles.comp}>Operations, Edifecs, Inc.</p>
                    </div>
                </div>
            </div>

            <div className = {styles.road_ahead}>
               <div className = {styles.col}>
                    <p className = {styles.time}>10:45 AM-11:00 AM</p>
                    <p className = {styles.duration}>15 mins</p>
                </div>
                <div className = {styles.col2}>
                    <h4>How Eastern Washington University became a future-ready, always-on digital campus with Freshworks</h4>
                </div>
                <div className = {styles.col3}>
                    <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b51b0fbd743c77a343b/11b01937-1ade-4ce1-b4f8-ab9503118586" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Brad Christ</a></p>
                        <p className = {styles.po}>Associate VP for IT & CIO</p>
                        <p className = {styles.comp}>Eastern Washington University</p>
                    </div>
                </div>
            </div>
            <div className = {styles.road_ahead}>
               <div className = {styles.col}>
                    <p className = {styles.time}>11:00 AM-11:15 AM</p>
                    <p className = {styles.duration}>15 mins</p>
                </div>
                <div className = {styles.col2}>
                    <h4>How Saviynt turned Freshdesk into a home for its enterprise customers</h4>
                </div>
                <div className = {styles.col3}>
                    <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b4fb0fbd743c77a33f7/35964c52-e67a-4e26-9294-8cdc980c7a2a" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Pradeep Rathinam</a></p>
                        <p className = {styles.po}>Chief Customer Officer,</p>
                        <p className = {styles.comp}>Freshworks</p>
                    </div>
                </div>
            </div>

            <div className = {styles.kick_off}>
               <div className = {styles.col}>
                    <p className = {styles.time}>11:15 AM-11:20 AM</p>
                    <p className = {styles.duration}>5 mins</p>
                </div>
                <div className = {styles.col2}>
                    <h3>Closing Note</h3>
                </div>
                <div className = {styles.col3}>
                <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b52b0fbd743c77a3455/db1479dc-7a86-4640-8fa5-26d9a700b3db" alt = "img" />
                    <div className = {styles.content}>
                        <p className = {styles.name}><a href = "##">Stacey Epstein</a></p>
                        <p className = {styles.po}>Chief Marketing Officer,</p>
                        <p className = {styles.comp}>Freshworks</p>
                    </div>
                </div>
            </div>
            <div className = {styles.bgone}>
                <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b55b0fbd743c77a3459/1cf21404-ad42-4610-8dc3-0598f253cb1f" alt = "img"/>
            </div> 


            <div className = {styles.group}>
                <img src="https://d2uav5q06z9nv6.cloudfront.net/5ade942b88249a37d4d45696/images/611e6b59b0fbd743c77a345e/46f01116-d334-427a-8b56-5c77ee053954" alt = "img"/>
            </div>
            <div className = {styles.lastinfo}>
               <div className = {styles.col}>
                </div>
                <div className = {styles.col2}>
                    <h3>Networking | Meet your peers - 30 mins</h3>
                </div>
                <div className = {styles.col3}>
                     <button>Join the community</button>
                </div>
            </div>

            <div className = {styles.greenarea}>
                <h3>Always-on support & demo booths</h3>
                <p>Booths for you to reach out to us anytime for a quick demo or support</p>
            </div>
            <div className = {styles.lastinfo}>
               <div className = {styles.col}>
                </div>
                <div className = {styles.col2}>
                    
                </div>
                <div className = {styles.col3}>
                     
                </div>
            </div>
        </div>
    </>    
    )
}
