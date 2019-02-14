import * as React from "react";
import { CSSTransition } from "react-transition-group";

import TextBlurb from "../TextBlurb";

import {
  Container,
  TinyDoor,
  BigText,
  SlantText,
  TinyDoorFrame,
  Sign,
  Handle,
  ZakDoor,
  TextBlurbContainer
} from "./styled";

type Props = {
  dropDoor: () => void;
  show: boolean;
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

const animationClassnames = {
  exitActive: "hinge",
  exitDone: "hinge"
};

const Door: React.SFC<Props> = ({ dropDoor, show }) => {
  const [showSlantText, setShowSlantText] = React.useState(false);
  const [showDoor, setShowDoor] = React.useState(false);
  const [showZak, setShowZak] = React.useState(false);
  const [showText, setShowText] = React.useState(false);
  const [knockCount, incrementKnockCount] = useDoorKnocker(
    2,
    () => (setShowZak(true), setShowText(true))
  ) as [number, () => void];

  return (
    <CSSTransition
      className="animated"
      classNames={animationClassnames}
      in={show}
      timeout={100}
    >
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
            <ZakDoor show={showZak} />
            <TinyDoor knocks={knockCount} onClick={() => incrementKnockCount()}>
              <Sign>Do not knock</Sign>
              <Handle />
            </TinyDoor>
          </TinyDoorFrame>
        )}
      </Container>
    </CSSTransition>
  );
};

export default Door;
