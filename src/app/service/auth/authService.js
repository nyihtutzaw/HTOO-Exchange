import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://127.0.0.1:5000/',
        baseUrl: 'http://127.0.0.1:8000/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.userToken
            if (token) {
                console.log("ttkoenn", token)
                // include token in req header
                headers.set('authorization', `Bearer ${token}`)
                return headers
            }
        }
    }),

    endpoints: (builder) => ({
        getUserDetails: builder.query({
            query: () => ({
                // url: 'api/user/profile',
                url: 'api/v1/get-user',
                method: 'GET',
            }),
        }),
    }),
})

export const { useGetUserDetailsQuery } = authApi