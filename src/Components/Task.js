import React from "react";

const Task = ({ task, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{task.text}</td>
      <td>{task.day}</td>
      <td>{task.reminder ? "done" : "to do"}</td>
    </tr>
  );
};

export default Task;
