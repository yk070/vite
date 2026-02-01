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
          [{ ac: "none*enter", tg: "space*r" }],
          [{ ac: "none*enter", tg: "space*e" }],
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
