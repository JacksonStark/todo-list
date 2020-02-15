<template>
  <div class="hello">
    <div class="container">
      <form @submit.prevent="addTodo">
        <input type="text" placeholder="Enter a todo..." v-model="todo">
      </form>

      {{ todo }}
      <ul>
        <li v-for="(data, index) in todos" :key="index">{{ data.todo }}</li>
      </ul>
      <h3>These are your Todos for the day</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todos",
  data() {
    return {
      todo: "",
      todos: [{ todo: "Go to movie" }, { todo: "Do laundry" }]
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ todo: this.todo });
      this.todo = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.holder {
  background: #fff;
}
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 10px solid #3e9df6;
  margin-bottom: 2px;
  color: #3e5252;
}
p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}
.container {
  box-shadow: 0px 0px 40px lightgray;
}

input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
</style>
