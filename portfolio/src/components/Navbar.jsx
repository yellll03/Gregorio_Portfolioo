import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const links = ['Home', 'About', 'Skills', 'Education', 'Contact']

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#home" className="logo">Leah Jane Gregorio</a>

        <button className="menu-btn" onClick={() => setOpen(!open)}>
          Menu
        </button>

        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
