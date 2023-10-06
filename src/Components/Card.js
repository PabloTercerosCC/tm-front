import React from "react";
import List from "./List";
import Button from "./Button";

const Card = ({ tasks, onDelete, onAdd, onToggle }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="card w-192 bg-base-100 shadow-xl ">
        <div className="card-body">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h2 className="card-title">Task Manager</h2>
            <Button onAdd={onAdd}/>
          </div>
          <List tasks={tasks} onDelete={onDelete} onToggle={onToggle} />
        </div>
      </div>
    </div>
  );
};

export default Card;
