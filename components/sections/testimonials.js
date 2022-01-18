import TestimonialItem from "./testimonialItem";

export default function Testimonials() {
  const objTestimonials = [
    {
      id: 1,
      name: "Ximena Olarte",
      image: "ximena.png",
      message:
        "La Revueltería es el mejor ayudante de cocina. Tengo todo limpio, cortado y dispuesto en táperes que me ayudan a ordenar mi nevera.",
    },
    {
      id: 2,
      name: "Martha Castro",
      image: "ximena.png",
      message:
        "El compromiso con el medio ambiente a través del sistema de táperes que se devuelven a los 8 días de la compra, me parece genial e innovador.",
    },
  ];

  return (
    <section className='max-w-full mx-auto px-4 py-10 flex flex-col justify-center space-y-3 items-center '>
      <h1 className='font-display text-5xl font-semibold text-center pb-4'>
        Testimonios
      </h1>
      <div className='w-4/5 md:w-3/4 sm:min-w-full'>
        <div className='flex flex-row space-x-8 md:flex-col md:space-x-0 md:space-y-8'>
          {objTestimonials.map((testimonial) => (
            <TestimonialItem
              key={testimonial.id}
              id={testimonial.id}
              name={testimonial.name}
              image={testimonial.image}
            >
              {testimonial.message}
            </TestimonialItem>
          ))}
        </div>
      </div>
    </section>
  );
}
