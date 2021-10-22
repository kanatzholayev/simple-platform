import styled from "styled-components";
export const Label = styled.label`
  font-size: 16px;
  display: block;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  font-size: 14px;
  padding: 15px;
  margin: 10px 0;
  background: transparent;
  box-shadow: inset -5px -5px 15px rgba(255, 255, 255, 0.75),
    inset 5px 5px 10px rgba(166, 180, 200, 0.75);
  border-radius: 20px;
`;

export const Container = styled.div`
  max-width: 820px;
  margin: auto;
  padding: 1rem;
`;

export const Button = styled.button`
  padding: 15px;
  display: inline-flex;
  margin: 0 auto;
  font-family: "Montserrat", sans-serif;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  border: 0;
  color: black;
  background: linear-gradient(134.17deg, #eef0f5 4.98%, #e6e9ef 94.88%);
  box-shadow: -12px -12px 20px rgba(255, 255, 255, 0.8),
    10px 10px 20px rgba(166, 180, 200, 0.7);
  border-radius: 20px;
  &:disabled {
    opacity: 0.5;
  }
`;
