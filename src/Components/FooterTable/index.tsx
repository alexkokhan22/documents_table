//react
import React from 'react';

//components
import { GridFooterContainer } from '@mui/x-data-grid';

//styles
import styles from './styles/index.module.scss';

//types
import { IFooterTableProps } from './models';

export const CustomTableFooter = (props: IFooterTableProps) => {
  const { documents } = props;

  const totalVolume = documents.map(d => d.volume).reduce((a, b) => a + b, 0);

  const totalQty = documents.map(d => d.qty).reduce((a, b) => a + b, 0);

  return (
    <GridFooterContainer className={styles.footerContainer}>
      <span>Общий обьем: {totalVolume}</span>
      <span>Общее количество: {totalQty}</span>
    </GridFooterContainer>
  );
};
