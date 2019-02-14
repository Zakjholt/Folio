declare module "*.png" {
  const content: string;
  export default content;
}

declare type Question = {
  _id: string;
  question: string;
  answer: string[];
  followUp?: Question;
};
