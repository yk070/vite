const acLockedObj = {
  acLocked: {
    left: {
      Enter: {
        row: 2,
        acTgObjs: [
          [
            { ac: "none*enter", tg: "none*muhenkan" },
            { ac: "none*enter", tg: "space*ctrl" },
          ],
        ],
      },
      ウィンドウ移動: {
        row: 2,
        acTgObjs: [
          [
            { ac: "win*one", tg: "space*q" },
            { ac: "win*two", tg: "space*w" },
            { ac: "win*three", tg: "space*e" },
            { ac: "win*four", tg: "space*r" },
          ],
          [
            { ac: "win*one", tg: "space*a" },
            { ac: "win*two", tg: "space*s" },
            { ac: "win*three", tg: "space*d" },
            { ac: "win*four", tg: "space*f" },
          ],
        ],
      },
      タブ移動: {
        row: 2,
        acTgObjs: [
          [
            { ac: "ctrl*tab", tg: "space*tab" },
            { ac: "ctrl*shift*tab", tg: "space*capslock" },
          ],
          [
            { ac: "ctrl*tab", tg: "alt*tab" },
            { ac: "ctrl*shift*tab", tg: "alt*capslock" },
          ],
        ],
      },
    },
    right: {},
  },
};
export default acLockedObj;
