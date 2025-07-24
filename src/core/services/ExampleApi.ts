import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';

export const exampleApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.BACKEND_URI,
  }),
  endpoints: builder => ({
    getFact: builder.query({query: () => '/fact'}),
  }),
});

export const {useGetFactQuery} = exampleApi;
