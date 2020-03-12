<template>
  <section class="hero is-success">
    <div class="hero-head">
      <header class="nav">
        <div class="container">
          <div class="nav-left">
            <div class="nav-item">
              <strong>Play Music</strong>
            </div>
          </div>
          <div class="nav-right nav-menu"></div>
        </div>
      </header>
    </div>
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">Play Music</h1>
        <h2 class="subtitle">Canciones que Vue-nisimas!!!!!</h2>
        <pm-player />
      </div>
    </div>
  </section>
</template>

<script>
import PmPlayer from '../Player.vue'

export default {
  components:{
    PmPlayer
  },
  
}
</script>