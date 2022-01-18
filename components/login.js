import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import styles from "./login.module.css";
import { loginWithGoogle } from "@/lib/firebaseClient";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Correo electrónico invalido")
        .required("Correo electrónico es obligatorio"),
      phone: Yup.number()
        .typeError("Debes ingresar un número telefónico")
        .min(3000000000, "Ingresa un númer telefónico valido")
        .max(3999999999, "Ingresa un númer telefónico valido")
        .required("Número telefónico es obligatorio"),
    }),
    onSubmit: async (values) => {
      console.log("values: ", values);
    },
  });

  return (
    <>
      <div className={styles.header}>
        <h1>
          Hola{" "}
          <span role='img' aria-label='Waving'>
            👋
          </span>
        </h1>
        <p>Nos encanta verte de nuevo</p>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder='Correo electrónico'
            className={styles.input}
          />
          {formik.errors.email ? (
            <div className={styles.error}>{formik.errors.email}</div>
          ) : null}

          <input
            id='phone'
            name='phone'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.phone}
            placeholder='Número telefónico'
            className={styles.input}
          />
          {formik.errors.phone ? (
            <div className={styles.error}>{formik.errors.phone}</div>
          ) : null}

          <button type='submit' className={styles.button}>
            Iniciar sesión
          </button>
          <div className={styles.or}>
            <span>o</span>
          </div>
          <div className={styles.loginAccount}>
            <a
              type='button'
              className={styles.google}
              onClick={loginWithGoogle}
            >
              Inicia sesión con Google
            </a>
          </div>
        </form>
        <div className={styles.newUser}>
          ¿Aún no estas registrado?{" "}
          <Link href='/register'>Crea tu usuario</Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
