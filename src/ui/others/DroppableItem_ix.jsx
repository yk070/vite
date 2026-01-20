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
import ElBn_ix_tg from "../ElBn/ElBn_ix_tg";
const DroppableItem_ix = ({ SgIdMo, Oj_props }) => {
  const { setNodeRef, isOver } = useDroppable({ id: SgIdMo });

  return (
    <div
      ref={setNodeRef}
      style={{
        position: "static",
        width: "100%",
        height: "100%",
        display: "flex",
        zIndex: isOver ? 5 : 1, // over 時のスタイルも可能
      }}
    >
      <ElBn_ix_tg {...Oj_props} />
    </div>
  );
};
export default DroppableItem_ix;