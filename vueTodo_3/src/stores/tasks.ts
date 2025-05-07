import { defineStore } from "pinia";
import {ref, computed} from 'vue'

interface Todo {
  id: string
  text: string
  isDone: boolean
}

interface ApiTodo {
  id: number
  todo: string
  completed: boolean
  userId: number
}

interface ApiResponse {
  todos: ApiTodo[]
  total: number
  skip: number
  limit: number
}

export const useTasksStore = defineStore('tasks', () => {

    const tasks = ref<Todo[]>([])
    const tasksToDo = computed(() => tasks.value.filter(t => !t.isDone))
    const doneTasks = computed(() => tasks.value.filter(t => t.isDone))
    const id = ref<number>(0)

    const fetchTasks = async (): Promise<void> => {
      try {
        const response = await fetch('https://dummyjson.com/todos')

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
          
        const data: ApiResponse = await response.json()
        const todos = data.todos.map(t => ({
            id: t.id.toString() + '_d',
            text: t.todo,
            isDone: t.completed
          })
        )
        
        tasks.value = tasks.value.concat(todos)
          
      } catch (error) {
        console.error('Ошибка при загрузке задач:', error)
      }
    }
    
    function addTask(text: string) {
      tasks.value.unshift({id: id.value.toString(), text, isDone: false})
      id.value++
    }

    function removeTask(id: string){
        tasks.value = tasks.value.filter(t => t.id !== id)
    }

    function setTaskIsDone(id: string) {
        tasks.value = tasks.value.map(t => t.id === id ? {...t, isDone: true} : t)
    }
    
  return {tasksToDo, doneTasks, addTask, removeTask, setTaskIsDone, fetchTasks}
})