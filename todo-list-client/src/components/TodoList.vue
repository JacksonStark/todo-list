<template>
  <div class="container">
    <h1>My Todos</h1>
    <!-- ENTER TODO -->
    <form @submit.prevent="addTodo">
      <input
        ref="todoinput"
        type="text"
        placeholder="Enter a todo..."
        v-model="todo"
        autofocus="true"
      />
    </form>

    <!-- ERROR HANDLING -->
    <p v-if="showError" class="error">{{ showError }}</p>

    <!-- TODO ITEMS -->
    <ul>
      <li class="todo-card" v-for="(item, index) in loadedTodos" :key="index">
        <TodoItem v-bind:item="item" v-bind:index="index" v-bind:deleteTodo="deleteTodo" />
      </li>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";

export default {
  name: "Todos",
  components: {
    TodoItem
  },

  beforeCreate: function() {
    this.$store.dispatch("loadTodos");
  },

  computed: {
    loadedTodos: function () {
      return this.$store.getters.getTodos;
    }
  },

  data() {
    return {
      todo: "",
      showError: "",
      // todos: this.$store.getters.getTodos
    };
  },

  watch: {
    todo: function() {
      this.showError = "";
    }
  },

  methods: {
    addTodo() {
      console.log(this.$store.state.getTodos);
      if (this.todo === "") {
        this.showError = "You actually have to type something :)";
        return;
      }
      fetch(
        // request for keyword analyzations
        "http://api.cortical.io:80/rest/text/keywords?retina_name=en_associative",
        { method: "post", headers: {}, body: JSON.stringify(this.todo) }
      )
        .then(res => res.text())
        .then(res => {
          let keywords = JSON.parse(res);
          if (keywords.length === 0) {
            this.showError = "Be more descriptive with your words :)";
            return;
          }
          let keyword = JSON.parse(res)[0];
          fetch(
            // request for relevant visual
            `https://api.unsplash.com/search/photos?client_id=SFK5BeizYJkMY6aiv6ST5EqMJFInZRNR22D7QturUec&query=${keyword}&orientation=squarish`
          )
            .then(res => res.text())
            .then(res => {
              let imageResult = JSON.parse(res).results[0].urls.small;
              console.log({ imageResult });
              // push the newly fetched data to the the todos and reset input
              this.$store.dispatch("addTodo", {
                id: this.$store.state.todos[this.$store.state.todos.length - 1].id + 1,
                todo: this.todo,
                image_url: imageResult
              });
              this.todo = "";
            });
        })
        .catch(error => console.log(error));
    },

    deleteTodo(index, id) {
      console.log(id)
      this.$store.dispatch("deleteTodo", { index, id });
    }
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  margin-left: 28px;
}

.container {
  text-align: center;
}

input {
  width: 50%;
  /* margin: 0 auto; */
  border: 0;
  border-radius: 18px;
  padding: 20px;
  font-size: 1.2em;
  height: 20px;
  background-color: #323333;
  color: #687f7f;
  opacity: 0.8;
  transition: opacity 1s, box-shadow 0.5s;
}

input:hover {
  font-weight: 400;
  box-shadow: 5px 5px 5px aqua;
  opacity: 1;
  transition: opacity 1s, box-shadow 0.5s;
}

input:focus {
  outline: none;
}

.error {
  text-align: center;
  /* width: 80%; */
  font-size: 1.2em;
  color: maroon;
  font-style: italic;
}

h1 {
  font-family: "Bungee";
  font-size: 2.5em;
  margin-bottom: 10vh;
}
</style>
