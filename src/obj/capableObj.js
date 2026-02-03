const capableObj = {
  capable1: {
    left: {
      Enter: {
        none: [
          [{ ac: "none*enter", tg: "none*tab" }],
          [{ ac: "none*enter", tg: "none*capslock" }],
          [{ ac: "none*enter", tg: "none*muhenkan" }],
        ],
        space: [[{ ac: "none*enter", tg: "space*leftCtrl" }]],
      },
      Space: {
        none: [
          [{ ac: "none*space", tg: "none*tab" }],
          [{ ac: "none*space", tg: "none*capslock" }],
          [{ ac: "none*space", tg: "none*muhenkan" }],
        ],
        space: [[{ ac: "none*space", tg: "space*leftCtrl" }]],
      },
      BackS: {
        none: [
          [{ ac: "none*backspace", tg: "none*tab" }],
          [{ ac: "none*backspace", tg: "none*capslock" }],
          [{ ac: "none*backspace", tg: "none*muhenkan" }],
        ],
        space: [[{ ac: "none*backspace", tg: "space*leftCtrl" }]],
      },
      window切替: {
        space: [
          [
            { ac: "win*one", tg: "space*r" },
            { ac: "win*two", tg: "space*e" },
            { ac: "win*three", tg: "space*w" },
            { ac: "win*four", tg: "space*q" },
          ],
          [
            { ac: "win*one", tg: "space*one" },
            { ac: "win*two", tg: "space*two" },
            { ac: "win*three", tg: "space*three" },
            { ac: "win*four", tg: "space*four" },
          ],
        ],
        ctrl: [
          [
            { ac: "win*one", tg: "ctrl*one" },
            { ac: "win*two", tg: "ctrl*two" },
          ],
        ],
      },
    },
    right: {},
  },
};
export default capableObj;
