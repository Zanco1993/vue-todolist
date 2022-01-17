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

        currentIndex: 0,
    }, 
    
    methods: {
        addItemText: function() {
            if(this.inputText.text !== '') {
                this.list.push(this.inputText);
                this.inputText = {
                    text: '',
                    done: false,
                }
            }

        },
        //aggiungi la classe strike solo se True
        flagStrike: function (i) {
            let classes = '';
            if(this.list[i].done === true) {
                classes = 'strike';
            } else {
                classes = '';
            }

            return classes
        },
        // cambia da true a false in base al suo stato
        toDoComplete: function(i) {
            this.list[i].done = !this.list[i].done;

        },
        
        taskRemove: function(i) {
            this.list.splice(i, 1);
        }

            




    }
})