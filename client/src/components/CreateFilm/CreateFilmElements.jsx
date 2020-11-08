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
  background-image: linear-gradient(
      to right bottom,
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0, 0.7)
    ),
    url(../../signUp.jpg);
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90vh;
  /* justify-content: center; */
  width: 100vw;
  .btn {
    display: inline-block;
    height: 2.5em;
    width: 10em;
    border: 1px solid #aaaaaa;
    margin-top: 1em;
    outline: none;
    background-color: #00a8e6;
    border-color: #00a8e6;
    border-radius: 3px;
    color: #fff;
    align-items: center;
    outline: none;
  }
`;
export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 22px;
  height: 32px;
  z-index: 10;
`;
export const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  line-height: 1.8;
  padding: 1em;
  margin: 2em;
  .heading {
    padding: 10px 0 10px 0;
    font-size: 30px;
    text-align: center;
    line-height: 1;
  }
`;
export const ModalWrapper = styled.div`
  width: 500px;
  min-height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #272728;
  color: #eee;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  justify-content: center;
  .btn {
    width: 20em;
    height: 3em;
    align-self: center;
  }
  .modal-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-input {
    outline: none;
    background: transparent;
    color: #eee;
    border: 1px solid #949494;
    display: inline-block;
    padding-right: 0.5em;
    border-radius: 5px;
  }
`;
export const CardContainer = styled.div`
  padding: 1rem;
  box-shadow: 7px 10px 15px rgba(0, 0, 0, 0.56);
  color: #fff;
  margin: 10px;

  .pix-box {
    width: 250px;
    height: 350px;
    background-color: #3e3d3c;
    overflow: hidden;
  }
`;
export const ModalWrappers = styled.div`
  ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    height: 100%;
    width: 100vw;
  }
`;
