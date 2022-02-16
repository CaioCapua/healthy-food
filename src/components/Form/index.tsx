import { Field, Form, Formik, FormikHelpers } from 'formik';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Link from 'next/link';
import { cepApi } from '../../services/apiCep';

import styles from './styles.module.scss';

interface Values {
  name: string;
  email: string;
  birthdate: string;
  cpf: string;
  cep: string;
  street: string;
  number: string;
  complement: string;
  district: string;
  city: string;
  state: string;
}

interface Errors {
  name?: string;
  email?: string;
  birthdate?: string;
  cpf?: string;
  cep?: string;
  street?: string;
  number?: string;
  complement?: string;
  district?: string;
  city?: string;
  state?: string;
}

export function SignupForm() {

  async function handleFillAddress(event: any, setFieldValue: any) {
    const cep = event.target.value.replace(/[^0-9]/g, '');

    if (cep.length === 8) {
      await cepApi.get(cep + '/json')
        .then(function (res) {
          console.log(res.data);
          setFieldValue('street', res.data.logradouro);
          setFieldValue('district', res.data.bairro);
          setFieldValue('complement', res.data.complemento);
          setFieldValue('city', res.data.localidade);
          setFieldValue('state', res.data.uf);
        });
    }
    else {
      alert('Incorrect CEP');
    }
  }

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        birthdate: '',
        cpf: '',
        cep: '',
        street: '',
        number: '',
        complement: '',
        district: '',
        city: '',
        state: '',
      }}
      onSubmit={(
        values: Values,
        { setSubmitting }: FormikHelpers<Values>
      ) => {
        setTimeout(() => {
          localStorage.setItem('@account:keys', JSON.stringify(values))

          const MySwal = withReactContent(Swal)

          MySwal.fire({
            title: <p>Parabéns!!!</p>,
            icon: 'success',
            text: `Seja Bem Vindo(a) ${
              values.name
            } ao Healthy Food!`,
            footer: 'Copyright 2018',
          })
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ setFieldValue, errors }) => (
        <Form className={styles.container}>
          <div>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nome</label>
              <Field
                id="name"
                name="name"
                placeholder="Seu nome" />
              <span className={styles.error}>{errors.name}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <Field
                id="email"
                name="email"
                placeholder="Seu melhor e-mail!"
                type="email"
              />
              <span className={styles.error}>{errors.email}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="birthdate">Data de Nascimento</label>
              <Field
                id="birthdate"
                name="birthdate"
                type="date"
              />
              <span className={styles.error}>{errors.birthdate}</span>
            </div>
          </div>

          <div>
            <div className={styles.formGroup}>
              <label htmlFor="cpf">CPF</label>
              <Field
                id="cpf"
                name="cpf"
                type="text"
                placeholder="13345255582"
                maxlength="11"
              />
              <span className={styles.error}>{errors.birthdate}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="cep">CEP</label>
              <Field
                id="cep"
                name="cep"
                placeholder="00000000"
                type="text"
                accept="number"
                maxlength="8"
                onBlur={(event: any) => handleFillAddress(event, setFieldValue)}
              />
              <span className={styles.error}>{errors.cep}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="street">Rua/Av.</label>
              <Field
                id="street"
                name="street"
                placeholder="Avenida..."
                type="text"
              />
              <span className={styles.error}>{errors.street}</span>
            </div>

          </div>

          <div>
            <div className={styles.formGroup}>
              <label htmlFor="number">Número</label>
              <Field
                id="number"
                name="number"
                placeholder="0"
                type="text"
              />
              <span className={styles.error}>{errors.number}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="complement">Complemento</label>
              <Field
                id="complement"
                name="complement"
                placeholder="casa"
                type="text"
              />
              <span className={styles.error}>{errors.complement}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="district">Bairro</label>
              <Field
                id="district"
                name="district"
                placeholder="Bairro"
                type="text"
              />
              <span className={styles.error}>{errors.district}</span>
            </div>
          </div>

          <div>
            <div className={styles.formGroup}>
              <label htmlFor="state">Estado</label>
              <Field
                id="state"
                name="state"
                placeholder="MG"
                type="text"
              />
              <span className={styles.error}>{errors.state}</span>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="city">Cidade</label>
              <Field
                id="city"
                name="city"
                placeholder="Sua cidade"
                type="text"
              />
              <span className={styles.error}>{errors.city}</span>
            </div>
          </div>
          <button type="submit">Cadastrar</button>
          <div className={styles.links}>
            <Link href="/">
              <a>Você possui uma conta? ...Clique Aqui!</a>
            </Link>
            <Link href="/">
              <a>Voltar a página principal...</a>
            </Link>
          </div>
        </Form>
      )
      }

    </Formik >
  );

}



