var express = require("express");
var router = express.Router();
var fromDB = require("../Model/todoModel");

router.get("/", (req, res) => {

    fromDB.getTodo((value) => {
        res.json(value)
    })

})
router.post("/add", (req, res) => {
    console.log("req.body", req.body)
    fromDB.addTodo(req.body.task, (response) => {
        res.json(response);
    })
})
router.post("/del", (req, res) => {
    console.log("req.body", req.body)

    fromDB.deleteTodo(req.body._id, (response) => {
        res.json(response);
    })
})
router.post("/update", (req, res) => {
    console.log("req.body", req.body)

    fromDB.updateTodo(req.body._id, { task: req.body.task }, (response) => {
        res.json(response);
    })
})

module.exports = router