import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const baseUrl='https://lime-wild-lovebird.cyclic.app/'

export const apiSlice=createApi({
    reducerPath:'api',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getProducts:builder.query({
            query:()=>'products'
        }),
        getProduct:builder.query({
            query:(id)=>`products/${id}`
        }),
        //orders
        createOrder:builder.mutation({
            query:(newOrder)=>({
                url:'orders',
                method:'POST',
                body:newOrder
            })
        }),
        getOrder:builder.query({
            query: (ref)=>`orders/${ref}`
        }),
        //PAYMENTS
        createPaymentIntent:builder.mutation({
            query:(data)=>({
                url:'payments/intents',
                method:'POST',
                body:data,
            })
        })
    })
})

export const {useCreatePaymentIntentMutation,useGetProductsQuery,useGetProductQuery,useCreateOrderMutation,useGetOrderQuery}=apiSlice;
// 