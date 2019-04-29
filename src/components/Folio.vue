<template>
  <div class="container">
    <h4>Zak</h4>

    <div>
      <transition
        name="custom-classes-transition"
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <strong :key="currentTech" :class="currentTech">{{currentTech}}</strong>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 48px;
}

h4 {
  color: #212122;
}

strong {
  font-size: 32px;
}
</style>

<script>
export default {
  mounted() {
    const self = this;
    setInterval(() => {
      self.incrementTech();
    }, 1000);
  },

  data() {
    return {
      techs: ["react", "vue", "elm", "graphql", "go", "elixir", "nodejs"],
      index: 0
    };
  },

  methods: {
    incrementTech() {
      this.index === this.techs.length - 1 ? (this.index = 0) : this.index++;
    }
  },

  computed: {
    currentTech: function() {
      return this.techs[this.index];
    }
  }
};
</script>


