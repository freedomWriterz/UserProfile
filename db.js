const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/profile", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

let usersSchemaa = new mongoose.Schema({
  title: String,
  age: Number,
  isCompleted: Boolean
});

let Users = mongoose.model("users", usersSchemaa);

let getTasks = cb => {
  Users.find({}, (err, data) => {
    if (err) {
      cb(err);
    } else {
      cb(data);
    }
  });
};

let addTask = (task, cb) => {
  Tasks.create(task, (err, result) => {
    if (err) {
      cb(err);
    } else {
      getTasks(cb);
    }
  });
};

let updateTask = (id, cb) => {
  Tasks.find({ _id: id }, (err, task) => {
    if (err) {
      cb(err);
    } else {
      Tasks.updateOne(
        { _id: id },
        {
          $set: { isCompleted: !task[0].isCompleted }
        },
        (err, result) => {
          if (err) {
            cb(err);
          } else {
            getTasks(cb);
          }
        }
      );
    }
  });
};

//Q3:we have 4 errors here please fix them
let deleteTask = (id, cb) => {
  tasks.deleteOne({ _id: id }, (err, result) => {
    if (err) {
      cb(err);
    } else {
      getTasks();
    }
  });
};

module.exports = {
  getTasks,
  addTask,
  updateTask,
  deleteTask
};
