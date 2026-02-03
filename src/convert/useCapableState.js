// useMainSelector.js
import useMain from "./useMain.js";

const useMainSelector = () => {
  const { currCapAc, currAdjTg } = useMain();

  return {
    currCapAc,
    currAdjTg,
  };
};

export default useMainSelector;
