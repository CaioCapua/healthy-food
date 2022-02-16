import Link from 'next/link';
import { useState } from 'react';
import styles from './styles.module.scss'
import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

export function Header() {
    const [openBtnBurger, setOpenBtnBurger] = useState(false);

    function handdleBtnBurgerOpen() {
      if (openBtnBurger) {
        setOpenBtnBurger(false);
      } else {
        setOpenBtnBurger(true);
      }
    }

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
            <a>
                <h1>Healthy Food</h1>
            </a>
            <button 
                onClick={handdleBtnBurgerOpen}>
                {
                    (openBtnBurger ? <AiOutlineClose /> : <BiMenuAltRight />)
                }
                
            </button>
                <nav className={openBtnBurger ? styles.navbar : ''}>
                    <Link href="/">
                        <a>HEALTHY RECIPES</a>
                    </Link>
                    <Link href="/">
                        <a>BLOG</a>
                    </Link>
                    <Link href="/">
                        <a>JOIN</a>
                    </Link>
                    <Link href="/signup" >
                        <a><span>REGISTER</span></a>
                    </Link>
                </nav>
            </div>
        </header>
    )
}