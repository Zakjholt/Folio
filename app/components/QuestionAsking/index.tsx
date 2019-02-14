import * as React from "react";
import { Container, QuestionZak } from "./styled";

type Props = {
  questions: Question[];
};

const QuestionAsking: React.SFC<Props> = ({ questions }) => {
  // onAnimationEnd bring in all of the elements with state hook
  return (
    <Container>
      <QuestionZak className="animated slideInRight" />
    </Container>
  );
};

export default QuestionAsking;
