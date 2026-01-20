const spaceObj = {
  Esc: {
    priority: 2,
    miniObjs: [{ ac: "none*space", tg: "none*esc" }],
  },
  Tab: {
    priority: 2,
    miniObjs: [{ ac: "none*space", tg: "none*tab" }],
  },
  CapsLock: {
    priority: 1,
    miniObjs: [{ ac: "none*space", tg: "none*capslock" }],
  },
  無変換: {
    priority: 2,
    miniObjs: [{ ac: "none*space", tg: "none*muhenkan" }],
  },
  変換: {
    priority: 2,
    miniObjs: [{ ac: "none*space", tg: "none*henkan" }],
  },
};
export default spaceObj;
