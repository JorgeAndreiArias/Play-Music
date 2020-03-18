<template>
  <div class="card" @click="selecTrack()" v-blur="track.preview_url">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url" alt />
        <img class="play" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-left">
          <figure class="image is-48x48">
            <img :src="track.album.images[0].url" alt />
          </figure>
        </div>
        <div class="media-content">
          <p class="tittle is-6">
            <strong>{{ track.name }}</strong>
          </p>
          <p class="subtitle is-6">{{ track.artists[0].name }}</p>
        </div>
        <div class="container">
          <small>{{ track.duration_ms | ms-to-mm }}</small>
          <!-- <nav class="level">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-largue" ><img  src="https://img.icons8.com/flat_round/2x/play.png"></span>
              </a>
            </div>
          </nav>-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    track: { type: Object, required: true }
  },
  methods: {
    selecTrack() {
      if (this.track.preview_url) {
        this.$emit("select", this.track.id);
        this.$bus.$emit("set-track", this.track);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    goToTrack(id) {
      this.$router.push({
        name: "track",
        params: { id }
      });
    }
  }
};
</script>

<style scoped>
.play {
  position: absolute !important;
  top: 0 !important;
  left: 0 !important;
  background-image: linear-gradient(
      to bottom,
      rgba(245, 252, 247, 0.24),
      rgba(19, 117, 76, 0.73)
    ),
    url("https://img.icons8.com/carbon-copy/2x/play-button-circled.png");

  background-size: cover;
}
</style>