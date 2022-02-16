/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styles from './styles.module.scss';

interface IProductCard{
  title: string;
  imgURL: string;
  link: string;
}

export function ProductCard(props: IProductCard) {
  const [openBurgerIcon, setOpenBtnBurger] = useState(false);

  function handdleBtnBurgerOpen() {
    if (openBurgerIcon) {
      setOpenBtnBurger(false);
    } else {
      setOpenBtnBurger(true);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.imgContent}>
        <img 
          className={styles.image}
          src={props.imgURL} 
          alt={props.title} 
        />
      </div>
      <div className={styles.content}>
        <h3>{props.title}</h3>
        <button onClick={()=> props.link}>See Recipe</button>
      </div>
    </div>
  )
}