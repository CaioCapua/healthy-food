import Link from 'next/link';
import styles from './styles.module.scss';
export function Footer (){
  return(
    <footer className={styles.footerContainer}>
      <p>
      © Copyrights 2019 Stack. All Rights Reserved.
      </p>
      <div>
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
          
          <Link href="/">
            <a>Privacy Policy</a>
          </Link>
      </div>
    </footer>
  )
}