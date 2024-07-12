// importa i moduli necessari da React, il reducer personalizzato e axios
import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import axios from "axios";

// importa le costanti delle azioni dai tipi di azioni
import { 
    DATA_FETCHING_STARTED, 
    DATA_FETCHING_SUCCESS, 
    DATA_FETCHING_ERROR,
    SVUOTA_CARRELLO,
    DELETE_ITEM,
    AUMENTA_QTY,
    DIMINUISCI_QTY,
    COSTO_TOTALE,
    CONTATORE
} from "./actions";

// definisce l'URL dell'API
const url = "https://react--course-api.herokuapp.com/api/v1/data/cart";

// stato iniziale dell'applicazione
const initialState = {
  products: [],
  isLoading: true,
  isError: false,
  total: 0,
  itemCounter: 0,
};

// crea il contesto dell'applicazione
const AppContext = React.createContext();

// definisce il provider del contesto dell'applicazione
const AppProvider = ({ children }) => {
  // utilizza useReducer per gestire lo stato e le azioni
  const [state, dispatch] = useReducer(reducer, initialState);

  // cancella un singolo item
  const deleteItem = (_id) => {
    dispatch({ type: DELETE_ITEM, payload: _id });
  }

  // cancella tutti gli item
  const deleteAll = () => {
    dispatch({ type: SVUOTA_CARRELLO });
  }

  // aumenta la quantità di un item
  const addQty = (_id) => {
    dispatch({ type: AUMENTA_QTY, payload: _id });
  }

  // diminuisce la quantità di un item
  const removeQty = (_id) => {
    dispatch({ type: DIMINUISCI_QTY, payload: _id });
  }

  // usa useEffect per eseguire il fetching dei dati dall'API al montaggio del componente
  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: DATA_FETCHING_STARTED }); // avvia il fetching dei dati
      try {
        const response = await axios.get(url); // esegue una richiesta GET all'API
        dispatch({ type: DATA_FETCHING_SUCCESS, payload: response.data.data }); // imposta i dati ottenuti nel contesto
      } catch (error) {
        dispatch({ type: DATA_FETCHING_ERROR }); // gestisce eventuali errori
      }
    };
    fetchData(); // chiama la funzione fetchData
  }, []); // array delle dipendenze vuoto per eseguire l'effetto solo una volta al montaggio

  // usa useEffect per calcolare il costo totale e il contatore degli articoli ogni volta che i prodotti cambiano
  useEffect(() => {
    dispatch({ type: COSTO_TOTALE }); // calcola il costo totale
    dispatch({ type: CONTATORE }); // calcola il contatore degli articoli
  }, [state.products]); // esegue l'effetto quando lo stato dei prodotti cambia

  return (
    // fornisce lo stato e le funzioni al resto dell'applicazione
    <AppContext.Provider value={{ 
        ...state, 
        deleteItem,
        deleteAll,
        addQty,
        removeQty
    }}>
      {children}
    </AppContext.Provider>
  );
};

// definisce un hook personalizzato per utilizzare il contesto globale
const useGlobalContext = () => {
  return useContext(AppContext);
};


export { AppProvider, useGlobalContext };
