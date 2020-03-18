<template>
  <div class="content" v-if="track && track.album" >
    <div class="crad"> 
      <p>
        <img  :src="track.album.images[0].url" />
      </p>
      <p>
        <strong>{{ track.name }}</strong>
        <br />
        <small>{{ track.duration_ms | ms-to-mm }}</small>
      </p>
      <p>
        <audio :src="track.preview_url" autoplay controls></audio>
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
};
</script>

<style scoped>
img {
  width: 128px;
  border-radius: 50%;
}
</style>