import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const FAQs = () => {
  const [openQuestion, setOpenQuestion] = useState(null);

  const faqs = [
    {
      question: "¿Cuáles son los requerimientos o prerequisitos?",
      answer: "No hay requerimientos previos para este curso.",
    },
    {
      question: "¿Cuál es la duración del curso?",
      answer: "El curso tiene una duración de 6 meses.",
    },
    {
      question: "¿Qué puedo esperar el primer día de clases?",
      answer: "El primer día de clases se realizará una introducción al curso.",
    },
    {
      question: "¿Qué puedo esperar al finalizar el curso?",
      answer: "Al finalizar el curso, se realizará una evaluación final.",
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
    <div className="mt-10 flex flex-col gap-5 max-w-3xl">
      <h3 className="text-3xl lg:text-4xl">Preguntas Frecuentes</h3>
      <div className="flex flex-col gap-5 md:ml-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-main-black/30 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-lg w-full text-left flex justify-between text-main-black/90 hover:text-main-blue"
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
                openQuestions[index] ? "max-h-20" : "max-h-0"
              }`}
            >
              <p className="text-main-black/60 text-lg">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
