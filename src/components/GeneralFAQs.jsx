import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import parse from "html-react-parser";

const GeneralFAQs = ({ lang }) => {
  const esFaqs = [
    {
      question: "¿Qué cursos complementarios ofrecen?",
      answer:
        "<ul className='list-disc ml-5'><li>Recuperación y revalidación de licencia</li><li>Convalidación de licencia</li><li>Curso periódico de oficial de operaciones</li><li>Inicial y periódico de mantenimiento de mecánicos</li><li>Técnicas didácticas</li><li>Formación de instructores</li><li>Mercancías peligrosas por vía aérea</li><li>Capacidad de multimotor e instrumentos</li></ul>",
    },
    {
      question:
        "¿Cuál es el proceso de admisión para estudiantes internacionales?",
      answer:
        "El proceso de admisión para estudiantes internacionales incluye completar una solicitud en línea, enviar una copia de su pasaporte, certificados académicos, y una prueba de suficiencia en inglés. También se realiza una entrevista virtual para evaluar el interés y la preparación del candidato.",
    },
    {
      question: "¿Ofrecen programas de becas o ayudas financieras?",
      answer:
        "Sí, iFly ofrece varios programas de becas y ayudas financieras basados en mérito académico y necesidad económica. Los estudiantes interesados pueden consultar con nuestro departamento de admisiones para más información sobre los requisitos y el proceso de solicitud.",
    },
    {
      question:
        "¿Es necesario tener experiencia previa en aviación para inscribirse en las carreras que ofrece iFly?",
      answer:
        "No es necesario tener experiencia previa en aviación para inscribirse en la mayoría de nuestras carreras. Los programas están diseñados para enseñar desde los conceptos básicos hasta el nivel avanzado, permitiendo que los estudiantes sin experiencia también puedan progresar en el campo.",
    },
    {
      question:
        "¿Qué oportunidades de empleo están disponibles después de graduarse en iFly?",
      answer:
        "Nuestros graduados tienen oportunidades de empleo en aerolíneas, empresas de mantenimiento aeronáutico, agencias gubernamentales, y más. Además, iFly tiene convenios con varias empresas de la industria para ayudar a los estudiantes a ingresar al mercado laboral rápidamente.",
    },
  ];

  const enFaqs = [
    {
      question: "What complementary courses do you offer?",
      answer:
        "<ul className='list-disc ml-5'><li>License recovery and revalidation</li><li>License validation</li><li>Periodic operations officer course</li><li>Initial and periodic mechanic maintenance training</li><li>Didactic techniques</li><li>Instructor training</li><li>Air dangerous goods handling</li><li>Multiengine and instrument capacity training</li></ul>",
    },
    {
      question: "What is the admission process for international students?",
      answer:
        "The admission process for international students includes completing an online application, submitting a copy of your passport, academic certificates, and proof of English proficiency. A virtual interview is also conducted to assess the candidate’s interest and preparation.",
    },
    {
      question: "Do you offer scholarship programs or financial aid?",
      answer:
        "Yes, iFly offers several scholarship and financial aid programs based on academic merit and financial need. Interested students can consult with our admissions department for more information on the requirements and application process.",
    },
    {
      question:
        "Is previous aviation experience required to enroll in the programs offered by iFly?",
      answer:
        "No prior aviation experience is required to enroll in most of our programs. Our programs are designed to teach from the basics to an advanced level, allowing students without prior experience to also progress in the field.",
    },
    {
      question:
        "What employment opportunities are available after graduating from iFly?",
      answer:
        "Our graduates have employment opportunities with airlines, aviation maintenance companies, government agencies, and more. iFly also has agreements with various industry companies to help students quickly enter the job market.",
    },
  ];

  const faqs = lang === "en" ? enFaqs : esFaqs;

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
        {lang === "en" ? "Frequently Asked Questions" : "Preguntas Frecuentes"}
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
                } size-5 duration-200 shrink-0`}
              />
            </button>
            <div
              className={`duration-500 overflow-hidden ${
                openQuestions[index] ? "max-h-60" : "max-h-0"
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
