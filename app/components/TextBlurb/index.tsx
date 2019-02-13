import * as React from "react";
import { Container } from "./styled";

type Props = {
  texts: string[];
  startAt?: number;
  onClickAfterLastText: React.MouseEventHandler;
};

const TextBlurb: React.SFC<Props> = ({
  texts,
  startAt = 0,
  onClickAfterLastText
}) => {
  const [cursor, setCursor] = React.useState(startAt);
  React.useEffect(() => {
    document.addEventListener("click", e => {
      cursor < texts.length - 1
        ? setCursor(cursor + 1)
        : onClickAfterLastText(e as any);
    });

    return () =>
      document.removeEventListener("click", () => {
        setCursor(cursor + 1);
      });
  });

  return <Container>{texts[cursor]}</Container>;
};

export default TextBlurb;
