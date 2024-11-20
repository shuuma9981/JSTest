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

// 人の名前を表示し、チェックボックスで打ち消し線を追加/解除できるコンポーネント
function Question6({ userName }) {
  // チェックボックスの状態を管理する
  const [isChecked, setIsChecked] = useState(false);

  // チェックボックスがクリックされたときに呼び出される関数
  const handleCheckboxChange = () => {
    // ※状態の更新を次のイベントループに移動する（setTimeoutで遅延させる）
    setTimeout(() => {
      setIsChecked((prev) => !prev); // 現在の状態を反転する
    }, 0);
  };

  return (
    <li>
      {" "}
      {/* 1つの名前とチェックボックスを囲むリスト項目 */}
      <input
        type="checkbox" // チェックボックスの作成
        checked={isChecked} // 現在の状態（チェック済みかどうか）に応じた表示
        onChange={handleCheckboxChange} // チェックボックスがクリックされたときに実行する処理
      />
      <span
        style={{
          // チェックボックスの状態に応じてスタイルを変更する（打ち消し線を付けるかどうか）
          textDecoration: isChecked ? "line-through" : "none",
        }}
      >
        {userName} {/* 表示する名前 */}
      </span>
    </li>
  );
}

export default Question6;
