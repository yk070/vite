
const ElRn_ta = () => {
  const AySgIdMoKySl_ta_items = 
    AySgIdMoKySl?.map((SgIdMoKySl_ta, Nb_ta) => `${Nb_ta}#${SgIdMoKySl_ta}`);
  return (
    <>
      {/*X_X divi*/}
        <div
          style={{ 
            position: "relative",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
      {/*O_O*/}
        {/*X_X SortableContext ElBn_ta*/}
          <SortableContext
            items={AySgIdMoKySl_ta_items}
            strategy={verticalListSortingStrategy}
          >
            { AySgIdMoKySl?.map(( SgIdMoKySl_ta, Nb_ta ) => {
              const SgNbMoKySl_ta = `${Nb_ta}#${SgIdMoKySl_ta}`;  
              const [ SgIdMoKy_ta, SgIdSl_ta ]= SgIdMoKySl_ta.split("+");
              const ElTxMoKy_ta = Cv_SgIdMoKy_ElTxMoKy(SgIdMoKy_ta); 
              const NbAySgIdMoKySl_length = AySgIdMoKySl.length;
              const IsBn_ta_single = 
                NbAySgIdMoKySl_length === 1 ;
              const Oj_props = {
                AySgIdMoKySl, SgIdMoKySl_ta, Nb_ta, 
                SgNbMoKySl_ta, 
                SgIdMoKy_ta, SgIdSl_ta,
                ElTxMoKy_ta, 
                NbAySgIdMoKySl_length, IsBn_ta_single,
              };                  
              return (
                <div
                  key={SgNbMoKySl_ta}
                  style={{
                    position: "relative", 
                    width: "100%",
                  }}
                >
                    <ElBn_ta { ...Oj_props }/>
                </div>
              );
            })}
          </SortableContext>
        {/*O_O*/}
      </div>
    </>
  );
};
export default ElRn_ta;