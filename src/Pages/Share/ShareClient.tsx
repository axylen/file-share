import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import css from './Share.module.css';

interface IShareClientProps {}

const ShareClient: React.FC<IShareClientProps> = (props) => {
  const { id: sessionId } = useParams();

  console.log(sessionId, props);

  return (
    <label className={css.container}>
      <h1>Files</h1>
    </label>
  );
};

const mapStateToProps = (state: ReduxStore) => {
  return {
    connection: state.connection.connection,
    files: state.clientFiles,
  };
};

export default connect(mapStateToProps)(ShareClient);
