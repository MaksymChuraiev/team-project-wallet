const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.user.name;
const getIsFetching = state => state.auth.isFetching;
const getIsError = state => state.auth.isError;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
  getIsFetching,
  getIsError,
};

export default authSelectors;
