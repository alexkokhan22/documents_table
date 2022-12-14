//react
import React from 'react';

//redux
import { useDispatch } from 'react-redux';
import { cancelGoodsAction } from '../../Store/documents/actions';

//components
import {
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

//styles
import styles from './styles/index.module.scss';

//types
import { IPopupProps } from './models';

export const Popup = (props: IPopupProps) => {
  const { open, setOpen, documents } = props;
  const dispatch = useDispatch();
  const cancelDocuments = documents.map(d => d.id);

  const closePopup = () => setOpen(false);

  const cancelGoods = () => {
    dispatch(cancelGoodsAction(cancelDocuments));
    closePopup();
  };

  return (
    <Dialog
      className={styles.dialogContainer}
      open={open}
      fullWidth={true}
      onClose={closePopup}
    >
      <DialogTitle className={styles.dialogTitle}>
        Вы уверены что хотите аннулировать товар(ы):
      </DialogTitle>
      {documents.map(d => {
        return (
          <DialogContentText key={d.id} className={styles.dialogText}>
            {d.name}
          </DialogContentText>
        );
      })}
      <DialogActions>
        <Button onClick={closePopup}>Отклонить</Button>
        <Button onClick={cancelGoods}>Применить</Button>
      </DialogActions>
    </Dialog>
  );
};
