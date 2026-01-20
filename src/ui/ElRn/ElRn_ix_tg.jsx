
import DroppableItem_ix from "../others/DroppableItem_ix.jsx";
import { useAppState } from "../use/useState.jsx";
import Oj_SgIdMo_SgTxMo from '../Oj/Oj_SgIdMo_SgTxMo.jsx';
const ElRn_ix_tg = (AySgIdMo_virtual,Oj_SgIdMo_No_count
) => {
  const {
    AySgIdMo_all_tg,
  } = useAppState();
  return (
    <>
      {AySgIdMo_all_tg.map((SgIdMo) => {
        const SgTxMo_ix = Oj_SgIdMo_SgTxMo[SgIdMo];
        const No_count = Oj_SgIdMo_No_count.current[SgIdMo];
        const IsBn_virtual = AySgIdMo_virtual.includes(SgIdMo);

        const Oj_props = { SgIdMo, SgTxMo_ix, No_count, IsBn_virtual };

        return <DroppableItem_ix key={SgIdMo} SgIdMo={SgIdMo} Oj_props={Oj_props} />;
      })}
    </>
  );
};

export default ElRn_ix_tg;