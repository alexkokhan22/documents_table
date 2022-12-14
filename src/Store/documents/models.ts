export interface IAction {
  type: string;
  payload?: any;
}

export interface IDocument {
  id: string;
  status: string;
  sum: number;
  qty: number;
  volume: number;
  name: string;
  delivery_date: string;
  currency: string;
  total: string;
}

export interface IDocumentsList {
  documentsList: IDocument[];
}

export interface IParamsSagas {
  type: string;
  payload: any;
}
