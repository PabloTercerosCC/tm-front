import React from "react";
import Task from "./Task";

const List = ({tasks, onDelete, onToggle, onInput}) => {
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
            {tasks.map((task, index) => (
            <Task key={index} index={index} task={task} onDelete={onDelete} onToggle={onToggle} onInput={onInput} />
        ))}
        </tbody>
      </table>
    </div>
  );
};

export default List;
