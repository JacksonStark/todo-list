<template>
  <div
    class="item"

    @mouseover="showDelete = true"
    @mouseleave="showDelete = false"
    v-on:click="deleteTodo(index, item)"
    v-show="showTodo"
  >
    <img class="cover" v-bind:src="item.image_url" />
    <article>{{ item.todo }}</article>
    <img
      v-show="showDelete"
      class="trash"
      src="https://i.ibb.co/893LCnN/pngfind-com-trash-png-471196.png"
    />
  </div>
</template>

<script>

export default {

  props: ["item", "index", "deleteTodo"],
  data() {
    return {
      showDelete: false,
      showTodo: false
    };
  },

  created: function() {
    console.log("created index:", this.index)
    if (this.index - 1 === this.$store.getters.getCurrentTodoIndex ) {
      // if previous todo has rendered
      setTimeout(() => {
        // update state with this todo's index (with delay for animation)
        this.$store.dispatch('renderTodo', this.index)
        this.showTodo = true;
      }, 400)
    }
  },
  
  computed: {
    currentTodo: function () {
      if (this.index - 1 === this.$store.getters.getCurrentTodoIndex ) {
        // if previous todo has rendered
        return this.$store.getters.getCurrentTodoIndex;
      } else {
        return false;
      }
    }
  },

  watch: {
    currentTodo: function(value) {
      console.log("✅✅✅", this.index)
      if (value !== false) {
        // when currentTodo state changes to a new index
        setTimeout(()=> {
          // update state with this todo's index (with delay for animation)
          this.$store.dispatch('renderTodo', this.index)
          this.showTodo = true;
        }, 400)
      }
    }
  }

};
</script>


<style lang="scss" scoped>

// .item-entrance {
//   animation: fadeIn ease 5s;
// }


.item {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 15px;
  font-size: 1em;
  // background: rgba(255,255,255, 0.1);
  border-left: 10px solid #3e9df6;
  margin-top: 55px;
  margin-right: 66px;
  animation: mover 4s ease-in-out infinite, fadeIn ease 4s;
  max-width: 150px;
  cursor: pointer;
}

.item:hover {
  article,
  .cover {
    opacity: 0.25;
  }
}

@keyframes fadeIn {
  0% {
    opacity:0;
  }
  100% {
    opacity:1;
  }
}

@keyframes mover {
  0% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
  50% {
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    transform: translatey(-20px);
  }
  100% {
    box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
    transform: translatey(0px);
  }
}

article {
  margin-top: 15px;
}

img.cover {
  border: 1px solid black;
  border-radius: 23px;
  padding: 5px;
  width: 100px;
}

img.trash {
  position: absolute;
  top: 5.5vh;
  width: 40%;
  height: 40%;
}
</style>
