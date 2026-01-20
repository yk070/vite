///X_X|  SgLeBase `calc(${SgLeBase} * )`
const SgLeHeader = "40px"; //40px
const SgLeSidebar = "260px"; //260px
const SgLeBase = `calc(min((100vh - ${SgLeHeader}) * (16 / 9), 100vw - ${SgLeSidebar}) / 1000)`;
const SgLeMxMargin = `calc(${SgLeBase} * 5)`;
const SgLeWi = `calc(${SgLeBase} * 65)`;
const SgLeHe = `calc(${SgLeBase} * 20)`;
const SgLeMxDel = `calc(${SgLeBase} * 20)`;
const SgLe_tx = `calc(${SgLeBase} * 15)`; //`${SgLe_tx}`,
const SgLe_boxshadow = `calc(${SgLeBase} * 1)`;

export {
  SgLeHeader,
  SgLeSidebar,
  SgLeBase,
  SgLeMxMargin,
  SgLeWi,
  SgLeHe,
  SgLeMxDel,
  SgLe_tx,
  SgLe_boxshadow,
};
