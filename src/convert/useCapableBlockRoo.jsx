import useCtx from "../context/useCtx.jsx";
const useCapableBlockRoo = ({ props }) => {
  const ctx = useCtx();

  const id = `${props.title}${props.adj}`;
  const props3 = { adj: props.adj, objs: props.adjObjs, id };
  return { id, props3 };
};

export default useCapableBlockRoo;
