import { AySgIdKy_tg_none_secondary } from '../Ay/AySgIdKy_tg_none.jsx';
import { AySgIdKy_tg_none_primary } from '../Ay/AySgIdKy_tg_none.jsx';
import { AySgIdKy_tg_none_disabled } from '../Ay/AySgIdKy_tg_none.jsx';
import { AySgIdKy_tg_ctrl_secondary } from '../Ay/AySgIdKy_tg_ctrl.jsx';
import { AySgIdKy_tg_ctrl_primary } from '../Ay/AySgIdKy_tg_ctrl.jsx';
import { AySgIdKy_tg_ctrl_disabled } from '../Ay/AySgIdKy_tg_ctrl.jsx';
import { AySgIdKy_tg_space_secondary } from '../Ay/AySgIdKy_tg_space.jsx';
import { AySgIdKy_tg_space_primary } from '../Ay/AySgIdKy_tg_space.jsx';
import { AySgIdKy_tg_space_disabled } from '../Ay/AySgIdKy_tg_space.jsx';
import { AySgIdKy_ac_none_secondary } from '../Ay/AySgIdKy_ac_none.jsx';
import { AySgIdKy_ac_none_primary } from '../Ay/AySgIdKy_ac_none.jsx';
import { AySgIdKy_ac_none_disabled } from '../Ay/AySgIdKy_ac_none.jsx';
import { AySgIdKy_ac_ctrl_secondary } from '../Ay/AySgIdKy_ac_ctrl.jsx';
import { AySgIdKy_ac_ctrl_primary } from '../Ay/AySgIdKy_ac_ctrl.jsx';
import { AySgIdKy_ac_ctrl_disabled } from '../Ay/AySgIdKy_ac_ctrl.jsx';
import { AySgIdKy_ac_space_secondary } from '../Ay/AySgIdKy_ac_space.jsx';
import { AySgIdKy_ac_space_primary } from '../Ay/AySgIdKy_ac_space.jsx';
import { AySgIdKy_ac_space_disabled } from '../Ay/AySgIdKy_ac_space.jsx';


const Oj_SgIdMoKy_SgIdLl_tg = Object.fromEntries(
  [
    { SgIdMo_asterisk: "none*", AySgIdKy: AySgIdKy_tg_none_secondary, SgIdLl: "second" },
    { SgIdMo_asterisk: "none*", AySgIdKy: AySgIdKy_tg_none_primary, SgIdLl: "first" },
    { SgIdMo_asterisk: "none*", AySgIdKy: AySgIdKy_tg_none_disabled, SgIdLl: "disabled" },
    { SgIdMo_asterisk: "ctrl*", AySgIdKy: AySgIdKy_tg_ctrl_secondary, SgIdLl: "second" },
    { SgIdMo_asterisk: "ctrl*", AySgIdKy: AySgIdKy_tg_ctrl_primary, SgIdLl: "first" },
    { SgIdMo_asterisk: "ctrl*", AySgIdKy: AySgIdKy_tg_ctrl_disabled, SgIdLl: "disabled" },
    { SgIdMo_asterisk: "space*", AySgIdKy: AySgIdKy_tg_space_secondary, SgIdLl: "second" },
    { SgIdMo_asterisk: "space*", AySgIdKy: AySgIdKy_tg_space_primary, SgIdLl: "first" },
    { SgIdMo_asterisk: "space*", AySgIdKy: AySgIdKy_tg_space_disabled, SgIdLl: "disabled" },
  ].flatMap(({ SgIdMo_asterisk, AySgIdKy, SgIdLl }) => AySgIdKy.map(SgIdKy => [SgIdMo_asterisk + SgIdKy, SgIdLl]))
);
const Oj_SgIdMoKy_SgIdLl_ac = Object.fromEntries(
  [
    { SgIdMo_asterisk: "none*", AySgIdKy: AySgIdKy_ac_none_secondary, SgIdLl: "second" },
    { SgIdMo_asterisk: "none*", AySgIdKy: AySgIdKy_ac_none_primary, SgIdLl: "first" },
    { SgIdMo_asterisk: "none*", AySgIdKy: AySgIdKy_ac_none_disabled, SgIdLl: "disabled" },
    { SgIdMo_asterisk: "ctrl*", AySgIdKy: AySgIdKy_ac_ctrl_secondary, SgIdLl: "second" },
    { SgIdMo_asterisk: "ctrl*", AySgIdKy: AySgIdKy_ac_ctrl_primary, SgIdLl: "first" },
    { SgIdMo_asterisk: "ctrl*", AySgIdKy: AySgIdKy_ac_ctrl_disabled, SgIdLl: "disabled" },
    { SgIdMo_asterisk: "space*", AySgIdKy: AySgIdKy_ac_space_secondary, SgIdLl: "second" },
    { SgIdMo_asterisk: "space*", AySgIdKy: AySgIdKy_ac_space_primary, SgIdLl: "first" },
    { SgIdMo_asterisk: "space*", AySgIdKy: AySgIdKy_ac_space_disabled, SgIdLl: "disabled" },
  ].flatMap(({ SgIdMo_asterisk, AySgIdKy, SgIdLl }) => AySgIdKy.map(SgIdKy => [SgIdMo_asterisk + SgIdKy, SgIdLl]))
);
export {
  Oj_SgIdMoKy_SgIdLl_tg,
  Oj_SgIdMoKy_SgIdLl_ac,
};