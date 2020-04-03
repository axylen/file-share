import React from 'react';
import css from './Home.module.css';

interface IHomeProps {}

const Home: React.FC<IHomeProps> = () => {
  return (
    <div className={css.container}>
      <h1>Add Files</h1>
    </div>
  );
};

export default Home;
