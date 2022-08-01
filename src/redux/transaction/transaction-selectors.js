const getTransaction = state => state.transaction.items;
const isLoading = state => state.transaction.isLoading;
const isModalAddTransOpen = state => state.transaction.isModalAddTransOpen;

const transactionSelector = {
  getTransaction,
  isLoading,
  isModalAddTransOpen,
};

export default transactionSelector;
