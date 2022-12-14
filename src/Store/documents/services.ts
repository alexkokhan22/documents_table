import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getFirstDocumentsService = async () => {
  const documents = await api.get('/documents');
  return documents.data;
};

export const getSecondDocumentsService = async () => {
  const documents = await api.get('/documents1');
  return documents.data;
};

export const cancelGoodsService = async (params: string[]) => {
  return await api.post('/cancel', { ids: params });
};
