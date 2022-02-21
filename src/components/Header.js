import React from "react";
import { NavLink } from "react-router-dom";
import indexRoutes from "routes";

const Header = () => {
  return (
    <div className="flex flex-row justify-around py-2 px-1">
      <div className="text-2xl italic">
        <span className="font-medium">Cat</span>atonic
      </div>
      <div>
        <nav className="flex flex-row justify-between">
          {indexRoutes.map(
            (layout, layoutIdx) =>
              layout.children.length > 0 &&
              layout.children.map((route, routeIdx) => {
                let fullpath = `${layout.path}${route.path}`;
                if (layout?.invisible || route?.invisible) return undefined;
                return (
                  <NavLink
                    key={`route-${layoutIdx}-${routeIdx}`}
                    className="px-1"
                    to={fullpath}
                  >
                    {({ isActive }) => {
                      if (isActive) return route.activeIcon;
                      return route.inactiveIcon;
                    }}
                  </NavLink>
                );
              })
          )}
        </nav>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
