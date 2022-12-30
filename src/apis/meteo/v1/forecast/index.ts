import { Weather } from '../../../../app/models/Weather'

export type Methods = {
  get: {
    query: {
      latitude: number
      longitude: number
      daily: string[]
      timezone: string
    }
    resBody: Weather
  }
}

/*
https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&hourly=temperature_2m&timezone=Asia%2FTokyo
https://api.open-meteo.com/v1/forecast?latitude=35.6785&longitude=139.6823&daily=weathercode%2Ctemperature_2m_max%2Ctemperature_2m_min%2Cprecipitation_hours&timezone=Asia%2FTokyo
*/