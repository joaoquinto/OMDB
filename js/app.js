const vm = new Vue({
  el: "#app",
  data: {
    nomeFilme: "",
    filme: [],
  },
  methods: {
    fetchFilme() {
      fetch(`http://www.omdbapi.com/?t=${this.nomeFilme}&apikey=63b6ca65`)
        .then((response) => response.json())
        .then((body) => (this.filme = body));
    },
  },


});
