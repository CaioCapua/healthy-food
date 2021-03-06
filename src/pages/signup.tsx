import styles from './signup.module.scss';
import { SignupForm } from '../components/Form';
import Head from 'next/head';

export default function Signup() {

  return (
    <>
      <Head>
          <title>Signup | Healthy Food</title>
      </Head>

      <div className={styles.container}>
        <aside>
          <img src="images/bloco_services.svg" alt="Ilustração simbolizando um app de comidas saudaveis" />
        </aside>
        <main>
          <strong>Come be happy with the <span>Healthy Food</span></strong>
          <div>
            <SignupForm />
          </div>
        </main>
      </div>
    </>
  )
}