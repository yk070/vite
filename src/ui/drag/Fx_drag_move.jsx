import { latestPosRef, scrollPos } from 'use/useRef';
const Fx_drag_move = (e) => {
  const pointerEvent = e.activatorEvent;
  if (!pointerEvent) return;
  // 最新座標だけをRefに保存（これ自体は描画に関係なし）
  latestPosRef.current = {
    x: pointerEvent.clientX,
    y: pointerEvent.clientY,
  };
  // 1フレームに1回だけsetStateする
  if (!animationFrameRef.current) {
    animationFrameRef.current = requestAnimationFrame(() => {
      setPointerPos(latestPosRef.current);
      animationFrameRef.current = null;
    });
  }
};
export default Fx_drag_move;