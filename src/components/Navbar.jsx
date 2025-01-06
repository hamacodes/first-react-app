function Navbar() {
    return (
      <header className='header'>
          <img className='header-image' src="src/assets/react.svg" alt="React logo" />
          <nav>
            <ul className='nav-list'>
              <li>Pricing</li>
              <li>About</li> 
              <li>Contact</li>
            </ul>
          </nav>
      </header> 
    );
}

export default Navbar;