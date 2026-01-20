import { arrayMove } from '@dnd-kit/sortable';
const Fx_drag_end = (
  e, OjDg, setOjDg, setOj_SgIdMoKy_SgAyIdMoKySl, Oj_SgIdMoKy_SgAyIdMoKySl,
  setAySgIdMoKySl, 
) => {
  document.body.style.overflow = "";
  document.body.style.position = "";
  setOjDg(null);
  const { active, over } = e;
  if (!active || !over ) return;
  const SgIdMoKy_over = over.id;
  const SgIdKy_over = SgIdMoKy_over.split("*")[1];
    if ( OjDg.SgIdMoKy_origin === SgIdMoKy_over ) return;
  if (OjDg?.IsBn_from_mx_sp){
    const SgAyIdMoKySl_attach_new = `${OjDg.SgIdMoKy_origin}+1`;
    const Oj_SgIdMoKy_SgAyIdMoKySl_new = { ...Oj_SgIdMoKy_SgAyIdMoKySl };
    Oj_SgIdMoKy_SgAyIdMoKySl_new[SgIdMoKy_over] = SgAyIdMoKySl_attach_new;
    setOj_SgIdMoKy_SgAyIdMoKySl(Oj_SgIdMoKy_SgAyIdMoKySl_new);
  }
  if (OjDg?.IsBn_from_mx_ac){
    const SgAyIdMoKySl_attach_new = `${OjDg.SgIdMoKy_origin}+1`;
    const Oj_SgIdMoKy_SgAyIdMoKySl_new = { ...Oj_SgIdMoKy_SgAyIdMoKySl };
    Oj_SgIdMoKy_SgAyIdMoKySl_new[SgIdMoKy_over] = SgAyIdMoKySl_attach_new;
    setOj_SgIdMoKy_SgAyIdMoKySl(Oj_SgIdMoKy_SgAyIdMoKySl_new);
  }
  if (OjDg?.IsBn_from_mx_tg){
    if ( OjDg.IsBn_attach_single && SgIdMoKy_over === OjDg.SgIdMoKy_attach_first ) return;
    const SgAyIdMoKySl_attach_new = OjDg.SgAyIdMoKySl_attach;
    const Oj_SgIdMoKy_SgAyIdMoKySl_new = { ...Oj_SgIdMoKy_SgAyIdMoKySl };
    delete Oj_SgIdMoKy_SgAyIdMoKySl_new[OjDg.SgIdMoKy_origin];
    Oj_SgIdMoKy_SgAyIdMoKySl_new[SgIdMoKy_over] = SgAyIdMoKySl_attach_new;
    setOj_SgIdMoKy_SgAyIdMoKySl(Oj_SgIdMoKy_SgAyIdMoKySl_new);
  }
  if (OjDg.IsBn_from_ta){
    const SgIdEnMoKy_active = active.id;
    const SgIdEnMoKy_over = over.id;
    const SgIdEn_active = SgIdEnMoKy_active.split("#")[0];
    const SgNoEn_active = Number(SgIdEn_active);
    const SgIdEn_over = SgIdEnMoKy_over.split("#")[0];
    const SgNoEn_over = Number(SgIdEn_over);
    if ( SgNoEn_over !== -1 && SgNoEn_active !== SgNoEn_over ) {
      setAySgIdMoKySl((AySgIdMoKySl) => arrayMove(AySgIdMoKySl, SgNoEn_active, SgNoEn_over));
    }
  }
};
export default Fx_drag_end;