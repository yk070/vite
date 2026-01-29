const acLdObj = {
  acLd1: {
    left: {
      Enter: {
        none: [
          {
            acTgObjs: [{ ac: "none*enter", tg: "none*hankaku" }],
            ease: 0,
          },
          {
            acTgObjs: [{ ac: "none*enter", tg: "none*tab" }],
            ease: 1,
          },
          {
            acTgObjs: [{ ac: "none*enter", tg: "none*capslock" }],
            ease: 1,
          },
          {
            acTgObjs: [{ ac: "none*enter", tg: "none*muhenkan" }],
            ease: 1,
          },
        ],
        space: [
          // {
          //   acTgObjs: [{ ac: "none*enter", tg: "space*tab" }],
          //   ease: 0,
          // },
          {
            acTgObjs: [{ ac: "none*enter", tg: "space*capslock" }],
            ease: 0,
          },
          {
            acTgObjs: [{ ac: "none*enter", tg: "space*leftShift" }],
            ease: 0,
          },
          {
            acTgObjs: [{ ac: "none*enter", tg: "space*leftCtrl" }],
            ease: 1,
          },
        ],
      },
      window切替: {
        space: [
          {
            acTgObjs: [
              { ac: "win*one", tg: "space*r" },
              { ac: "win*two", tg: "space*e" },
            ],
            ease: 1,
          },
          {
            acTgObjs: [
              { ac: "win*one", tg: "space*one" },
              { ac: "win*two", tg: "space*two" },
            ],
            ease: 1,
          },
        ],
        ctrl: [
          {
            acTgObjs: [
              { ac: "win*one", tg: "ctrl*one" },
              { ac: "win*two", tg: "ctrl*two" },
            ],
            ease: 1,
          },
        ],
      },
    },
    right: {},
  },
};
export default acLdObj;
