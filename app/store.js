import { configureStore } from '@reduxjs/toolkit';
import favouritesReducer from '../components/favourites/favouritesSlice'
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: {
    favourites: favouritesReducer,
  },
  middleware: [thunk],
});

export default store;
