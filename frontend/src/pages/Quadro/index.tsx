import React, { useState, useEffect, ChangeEvent } from 'react';
import { Link, useParams } from 'react-router-dom';

import Axios from 'axios';
import api from '../../services/api';

import { Delimitador, QuadroDeAtividades, Modal } from './styles';

interface Sprint {
  id: number;
  nome: string;
}

interface Atividade {
  id: number;
  nome: string;
  estadoId: number;
}

interface Estado {
  id: number;
  titulo: string;
}

const Quadro: React.FC = () => {
  const { id } = useParams();
  const [nome, setNome] = useState('');
  const [visivel, setVisivel] = useState(false);
  const [sprints, setSprints] = useState<Sprint[]>([]);
  const [atividades, setAtividades] = useState<Atividade[]>([]);
  const [estados, setEstados] = useState<Estado[]>([]);

  async function carregarSprints(): Promise<Sprint[]> {
    const response = await api.get<Sprint[]>(`projetos/${id}/sprints`);
    setSprints([...sprints, ...response.data]);
    return response.data;
  }

  async function carregarAtividades(sprintId: number): Promise<void> {
    const response = await api.get<Atividade[]>(
      `atividades/sprints/${sprintId}`,
    );

    const dummy: Array<Atividade> = [];
    setAtividades([...dummy, ...response.data]);
  }

  async function carregarEstados(): Promise<void> {
    const response = await api.get<Estado[]>(`estados`);
    setEstados([...estados, ...response.data]);
  }

  useEffect(() => {
    async function carregarDados(): Promise<void> {
      const mySprints = await carregarSprints();
      carregarAtividades(mySprints[0]?.id);
      carregarEstados();
    }
    carregarDados();
  }, []);

  function handleModal(titulo: string): void {
    setNome(titulo);
    setVisivel(true);
  }

  function handleChangeSprint(event: ChangeEvent<HTMLSelectElement>): void {
    const sprintId: number = (event.target.value as unknown) as number;
    carregarAtividades(sprintId);
  }

  return (
    <>
      <Delimitador>
        <header>
          <select onChange={handleChangeSprint}>
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
              {atividades
                .filter(atividade => atividade.estadoId === estado.id)
                .map(atividade => (
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
          <button type="button" onClick={() => setVisivel(false)}>
            &times;
          </button>
          <p>{nome}</p>
        </div>
      </Modal>
    </>
  );
};

export default Quadro;
