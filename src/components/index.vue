<template>
  <div>
    <pm-header />
    <pm-notification :isSuccess="showNotification" v-show="showNotification != ''">
      <p slot="body" v-if="showNotification === 'success'"> Disfruta la musica!!!!</p>
    </pm-notification>
    <pm-loader v-show="isLoading" />
    <section v-show="!isLoading" class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <input
            type="text"
            class="input is-large"
            placeholder="Buscar canciones"
            v-model="searchQuery"
          />
          <a href class="button is-info is-large" @click.prevent="search">Buscar</a>
          <a href class="button is-danger is-large">&times;</a>
        </div>
      </nav>
      {{ searchMessage }}
      <div class="container results">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="(t, index) in tracks" :key="index">
            <pm-track
              :track="t"
              @select="setSelectedTrack(t.id)"
              :class="{ 'is-active' : t.id == selectedTrack }"
            />
          </div>
        </div>
      </div>
    </section>
    <PmFooter />
  </div>
</template>

<script>
import trackService from "../services/track.js";
import PmFooter from "./layout/footer.vue";
import PmHeader from "./layout/header.vue";
import PmTrack from "./Track.vue";
import PmLoader from "./shared/Loader.vue";
import PmNotification from "./shared/Notification.vue";

export default {
  components: {
    PmFooter,
    PmHeader,
    PmTrack,
    PmLoader,
    PmNotification
  },
  data() {
    return {
      searchQuery: "",
      tracks: [],
      isLoading: false,
      selectedTrack: "",
      showNotification: ""
    };
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`;
    }
  },
  watch: {
    showNotification() {
      if(this.showNotification != ''){
        setTimeout(() => {
          this.showNotification = ''
        }, 3000);
      }
    }
  },
  methods: {
    search() {
      if (!this.searchQuery) {
        return;
      }
      this.isLoading = true;
      trackService.search(this.searchQuery).then(res => {
        this.showNotification = res.tracks.total === 0 ? 'danger' : 'success';
        this.tracks = res.tracks.items;
        this.isLoading = false;
      });
    },
    setSelectedTrack(id) {
      this.selectedTrack = id;
    }
    //addProp(){

    // Funcion que añade atributos al data y se renderiza con
    //this.tracks = Object.assign({}, this.tracks, {a: 1, b: 2})
    //}
  }
};
</script>

<style scoped>
.results {
  margin-top: 50px;
}

.is-active {
  border: 3px springgreen solid;
}
</style>
