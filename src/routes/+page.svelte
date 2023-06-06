<script>
  let city = "Granada";
  import { getWeatherFrom } from "../services/weather";
  import WeatherFooter from "../components/weather-footer.svelte";
  import WeatherIcon from "../components/weather-icon.svelte";
</script>

{#await getWeatherFrom(city) then weather}
  <section>
    <h1>{weather.locationName}</h1>
    <h2>{weather.temperature}º</h2>
    <h3>{weather.conditionText}</h3>
    <WeatherIcon icon={weather.icon} />
  </section>
  <WeatherFooter />
{/await}

<style>
  section {
    padding: 16px;
  }
  h1 {
    color: #333;
    font-weight: 300;
    padding: 0;
  }
  h2 {
    color: #333;
    font-weight: 300;
    font-size: 90px;
    padding: 0;
  }
  h3 {
    font-weight: 400;
    transform: rotate(-90deg);
    position: absolute;
    top: 155px;
    right: 0px;
  }
</style>
