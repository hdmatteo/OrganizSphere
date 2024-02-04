const { Router } = require("express");
const { getToDo, saveToDo, updateToDo, deleteToDo } = require("../controllers/ToDoController");

const router = Router();

router.get("/gettodo", getToDo);
router.post("/savetodo", saveToDo );
router.post("/updatetodo", updateToDo );
router.post("/deletetodo", deleteToDo);

module.exports = router;
  