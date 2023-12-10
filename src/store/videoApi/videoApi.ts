import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

type VideoDataType = {
  description: string
  sources: string[]
  subtitle: string
  thumb: string
  title: string
}

const API_URL = 'http://localhost:3004'

export const videoApi = createApi({
  reducerPath: 'videoApi',
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL
  }),
  endpoints(builder) {
    return {
      fetchVideos: builder.query<VideoDataType[], void>({
        query() {
          return {
            url: '/videos',
            method: 'GET'
          }
        }
      })
    }
  }
})

export const { useFetchVideosQuery } = videoApi
