import React from "react";
import Question6 from "./Question6";
// Question6コンポーネントをインポート

const Question7 = ({ userNames }) => {
  // Question7というコンポーネントを作成。userNamesを受け取る

  return (
    <ul>
      {userNames
        .filter((userName) => userName !== "自分")
        // "自分"という名前を除外
        .map((userName, index) => (
          <Question6 key={index} userName={userName} />
          // 各名前に対してQuestion6コンポーネントを作成
        ))}
    </ul>
  );
};

export default Question7;
// このコンポーネントを他のファイルで使えるようにする
