import React from 'react'
import { useGetWeatherQuery } from '../../../app/store/weatherQueries'

export default function WeatherContainer() {
  const { data } = useGetWeatherQuery(
    {
      latitude: 35.6785,
      longitude: 139.6823,
    },
    {
      pollingInterval: 5000,
    }
  )

  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}