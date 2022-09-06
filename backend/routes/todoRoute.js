const router = require("express").Router();
const todoCtrl = require("../controllers/todoController");

//get todos
router.get("/", todoCtrl.getTodos);

//add todos
router.post("/add", todoCtrl.addTodo);

//edit todo
router.patch("/edit/:todoId", todoCtrl.editTodo);

//delete todo
router.delete("/delete/:todoId", todoCtrl.deleteTodo);

//complete todo
router.patch("/complete/:todoId", todoCtrl.completeTodo);

module.exports = router;
