import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    padding:0;
    margin:0;
    list-style: none;
    text-decoration: none;
    box-sizing: border-box;
    border: none;
    font-family: 'Poppins', sans-serif;
    user-select: none;
  }
  
  
  u{
    text-decoration: underline;
  }
  
  *:link,
  *:visited{
    color:unset;
  }
  
  *::-webkit-scrollbar {
    width: 0;
  }
  
  *:focus{
    outline:none;
  }

  *:disabled{
    cursor: not-allowed;
  }
  
  input{
    outline: none;
    user-select: auto;
    background: unset;
    
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }


  label{
    cursor: pointer;
  }

  button{
    background: none;
    cursor: pointer;
  }

  textarea{
    resize: none;
    user-select:auto;
  }

  &#BroadBox {
    background: #373737;
  }

  .noSpace{
    width: 0;
    height: 0;
    position: absolute;
  }

  .defaultPopup {
    width: 500px;
    padding: 40px;
    background: #fff;
    box-shadow: 0px 3px 6px #00000029;
    border-radius: 15px;
    top: 50%;
    left: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    z-index: 6;
  }





  /* effect */
  .particles {
    position: fixed;
    top: 0;
    left: 0;
    pointer-events: none;

    .particle {
      position: absolute;
      transition: all 5s ease-out;

      &.circular {
        background-color: var(--color);
        width: var(--size);
        height: var(--size);
        border-radius: var(--size);
        transform: translate(var(--x), var(--y));
      }

      &.rectangular {
        background-color: var(--color);
        width: var(--size);
        height: var(--size);
        transform: translate(var(--x), var(--y)) rotateX(var(--rotate))
          rotateY(var(--rotate));
      }

      &.squiggle {
        stroke: var(--color);
        stroke-width: 15px;
        stroke-linecap: round;
        overflow: visible;
        width: var(--size);
        height: var(--size);
        transform: translate(var(--x), var(--y)) rotateY(var(--rotate));
      }
    }
  }

  .button {
    height: 40px;
    width: 200px;
    font-family: Roboto;
    background-color: #34495e;
    color: white;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease-out;
    user-select: none;

    &:hover {
      background-color: #8e44ad;
    }

    .popper {
      margin-right: 20px;
      margin-left: -20px;
      width: 64px;
      height: 64px;
      background-image: url("data:image/png;base64,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");
    }
  }
`;

export default GlobalStyle;
