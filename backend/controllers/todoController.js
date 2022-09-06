const Todos = require("../models/todoModel");

const todoCtrl = {
    getTodos: async (req, res) => {
        try {
            let data = await Todos.find({});
            return res.status(200).json({
                success: true,
                message: "Get todos success",
                data
            })
        } catch (error) {
            console.error(error.message);
            return res.status(400).json({
                success: false,
                message: "Failed to get todos"
            })
        }
    },

    addTodo: async (req, res) => {
        try {
            const {title} = req.body;
            let newTodo = new Todos({
                title
            });
            await newTodo.save();

            return res.status(200).json({
                success: true,
                message: "Add todo success",
                data: newTodo
            })  
        } catch (error) {
            console.error(error.message);
            return res.status(400).json({
                success: false,
                message: "Failed to add todo"
            })
        }
    },

    editTodo: async (req, res) => {
        try {
            const todoId = req.params.todoId;
            const {title} = req.body;

            let editedTodo = await Todos.findByIdAndUpdate(todoId, {title: title}, {new: true});

            return res.status(200).json({
                success: true,
                message: "Edit todo success",
                data: editedTodo
            })  
        } catch (error) {
            console.error(error.message);
            return res.status(400).json({
                success: false,
                message: "Failed to edit todo"
            })
        }
    },

    deleteTodo: async (req, res) => {
        try {
            const todoId = req.params.todoId;
            await Todos.findByIdAndDelete(todoId);

            return res.status(200).json({
                success: true,
                message: "Delete todo success",
            })
        } catch (error) {
            console.error(error.message);
            return res.status(400).json({
                success: false,
                message: "Failed to delete todo"
            })
        }
    },

    completeTodo: async (req, res) => {
        try {
            const todoId = req.params.todoId;

            let completedTodo = await Todos.findByIdAndUpdate(todoId, {completed: true}, {new: true});

            return res.status(200).json({
                success: true,
                message: "Complete todo success",
                data: completedTodo
            })  
        } catch (error) {
            console.error(error.message);
            return res.status(400).json({
                success: false,
                message: "Failed to complete todo"
            })
        }
    }
}

module.exports = todoCtrl;