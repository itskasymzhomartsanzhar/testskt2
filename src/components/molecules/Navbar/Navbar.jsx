import { useState, useEffect } from 'react';
import ContactModal from '../ContactModal/ContactModal';
import InterestingModal from '../InterestingModal/InterestingModal';

import MenuModal from '../MenuModal/MenuModal';
import './Navbar.scss';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInterestingOpen, setIsInterestingOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__wrapper">
          <div className="navbar__left">
            <h1 className='navbar__title'>SKT Agency</h1>
          </div>

          <div className="navbar__right">
            <h3 className="navbar__contacts">RU</h3>
            <p className="navbar__contacts" onClick={() => setIsModalOpen(true)}>
              +7 747 225 30 32<br />
              hello@sktagency.pro
            </p>

          <button className="navbar__menu" onClick={() => setIsModalOpen(true)}>
              Контакты
          </button>
          <a
            href="https://t.me/sktagency"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__start_project"
          >
            Написать
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
            </svg>
          </a>

        </div>
      </div>
    </div>

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <InterestingModal isOpen={isInterestingOpen} onClose={() => setIsInterestingOpen(false)} />
      <MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Navbar;
