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
import {
  SortableContext,
  useSortable,
  arrayMove,
  verticalListSortingStrategy,
	horizontalListSortingStrategy,
  rectSortingStrategy,
} from "@dnd-kit/sortable";
        const ElBn_ta = (Oj_props) => {
          ///|   const ElBn_ta
            ///X_X Oj_props ta
              const {
                setAySgIdMoKySl, SgCo_text,
                AySgIdMoKySl, SgIdMoKySl_ta, Nb_ta, 
                SgNbMoKySl_ta, 
                SgIdMoKy_ta, SgIdSl_ta,
                ElTxMoKy_ta, 
                NbAySgIdMoKySl_length, IsBn_ta_single,
                IsBn_overlay,
              } = Oj_props;
            //O_O
            const handleChange = (e) => {
              setAySgIdMoKySl((AySgIdMoKySlPrev) => {
                const AySgIdMoKySlNew = [...AySgIdMoKySlPrev];
                const oldValue = AySgIdMoKySlNew[Nb_ta];  
                const beforePlus = oldValue.split("+")[0];
                AySgIdMoKySlNew[Nb_ta] =  `${beforePlus}+${e.target.value}`;
                return AySgIdMoKySlNew;
              });       
            };
            const handleClick = (e) => {
              e.stopPropagation(); 
            };
            ///X_X So
            let attributes, listeners, setNodeRef_ta, IsTaSoTf, IsTaSoTs, IsBn_TaDragging;
            ({
              setNodeRef : setNodeRef_ta, 
              listeners, 
              attributes,
              isDragging: IsBn_TaDragging, 
              transform: IsTaSoTf,
              transition: IsTaSoTs, 
            } 
              = useSortable({
                id: SgNbMoKySl_ta,
                data: { ...Oj_props, IsBn_from_ta: true },
              }));
            //O_O
          return (
            <>
              {/*X_X ElBn_ta*/}
                <div
                  style={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    marginLeft: "10px",
                    marginRight: "10px",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "none",
                    transform: CSS.Transform.toString(IsTaSoTf),
                    transition: IsTaSoTs,
                      opacity
                        : IsBn_TaDragging
                        ? 0
                          : 1,
                  }}
                  onClick={(e) => {
                  }}
                  ref={setNodeRef_ta}
                  {...listeners}
                  {...attributes}
                  onMouseEnter={() => {
                  }}
                  onMouseLeave={(e) => {
                  }}
                >
            {/*O_O*/}
                {/*X_X テキスト*/}
                  <span
                    style={{
                      fontSize: "16px",
                      height: "50%",
                      userSelect: "none",
                      pointerEvents: "auto",
                      whiteSpace: "nowrap",
                      borderRadius: "0px",
                      textAlign: "center",
                      background: "black",
                      color: SgCo_text,
                    }}
                  >
                    {ElTxMoKy_ta}
                  </span>
                {/*O_O*/}
                {/*X_X セレクトボックス*/}
                  <select 
                    style={{
                      display: 
                        IsBn_ta_single ? "none" :
                        "block",
                      height: "50%",
                      backgroundColor: "rgba(0,0,100,1)",
                      fontSize: "16px",
                      textAlign: "center",
                    }}   
                    value={SgIdSl_ta}
                    onChange={handleChange}
                    onClick={handleClick}
                  >
                    <option value="0.01">0.01</option>
                    <option value="0.1">0.1</option>
                    <option value="1">1</option>
                  </select>
                {/*O_O*/}
              </div>

            </>
          );
        };
      //O_O
        export default ElBn_ta;