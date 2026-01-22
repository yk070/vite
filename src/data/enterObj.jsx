const enterObj = {
  Esc: {
    priority: 2,
    miniObjs: [{ ac: "none*enter", tg: "none*esc" }],
  },
  半角: {
    priority: 2,
    miniObjs: [{ ac: "none*enter", tg: "none*hankaku" }],
  },
  Tab: {
    priority: 2,
    miniObjs: [{ ac: "none*enter", tg: "none*tab" }],
  },
  CapsLock: {
    priority: 2,
    miniObjs: [{ ac: "none*enter", tg: "none*capslock" }],
  },
  無変換: {
    priority: 1,
    miniObjs: [{ ac: "none*enter", tg: "none*muhenkan" }],
  },
  Space: {
    priority: 2,
    miniObjs: [{ ac: "none*enter", tg: "none*space" }],
  },
  変換: {
    priority: 2,
    miniObjs: [{ ac: "none*enter", tg: "none*henkan" }],
  },
};
export default enterObj;
