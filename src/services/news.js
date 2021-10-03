import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const hnApi = createApi({
  reducerPath: 'hnApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://hn.algolia.com/api/v1/search?query=' }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: (term) => term,
    }),
  }),
})

export const { useGetArticlesQuery } = hnApi;