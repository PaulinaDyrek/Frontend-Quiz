import { useState } from "react";
import { data } from "../../assets/data";
import "../../components/Quiz/Quiz.css"

export function Quiz() {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);

  const checkAns = (e, ans) => {
    if (lock === false ) {
      if(question.ans===ans) {
        e.target.classList.add("correct");
        setLock(true);
      }
      else {
        e.target.classList.add("wrong");
        setLock(true);
      }
    }
    if(question.ans===ans) {
      e.target.classList.add("correct");
    }
    else {
      e.target.classList.add("wrong");
    }
  }
  return (
    <div className="w-[540px] h-full m-auto mt-[50px] flex flex-col bg-brown text-grey gap-5 rounded-[10px] py-10 px-[50px]">
      <h1 className="text-[27px] font-bold m-auto ">Frontend Developer Quiz</h1>
      <hr className="h-0.5 bg-grey" />
      <h2 className="text-[18px] font-medium">
        {index+1}. {question.question}
      </h2>
      <ul>
        <li onClick={(e)=>{checkAns(e,1)}} className="flex items-center h-[45px] pl-[15px] border-[1px] border-white divide-solid rounded-[10px] text-5 cursor cursor-pointer m-2">
          {question.option1}
        </li>
        <li onClick={(e)=>{checkAns(e,2)}} className="flex items-center h-[45px] pl-[15px] border-[1px] border-white divide-solid rounded-[10px] text-5 cursor cursor-pointer  m-2">
          {question.option2}
        </li>
        <li onClick={(e)=>{checkAns(e,3)}} className="flex items-center h-[45px] pl-[15px] border-[1px] border-white divide-solid rounded-[10px] text-5 cursor cursor-pointer  m-2">
         {question.option3}
        </li>
        <li onClick={(e)=>{checkAns(e,4)}} className="flex items-center h-[45px] pl-[15px] border-[1px] border-white divide-solid rounded-[10px] text-5 cursor cursor-pointer  m-2">
          {question.option4}
        </li>
      </ul>
      <button className="m-auto w-[200px] h-[45px] bg-lavenda  text-grey text-[20px] font-medium rounded-[8px] cursor-pointer">
        Next
      </button>
      <div className="text-[14px] m-auto">1 of 5 questions</div>
    </div>
  );
}
