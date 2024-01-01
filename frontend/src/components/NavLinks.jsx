import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";

export default function NavLinks({ isBigSidebar }) {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map(({ text, path, icon }) => (
        <NavLink
          to={path}
          key={text}
          className="nav-link"
          onClick={isBigSidebar ? null : toggleSidebar}
          end
        >
          <span className="icon">{icon}</span>
          {text}
        </NavLink>
      ))}
    </div>
  );
}
