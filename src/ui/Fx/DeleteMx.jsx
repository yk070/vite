
      const DeleteMx = (SgIdMoKy_origin, SgIdKy_origin) => {
        setOj_SgIdMoKy_SgAyIdMoKySl((prev) => {
          const Oj_SgIdMoKy_SgAyIdMoKySl_updated = { ...prev };
          const SgAyIdMoKySl_deleted = Oj_SgIdMoKy_SgAyIdMoKySl_updated[SgIdMoKy_origin]; 
          delete Oj_SgIdMoKy_SgAyIdMoKySl_updated[SgIdMoKy_origin];
          const SgAyIdMoKy_deleted = SgAyIdMoKySl_deleted?.split("+")[0];
          if (SgAyIdMoKy_deleted === "none*hold") {
            const ScMo_asterisk = SgIdKy_origin + "*";
            Object.keys(Oj_SgIdMoKy_SgAyIdMoKySl_updated).forEach((SgIdMoKy_tg) => {
              if (SgIdMoKy_tg.startsWith(ScMo_asterisk)) {
                delete Oj_SgIdMoKy_SgAyIdMoKySl_updated[SgIdMoKy_tg];
              }
            });
            setAySgIdMo_virtual((AySgIdMo_virtual) =>
              AySgIdMo_virtual.filter((SgIdMo_virtual) => 
                SgIdMo_virtual !== Cv_SgIdMoKy_SgTxKy(SgIdMoKy_origin)
              )
            );
          }
          return Oj_SgIdMoKy_SgAyIdMoKySl_updated;
        });
      };
    export { DeleteMx };