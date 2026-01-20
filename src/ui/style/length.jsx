const header = "40px"; //40px
const sidebar = "260px"; //260px
const base = `calc(min((100vh - ${header}) * (16 / 9), 100vw - ${sidebar}) / 1000)`;

const SgLeMxMargin = `calc(${base} * 5)`;
const SgLeWi = `calc(${base} * 65)`;
const SgLeHe = `calc(${base} * 20)`;
const SgLeMxDel = `calc(${base} * 20)`;
const SgLe_tx = `calc(${base} * 15)`; //`${SgLe_tx}`,
const SgLe_boxshadow = `calc(${base} * 1)`;

export {
  header,
  sidebar,
  base,
  SgLeMxMargin,
  SgLeWi,
  SgLeHe,
  SgLeMxDel,
  SgLe_tx,
  SgLe_boxshadow,
};
