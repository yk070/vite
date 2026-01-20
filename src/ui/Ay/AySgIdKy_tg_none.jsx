import { AySgIdKy_peculiar } from '../others/KeyNames.jsx';
import { AySgIdKy_alphanumeric } from '../others/KeyNames.jsx';
const AySgIdKy_tg_none_primary = [
  "tab", "capslock", "muhenkan", "space", "henkan" 
];
const AySgIdKy_tg_none_secondary = [
  "esc", "hankaku", 
];
const AySgIdKy_tg_none_disabled = [
  "Topleft", 
  ...AySgIdKy_peculiar, 
  ...AySgIdKy_alphanumeric,
  "left_ctrl", "left_win", "left_alt",
  "left_shift","left_win"
];
export {
  AySgIdKy_tg_none_primary,
  AySgIdKy_tg_none_secondary,
  AySgIdKy_tg_none_disabled,
};