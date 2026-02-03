// useMainSelector.js
import useMain from "./useMain.js";

const useMainSelector = () => {
  const { currCapAc, currCapTg } = useMain();

  return {
    currCapAc,
    currCapTg,
  };
};

export default useMainSelector;
