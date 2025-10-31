import ThemeToggle from '../Theme/ThemeToggle'
import './Header.css'

function Header() {
  return (
    <header className='header'>
      <h1>Product Dashboard</h1>
      <ThemeToggle />
    </header>
  )
}

export default Header