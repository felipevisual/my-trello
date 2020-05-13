import styled from 'styled-components';

export const ListaDeProjetos = styled.section`
  height: 100%;

  ul {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    grid-auto-rows: 1fr;
    max-width: 960px;
    margin: 48px auto 0;

    li {
      background-color: #0067a3;
      border-radius: 8px;
      box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.6);

      &:hover {
        transform: translateX(4px);
        transition: transform 0.3s;
        background-color: #00507e;
      }

      a {
        color: #ffffff;
        font-weight: bold;
        font-size: 20px;
        letter-spacing: 0.6px;
        height: 100%;

        span {
          display: block;
          width: 100%;
          height: 100%;
          padding: 16px;
        }
      }
    }
  }
`;
