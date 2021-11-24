import * as React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  box-sizing: border-box;
  width: 400px;
  height: 300px;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 20px;

  .code {
    box-sizing: inherit;
    width: 100%;
    height: 100%;
    border: 1px solid sandybrown;
    border-radius: 3px;
    background-color: #f5f5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: black;
  }
`;

const questionStyle = { fontSize: 23, fontWeight: 600 };
const codeStyle = {};
export const Card = ({ card }) => {
  const [showCode, setShowCode] = React.useState(false);
  const style = showCode ? codeStyle : questionStyle;

  return (
    <Container style={style} onClick={() => setShowCode(!showCode)}>
      <span className={showCode ? 'code' : ''}>
        {showCode ? card?.code : card?.text}
      </span>
    </Container>
  );
};
