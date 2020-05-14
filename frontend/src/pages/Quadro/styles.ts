import styled from 'styled-components';

interface Propriedades {
  visibilidade: boolean;
}

export const Delimitador = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  header {
    display: grid;
    background-color: #00507e;
    padding: 12px;
    grid-template-columns: auto auto auto;

    h1 {
      text-align: center;

      a {
        color: #ffffff;
      }
    }

    select {
      max-width: 250px;
      border-radius: 4px;
    }
  }
`;

export const QuadroDeAtividades = styled.section`
  flex: 1;
  padding: 12px 8px;
  display: flex;
  background-color: #0067a3;
  align-items: flex-start;
  overflow-x: auto;

  ul {
    background-color: #ebecf0;
    max-width: 280px;
    min-width: 280px;
    padding: 8px;
    flex: 1;
    border-radius: 4px;

    & + ul {
      margin-left: 48px;
    }

    h2 {
      font-size: 20px;
      font-weight: bold;
      padding-left: 12px;
    }

    li {
      background-color: #ffffff;
      margin: 8px 4px;
      padding: 16px 8px;
      border-radius: 4px;
      font-size: 20px;
      box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.1);

      &:hover {
        transform: translateX(4px);
        transition: transform 0.3s;
      }

      span {
        word-wrap: break-word;
      }
    }
  }
`;

export const Modal = styled.div<Propriedades>`
  display: ${props =>
    props.visibilidade ? 'block' : 'none'}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  div {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */

    button {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      border: none;
      background: transparent;

      &:hover,
      &:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    }
  }
`;
