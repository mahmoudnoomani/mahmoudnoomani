import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '@/features/cart/cartSlice';
import { api } from './api';

const appReducer = (state = {}) => state;

export const store = configureStore({
  reducer: {
    app: appReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;