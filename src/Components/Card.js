import React from "react";
import List from "./List";

const Card = ({tasks, onDelete}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-192 bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title">Task Manager</h2>
          <List tasks={tasks} onDelete={onDelete}/>
        </div>
      </div>
    </div>
  );
};

export default Card;
