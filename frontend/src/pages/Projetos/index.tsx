import React from 'react';
import { Link } from 'react-router-dom';
import { ListaDeProjetos } from './styles';

const projetos = [
  {
    id: 1,
    descricao: 'Teste 1 teseeeeeeeee aaaaaaaa',
  },
  {
    id: 2,
    descricao: 'Teste 2',
  },
  {
    id: 3,
    descricao: 'Teste 3',
  },
  {
    id: 4,
    descricao: 'Teste 4',
  },
  {
    id: 5,
    descricao: 'Teste 5',
  },
  {
    id: 6,
    descricao: 'Teste 6',
  },
];

const Projetos: React.FC = () => {
  return (
    <ListaDeProjetos>
      <ul>
        {projetos.map((projeto) => (
          <li key={projeto.id}>
            <Link to={`/projetos/${projeto.id}`}>
              <span>{projeto.descricao}</span>
            </Link>
          </li>
        ))}
      </ul>
    </ListaDeProjetos>
  );
};

export default Projetos;
