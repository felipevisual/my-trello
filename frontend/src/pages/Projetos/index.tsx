import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import { ListaDeProjetos } from './styles';

interface Projeto {
  id: number;
  descricao: string;
}

const Projetos: React.FC = () => {
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    async function carregarDados(): Promise<void> {
      const response = await api.get<Projeto[]>('projetos');
      setProjetos([...projetos, ...response.data]);
    }
    carregarDados();
  }, []);

  return (
    <ListaDeProjetos>
      <ul>
        {projetos.map(projeto => (
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
