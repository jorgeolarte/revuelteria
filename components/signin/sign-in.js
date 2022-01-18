import { useState, useEffect, useContext } from "react";
import { AuthContext } from "@/lib/auth";
import { PhoneForm, CodeForm, DataForm } from "@/components/signin";

export default function SignIn() {
  const { user } = useContext(AuthContext);

  const [step, setStep] = useState(1);
  const [verificationId, setVerificationId] = useState(null);

  useEffect(() => {
    verifyIfVerificationChanged();
  }, [verificationId]);

  const verifyIfVerificationChanged = () => {
    verificationId === null ? setStep(1) : setStep(2);
  };

  useEffect(() => {
    user.loggedIn && setStep(3);
  }, [user]);

  const backStep = () => {
    setStep(1);
    setVerificationId(null);
  };

  return (
    <div className='flex flex-col justify-center items-center text-center pb-10'>
      {step === 1 ? (
        <PhoneForm setVerificationId={setVerificationId} />
      ) : step === 2 ? (
        <CodeForm verificationId={verificationId} backStep={backStep} />
      ) : step === 3 ? (
        <DataForm />
      ) : (
        <></>
      )}
    </div>
  );
}
