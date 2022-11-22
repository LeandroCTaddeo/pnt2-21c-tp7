<template>
  <section>
    <div class="jumbotron">
      <h2>Cliente Http</h2>
      <hr />
      <hr />

      <div v-if="personas.length" class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Email</th>
          </tr>

          <tr v-for="p in personas" :key="p.id">
            <td>{{ p.id }}</td>
            <td>{{ p.nombre }}</td>
            <td>{{ p.edad }}</td>
            <td>{{ p.email }}</td>
          </tr>
        </table>
      </div>
      <h4 v-else class="alert alert-danger text-center">
        No hay usuarios disponibles
      </h4>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-componentes-http-client",
  mounted() {
    this.getPersonas()
  },
  data() {
    return {
      url: "https://635a938f38725a1746ca7a08.mockapi.io/usuarios",
      personas: [],
    };
  },
  methods: {
    async getPersonas() {
      try {
        let respuesta = await this.axios(this.url)
        this.personas = respuesta.data
      } catch (error) { console.error('Error en getPersonas', error.message) }
    },
  },
}
</script>

<style scoped lang="css"> </style>