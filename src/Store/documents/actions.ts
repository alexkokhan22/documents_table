//types
export const GET_DOCUMENTS = 'GET_DOCUMENTS';
export const GET_DOCUMENTS_ASYNC = 'GET_DOCUMENTS_ASYNC';
export const CANCEL_GOODS_ASYNC = 'CANCEL_GOODS_ASYNC';

export const getDocumentsAction = () => {
  return {
    type: GET_DOCUMENTS_ASYNC,
  };
};

export const cancelGoodsAction = (payload: string[]) => {
  return {
    type: CANCEL_GOODS_ASYNC,
    payload,
  };
};
