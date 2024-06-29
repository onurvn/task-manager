import styled from "styled-components";

export const Loading = styled.div`
    border: 5px solid #e2ebf8;
    border-bottom-color: transparent;
    border-radius: 50%;
    box-sizing: border-box;
    display: inline-block;
    height: 16px;
    width: 16px;
    animation: rotation 1s linear infinite, fade 300ms ease-in-out forwards;

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
