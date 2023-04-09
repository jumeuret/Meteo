import {configureStore} from '@reduxjs/toolkit'
import {CityReducer} from './reducers/CityReducer';

// Reference here all your application reducers
const reducer = {
    cityReducer: CityReducer,
}

// @ts-ignore
const store = configureStore({
    reducer,
},);

export default store;