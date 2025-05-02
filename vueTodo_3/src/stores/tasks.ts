import { defineStore } from "pinia";
import {ref, computed} from 'vue'

interface TaskType {
    id: number
    text: string
    isDone: boolean
}

export const useTasksStore = defineStore('tasks', () => {
    
    const tasks = ref<TaskType[]>([])
    const tasksToDo = computed(() => tasks.value.filter(t => !t.isDone))
    const doneTasks = computed(() => tasks.value.filter(t => t.isDone))
    const id = ref<number>(0)
    
    function addTask(text: string) {
        tasks.value.unshift({id: id.value, text, isDone: false})
        id.value++
    }

    function removeTask(id: number){
        tasks.value = tasks.value.filter(t => t.id !== id)
    }

    function setTaskIsDone(id: number) {
        tasks.value = tasks.value.map(t => t.id === id ? {...t, isDone: true} : t)
    }
    
    return {tasksToDo, doneTasks, addTask, removeTask, setTaskIsDone}
})