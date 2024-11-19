export const createUserActionString = (object) => {
  const userName = object.userName?.trim() || "名無しさん"; // userNameが空文字や未定義の場合は"名無しさん"
  const action = object.action?.trim() || "何もしませんでした"; // actionが空文字や未定義の場合は"何もしませんでした"

  return action === "何もしませんでした"
    ? `${userName}さんは${action}`
    : `${userName}さんが${action}しました`;
};
