import { 
  DATA_FETCHING_STARTED, 
  DATA_FETCHING_SUCCESS, 
  DATA_FETCHING_ERROR,
  SVUOTA_CARRELLO,
  DELETE_ITEM,
  AUMENTA_QTY,
  DIMINUISCI_QTY,
  COSTO_TOTALE 
} from "./actions";

const reducer = (state, {type, payload}) => {
    if(type === DATA_FETCHING_STARTED){
      return {...state, isLoading: true};
    }

    if(type === DATA_FETCHING_SUCCESS){
      return {...state, isLoading: false, isError: false, products: payload.map(el => {
        return {...el, qty: 1}
      })};
    }

    if(type === DATA_FETCHING_ERROR){
      return {...state, isLoading: false, isError: true};
    }

    if(type === SVUOTA_CARRELLO){
      return {...state, products: []};
    }

    if(type === DELETE_ITEM){
      return {
        ...state, products: state.products.filter((el) => el._id !== payload)
      }
    }

    if(type === AUMENTA_QTY){
      return {
        ...state, products: state.products.map((el) => {
          if(el._id === payload){
            return {...el, qty: el.qty + 1}
          }
          return {...el};
        })
      }
    }

    if(type === DIMINUISCI_QTY){
      return {
        ...state, products: state.products.map((el) => {
          if(el._id === payload){
            return {...el, qty: el.qty - 1}
          }
          return {...el};
        })
      }
    }

    if(type === COSTO_TOTALE){
      return {
        ...state, 
        // il metodo reduce è un metodo che permette di ridurre un array ad un singolo valore
        total: state.products.reduce((total, item) => {
          return total + item.qty * item.price
        }, 0)
      }
    }

  return state;
};
  
  export default reducer;