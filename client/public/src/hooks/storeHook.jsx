
/* Not being used at the moment, getting this to work would help with
testing by seperating hooks and keep the code cleaner */

import { useState } from 'react';

export default function useStoreHook() {
  const [store, setStore] = useState({id: 1});

  const getStore = async (storeId) => {
    const response = await axios.get(`/stores/${storeId}`);
    const storeData = response.data;
    setStore(storeData);
  }

  return {store, getStore};
}
