const TodoController = require('../../controllers/todo.controller');

describe("TodoController.creareTodo", () => {
    it("should have a createTodo function", () => {
        expect(typeof TodoController.createTodo).toBe("function");
    })
})