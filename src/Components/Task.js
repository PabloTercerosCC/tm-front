import React from "react";
import { FaTimes } from 'react-icons/fa'
import CheckBox from "./CheckBox";

const Task = ({ task, index, onDelete }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{task.text}</td>
      <td>{task.day}</td>
      <td>
        <CheckBox/>
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
