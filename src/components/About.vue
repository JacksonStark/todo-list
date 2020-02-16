<template>
  <div class="about">
    <h1>About</h1>
    <section class="sub-heading">
      <article>This was a 2-day challenge to learn 2 things:</article>
      <aside>1. Vue.js on the front-end.</aside>
      <aside>2. Lavarel (php) on the back-end.</aside>
    </section>

    <section class="utilizations">
      <article>2 API's were utilized</article>
      <aside>1. Cortical -- for analyzing keywords.</aside>
      <aside>2. Unsplash -- for querying relevant visuals.</aside>
    </section>
  </div>
</template>

<style scoped>
  .about {
    display: flex;
    flex-direction: column;
    text-align: center
  }

  h1 {
    font-family: "Bungee";
    font-size: 2.5em;
    margin-bottom: 7vh;
  }

  section {
    font-family: "Montserrat";
  }

  article {
    font-size: 1em;
    margin-bottom: 1em;
  }

  aside {
    font-size: 0.7em;
    margin-bottom: 1em;
  }

  .utilizations {
    margin-top: 6vh
  }

</style>