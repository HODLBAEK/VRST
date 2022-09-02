import styled from 'styled-components';
import React from 'react';

interface ContainerProps {
  bgColor: string;
}

interface CircleProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
`;

export default function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}
