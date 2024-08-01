export const useColor = defineStore('colorStore', {
  state: () => ({
    name: '',
    color: '',
    count: 0
  }),
  actions: {
    getColor() {
      this.name = 'colorName'
      this.color = 'pink'
      this.count++
    }
  }
})

