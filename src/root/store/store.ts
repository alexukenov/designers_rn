import {configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import phoneReducer from 'features/auth/state/testSlice';
import {exampleApi} from 'features/splash/network/ExampleApi';

export const store = configureStore({
  reducer: {
    [exampleApi.reducerPath]: exampleApi.reducer,
    phone: phoneReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(exampleApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
