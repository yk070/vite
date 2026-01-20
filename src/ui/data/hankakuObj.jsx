const hankakuObj = {
  Esc: {
    priority: 2,
    miniObjs: [{ ac: "none*hankaku", tg: "none*esc" }],
  },
  Tab: {
    priority: 2,
    miniObjs: [{ ac: "none*hankaku", tg: "none*tab" }],
  },
  CapsLock: {
    priority: 2,
    miniObjs: [{ ac: "none*hankaku", tg: "none*capslock" }],
  },
  無変換: {
    priority: 2,
    miniObjs: [{ ac: "none*hankaku", tg: "none*muhenkan" }],
  },
  Space: {
    priority: 2,
    miniObjs: [{ ac: "none*hankaku", tg: "none*space" }],
  },
  変換: {
    priority: 1,
    miniObjs: [{ ac: "none*hankaku", tg: "none*henkan" }],
  },
};
export default hankakuObj;
