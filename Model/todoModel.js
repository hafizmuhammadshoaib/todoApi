var db = require('../dbConnection');
const Schema = db.Schema;

const TodoSchema = new Schema({
    task: String
})
const Todo = db.model("todo", TodoSchema);

class ModalClass {

    static getTodo(cb) {
        Todo.find({}).then(value => {
            console.log("from DB::::", value)
            cb(value)
        }).catch(err => {
            cb(err);
        })
        console.log("first");
    }
    static addTodo(value, cb) {
        console.log("task::::",value)
        let todo = new Todo({ task: value });
        todo.save().then(response => {
            cb(response)
        }).catch(err => {
            cb(err);
        })
    }
    static deleteTodo(id,cb){
        Todo.findByIdAndRemove(id).then(value=>{
            cb(value);
        }).catch(err=>{
            cb(err);
        })
    }
    static updateTodo(id,obj,cb){
        Todo.findByIdAndUpdate(id,obj,{new:true}).then(value=>{
            cb(value);
        }).catch(err=>{
            cb(value)
        })
    }
}

module.exports = ModalClass