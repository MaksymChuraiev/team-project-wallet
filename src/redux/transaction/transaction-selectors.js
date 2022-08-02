const getTransaction = state => state.transaction.items;
const isLoading = state => state.transaction.isLoading;
const isModalAddTransOpen = state => state.transaction.isModalAddTransOpen;
const getCategoriesList = state => state.transactions.categoriesList;

const transactionSelector = {
  getTransaction,
  isLoading,
  isModalAddTransOpen,
  getCategoriesList,
};

export default transactionSelector;
