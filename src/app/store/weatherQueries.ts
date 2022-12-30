
import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import qs from "qs"
import aspida, { HTTPError } from "@aspida/fetch"

import api from '../../apis/meteo/$api'
import { Weather } from '../models/Weather'

type GetWeatherProps = {
  latitude: number
  longitude: number
}

const meteoAxiosClient = api(
  aspida(fetch)
)

export const weatherQueries = createApi({
  reducerPath: 'weatherApi',
  baseQuery: fakeBaseQuery(),
  endpoints: builder => ({
    getWeather: builder.query<Weather, GetWeatherProps>({
      queryFn: async (query: GetWeatherProps) => {
        const weather = await meteoAxiosClient.v1.forecast.$get({
          query: {
            latitude: query.latitude,
            longitude: query.longitude,
            daily: [
              'temperature_2m_max'
            ],
            timezone: 'Asia/Tokyo',
          },
        })
        return {
          data: weather,
        }
      },
    }),
  }),
})

export const { useGetWeatherQuery } = weatherQueries