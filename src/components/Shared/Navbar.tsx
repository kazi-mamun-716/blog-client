import { Link, useLocation } from 'react-router';
import headerBgHome from '../../assets/img/home-bg.jpg';
import headerBgContact from '../../assets/img/contact-bg.jpg';
import headerBgPost from '../../assets/img/post-bg.jpg';
import headerBgAbout from '../../assets/img/about-bg.jpg';
import {useEffect, useRef, useState } from 'react';

type Props = {}

const Navbar = (props: Props) => {
    const [headerBg, setHeaderBg] = useState(headerBgHome);
    const [headerTxt, setHeaderTxt] = useState<string>("Clean Blog");
    const [headerSubTxt, setHeaderSubTxt] = useState<string>("A Blog Theme by Start Bootstrap");
    const location = useLocation();
    const navRef = useRef(null);

  useEffect(() => {
    const mainNav = navRef.current;
    let scrollPos = 0;

    const handleScroll = () => {
      const currentTop = document.body.getBoundingClientRect().top * -1;
      const headerHeight = mainNav.clientHeight;

      if (currentTop < scrollPos) {
        // Scrolling Up
        if (currentTop > 0 && mainNav.classList.contains('is-fixed')) {
          mainNav.classList.add('is-visible');
        } else {
          mainNav.classList.remove('is-visible', 'is-fixed');
        }
      } else {
        // Scrolling Down
        mainNav.classList.remove('is-visible');
        if (currentTop > headerHeight && !mainNav.classList.contains('is-fixed')) {
          mainNav.classList.add('is-fixed');
        }
      }
      scrollPos = currentTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
    useEffect(() => {
        if (location.pathname === '/about') {
            setHeaderBg(headerBgAbout);
            setHeaderTxt("About Me");
            setHeaderSubTxt("This is what I do.");
        } else if (location.pathname === '/posts') {
            setHeaderBg(headerBgPost);
            setHeaderTxt("Man must explore, and this is exploration at its greatest");
            setHeaderSubTxt("Problems look mighty small from 150 miles up.");
        } else if (location.pathname === '/contact') {
            setHeaderBg(headerBgContact);
            setHeaderTxt("Contact Me");
            setHeaderSubTxt("Have questions? I have answers.");
        } else {
            setHeaderBg(headerBgHome);
            setHeaderTxt("Clean Blog");
            setHeaderSubTxt("A Blog Theme by Start Bootstrap");
        }
    }, [location.pathname]);
    return (
        <>
            <nav ref={navRef} className="navbar navbar-expand-lg navbar-light" id="mainNav">
                <div className="container px-4 px-lg-5">
                    <Link className="navbar-brand" to="/">Start Bootstrap</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ms-auto py-4 py-lg-0">
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/posts">Sample Post</Link></li>
                            <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header className="masthead" style={{ backgroundImage: `url(${headerBg})` }}>
                <div className="container position-relative px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5 justify-content-center">
                        <div className="col-md-10 col-lg-8 col-xl-7">
                            <div className="site-heading">
                                <h1>{headerTxt}</h1>
                                <span className="subheading">{headerSubTxt}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar