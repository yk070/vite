const backspaceObj = {
  Esc: {
    priority: 1,
    miniObjs: [
      { ac: "none*hankaku", tg: "none*muhenkan" },
      { ac: "none*backspace", tg: "none*tab" },
      { ac: "none*enter", tg: "none*henkan" },
      { ac: "none*space", tg: "none*capslock" },
    ],
  },
  半角: {
    priority: 2,
    miniObjs: [
      { ac: "none*six", tg: "none*f1" },
      { ac: "none*seven", tg: "none*f2" },
      { ac: "none*eight", tg: "none*f3" },
      { ac: "none*nine", tg: "none*f4" },
      { ac: "none*zero", tg: "none*esc" },
    ],
  },
};
export default backspaceObj;
