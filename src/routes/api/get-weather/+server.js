import { json } from '@sveltejs/kit';

const FETCH_OPTIONS = {
    method: "GET",
    headers: {
        "X-RapidAPI-Key": "33e3732556msh9d677245b5c0aa8p10642bjsnd51e349114c9",
        "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
};


export async function GET(event) {

    const { searchParams } = event.url;
    const city = searchParams.get('q') ?? "Granada";

    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, FETCH_OPTIONS);
    const data = await response.json();

    const { location, current } = data;
    const { country, localtime, name } = location;
    const {
        condition,
        humidity,
        feelslike_c,
        is_day,
        temp_c,
        wind_kph,
        wind_dir,
    } = current;
    const { text, icon } = condition;

    return json({
        icon,
        conditionText: text,
        country,
        localTime: localtime,
        locationName: name,
        humidity,
        isDay: is_day,
        feelsLike: feelslike_c,
        temperature: temp_c,
        windSpeed: wind_kph,
        windDir: wind_dir,
    });
}