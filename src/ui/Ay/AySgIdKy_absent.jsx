
const AySgIdKy_absent_ctrl = [ 
  "capslock", "hankaku", "muhenkan"
];
const AySgIdKy_absent_alt = [ 
  "capslock", 
];
const AySgIdKy_absent = [
  ...AySgIdKy_absent_ctrl.map( SgIdKy => "ctrl*" + SgIdKy),
  ...AySgIdKy_absent_alt.map( SgIdKy => "alt*" + SgIdKy),
];
export {
  AySgIdKy_absent_ctrl,
  AySgIdKy_absent_alt,
  AySgIdKy_absent,
};