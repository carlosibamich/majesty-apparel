import styled, { css } from 'styled-components';

const buttonStyles = css`
  color: white;
  background-color: black;
  border: none;

  &:hover {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`;

const invertedButtonStyles = css`
  color: #000;
  background-color: #fff;
  border: 1px solid #000;

  &:hover {
    color: #fff;
    background-color: #000;
    border: none;
  }
`;

const googleSignInStyles = css`
  color: #fff;
  background-color: #4285f4;

  &:hover {
    color: #ddd;
    background-color: #3371d4;
    border: none;
  }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles;
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  padding: 0 35px 0 35px;
  font-family: 'Open Sans Condensed';
  font-size: 15px;
  font-weight: bolder;
  letter-spacing: 0.5px;
  line-height: 50px;
  text-transform: uppercase;
  cursor: pointer;
  ${getButtonStyles}
`;