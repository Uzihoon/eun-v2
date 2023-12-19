import { keyframes } from 'styled-components';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const popInFromBottom = keyframes`
  0% {
    position: relative;
    opacity: 0;
    bottom: -30px;
  }
  100% {
    position: relative;
    opacity: 1;
    bottom: 0;
  }
`;

const popUpFromRight = keyframes`
  0% {
    position: relative;
    opacity: 0;
    transform: translateX(300px);
  }
  100% {
    position: relative;
    opacity: 1;
    transform: translateX(0px);
  }
`;

const animation = {
  fadeIn,
  fadeOut,
  popInFromBottom,
  popUpFromRight,
};

export default animation;
