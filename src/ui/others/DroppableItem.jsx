import ElBn_mx_tg from "../ElBn/ElBn_mx_tg";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
  useDraggable,
  useDroppable,
  pointerWithin,
	closestCorners,
  DragOverlay,
	rectIntersection ,
} from "@dnd-kit/core";
const DroppableItem = ({ OjMx, SgIdMoKy_origin, IsBn_tg_disabled, IsBn_dg, Oj_props }) => {
  const { setNodeRef, isOver } = useDroppable({
    id: SgIdMoKy_origin,
    disabled: IsBn_tg_disabled || IsBn_dg
  });

  return (
    <div
      style={{
        position: "absolute",
        left: OjMx.style.left,
        top: OjMx.style.top,
        width: OjMx.style.width,
        height: OjMx.style.height,
        zIndex: isOver ? 5 : 1,
      }}
      ref={setNodeRef}
    >
      <ElBn_mx_tg {...Oj_props} />
    </div>
  );
};
export default DroppableItem;