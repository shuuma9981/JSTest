import React, { useState } from "react";

const Question6 = ({ userName }) => {
  // Question6というコンポーネントを作成。userNameを受け取る

  const [isChecked, setIsChecked] = useState(false);
  // チェックされているかどうかの状態を管理

  const handleCheckboxClick = () => {
    // チェックボックスがクリックされたときの処理
    setIsChecked(!isChecked);
    // 状態を反転させる
  };

  return (
    // コンポーネントの表示内容
    <li>
      {/* リストの1つの項目 */}
      <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
        {/* チェックされていたら取り消し線を表示 */}
        {userName}
        {/* ユーザー名を表示 */}
      </span>
      <input
        type="checkbox"
        // チェックボックス
        checked={isChecked}
        // 状態に応じてチェック状態を設定
        onClick={handleCheckboxClick}
        // クリック時に処理を実行
      />
    </li>
  );
};

export default Question6;
// このコンポーネントを他のファイルで使えるようにする
