import { useState } from 'react';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import { profile } from '../data/profile';

const links = [{ label: 'About', href: '#about' }, { label: 'Skills', href: '#skills' }, { label: 'Projects', href: '#projects' }, { label: 'Experience', href: '#experience' }, { label: 'Contact', href: '#contact' }];
export default function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><nav className="nav container" aria-label="Main navigation">
    <a className="brand" href="#home" aria-label={`${profile.name} home`}><span className="brand-mark">{profile.monogram}</span><span>{profile.name.split(' ')[0]}<b className="brand-dot">.</b></span></a>
    <button className="icon-button mobile-menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open}>{open ? <X /> : <Menu />}</button>
    <div className={`nav-links ${open ? 'is-open' : ''}`}>
      {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}
      <button className="icon-button theme-toggle" onClick={onThemeToggle} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>{theme === 'dark' ? <Sun size={17}/> : <Moon size={17}/>}</button>
      {profile.resumeAvailable && <a className="button button-small button-outline nav-resume" href={profile.resume} download><Download size={15}/> Resume</a>}
    </div>
  </nav></header>;
}
