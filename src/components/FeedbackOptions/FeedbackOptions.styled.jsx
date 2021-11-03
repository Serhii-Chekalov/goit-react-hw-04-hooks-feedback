import styled from "@emotion/styled";

export const ButtonStyle = styled.button`
  padding: 10px;
  margin-left: 40px;
  background-color: white;
  border-radius: 15%;
  border: 1px solid grey;

  font-size: 20px;
  color: black;
  font-weight: 600;
  text-transform: capitalize;

  &:active {
    background-color: blue;
  }
`;
