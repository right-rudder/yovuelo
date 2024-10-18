import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import parse from "html-react-parser"; // Import the html-react-parser

const GeneralFAQs = () => {
  const faqs = [
    {
      question: "¿Qué cursos complementarios ofrecen?",
      answer:
        "<ul><li>-Recuperación y revalidación de licencia</li><li>-Convalidación de licencia</li><li>-Curso periódico de oficial de operaciones</li><li>-Inicial y periódico de mantenimiento de mecánicos</li><li>-Técnicas didácticas</li><li>-Formación de instructores</li><li>-Mercancías peligrosas por vía aérea</li><li>-Capacidad de multimotor e instrumentos</li></ul>",
    },
    {
      question:
        "¿Cuál es el proceso de admisión para estudiantes internacionales?",
      answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "¿Ofrecen programas de becas o ayudas financieras?",
      answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question:
        "¿Es necesario tener experiencia previa en aviación para inscribirse en los programas de iFly?",
      answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question:
        "¿Qué oportunidades de empleo están disponibles después de graduarse en iFly?",
      answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const [openQuestions, setOpenQuestions] = useState(
    new Array(faqs.length).fill(false),
  );

  const toggleFAQ = (index) => {
    const updatedOpenQuestions = [...openQuestions];
    updatedOpenQuestions[index] = !updatedOpenQuestions[index];
    setOpenQuestions(updatedOpenQuestions);
  };

  return (
    <div className="flex flex-col gap-5 max-w-3xl mt-10 lg:mt-0 mx-5">
      <h2 className="uppercase text-main-black/80 tracking-widest text-center">
        FAQ's
      </h2>
      <h3 className="text-4xl lg:text-6xl mx-auto text-center mb-5">
        Preguntas Frecuentes
      </h3>
      <div className="flex flex-col gap-5 w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-main-black/30 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-2xl w-full text-left flex justify-between py-3 text-main-black/90 hover:text-main-blue"
            >
              {faq.question}
              <IoIosArrowForward
                className={`${
                  openQuestions[index] ? "-rotate-90" : "rotate-90"
                } size-5 duration-200`}
              />
            </button>
            <div
              className={`duration-500 overflow-hidden ${
                openQuestions[index] ? "max-h-48" : "max-h-0"
              }`}
            >
              <div className="text-main-black/60 text-xl pl-5">
                {parse(faq.answer)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GeneralFAQs;
