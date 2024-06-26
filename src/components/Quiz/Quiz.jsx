import { useRef, useState } from "react";
import { data } from "../../assets/data";
import "../../components/Quiz/Quiz.css";
import { Button } from "../Button/Button";
import { ListItem } from "../List/ListItem";

export function Quiz() {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  const checkAns = (e, ans) => {
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
      }
    }
  };

  const next = () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };
  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };
  return (
    <div className="sm: w-[320px] h-full lg:w-[480px] lg:h-full m-auto mt-[50px] flex flex-col bg-darkblue text-grey gap-5 rounded-[10px] py-10 px-[20px]">
      <h1 className="sm: text-[20px] lg:text-[27px] font-bold m-auto ">
        Frontend Developer Quiz
      </h1>
      <hr className="h-0.5 bg-grey" />
      {result ? (
        <></>
      ) : (
        <>
          <h2 className="text-[18px] font-medium">
            {index + 1}. {question.question}
          </h2>
          <ul>
            <ListItem
              refProp={Option1}
              onClick={(e) => checkAns(e, 1)}
              option={question.option1}
            ></ListItem>
            <ListItem
              refProp={Option2}
              onClick={(e) => checkAns(e, 2)}
              option={question.option2}
            ></ListItem>
            <ListItem
              refProp={Option3}
              onClick={(e) => checkAns(e, 3)}
              option={question.option3}
            ></ListItem>
            <ListItem
              refProp={Option4}
              onClick={(e) => checkAns(e, 4)}
              option={question.option4}
            ></ListItem>
          </ul>
          <Button onClick={next}>Next</Button>
          <div className="text-[14px] m-auto">
            {index + 1} of {data.length}
          </div>
        </>
      )}
      {result ? (
        <>
          <h2>
            You scored {score} out of {data.length}
          </h2>
          <Button onClick={reset}>Reset</Button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
