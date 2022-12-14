//react
import { Dispatch, SetStateAction } from 'react';

//types
import { IDocument } from '../../Store/documents/models';

export interface IPopupProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  documents: IDocument[];
}
