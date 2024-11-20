import React from "react";
import Question6 from "./Question6"; // 問題6のコンポーネントをインポート

const Question7 = ({ userNames }) => {
  return (
    <ul>
      {userNames
        .filter((userName) => userName !== "自分") // "自分"は表示しない
        .map((userName, index) => (
          <Question6 key={index} userName={userName} /> // 問題6のコンポーネントを使用
        ))}
    </ul>
  );
};

export default Question7;
