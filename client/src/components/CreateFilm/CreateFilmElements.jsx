import styled, { createGlobalStyle } from "styled-components";
import { MdClose } from "react-icons/md";
export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

`;

export const FormNav = styled.nav`
  .RegisterContainer-nav {
    height: 10vh;
    background-color: #222121;
    display: flex;
    align-items: center;
    padding: 0 80px;
    width: auto;
    justify-content: space-between;
  }
  .RegisterContainer-logo {
    font-size: 2.5em;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
    .logo-img {
      height: 38px;
    }
  }
  .main-logo::after {
    color: #fff;
  }
  .auth-nav {
    display: flex;
    justify-content: space-between;
  }
  .user-nav {
    margin: 0 10px;
    font-weight: bold;
    text-decoration: none;
    color: #fff;
  }
`;

export const CreateFilmContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90hvh;

  .btn {
    display: inline-block;
    height: 2.5em;
    width: 20em;
    border: 1px solid #aaaaaa;
    margin-top: 1em;
    outline: none;
    background-color: #00a8e6;
    border-color: #272728;
    border-radius: 3px;
    color: #fff;
    align-items: center;
  }
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  z-index: 10;
`;
export const ModalBackground = styled.div``;

export const ModalContent = styled.div``;

export const ModalWrapper = styled.div``;
