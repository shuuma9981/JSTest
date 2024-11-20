/* eslint-disable no-unused-vars */

// 問6:**人の名前を表示してチェックできるようにしよう**
//    propsとして渡ってくるuserName:人の名前(文字列)を表示するコンポーネントを完成させてください。
//    また、このコンポーネントには以下のような機能をつけてください。
// 1. 親のタグはliタグにしてください。
// 2. 名前を表示する部分のタグはspanタグにしましょう。
// 3. spanタグの横(左右どちらでも)にcheckboxを配置しましょう。
// 4. checkboxをクリックしたら、spanタグに打ち消し線が入るようにしましょう
// 5. checkboxのvalueのデフォルト値はfalseにしてください。
// 6. styleの付け方はインラインスタイルを適応してください。

import React, { useState } from "react";

/**
 * @param
 * @returns
 */
const TestComponent1 = ({ userName }) => {
  // 初期値はfalse
  const [isChecked, setIsChecked] = useState(false);

  // チェックボックスがクリックされた時に呼ばれる関数
  const handleCheckboxChange = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={isChecked} // checked属性はisCheckedの状態に基づいている
        onChange={handleCheckboxChange} // チェックボックスが変わるとhandleCheckboxChangeを呼び出す
      />
      <span
        style={{
          textDecoration: isChecked ? "line-through" : "none", // isCheckedがtrueならline-through、falseならnone
        }}
      >
        {userName}
      </span>
    </li>
  );
};

export default TestComponent1;
