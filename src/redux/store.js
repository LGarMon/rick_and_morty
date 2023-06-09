import { createStore } from 'redux';
import reducer from './reducer';// Importa tus reducers aquí

// Configuración del store
const store = createStore(reducer);

export default store
