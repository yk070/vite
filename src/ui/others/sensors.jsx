import { useSensor, useSensors, PointerSensor } from "@dnd-kit/core";

export function useDndSensors() {
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5,
      },
    })
  );
  return sensors;
}
