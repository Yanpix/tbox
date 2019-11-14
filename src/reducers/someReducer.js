const someReducer = (state = {}, action) => {
  console.log('action.type =>', action.type);
  return {
    ...state,
  };
};

export default someReducer;
