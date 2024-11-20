/* eslint-disable no-unused-vars */
// - 問題4: **配列内の特定の要素をトグルする関数を作ろう**
//    数値か文字列の要素を持つ配列と検索する要素(数値か文字列)を引数として受け取り、
//    配列内に指定された要素が存在するかどうかを判断して
//    要素があった場合はその要素を削除してください。なかった場合は配列の最後尾に追加してください。

//引数の例
// 1. array: [1,2,3,4,5], ele: 4
// 2. array: [1,2,"3",4,5], ele:3
//返り値の例
// 1. [1,2,3,5]
// 2. [1,2,"3",4,5,3]

/**
 * @param {(string|number)[]} array
 * @param {string|number} ele
 *  @return {(string|number)[]}
 */
export const toggleArrayElement = (array, ele) => {
  // 引数が配列であることを確認
  if (!Array.isArray(array)) {
    throw new Error("第一引数は配列でなければなりません");
  }

  // 配列内で指定された要素のインデックスを取得
  const index = array.indexOf(ele);

  // 要素が見つかれば削除し、見つからなければ追加
  if (index !== -1) {
    // 要素を削除した新しい配列を返す
    return array.slice(0, index).concat(array.slice(index + 1));
  } else {
    // 配列の末尾に要素を追加した新しい配列を返す
    return [...array, ele];
  }
};
