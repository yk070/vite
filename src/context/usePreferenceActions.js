const usePreferenceActions = (ctx) => {
  const toggleVirtual = (x) => {
    ctx.setPreferences((prev) =>
      prev.includes(x) ? prev.filter((item) => item !== x) : [...prev, x],
    );
  };

  return { toggleVirtual };
};

export default usePreferenceActions;
