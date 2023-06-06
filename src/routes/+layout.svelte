<main>
  <slot />
</main>

<style>
  :global(body) {
    background: #fdfdfd;
    display: grid;
    place-content: center;
    min-height: 100vh;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  :global(*, *::after, *::before) {
    box-sizing: border-box;
  }

  :global(h1, h2, h3, h4, h5) {
    margin: 0;
  }

  main {
    aspect-ratio: 9 / 16;
    max-width: 100%;
    width: 400px;
    border: 1px solid #eee;
    display: block;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    position: relative;
  }
</style>
