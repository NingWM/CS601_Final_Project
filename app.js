// app for nav menu
const app = Vue.createApp({
    data() {
        return {
            message: 'Hello, Vue!',
            header: [['Home',"index.html"],
            ['Education',"education.html"], ['Career', "career.html"],
            ['Projects',"projects.html"], ['Cats', 'cats.html'], ['Contact', "contact.html"]]
        }
    }
}).mount('#app');