baseapp.component('inputexample', 
    {
        props: ["form"],
        delimiters : ['((', '))'],
        data(){
            return {
                selectedInputType: 0,
                inputType: ["text", "radio", "select"],
                inputNum: [1,3,3],
                inputValue: [[""], ["spaghetti", "hamburger", "steak"], ["apple", "banana", "guava"]],
            }
        },
        methods:{
        },
        mounted: function(){
        },
        created: function(){
        },
        updated: function(){
        },
        beforeUpdate: function(){
        },
        template: 
        `
        <div class="row">
            <div class="col-md-4 mb-4">
                <p>Please input your name.</p>
                <input v-model="form.name">
            </div>
            <hr>
            <div class="col-md-4 mb-4">
                <p>What do you want for lunch?</p>
                <div v-for="i in inputNum[1]">
                    <input :id="'input'+i" type="radio" v-model="form.lunch" :value="inputValue[1][i-1]">
                    <label :for="'input'+i" v-text="inputValue[1][i-1]"></label>
                </div>
            </div>
            
            <div class="col-md-4 mb-4">
                <p>Choose one fruit you want.</p>
                <select v-model="form.fruit">
                    <option :value="null">choose a fruit</option>
                    <option v-for="v in inputValue[2]" :value="v">((v))</option>
                </select>
            </div>
        </div>
        `
    }
)