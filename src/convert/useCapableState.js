// useMainSelector.js
import useMain from "./useMain.js";

const useMainSelector = () => {
  const { currentCapAc, currentAdjTg } = useMain();

  return {
    currentCapAc,
    currentAdjTg,
  };
};

export default useMainSelector;
