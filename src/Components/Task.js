import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import CheckBox from "./CheckBox";
import Input from "./Input";

const Task = ({ index, task, onDelete, onToggle, onInput }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [inputText, setInputText] = useState("");

  const handleClick = () => {
    setIsVisible(false);
  };

  const handleKeyDown = (event) => {
    if (!isVisible && event.key === "Enter") {
      onInput(task.id, inputText);
      setIsVisible(true);
    }
  };

  return (
    <tr>
      <th>{index + 1}</th>
      <td
        onClick={() => handleClick()}
        onKeyDown={(event) => handleKeyDown(event)}
      >
        {isVisible ? (
          task.text
        ) : (
          <Input text={inputText} update={setInputText} />
        )}
      </td>
      <td>{task.day}</td>
      <td>
        <CheckBox id={task.id} isDone={task.reminder} onToggle={onToggle} />
      </td>
      <td>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </td>
    </tr>
  );
};

export default Task;
