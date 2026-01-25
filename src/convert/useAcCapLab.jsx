import { acCapLabelObj } from "../obj/namedObj.js";

const useAcCapLab = ({ acCap }) => {
  const label = acCapLabelObj[acCap];

  return { label };
};

export default useAcCapLab;
