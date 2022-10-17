import React from 'react';

import { NavLink } from 'react-router-dom';

export default function NavCrew() {
  const isNavLinkActive = (isActive) => (isActive ? { opacity: '100' } : {});

  /* estilos basados en TailwindCss */
  const stylesNavLink = 'block w-4 h-4 rounded-full bg-white opacity-25';

  return (
    <nav className="navigation-menu-crew w-full grid grid-cols-mxc4 gap-5 justify-center lg:self-start lg:justify-start lg:pb-12">
      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        className={stylesNavLink}
        to="Douglas-Hurley"></NavLink>
      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        className={stylesNavLink}
        to="Mark-Shuttleworth"></NavLink>
      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        className={stylesNavLink}
        to="Victor-Glover"></NavLink>
      <NavLink
        style={({ isActive }) => isNavLinkActive(isActive)}
        className={stylesNavLink}
        to="Anousheh-Ansari"></NavLink>
    </nav>
  );
}
