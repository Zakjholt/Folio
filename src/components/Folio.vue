<template>
  <div class="container">
    <h4>Zak</h4>

    <div class="blurb">
      <transition
        name="custom-classes-transition"
        mode="out-in"
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <span :key="currentTech" :class="currentTech">{{currentTech}}</span>
      </transition>
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 48px;

  color: #212122;
}

h4 {
  font-size: 16px;
}

.blurb {
  font-size: 10px;
}

span {
  font-size: 24px;
}

.blurb h4 {
  font-weight: 900;
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


