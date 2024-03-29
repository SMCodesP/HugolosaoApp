import styled from "styled-components/native";

export const DefaultText = styled.Text`
  color: ${({ theme }) => theme.foreground};
  font-family: "Jost";
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: "Jost-Medium";
  color: ${({ theme }) => theme.orange};
`;
