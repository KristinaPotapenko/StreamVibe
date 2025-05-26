import { useState } from "react";
import styles from "./QuestionsList.module.scss";
import { questionsInfo } from "../questionsInfo";
import { QuestionsItem } from "../QuestionsItem/QuestionsItem";

export const QuestionsList = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const changeActiveQuestion = (id) => {
    setActiveQuestion((prev) => {
      if (prev === id) return null;

      return id;
    });
  };

  return (
    <ul className={styles.wrapper}>
      {questionsInfo.map((question) => {
        return (
          <QuestionsItem
            key={question.id}
            id={question.id}
            title={question.title}
            description={question.description}
            activeQuestion={activeQuestion}
            onClick={changeActiveQuestion}
          />
        );
      })}
    </ul>
  );
};
