/* eslint-disable no-unused-vars */
/// <reference lib="dom" />

// - 問題5:要素のテキストを変更する関数を作ろう
//    要素id(elementId)とテキスト(text)を引数として受け取ります。
//    受け取ったelementIdでdocumentからタグをさがして、あればそのタグのテキストを、引数で受け取ったtextに変えましょう。
//    もしそのタグが見つからなかった場合は引数で受け取ったidを持つdivタグをつくり引数で受け取ったtextに変更してbodyタグの子要素として追加しましょう。

/**
 * @param {string} elementId
 * @param {string} text
 */

export const changeElementText = (elementId, text) => {
  //ここに記述
  // 指定されたIDの要素を探す
  const element = document.getElementById(elementId);

  if (element) {
    // 要素が見つかった場合、そのテキストを変更
    element.textContent = text;
  } else {
    // 要素が見つからなかった場合、新しいdiv要素を作る
    const newDiv = document.createElement("div");
    // 新しいdiv要素のIDを設定
    newDiv.id = elementId;
    // 新しいdiv要素のテキストを設定
    newDiv.textContent = text;
    // 新しいdiv要素をbodyに追加
    document.body.appendChild(newDiv);
  }
};
