//react
import React, { useEffect, useState } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getDocumentsAction } from '../../Store/documents/actions';
import { RootState } from '../../Store';

//components
import { DataGrid, GridSelectionModel } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';
import { CustomTableFooter } from '../FooterTable';
import { Popup } from '../Popup';
import { QuickSearchToolbar } from '../QuickSearchToolbar';

//types
import { IDocument } from '../../Store/documents/models';

//tools
import { columnsTableData } from './columnsData';

export const Table = () => {
  const dispatch = useDispatch();
  const documents = useSelector(
    (state: RootState) => state.documentsList.documentsList
  );
  const [searchText, setSearchText] = React.useState('');
  const [rows, setRows] = React.useState<any[]>(documents);
  const [selectionModel, setSelectionModel] = useState<GridSelectionModel>([]);
  const [selectionDocuments, setSelectionDocuments] = useState<IDocument[]>([]);
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    dispatch(getDocumentsAction());
  }, []);

  useEffect(() => {
    setRows(documents);
  }, [documents]);

  const escapeRegExp = (value: string) => {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
  };

  const onSelectionModelChange = (newSelection: GridSelectionModel) => {
    const selectedDocuments = documents.filter((d: IDocument) =>
      newSelection.includes(d.id)
    );
    setSelectionModel(newSelection);
    setSelectionDocuments(selectedDocuments);
  };

  const openPopup = () => setShowPopup(true);

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = documents.filter((row: any) => {
      return Object.keys(row).some((field: any) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  return (
    <Box marginTop={10} sx={{ height: 750, width: '76%' }}>
      <Popup
        documents={selectionDocuments}
        open={showPopup}
        setOpen={setShowPopup}
      />
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar, Footer: CustomTableFooter }}
        rows={rows}
        columns={columnsTableData}
        checkboxSelection
        disableSelectionOnClick
        hideFooterSelectedRowCount={true}
        selectionModel={selectionModel}
        onSelectionModelChange={onSelectionModelChange}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
              requestSearch(event.target.value),
            clearSearch: () => requestSearch(''),
          },
          footer: {
            documents,
          },
        }}
      />
      <Button
        style={{ marginTop: 10 }}
        onClick={openPopup}
        variant={'contained'}
        disabled={!selectionDocuments.length}
      >
        Аннулировать
      </Button>
    </Box>
  );
};
