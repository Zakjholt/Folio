import * as React from "react";

import TextBlurb from "../TextBlurb";

import {
  Container,
  TinyDoor,
  BigText,
  SlantText,
  TinyDoorFrame,
  Sign,
  Handle,
  Zak,
  TextBlurbContainer
} from "./styled";

type Props = {
  dropDoor: () => void;
};

const useDoorKnocker = (maxKnocks: number, onMaxKnocksReached: Function) => {
  const [knockCount, setKnockCount] = React.useState(0);

  const incrementKnockCount = () => {
    knockCount <= maxKnocks && setKnockCount(knockCount + 1);

    if (knockCount === maxKnocks) {
      onMaxKnocksReached();
    }
  };

  return [knockCount, incrementKnockCount];
};

const Door: React.SFC<Props> = ({ dropDoor }) => {
  const [showSlantText, setShowSlantText] = React.useState(false);
  const [showDoor, setShowDoor] = React.useState(false);
  const [showZak, setShowZak] = React.useState(false);
  const [showText, setShowText] = React.useState(false);
  const [knockCount, incrementKnockCount] = useDoorKnocker(
    2,
    () => (setShowZak(true), setShowText(true))
  ) as [number, () => void];

  return (
    <Container canClick={showText}>
      <BigText
        className="animated slideInLeft"
        onAnimationEnd={() => setShowSlantText(true)}
      >
        Zak Holt
      </BigText>
      {showSlantText && (
        <SlantText
          className="animated slideInLeft"
          onAnimationEnd={() => setShowDoor(true)}
        >
          Web Dev
        </SlantText>
      )}

      {showText && (
        <TextBlurbContainer>
          <TextBlurb
            texts={[
              "oh hello",
              "so nice of you to stop by and knock on my door"
            ]}
            onClickAfterLastText={dropDoor}
          />
        </TextBlurbContainer>
      )}
      {showDoor && (
        <TinyDoorFrame className="animated fadeIn">
          <Zak show={showZak} />
          <TinyDoor knocks={knockCount} onClick={() => incrementKnockCount()}>
            <Sign>Do not knock</Sign>
            <Handle />
          </TinyDoor>
        </TinyDoorFrame>
      )}
    </Container>
  );
};

export default Door;
