const getTransaction = state => state.transaction.items;
const isLoading = state => state.transaction.isLoading;
const isModalAddTransOpen = state => state.transaction.isModalAddTransOpen;
const getCategories = state => state.transaction.categories;
const getStatistics = state => state.transaction.totalTransactions;

const transactionSelector = {
  getTransaction,
  isLoading,
  isModalAddTransOpen,
  getCategories,
  getStatistics,
};

export default transactionSelector;
