const tgAdjLdObj = {
  none: {
    左寄せ多数: [
      { ac: "none*tab", tg: "none*esc" },
      { ac: "none*space", tg: "none*capslock" },
      { ac: "none*backspace", tg: "none*tab" },
      { ac: "none*enter", tg: "none*hankaku" },
      { ac: "none*hankaku", tg: "none*henkan" },
    ],
    左寄せ数字: [
      { ac: "none*six", tg: "none*f1" },
      { ac: "none*seven", tg: "none*f2" },
      { ac: "none*eight", tg: "none*f3" },
      { ac: "none*nine", tg: "none*f4" },
      { ac: "none*zero", tg: "none*esc" },
    ],
    即時sleep: [{ ac: "sleep", tg: "none*esc" }],
    Enter最適化: [{ ac: "none*enter", tg: "none*muhenkan" }],
  },
  ctrl: {
    タブ切替: [
      { ac: "ctrl*tab", tg: "ctrl*space" },
      { ac: "ctrl*shift*tab", tg: "ctrl*muhenkan" },
    ],
    ページ進退: [
      { ac: "alt*left", tg: "ctrl*capslock" },
      { ac: "alt*right", tg: "ctrl*tab" },
    ],
    AltTab: [{ ac: "alt*tab", tg: "ctrl*f" }],
    予測変換: [
      { ac: "第1候補", tg: "ctrl*j" },
      { ac: "第2候補", tg: "ctrl*k" },
      { ac: "第3候補", tg: "ctrl*l" },
      { ac: "第4候補", tg: "ctrl*semicolon" },
      { ac: "第5候補", tg: "ctrl*colon" },
    ],
  },
  alt: {},
  shift: {},
  win: {},
  muhenkan: {},
  space: {
    Ctrl右手: [
      { ac: "ctrl*z", tg: "space*z" },
      { ac: "ctrl*x", tg: "space*x" },
      { ac: "ctrl*c", tg: "space*c" },
      { ac: "ctrl*v", tg: "space*v" },
      { ac: "ctrl*b", tg: "space*b" },
      { ac: "ctrl*a", tg: "space*a" },
      { ac: "ctrl*s", tg: "space*s" },
      { ac: "ctrl*d", tg: "space*d" },
      { ac: "ctrl*f", tg: "space*f" },
      { ac: "ctrl*g", tg: "space*g" },
      { ac: "ctrl*q", tg: "space*q" },
      { ac: "ctrl*w", tg: "space*w" },
      { ac: "ctrl*e", tg: "space*e" },
      { ac: "ctrl*r", tg: "space*r" },
      { ac: "ctrl*t", tg: "space*t" },
    ],
    window切替: [{ ac: "alt*tab", tg: "space*f" }],
    戻る進む: [
      { ac: "ctrl*z", tg: "space*z" },
      { ac: "ctrl*y", tg: "space*g" },
    ],
    特定window切替: [
      { ac: "win*two", tg: "space*e" },
      { ac: "win*three", tg: "space*w" },
      { ac: "win*four", tg: "space*q" },
      { ac: "win*five", tg: "space*tab" },
      { ac: "win*one", tg: "space*r" },
    ],
    デリート: [{ ac: "none*delete", tg: "space*leftCtrl" }],
  },
};
export default tgAdjLdObj;

// Tab進退: [
//   { ac: "none*tab", tg: "space*tab" },
//   { ac: "shift*tab", tg: "space*capslock" },
// ],
