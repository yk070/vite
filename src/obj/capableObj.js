const capableObj = {
  capable1: {
    left: {
      Enter: {
        none: [
          [{ ac: "none*enter", tg: "none*hankaku" }],
          [{ ac: "none*enter", tg: "none*tab" }],
          [{ ac: "none*enter", tg: "none*capslock" }],
          [{ ac: "none*enter", tg: "none*muhenkan" }],
        ],
        space: [
          [{ ac: "none*enter", tg: "space*leftShift" }],
          [{ ac: "none*enter", tg: "space*leftCtrl" }],
        ],
      },
      space: {
        none: [
          [{ ac: "none*space", tg: "none*hankaku" }],
          [{ ac: "none*space", tg: "none*tab" }],
          [{ ac: "none*space", tg: "none*capslock" }],
          [{ ac: "none*space", tg: "none*muhenkan" }],
        ],
        space: [
          [{ ac: "none*space", tg: "space*leftShift" }],
          [{ ac: "none*space", tg: "space*leftCtrl" }],
        ],
      },
      window切替: {
        space: [
          [
            { ac: "win*one", tg: "space*r" },
            { ac: "win*two", tg: "space*e" },
            { ac: "win*three", tg: "space*one" },
          ],
          [
            { ac: "win*one", tg: "space*one" },
            { ac: "win*two", tg: "space*two" },
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
