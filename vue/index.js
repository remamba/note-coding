//组件
Vue.component('list-item', {
    props : ['todo'],
    template: '<li> {{ todo.text }}</li>'
})

let app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        seen: true,
        todos: [
            {text: "apple"},
            {text: "banana"},
            {text: "orange"}
        ],
        items: [
            {
                id: 1,
                text: "Anna"
            },
            {
                id: 2,
                text: "Bob"
            }
        ]
    },
})

let obj = {
    foo: 'test'
}

// Object.freeze(obj)
//插值
let app2 = new Vue({
    el: "#app2",
    data: {
        rawHtml: '<span style="color: red">This should be red.</span>',
        shouldDis: "22",
        attributename: 'href',
        url: "http://www.baidu.com"
    }
})

//侦听数据
let app3 = new Vue({
    el: "#app3",
    data: {
        firstName: "wang",
        lastName: "xu"
    },
    computed: {
        fullName: {
            get: function(){
                return this.firstName + this.lastName;
            },
            set: function(val){
                let names = val.split(" ");
                this.firstName = names[0];
                this.lastName = names[1];
            }

        }
    }
})

//条件渲染
let app4 = new Vue({
    el: "#app4",
    data: {
        show: true
    },

})