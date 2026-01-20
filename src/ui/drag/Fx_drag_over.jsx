
const Fx_drag_over = (e) => {
  const { active, over } = e;
  if (!active || !over ) return;
  if (AySgIdMo_all_tg.includes(over.id)) {
    setSgIdMo_tg_display(over.id);
  }
};
export default Fx_drag_over;