<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset-4">
        <div
          class="notification"
          :class="{'is-danger' : isSuccess == 'danger', 'is-success' : isSuccess == 'success'}"
        >
          <slot name="body">
            <h1>No se encontró la cancion</h1>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
      isSuccess: {
          type: String, required: true
      }
  }
};
</script>

<style scoped>
.notification {
  margin: 10px;
}
</style>