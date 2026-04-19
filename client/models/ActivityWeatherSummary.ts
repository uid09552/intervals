/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
 
import type { WindRose } from './WindRose';
export type ActivityWeatherSummary = {
    start_index?: number;
    end_index?: number;
    start_secs?: number;
    end_secs?: number;
    moving_time?: number;
    whole_activity?: boolean;
    wind_speed?: WindRose;
    wind_gust?: WindRose;
    apparent_wind_speed?: WindRose;
    apparent_wind_gust?: WindRose;
    average_temp?: number;
    min_temp?: number;
    max_temp?: number;
    average_weather_temp?: number;
    min_weather_temp?: number;
    max_weather_temp?: number;
    average_feels_like?: number;
    min_feels_like?: number;
    max_feels_like?: number;
    average_wind_speed?: number;
    min_wind_speed?: number;
    max_wind_speed?: number;
    average_wind_gust?: number;
    min_wind_gust?: number;
    max_wind_gust?: number;
    prevailing_wind_deg?: number;
    average_yaw?: number;
    headwind_percent?: number;
    tailwind_percent?: number;
    max_rain?: number;
    max_showers?: number;
    max_snow?: number;
    average_clouds?: number;
    description?: string;
};

