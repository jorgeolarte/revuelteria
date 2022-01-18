import { useEffect, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import firebase from "firebase";
import { UIContext } from "@/lib/UI";
import { push } from "@/reducers/notification";

export default function PhoneForm({ setVerificationId }) {
  const { dispatch } = useContext(UIContext);
  const { notificationDispatch } = dispatch;

  const formik = useFormik({
    initialValues: {
      phone: "",
    },
    validationSchema: Yup.object({
      phone: Yup.number()
        .min(3000000000, "* Número de teléfono invalido")
        .max(3999999999, "* Número de teléfono invalido")
        .required("* Número de teléfono obligatorio"),
    }),
    onSubmit: async (values) => {
      let phoneNumber = `+57${values.phone}`;
      onSignInSubmit({ phoneNumber });
    },
  });

  useEffect(() => {
    window.applicationVerifier = new firebase.auth.RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
      }
    );
  }, []);

  const onSignInSubmit = ({ phoneNumber }) => {
    // let recaptchaVerifier = window.recaptchaVerifier;
    const phoneProvider = new firebase.auth.PhoneAuthProvider();
    phoneProvider
      .verifyPhoneNumber(phoneNumber, window.applicationVerifier)
      .then((verificationId) => {
        setVerificationId(verificationId);
      })
      .catch((error) => {
        notificationDispatch(
          push({
            hasNotification: true,
            message: error.message,
            type: "error",
          })
        );
      });
  };

  const handleChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className='space-y-3'>
      <form onSubmit={formik.handleSubmit}>
        <div className='flex flex-col justify-center items-center space-y-2'>
          <h2 className='text-xl font-semibold pb-1'>
            Bienvenido{" "}
            <span role='img' aria-label='ILY' className='font-sans'>
              🤟
            </span>
          </h2>
          <div className='w-full'>
            <input
              id='phone'
              name='phone'
              type='number'
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              placeholder='Número telefono'
              className='input-text'
            />
            {formik.errors.phone && formik.touched.phone && (
              <p className='text-xs font-medium tracking-wider italic pt-1'>
                {formik.errors.phone}
              </p>
            )}
          </div>
          <button
            type='submit'
            className='absolute bottom-0 w-full bg-success py-2 transition-colors duration-300 hover:bg-secondary text-lg font-medium tracking-wider'
          >
            Iniciar sesión
          </button>
          <div id='recaptcha-container'></div>
        </div>
      </form>
      <p className='leading-tight text-xs'>
        Este servicio es solo para uso autorizado. El uso puede ser monitoreado,
        registrado y auditado. El acceso y uso constituye el consentimiento a
        los Términos y Condiciones, Política de privacidad.
      </p>
    </div>
  );
}
