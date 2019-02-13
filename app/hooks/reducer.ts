import { useReducer, Reducer } from "react";

const initialState = {
  questions: [],
  currentQuestion: "",
  answerTexts: [] as string[],
  answerCursor: 0,
  questionIdsAsked: [] as string[]
};

const reducer: Reducer<typeof initialState, any> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "fetch questions success": {
      const { questions } = action.payload;

      return {
        ...state,
        questions
      };
    }

    case "ask question": {
      const { id, question, answer } = action.payload;

      return {
        ...state,
        currentQuestion: question,
        answerTexts: answer,
        answerCursor: 0,
        questionIdsAsked: state.questionIdsAsked.concat(id)
      };
    }

    case "advance answer cursor": {
      return {
        ...state,
        answerCursor: state.answerCursor + 1
      };
    }

    default:
      return state;
  }
};

export const useFolioReducer = () => useReducer(reducer, initialState);
