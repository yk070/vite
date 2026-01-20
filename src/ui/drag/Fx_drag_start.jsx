const Fx_drag_start = (e) => {
  const { active, activatorEvent } = e;
  if (!active || !activatorEvent) return;

  const Oj_current = active.data.current;
  const Sleeps = active.data.current.SgIdMoKy_origin;
  setOjDg({
    ...Oj_current,
    ac: Oj_current.IsBn_from_mx_ac,
    tg: Oj_current.IsBn_from_mx_tg,
    sp: Oj_current.IsBn_from_mx_sp,
    ta: Oj_current.IsBn_from_ta,
  });
};
export default Fx_drag_start;
