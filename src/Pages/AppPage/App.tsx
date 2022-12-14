//react
import React from 'react';

//components
import { Table } from '../../Components/Table';

//styles
import styles from './styles/index.module.scss';

export const App = () => {
  return (
    <div className={styles.appPageContainer}>
      <Table />
    </div>
  );
};
