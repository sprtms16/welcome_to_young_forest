<template>
    <div class="contents">
      <article>
        <form class="form-inputs" @submit.prevent="todosCreate()">
          <input class="todo_input" type="text" name="name" v-model="title" placeholder="할일을 입력하세요" />
          <button class="button-create"><span class="material-icons">edit</span></button>
        </form>
        <div class="div-table">
          <table>
            <thead>
              <tr>
                <th>Move</th>
                <th>
                  <span class="title-names">
                    Name
                    <span class="material-icons active">arrow_drop_up</span>
                    <span class="material-icons">arrow_drop_down</span>
                  </span>
                </th>
                <th>Del</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(todo, uid) in todos" :key="uid">
                <td><input type="checkbox" @change="todosUpdate(todo, uid)" v-model="todo.done" /></td>
                <td>{{todo.title}}</td>                
                <td class="td-delete">
                  <button class="button-delete" @click="todosDelete(uid)"><span class="material-icons">delete</span></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </article>
    </div>
</template>
<script>

export default {
  data() {
    return {
      title: '',
      todos: []
    }
  },
  methods: {   
    todosCreate() {
    }, 
  },
}
</script>