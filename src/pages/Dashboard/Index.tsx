import React from 'react';
import Logo from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';
import { FiChevronRight} from 'react-icons/fi'
const Dashboard: React.FC = () => (
  <>
    <img src={Logo} alt="GitHub explorer" />
    <Title>Explore Reposirios no GitHub</Title>
    <Form>
      <input placeholder="Digite o nome do repositório"/>
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="">
        <img src="https://avatars.githubusercontent.com/u/55147170?v=4" alt="Lailson" />

        <div>
          <strong>
                Basketball Training
          </strong>
          <p>
              App para treinos e performance
          </p>
        </div>
        <FiChevronRight size={20}/>
      </a>

      <a href="">
        <img src="https://avatars.githubusercontent.com/u/55147170?v=4" alt="Lailson" />

        <div>
          <strong>
                Basketball Training
          </strong>
          <p>
              App para treinos e performance
          </p>
        </div>
        <FiChevronRight size={20}/>
      </a>

      <a href="">
        <img src="https://avatars.githubusercontent.com/u/55147170?v=4" alt="Lailson" />

        <div>
          <strong>
                Basketball Training
          </strong>
          <p>
              App para treinos e performance
          </p>
        </div>
        <FiChevronRight size={20}/>
      </a>
    </Repositories>

    
  </>
);

export default Dashboard;
