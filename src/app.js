import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      items: [
        {name: "Buy shopping", isDone: false},
        {name: "Clean bathroom", isDone: true},
        {name: "Car's MOT", isDone: false}
      ],
      newItem: ""
    },
    methods: {
      saveNewItem: function(){
        this.items.push({
          name: this.newItem,
          isDone: false
        });
        this.newItem = "";
      },
      completeItem: function(index){
        this.items[index].isDone = true;
      }
    }
  });
});
