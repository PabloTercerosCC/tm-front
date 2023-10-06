import React from "react";
import { FaTimes } from 'react-icons/fa'
import CheckBox from "./CheckBox";

const Task = ({ index, task, onDelete, onToggle }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{task.text}</td>
      <td>{task.day}</td>
      <td>
        <CheckBox id={task.id} isDone={task.reminder} onToggle={onToggle}/>
      </td>
      <td>
      <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)}
        />
      </td>
    </tr>
  );
};

export default Task;
