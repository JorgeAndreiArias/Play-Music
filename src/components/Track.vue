<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-1by1">
        <img :src="track.album.images[0].url" alt />
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
        <div>
          <small>{{ duration }}</small>
          <nav class="level">
            <div class="level-left">
              <a class="level-item">
                <span class="icon is-largue" @click="selecTrack()">&#9658;</span>
              </a>
            </div>
          </nav>
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
  computed: {
    duration() {
      var ms = this.track.duration_ms;
      var min = Math.floor(ms / 60000);
      var sec = ((ms % 60000) / 1000).toFixed(0);
      return `${min}:${sec}`;
    }
  },
  methods: {
    selecTrack() {
      this.$emit("select", this.track.id);
      this.$bus.$emit('set-track', this.track);
    }
  }
};
</script>

<style scoped>
</style>