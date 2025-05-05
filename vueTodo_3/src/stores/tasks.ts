import { defineStore } from "pinia";
import {ref, computed} from 'vue'

interface TaskType {
  id: number
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

    const dummyTasks = ref<TaskType[]>([])
    const tasks = ref<TaskType[]>([])
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
        const todos = data.todos
        
        dummyTasks.value = todos.map(t => ({
          id: t.id,
          text: t.todo,
          isDone: t.completed
        }))
          
      } catch (error) {
        console.error('Ошибка при загрузке задач:', error)
    }}
    
    function addTask(text: string) {
      tasks.value.unshift({id: id.value, text, isDone: false})
      id.value++
    }

    function removeTask(id: number, isDummy: boolean){
     
      if (isDummy) {
        dummyTasks.value = dummyTasks.value.filter(t => t.id !== id) 
      } else { 
        tasks.value = tasks.value.filter(t => t.id !== id)
      }
    }

    function setTaskIsDone(id: number, isDummy: boolean) {
      
      if (isDummy) {
        dummyTasks.value = dummyTasks.value.map(t => t.id === id ? {...t, isDone: true} : t)
      } else { 
        tasks.value = tasks.value.map(t => t.id === id ? {...t, isDone: true} : t)
      }
    }
    
    return {dummyTasks, tasksToDo, doneTasks, addTask, removeTask, setTaskIsDone, fetchTasks}
})