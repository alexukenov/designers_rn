import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {NameAge} from 'common/entity/NameAge';
import Config from 'react-native-config';
import {NameAgeResponse} from './dto/NameAgeResponse';

export const exampleApi = createApi({
  reducerPath: 'exampleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: Config.BACKEND_URI,
  }),
  endpoints: builder => ({
    getFact: builder.query<NameAge, string>({
      query: name => ({
        url: '/',
        params: {name},
      }),
      transformResponse: (response: NameAgeResponse): NameAge => ({
        name: response.name,
        age: response.age,
      }),
    }),
  }),
});

export const {useGetFactQuery} = exampleApi;
