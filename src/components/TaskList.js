import React from "react";
import Task from "./Task";

function TaskList({tasks, deletedItem}) {
  return (
    <div className="tasks">
      {tasks.map((task, i) => (
      <Task 
      deletedItem = {deletedItem} 
      key={i} 
      text={task.text}
      category={task.category}
      />
      ))}
     
    </div>
  );
}

export default TaskList;
