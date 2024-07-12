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

// definisce il reducer che gestisce lo stato e le azioni
const reducer = (state, { type, payload }) => {

  // gestione dell'azione di avvio del fetching dei dati
  if (type === DATA_FETCHING_STARTED) {
    return { ...state, isLoading: true };
  }

  // gestione dell'azione di successo del fetching dei dati
  if (type === DATA_FETCHING_SUCCESS) {
    return {
      ...state,
      isLoading: false,
      isError: false,
      products: payload.map(el => {
        return { ...el, qty: 1 };
      })
    };
  }

  // gestione dell'azione di errore del fetching dei dati
  if (type === DATA_FETCHING_ERROR) {
    return { ...state, isLoading: false, isError: true };
  }

  // gestione dell'azione di svuotamento del carrello
  if (type === SVUOTA_CARRELLO) {
    return { ...state, products: [] };
  }

  // gestione dell'azione di eliminazione di un articolo dal carrello
  if (type === DELETE_ITEM) {
    return {
      ...state,
      products: state.products.filter((el) => el._id !== payload)
    };
  }

  // gestione dell'azione di aumento della quantità di un articolo
  if (type === AUMENTA_QTY) {
    return {
      ...state,
      products: state.products.map((el) => {
        if (el._id === payload) {
          return { ...el, qty: el.qty + 1 };
        }
        return { ...el };
      })
    };
  }

  // gestione dell'azione di diminuzione della quantità di un articolo
  if (type === DIMINUISCI_QTY) {
    return {
      ...state,
      products: state.products.map((el) => {
        if (el._id === payload) {
          return { ...el, qty: el.qty - 1 };
        }
        return { ...el };
      })
    };
  }

  // gestione dell'azione di calcolo del costo totale
  if (type === COSTO_TOTALE) {
    return {
      ...state,
      // il metodo reduce è un metodo che permette di ridurre un array ad un singolo valore
      total: state.products.reduce((total, item) => {
        return total + item.qty * item.price;
      }, 0)
    };
  }

  // gestione dell'azione di calcolo del contatore degli articoli
  if (type === CONTATORE) {
    return {
      ...state,
      itemCounter: state.products.reduce((total, item) => {
        return total + item.qty;
      }, 0)
    };
  }

  // restituisce lo stato attuale se il tipo di azione non corrisponde a nessuna delle condizioni precedenti
  return state;
};


export default reducer;
