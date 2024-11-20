import React, { useState } from "react";

const Question6 = ({ userName }) => {
  const [isChecked, setIsChecked] = useState(false);

  // チェックボックスのクリックイベント
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li>
      <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {userName}
      </span>
      <input
        type="checkbox"
        value={isChecked}
        onChange={handleCheckboxChange}
      />
    </li>
  );
};

export default Question6;
