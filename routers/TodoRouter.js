const router = require("express").Router();
const todoController = require("../controller/TodoController");

router.get("/get", todoController.getTodo);
router.post("/add", todoController.addTodo);
router.put("/update/:id", todoController.updateTodo);
router.delete("/delete/:id", todoController.deleteTodo);
router.put("/complete/:id", todoController.completeTodo);

module.exports = router;
