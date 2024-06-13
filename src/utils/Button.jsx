// import "./Button.css";
import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
  large: css`
    font-size: 2rem;
    padding: 1.6rem 2.4rem;
    font-weight: 400;
  `,
};

const variations = {
  primary: css`
    background-color: #0a2e36;
    color: white;

    &:hover {
      background-color: #124854;
    }
  `,
  secondary: css`
    background-color: white;
    color: #0a2e36;

    &:hover {
      background: #e7e7e7;
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: 1.25rem;
  box-shadow: 2px 3px 16px 0 rgba(0, 0, 0, 0.12);
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1.2rem;

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
  size: "small",
};
export default Button;
