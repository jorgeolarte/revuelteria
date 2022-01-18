import FaqItem from "./faqItem";

export default function Faqs() {
  const faqObject = [
    {
      id: 1,
      question: "¿Puedo recibir el recetario sin comprar un mercado?",
      answer:
        "Por supuesto, el recetario es totalmente gratuito; sin embargo cuando pides tu mercado te entregamos un recetario con los mismos productos que pediste.",
    },
    {
      id: 2,
      question: "¿Los recipientes son mios?",
      answer: "No, los cambiamos cada vez que entregamos un nuevo pedido.",
    },
    {
      id: 3,
      question: "¿Qué día entregan los mercados?",
      answer: "Todos los lunes entregamos los mercados.",
    },
    {
      id: 4,
      question: "¿Cuanto vale el mercado e incluye el domicilio?",
      answer:
        "Siempre pagas $39.900 y no te preocupes, el domicilio es gratis, el valor está incluido en el precio del mercado.",
    },
    {
      id: 5,
      question: "No tengo efectivo para pagar",
      answer:
        "Puedes pagar realizando una transferencia bancaria o con código QR.",
    },
  ];

  return (
    <section className='max-w-full mx-auto px-4 py-10 flex flex-col justify-center space-y-5 items-center'>
      <h1 className='font-display text-5xl font-semibold text-center pb-4'>
        Preguntas frecuentes
      </h1>
      <div className='flex flex-col w-3/5 md:w-11/12 sm:min-w-full space-y-3'>
        {faqObject.map((faq) => (
          <FaqItem key={faq.id} id={faq.id} question={faq.question}>
            {faq.answer}
          </FaqItem>
        ))}
      </div>
    </section>
  );
}
