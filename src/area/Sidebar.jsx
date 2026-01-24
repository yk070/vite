import Reset from "./Reset.jsx";
import Back from "./Back.jsx";
import Forward from "./Forward.jsx";
import Script from "./Script.jsx";
import look from "../style/look.jsx";

const Sidebar = () => {
  return (
    <div style={look.sidebar2}>
      <Reset />
      <div style={look.sidebar1}>
        <Back />
        <Forward />
      </div>
      <Script />
    </div>
  );
};

export default Sidebar;
