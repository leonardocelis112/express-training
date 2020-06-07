const Sequelize = require("sequelize");

const sequelize = new Sequelize("todo-example", "postgres", "", {
  // gimme postgres, please!
  dialect: "postgres",
});

const Model = Sequelize.Model;
const Todo = class Todo extends Model {};
Todo.init(
  {
    // attributes
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    done: {
      type: Sequelize.BOOLEAN,
      // allowNull defaults to true
    },
  },
  {
    sequelize,
    modelName: "todo",
    timestamps: false,
    // options
  }
);

module.exports = Todo;
