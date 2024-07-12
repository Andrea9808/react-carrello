import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";
import { 
    DATA_FETCHING_STARTED, 
    DATA_FETCHING_SUCCESS, 
    DATA_FETCHING_ERROR,
    SVUOTA_CARRELLO,
    DELETE_ITEM
 } from "./actions";

const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";

const initialState = {
  products: [],
  isLoading: true,
  isError: false,
  total: 0,
  itemCounter: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // cancella un singolo item
  const deleteItem = (_id) => {
    dispatch({ type: DELETE_ITEM, payload: _id });
  }

  // cancella tutti gli item
  const deleteAll = () => {
    dispatch({ type: SVUOTA_CARRELLO });
  }

    

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: DATA_FETCHING_STARTED });
      try {
        const response = await axios.get(url);
        dispatch({ type: DATA_FETCHING_SUCCESS, payload: response.data.data });
      } catch (error) {
        dispatch({ type: DATA_FETCHING_ERROR });
      }
    };
    fetchData();
  }, []);

  return (
    <AppContext.Provider value={{ 
        ...state, 
        deleteItem,
        deleteAll
    }}>
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
