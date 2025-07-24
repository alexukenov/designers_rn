import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import counterReducer from './testSlice';
import {exampleApi} from 'core/services/ExampleApi';

export const store = configureStore({
  reducer: {
    [exampleApi.reducerPath]: exampleApi.reducer,
    counter: counterReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(exampleApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
