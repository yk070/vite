
        useEffect(() => {
          const [SgIdMo_axis, SgIdKy_axis] = (SgIdMoKy_axis?.split("*") || []);
          const Oj_xy_axis = Oj_keyposition[SgIdKy_axis];
          Object.entries(OjWo_mass).forEach(([SgAyMoKySl_mass, Oj_xy_ac]) => {
            const Oj_xy_calculated = {
              x: Oj_xy_axis?.x + Oj_xy_ac.x,
              y: Oj_xy_axis?.y + Oj_xy_ac.y,
            };
            const SgIdKy_calculated = Object.entries(Oj_keyposition).find(
              ([SgIdKy, Oj_xy]) =>
              Oj_xy.x === Oj_xy_calculated.x && Oj_xy.y === Oj_xy_calculated.y
            )?.[0];
            if (SgIdKy_calculated) {
              const SgIdMoKy_calculated = SgIdMo_axis + "*" + SgIdKy_calculated;
              Oj_SgIdMoKy_SgAyIdMoKySl[SgIdMoKy_calculated] = SgAyMoKySl_mass;
            }
          });
        }, [SgIdMoKy_axis]);
        export { Oj_SgIdMoKy_SgAyIdMoKySl };