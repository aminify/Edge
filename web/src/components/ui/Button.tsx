import { darken, getLuminance } from 'color2k';
import styled from 'styled-components/macro';

interface ButtonProps {
  color: string;
  small?: boolean;
}

const Button = styled.button<ButtonProps>`
  padding: ${({ theme, small = false }) =>
    `${theme.spacing(1)} ${small ? theme.spacing(1.2) : theme.spacing(3)}`};
  line-height: 1;
  background-color: ${({ color }) => color};
  color: ${({ color }) => (getLuminance(color) > 0.4 ? '#000' : '#fff')};
  border-radius: 200px;
  font-weight: bold;
  border: none;
  margin: ${({ theme }) => theme.spacing(1)};
  margin-right: 0;
  transition: background-color 0.3s;
  cursor: pointer;
  :hover {
    background-color: ${({ color }) => darken(color, 0.1)};
  }
  :active {
    background-color: ${({ color }) => darken(color, 0.3)};
  }
`;

export default Button;
