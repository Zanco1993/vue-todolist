new Vue({
    el: "#app",
    data: {
        list: [
            {
                text: 'prova',
                done: false,
            },
            {
                text: 'prova',
                done: false,
            },
            {
                text: 'prova',
                done: false,
            },
           
        ],

        // creo un oggetto dove text viene compilato dall'utente
        
        inputText: {
            text: '',
            done: false,
        },
    }, 
    
    methods: {
        addItemText: function() {
            this.list.push(this.inputText);
            this.inputText = {
                text: '',
                done: false,
            }
        },
        toDoComplete: function (i) {

            this.list[i].done = true;
            
        }


    }
})