import styled from "styled-components";

export const Button = styled.button`
  text-decoration: none;
  max-width: auto;
  background-color: black;
  color: #fff;
  padding: 1.4rem 2.4rem;
  border: none;
  text-transform: uppercase;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  --webkit-transition: all 0.3s ease;
  &:hover,
  &:active {
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: scale(0.96);
  }
  a {
    text-decoration: none;
    color: #fff;
    font-size: 1.8rem;
  }
`;
