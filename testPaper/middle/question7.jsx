/* eslint-disable no-unused-vars */

// 問題7:**人の名前のチェックリストを作ろう**
//    このコンポーネントにはuserNamesというユーザーの名前(文字列)の要素をもつ配列が渡ってきます。
//    このコンポーネントは以下の条件を満たしてください。
// 1. 親のタグはulタグにしましょう
// 2. userNames全員分を問6のコンポーネントを使って表示してください。
// 3. もしuserNamesの要素の中に"自分"という文字列が渡ってきたら表示しないようにしましょう。
// 4. keyにはindexをつけましょう。

import React from "react";
import Question6 from "./question6";

// 名前のリストをチェックボックス付きで表示するコンポーネント
function Question7({ userNames }) {
  return (
    <ul>
      {" "}
      {/* 名前のリスト全体を囲むulタグ */}
      {userNames.map((userName, index) =>
        userName === "自分" ? null : ( // 名前が「自分」の場合は表示しない
          <Question6
            key={index} // 各要素にユニークなキーを設定
            userName={userName} // 問6のコンポーネントに名前を渡す
          />
        ),
      )}
    </ul>
  );
}

export default Question7; // このコンポーネントを他のファイルで使えるようにする
