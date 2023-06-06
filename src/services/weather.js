export async function getWeatherFrom(city = "Granada") {
    return fetch(`./api/get-weather?q=${city}`).then((res) => res.json());
}
