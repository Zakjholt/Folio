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
        <strong :key="currentTech" :class="currentTech">{{currentTech}}</strong>
      </transition>
    </div>
    <div class="contact">contact</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 48px;
}

.blurb {
  align-self: center;
}

h4 {
  color: #212122;
}

strong {
  font-size: 32px;
}

$tech-colors: (
  react: #00d8ff,
  vue: #42b883,
  elm: #60b5cc,
  graphql: #42b883,
  go: #01add8,
  elixir: #684877,
  nodejs: #44883e
);

@each $tech, $color in $tech-colors {
  strong.#{$tech} {
    color: $color;
  }
}

.contact {
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  width: 100vw;
  justify-content: center;
  align-items: center;
  height: 60px;
  cursor: pointer;
}
</style>

<script>
export default {
  mounted() {
    const self = this;
    setInterval(() => {
      self.incrementTech();
    }, 2000);
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


