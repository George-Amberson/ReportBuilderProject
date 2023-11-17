import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useReports = defineStore('Reports', () => {
  const search = ref<string>("")
  const themeTypes = ref([
  {
    id: 0,
    title: "Report one",
    author: "George Amberson",
    tags: ["A", "B", "C"],
    date: new Date(),
  },
  {
    id: 1,
    title: "Report two",
    author: "Andy Wylson",
    tags:  ["D", "E", "F"],
    date: new Date(),
  },
  {
    id: 2,
    title: "Report three",
    author: "Emmi Yotson",
    tags: ["D", "C", "C"],
    date: new Date(),
  },
])
  const getReports = computed(() => themeTypes.value.filter((cv)=>{
    return cv.title.includes(search.value)
  }))

  return { search, getReports }
})
