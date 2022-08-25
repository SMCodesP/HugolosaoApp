import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: column;
  padding: 25px;
`;

export const TitleModal = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.foreground};
  font-family: "Jost-Bold";
`;

export const Information = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 8px 0;
`;

export const TextInformation = styled.Text`
  font-family: "Jost-Medium";
  color: ${({ theme }) => theme.foreground};
  font-size: 15px;
  padding: 0 10px;
`;

export const TextImportant = styled(TextInformation)`
  font-family: "Jost-Bold";
  font-size: 16px;
  color: ${({ theme }) => theme.foreground};
  padding: 0;
`;
