//types
import { IAction, IDocument, IDocumentsList } from './models';

//actions
import { GET_DOCUMENTS } from './actions';

export const initialState: IDocumentsList = {
  documentsList: [],
};

export const documentsList = (state = initialState, action: IAction) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DOCUMENTS: {
      return {
        ...state,
        documentsList: payload
          .sort((a: IDocument, b: IDocument) => {
            return +new Date(b.delivery_date) - +new Date(a.delivery_date);
          })
          .map((d: IDocument) => ({
            ...d,
            total: `${d.qty + d.sum} ${d.currency}`,
          })),
      };
    }
    default: {
      return state;
    }
  }
};
