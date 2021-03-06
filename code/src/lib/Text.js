import styled from "styled-components/macro";

export const CardText = styled.p`
  margin: 0;
  line-height: 18px;
  font-size: 18px;
`;

export const HistoryHeading = styled.h2`
  margin: 0;

  @media (max-width: 668px) {
    text-align: center;
  }
`;

export const HistoryText = styled.p`
  text-transform: capitalize;

  @media (max-width: 668px) {
    text-align: center;
  }
`;

export const BoldText = styled.span`
  font-weight: 900;
`;
