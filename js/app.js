const App = {
    data() {
        return {
            title: `Список дел`,
            inputPlaceholder: `Введите текст...`,
            inputValue: ``,
            notes: [],
        }
    },
    methods: {
        addNote() {
            if (this.inputValue !== ``) {
                this.notes.push(this.inputValue)
                this.inputValue = ``
            }
        },
        deleteNote(i) {
            this.notes.splice(i, 1)
        }
    }
}

Vue.createApp(App).mount('#app')