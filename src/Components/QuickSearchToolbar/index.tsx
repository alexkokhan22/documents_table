//react
import React from 'react';

//components
import { IconButton, TextField } from '@mui/material';

//types
import { IQuickSearchToolbarProps } from './models';

export const QuickSearchToolbar = (props: IQuickSearchToolbarProps) => {
  return (
    <div>
      <TextField
        fullWidth={true}
        variant={'filled'}
        value={props.value}
        onChange={props.onChange}
        placeholder={'Поиск…'}
        InputProps={{
          endAdornment: (
            <IconButton
              title={'Clear'}
              aria-label={'Clear'}
              size={'small'}
              style={{ visibility: props.value ? 'visible' : 'hidden' }}
              onClick={props.clearSearch}
            ></IconButton>
          ),
        }}
      />
    </div>
  );
};
