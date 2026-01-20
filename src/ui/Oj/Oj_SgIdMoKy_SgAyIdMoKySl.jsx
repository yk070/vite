const [ScFull, setScFull] = useState(""); // ← useState で定義
useEffect(() => {
  const AySc = Object.entries(Oj_SgIdMoKy_SgAyIdMoKySl).map(
    ([SgIdMoKy_tg, SgAyIdMoKySl]) => {
      //Tg
      const [SgIdMo_tg, SgIdKy_tg] = SgIdMoKy_tg.split("*");
      const IsMo_none = SgIdMo_tg === "none";
      const SgScMo_and = IsMo_none ? "" : Oj_SgIdMo_SgScMo[SgIdMo_tg] + " & ";
      const ScMoKy = SgScMo_and + (Oj_SgIdKy_SgScKy_tg[SgIdKy_tg] ?? SgIdKy_tg);
      const IsMo_virtual = !["none", "ctrl", "shift", "alt"].includes(
        SgIdMo_tg
      );
      const Sc_prefix = IsMo_virtual ? "~" : "";
      const ScTg = Sc_prefix + ScMoKy;
      //ac
      const AySgIdMoKySl = SgAyIdMoKySl.split("-");
      const AyScMoKySl = AySgIdMoKySl.map((SgIdMoKySl) => {
        const [SgIdMoKy_ac, SgIdSl] = SgIdMoKySl.split("+");
        const IsBn_hold = SgIdMoKy_ac === "none*hold";

        if (IsBn_hold) {
          setAySgIdMo_virtual((prev) => {
            if (prev.some((SgIdMo_virtual) => SgIdMo_virtual === SgIdKy_tg))
              return prev;
            return [...prev, SgIdKy_tg];
          });
        }
        //MoKy
        const ScMoKy = (() => {
          if (IsBn_hold) return "\nreturn\n}";
          const [SgAcMo, SgAcKy] = SgIdMoKy_ac.split("*");
          const Sc_prefix = {
            none: "",
            ctrl: "^",
            shift: "+",
            alt: "!",
            win: "#",
          }[SgAcMo];
          const ScAcKy = Oj_SgIdKy_SgScKy_ac[SgAcKy] ?? SgAcKy;
          return "\nSend" + '("' + Sc_prefix + "{" + ScAcKy + '}")' + "\n";
        })();
        //Sl
        const ScSl = IsBn_hold ? "" : "Sleep(" + SgIdSl + ")\n}";
        return ScMoKy + ScSl;
      });
      const ScAc = AyScMoKySl.join("");
      return `${ScTg}::{${ScAc}`;
    }
  );
  setScFull(AySc.join("\n"));
}, [Oj_SgIdMoKy_SgAyIdMoKySl]);
export { ScFull };
