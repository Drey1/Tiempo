<footer>
  <div>
    <span>33%</span>
    <strong>Humidity</strong>
  </div>
  <div>
    <span>12 km/h</span>
    <strong>Wind Speed</strong>
  </div>

  <div>
    <span>20º</span>
    <strong>Feels Like</strong>
  </div>
</footer>

<style>
  footer {
    border: 2px solid #000;
    padding: 12px 32px;
    width: 80%;
    margin: auto;
    border-radius: 10px;
    display: flex;
    text-align: center;
    justify-content: space-round;
    font-size: 0.9rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 32px;
  }
  div {
    margin: 0px 10px;
  }
  span {
    display: block;
  }

  strong {
    font-size: 0.8rem;
    font-weight: 600;
    color: #444;
  }
</style>
