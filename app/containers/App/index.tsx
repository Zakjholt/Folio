import * as React from "react";

import QuestionAsking from "../../components/QuestionAsking";
import Door from "../../components/Door";

async function fetchAndSetQuestions(setQuestions: Function) {
  const response = await fetch("/questions");
  const { questions } = await response.json();

  setQuestions(questions);
}

const App: React.SFC<{}> = () => {
  const [showDoor, setShowDoor] = React.useState(true);
  const [questions, setQuestions] = React.useState([] as Question[]);

  React.useEffect(() => {
    fetchAndSetQuestions(setQuestions);
  }, []);

  return (
    <div>
      {!showDoor && <QuestionAsking questions={questions} />}
      <Door show={showDoor} dropDoor={() => setShowDoor(false)} />
    </div>
  );
};

export default App;
