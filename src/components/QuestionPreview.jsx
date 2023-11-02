import React, { useState } from "react";

function QuestionPreview(props) {
  const { question, Answers } = props;
  const [selectOption, setselectOption] = useState(null);

  const handleOptionSelect = (e) => {
    const { textContent } = e.currentTarget;
    setselectOption(textContent);
    Answers[question.id] = textContent;
  };

  return (
    <div>
      <div className="flex gap-[15px]">
        <div className="font-medium">Q:{question.id + 1}</div>
        <div className="font-medium">{question.question}</div>
      </div>
      <div className="pl-[30px] flex flex-col gap-[10px] pt-[12px] w-100">
        {question.options.map((option, idx) => (
          <button
            onClick={handleOptionSelect}
            className={`${
              selectOption === option ? "bg-[#BEADFA]" : "hover:bg-[#DFCCFB]"
            } p-2 rounded text-left  w-100`}
            key={idx}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionPreview;
