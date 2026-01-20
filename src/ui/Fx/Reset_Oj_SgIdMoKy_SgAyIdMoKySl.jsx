import { useAppState } from "../use/useState.jsx";

const Reset_Oj_SgIdMoKy_SgAyIdMoKySl = () => {
  const {
    setOj_SgIdMoKy_SgAyIdMoKySl,
    setAySgIdMo_virtual,
    setSgIdMoKy_tg,
    setScFull,
    setTgIb,
  } = useAppState();
  setOj_SgIdMoKy_SgAyIdMoKySl({});
  setAySgIdMo_virtual([]);
  setSgIdMoKy_tg(null);
  setScFull("");
  setTgIb("none");
};
export default Reset_Oj_SgIdMoKy_SgAyIdMoKySl;
