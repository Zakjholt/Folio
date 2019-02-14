import styled from "styled-components";

import { Zak } from "../shared";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #eee;
  position: fixed;
`;

export const QuestionZak = styled(Zak)`
  position: absolute;
  right: 100px;
  bottom: 200px;
`;
