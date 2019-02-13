import * as React from "react";

import QuestionAsking from "../../components/QuestionAsking";
import Door from "../../components/Door";

import { useFolioReducer } from "../../hooks/reducer";

const App: React.SFC<{}> = () => {
  const [state, dispatch] = useFolioReducer();

  return (
    <div>
      {state.questions.length ? (
        <QuestionAsking />
      ) : (
        <Door dropDoor={() => alert("time to drop it")} />
      )}
    </div>
  );
};

export default App;
