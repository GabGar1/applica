<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page class="bg-grey-3 column">
    <q-list class="bg-white" separator bordered>
      <div class="row q-pa-sm bg-primary">
        <q-input
          v-model="newTask"
          @keyup.enter="addTask"
          class="col"
          square
          filled
          bg-color="white"
          bottom-slots
          placeholder="Adicionar Tarefa"
          dense
        >
          <template v-slot:before>
            <q-icon name="event" />
          </template>

          <template v-slot:append>
            <q-btn @click="addTask" dense flat icon="add" />
          </template>
        </q-input>
      </div>
      <q-item
        v-for="(task, index) in tasks"
        :key="task.title"
        @click="task.done = !task.done"
        :class="{ 'done bg-purple-1': task.done }"
        clickable
        v-ripple
      >
        <q-item-section avatar>
          <q-checkbox
            v-model="task.done"
            class="no-pointer-events"
            color="primary"
          />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ task.title }}</q-item-label>
        </q-item-section>
        <q-item-section v-if="task.done" side>
          <q-btn
            @click.stop="deleteTask(index)"
            flat
            round
            dense
            color="primary"
            icon="delete"
          />
        </q-item-section>
      </q-item>
    </q-list>
    <h5></h5>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      newTask: "",
      tasks: [
        {
          title: "Maçã",
          done: false,
        },
        {
          title: "Farinha",
          done: false,
        },
        {
          title: "Bolacha",
          done: false,
        },
      ],
    };
  },
  methods: {
    deleteTask(index) {
      this.$q
        .dialog({
          title: "Confirmar",
          message: "Confirmar exclusão?",
          cancel: true,
          persistent: true,
        })
        .onOk(() => {
          this.tasks.splice(index, 1);
          this.$q.notify("Tarefa excluida!");
        });
    },
    addTask() {
      this.task.push({
        title: this.newTask,
        done: false,
      });
    },
  },
});
</script>

<style lang="scss">
.done {
  .q-item__label {
    text-decoration: line-through;
    color: #bbb;
  }
}
</style>
