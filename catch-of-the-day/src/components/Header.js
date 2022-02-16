import React from 'react';

// El componente se puede definir como constante en lugar de clase (Stateless Functional Components)
const Header = (props) => (
  <header className="top">
      <h1>
        Catch
        <span className="ofThe">
          <span className="of">Of</span>
          <span className="the">The</span>
        </span>
        Day
      </h1>
      <h3 className="tagline"><span>{props.tagline}</span></h3> {/* Esta prop esta definida en App.js */}
    </header>
)

export default Header;
