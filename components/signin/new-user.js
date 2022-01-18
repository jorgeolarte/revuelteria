import { useContext } from "react";
import { AuthContext } from "@/lib/auth";
import { UIContext } from "@/lib/UI";
import { useFormik } from "formik";
import * as Yup from "yup";
import { createUser } from "@/lib/firebaseClient";
import { createContact } from "@/lib/sendinblue";
import { close } from "@/reducers/modal";
import { push } from "@/reducers/notification";

export default function NewUser() {
  const { user, setUser } = useContext(AuthContext);

  const { dispatch } = useContext(UIContext);
  const { modalDispatch, notificationDispatch } = dispatch;

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(3, "* Ingresa tu nombre")
        .required("* Nombre es obligatorio"),
      lastName: Yup.string()
        .min(3, "* Ingresa tu apellido")
        .required("* Apellido es obligatorio"),
      email: Yup.string()
        .email("* Correo electrónico invalido")
        .required("* Correo electrónico es obligatorio"),
    }),
    onSubmit: async (values) => {
      const tempUser = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phoneNumber: user.phoneNumber,
      };

      createUser(tempUser)
        .then(() => createContact(tempUser))
        .then(() => {
          setUser({ ...user, exist: true });
        })
        .then(() =>
          notificationDispatch(
            push({
              hasNotification: true,
              message: "Siempre eres bienvenido",
              type: "success",
            })
          )
        )
        .then(() => modalDispatch(close()))
        .catch((error) => {
          console.log("este es el error: ", error);
          notificationDispatch(
            push({
              hasNotification: true,
              message: error.message,
              type: "error",
            })
          );
        });
    },
  });

  return (
    <div className='space-y-3'>
      <form
        onSubmit={formik.handleSubmit}
        className='flex flex-col justify-center items-center space-y-2'
      >
        <div className='pb-1'>
          <h2 className='text-xl font-semibold'>Finalizar registro</h2>
          <p className='text-sm'>
            Para obtener tu plan de alimentación es necesario que nos facilites
            los siguientes datos
          </p>
        </div>
        <div className='w-full'>
          <input
            id='firstName'
            name='firstName'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.firstName}
            placeholder='Tu nombre'
            className='input-text'
          />
          {formik.errors.firstName ? (
            <p className='text-xs font-medium tracking-wider italic pt-1'>
              {formik.errors.firstName}
            </p>
          ) : null}
        </div>

        <div className='w-full'>
          <input
            id='lastName'
            name='lastName'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.lastName}
            placeholder='Tu apellido'
            className='input-text'
          />
          {formik.errors.lastName ? (
            <p className='text-xs font-medium tracking-wider italic pt-1'>
              {formik.errors.lastName}
            </p>
          ) : null}
        </div>

        <div className='w-full'>
          <input
            id='email'
            name='email'
            type='email'
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder='Correo electrónico'
            className='input-text'
          />
          {formik.errors.email ? (
            <p className='text-xs font-medium tracking-wider italic pt-1'>
              {formik.errors.email}
            </p>
          ) : null}
        </div>

        <button
          type='submit'
          className='absolute bottom-0 w-full bg-success py-2 transition-colors duration-300 hover:bg-secondary text-lg font-medium tracking-wider'
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
