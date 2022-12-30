import React from 'react'
import { x } from '@xstyled/styled-components'
import { useGetWeatherQuery } from '../../../store/weatherQueries'

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
    <x.div>
      <x.h2>Weather</x.h2>
      <x.p>This is an example implementation of the React Tool kit, RTK Query and Aspida</x.p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </x.div>
  )
}