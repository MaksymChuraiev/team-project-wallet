const getTransaction = state => state.transaction.items;
const isLoading = state => state.transaction.isLoading;

const transactionSelector = {
  getTransaction,
  isLoading,
};

export default transactionSelector;
