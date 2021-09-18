import React from 'react'
import styles from './style.module.css'
import logo from '../../Images/logofr.svg'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function Navbar() {

    const navLinks = 
  [
      {
          to: "##",
          label: "Products",
      },
      {
          to: "##",
          label: "Platform",
      },
      {
          to: "##",
          label: "Company",
      },
      {
          to: "##",
          label: "Resources",
      },
      {
        to: "##",
        label: "Customers",
    },
    {
        to: "##",
        label: "Support",
    },
  ]
    return (
    <>
    <nav>
        <div className = {styles.container}>
            <div className = {styles.logo}>
                <img src = {logo} alt = "logo" />
            </div>
            <div className = {styles.list}>
                <ul className = {styles.navul}>
                    {navLinks.map((x, index) => 
                    <li key = {index}>
                        {x.label}
                    </li>
                    )}
                </ul>
            </div>
            <div className = {styles.menu}>
                <GiHamburgerMenu />
            </div>
        </div>
    </nav>    
    </>    
    )
}
