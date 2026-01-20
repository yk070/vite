import ElBn_mx_ac_keyboard from "../ElBn/ElBn_mx_ac_keyboard";
import ElBn_mx_tg from "../ElBn/ElBn_mx_tg";
import ElBn_mx_ac_often from "../ElBn/ElBn_mx_ac_often";
import ElBn_ta from "../ElBn/ElBn_ta";
const DragOverlayContent = ({ OjDg }) => (
  <>
    {OjDg?.ac && <ElBn_mx_ac_keyboard {...OjDg} IsBn_overlay={true} />}
    {OjDg?.tg && <ElBn_mx_tg {...OjDg} IsBn_overlay={true} />}
    {OjDg?.sp && <ElBn_mx_ac_often {...OjDg} IsBn_overlay={true} />}
    {OjDg?.ta && <ElBn_ta {...OjDg} IsBn_overlay={true} />}
  </>
);

export default DragOverlayContent;
