import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Delimitador, QuadroDeAtividades, Modal } from './styles';

const sprints = [
  {
    id: 1,
    nome: 'Sprint 1',
  },
  {
    id: 2,
    nome: 'Sprint 2',
  },
  {
    id: 3,
    nome: 'Sprint 3',
  },
];

const estados = [
  {
    id: 1,
    titulo: 'A Fazer',
    atividades: [
      {
        id: 1,
        nome: 'Atividade 1',
      },
      {
        id: 2,
        nome: 'Atividade 2',
      },
      {
        id: 3,
        nome: 'Atividade 3',
      },
    ],
  },
  {
    id: 2,
    titulo: 'Fazendo',
    atividades: [
      {
        id: 1,
        nome: 'Atividade 4',
      },
      {
        id: 2,
        nome: 'Atividade 5',
      },
      {
        id: 3,
        nome: 'Atividade 6',
      },
    ],
  },
  {
    id: 3,
    titulo: 'Feito',
    atividades: [
      {
        id: 1,
        nome: 'Atividade 7',
      },
      {
        id: 2,
        nome: 'Atividade 8',
      },
      {
        id: 3,
        nome: 'Atividade 9',
      },
    ],
  },
];

const Quadro: React.FC = () => {
  const [nome, setNome] = useState('');
  const [visivel, setVisivel] = useState(false);

  function handleModal(titulo: string): void {
    setNome(titulo);
    setVisivel(true);
  }

  return (
    <>
      <Delimitador>
        <header>
          <select>
            {sprints.map(sprint => (
              <option value={sprint.id} key={sprint.id}>
                {sprint.nome}
              </option>
            ))}
          </select>
          <h1>
            <Link to="/">MyTrello</Link>
          </h1>
        </header>
        <QuadroDeAtividades>
          {estados.map(estado => (
            <ul key={estado.id}>
              <h2>{estado.titulo}</h2>
              {estado.atividades.map(atividade => (
                <li
                  key={atividade.id}
                  onClick={() => handleModal(atividade.nome)}
                >
                  <span>{atividade.nome}</span>
                </li>
              ))}
            </ul>
          ))}
        </QuadroDeAtividades>
      </Delimitador>

      <Modal visibilidade={visivel}>
        <div>
          <span onClick={() => setVisivel(false)}>&times;</span>
          <p>{nome}</p>
        </div>
      </Modal>
    </>
  );
};

export default Quadro;
