import React from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "../theme";

const comeupAnimation = keyframes`
  0% {
    transform: none;
    opacity: 0;
  }
  100% {
    transform: none;
    opacity: 1;
  }
`;

const PriceItemBox = styled.li`
  width: 100%;
  height: 50px;
  background-color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 7px 0;
  padding: 20px;
  opacity: 0;
  animation: ${comeupAnimation} 0.5s linear forwards;
  color: ${theme.bgColor};
`;

const PriceTitle = styled.div`
  width: 70%;
  font-size: 16px;
  font-weight: 600;
`;

const PriceValue = styled.div`
  width: 30%;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

interface PriceItemProps {
  label: string;
  value: string;
}

function PriceItem({ label, value }: PriceItemProps) {
  return (
    <PriceItemBox>
      <PriceTitle>{label} :</PriceTitle>
      <PriceValue>
        <Text>{value}</Text>
      </PriceValue>
    </PriceItemBox>
  );
}

export default PriceItem;
