<template>
  <div class="container">
    <h4>Zak</h4>

    <transition-group
      mode="out-in"
      enter-active-class="animated fadeInRightBig"
      leave-active-class="animated fadeOutLeftBig"
    >
      <ul class="contact-details" key="contact" v-if="showContact">
        <li>
          <a href="mailto:zak.j.holt@gmail.com">zak.j.holt@gmail.com</a>
        </li>
        <li>
          <a href="http://github.com/zakjholt">github.com/zakjholt</a>
        </li>
      </ul>
      <div class="blurb" key="techs" v-else>
        <transition
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <strong :key="currentTech" :class="currentTech">{{currentTech}}</strong>
        </transition>
      </div>
    </transition-group>
    <div class="contact" @click="toggleShowContact">{{actionText}}</div>
  </div>
</template>

<style scoped lang="scss">
.container {
  padding: 48px;
  position: relative;
  height: 100vh;
}

.blurb,
.contact-details {
  position: absolute;
  top: 20vh;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.contact-details {
  list-style: none;
  padding-left: 0;

  li {
    margin-top: 16px;
  }

  a {
    color: #232322;
  }
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
      showContact: false,
      techs: ["react", "vue", "elm", "graphql", "go", "elixir", "nodejs"],
      index: 0
    };
  },

  methods: {
    toggleShowContact() {
      this.showContact = !this.showContact;
    },

    incrementTech() {
      this.index === this.techs.length - 1 ? (this.index = 0) : this.index++;
    }
  },

  computed: {
    currentTech: function() {
      return this.techs[this.index];
    },

    actionText: function() {
      return this.showContact ? "back" : "contact";
    }
  }
};
</script>


