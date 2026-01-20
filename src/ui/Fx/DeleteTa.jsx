
      const DeleteTa = (SgNbMoKySl_ta) => {
        const Nb_ta = Number(SgNbMoKySl_ta.split("-")[0]); // 先頭番号を数値に変換
        setAySgIdMoKySl((AySgIdMoKySl) => 
          AySgIdMoKySl.filter((_, index) => index !== Nb_ta) // インデックスが一致しないものだけ残す
        );
      };
      export { DeleteTa };