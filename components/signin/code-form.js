import { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { UIContext } from "@/lib/UI";
import firebase from "firebase";
import Icons from "@/components/icons";
import { push } from "@/reducers/notification";

export default function CodeForm({ verificationId, backStep }) {
  const { dispatch } = useContext(UIContext);
  const { notificationDispatch } = dispatch;

  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.number()
        .min(100000, "* El código es de 6 digitos")
        .max(999999, "* El código es de 6 digitos")
        .required("* Código obligatorio"),
    }),
    onSubmit: async (values) => {
      submitCode({ code: values.code });
    },
  });

  const submitCode = ({ code }) => {
    let phoneCredential = firebase.auth.PhoneAuthProvider.credential(
      verificationId,
      code.toString()
    );

    firebase
      .auth()
      .signInWithCredential(phoneCredential)
      .catch((error) =>
        notificationDispatch(
          push({
            hasNotification: true,
            message: error.message,
            type: "error",
          })
        )
      );
  };

  return (
    <div className='space-y-3'>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col justify-center items-center space-y-2'>
          <div className='pb-1'>
            <h2 className='text-xl font-semibold'>Código de verificación</h2>
            <p className='text-sm'>
              Por favor ingresa el código de verificación enviado vía SMS
            </p>
          </div>
          <div className='w-full'>
            <input
              id='code'
              name='code'
              type='number'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.code}
              placeholder='Código'
              className='input-text'
            />
            {formik.errors.code && formik.touched.code && (
              <p className='text-xs font-medium tracking-wider italic pt-1'>
                {formik.errors.code}
              </p>
            )}
          </div>
          <button
            type='submit'
            className='absolute bottom-0 w-full bg-success py-2 transition-colors duration-300 hover:bg-secondary text-lg font-medium tracking-wider'
          >
            Enviar
          </button>
        </div>
      </form>
      <div className='absolute top-0 left-2'>
        <a href='#' onClick={() => backStep()}>
          <Icons name='ChevronLeftIcon' className='w-6 h-6' />
        </a>
      </div>
    </div>
  );
}
