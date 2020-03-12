<template>
  <div class="content">
    <div class="crad"> 
      <p>
        <img :src="track.album.images[0].url" />
      </p>
      <p>
        <strong>{{ track.name }}</strong>
        <br />
        <small>{{ duration }}</small>
      </p>
      <p>
        <audio :src="track.preview_url" controls></audio>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      track: {}
    };
  },
  created() {
    this.$bus.$on("set-track", track => {
      this.track = track;
    });
  },
  computed: {
    duration() {
      var ms = this.track.duration_ms;
      var min = Math.floor(ms / 60000);
      var sec = ((ms % 60000) / 1000).toFixed(0);
      return `${min}:${sec}`;
    }
  }
};
</script>

<style scoped>
img {
  width: 128px;
  border-radius: 50%;
}
</style>