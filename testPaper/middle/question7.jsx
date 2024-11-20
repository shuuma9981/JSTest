/* eslint-disable no-unused-vars */

// 問題7:**人の名前のチェックリストを作ろう**
//    このコンポーネントにはuserNamesというユーザーの名前(文字列)の要素をもつ配列が渡ってきます。
//    このコンポーネントは以下の条件を満たしてください。
// 1. 親のタグはulタグにしましょう
// 2. userNames全員分を問6のコンポーネントを使って表示してください。
// 3. もしuserNamesの要素の中に"自分"という文字列が渡ってきたら表示しないようにしましょう。
// 4. keyにはindexをつけましょう。

/* eslint-disable no-unused-vars */
import React from "react";

/**
 * @param {{ userNames: string[] }} props
 * @returns {React.ReactNode}
 */
const TestComponent2 = ({ userNames }) => {
  return (
    <ul>
      {userNames
        .filter((name) => name !== "自分")
        .map((name, index) => (
          <li key={index}>{name}</li>
        ))}
    </ul>
  );
};

export default TestComponent2;
