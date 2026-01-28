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
        ctrl: [
          // {
          //   acTgObjs: [{ ac: "none*enter", tg: "space*tab" }],
          //   ease: 0,
          // },
          {
            acTgObjs: [{ ac: "none*enter", tg: "space*capslock" }],
            ease: 0,
          },
          {
            acTgObjs: [{ ac: "none*enter", tg: "space*shift" }],
            ease: 0,
          },
          {
            acTgObjs: [{ ac: "none*enter", tg: "space*ctrl" }],
            ease: 1,
          },
        ],
      },
      window切替: {
        none: [
          {
            acTgObjs: [
              { ac: "win*one", tg: "space*r" },
              { ac: "win*two", tg: "space*e" },
            ],
            ease: 1,
          },
          {
            acTgObjs: [
              { ac: "win*one", tg: "space*1" },
              { ac: "win*two", tg: "space*2" },
            ],
            ease: 1,
          },
        ],
        ctrl: [],
      },
    },
    right: {},
  },
};
export default acLdObj;
