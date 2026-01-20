const AySgIdKy_number = [
  "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",
];
const AySgIdKy_function = [
  "f1", "f2", "f3", "f4", "f5", "f6",
  "f7", "f8", "f9", "f10", "f11", "f12",
];
const AySgIdKy_alphanumeric = [
  ...AySgIdKy_number, 
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j",
  "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
  "u", "v", "w", "x", "y", "z",
  "comma", "colon", "slash", "backslash", "semicolon",
  "period", "right_branch", "at", "left_branch", "minus", "caret", "yen",

];
const AySgIdKy_command = [
  ...AySgIdKy_function, "esc", "hankaku", "backspace", "tab", "enter", "capslock", 
  "muhenkan", "space", "henkan", "kana", "application", 
];
const AySgIdKy_home = [
  "a", "s", "d", "f", "j", "k", "l", "semicolon",
];
const AySgIdKy_modifier = [
  "left_ctrl","right_ctrl","left_alt","right_alt","left_shift","right_shift","left_win","right_win",
];
const AySgIdKy_peculiar = [
  "hold","toggle",
];
const AySgIdKy_all = [
  "esc", ...AySgIdKy_function, 
  "hankaku", ...AySgIdKy_number,
  "minus", "caret", "yen", "backspace",
  "tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "at", "left_branch", "enter", 
  "capslock", "a", "s", "d", "f", "j", "k", "l", "semicolon", "colon", "right_branch",
  "left_shift", "z", "x", "c", "v", "b", "n", "m", "comma", "period", "slash", "backslash", "right_shift", 
  "left_ctrl", "left_win", "left_alt", "muhenkan", "space", "henkan", "kana", "right_alt", "right_win", "application", "right_ctrl", 
];        
export {
  AySgIdKy_number,
  AySgIdKy_function,
  AySgIdKy_alphanumeric,
  AySgIdKy_command,
  AySgIdKy_home,
  AySgIdKy_modifier,
  AySgIdKy_peculiar,
  AySgIdKy_all,
};