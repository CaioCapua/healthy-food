import styles from './signup.module.scss';
import { SignupForm } from '../components/Form';

export default function Signup() {

  return (
    <div className={styles.container}>
      <aside>
        <img src="images/bloco_services.svg" alt="Ilustração simbolizando um app de comidas saudaveis" />
      </aside>
      <main>
        <strong>Come be healthy</strong>
        <p>Can you be happy & healthy</p>
        <div>
          <SignupForm />
        </div>
      </main>
    </div>
  )
}