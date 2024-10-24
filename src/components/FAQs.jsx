import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import parse from "html-react-parser";

const FAQs = ({ faqs, lang }) => {
  const [openQuestions, setOpenQuestions] = useState(
    new Array(faqs.length).fill(false),
  );

  const toggleFAQ = (index) => {
    const updatedOpenQuestions = [...openQuestions];
    updatedOpenQuestions[index] = !updatedOpenQuestions[index];
    setOpenQuestions(updatedOpenQuestions);
  };

  return (
    <div className="flex flex-col gap-5 max-w-3xl mt-10 lg:mt-0">
      <h3 className="text-3xl lg:text-4xl">{`${lang === "en" ? "Frequently Asked Questions" : "Preguntas Frecuentes"}`}</h3>
      <div className="flex flex-col gap-5 md:ml-10">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-main-black/30 pb-2">
            <button
              onClick={() => toggleFAQ(index)}
              className="text-xl w-full text-left flex justify-between py-3 text-main-black/90 hover:text-main-blue"
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

export default FAQs;
