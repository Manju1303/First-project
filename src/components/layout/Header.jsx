import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Phone, Mail, Menu, X, ChevronDown } from 'lucide-react';
import { contactInfo } from '../../data/courses';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();
    const navigate = useNavigate();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        {
            name: 'Courses',
            path: '/courses',
            dropdown: [
                { name: 'Engineering', path: '/courses/engineering' },
                { name: 'Medical', path: '/courses/medical' },
                { name: 'Arts & Science', path: '/courses/arts-science' },
                { name: 'Diploma', path: '/courses/diploma' },
                { name: 'Law', path: '/courses/law' },
            ]
        },
        { name: 'Colleges', path: '/colleges' },
        { name: 'Abroad Study', path: '/abroad' },
        { name: 'Career Guidance', path: '/career' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    const handleNavClick = (path) => {
        navigate(path);
        setIsMenuOpen(false);
        setActiveDropdown(null);
    };

    return (
        <header className="sticky top-0 z-50 shadow-lg">
            {/* Top Bar - Yellow Strip */}
            <div className="bg-secondary py-2">
                <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href={`tel:${contactInfo.phone[0]}`} className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold">
                            <Phone size={14} className="animate-pulse" />
                            <span className="hidden sm:inline">{contactInfo.phone[0]}</span>
                        </a>
                        <a href={`tel:${contactInfo.phone[1]}`} className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold">
                            <Phone size={14} />
                            <span>{contactInfo.phone[1]}</span>
                        </a>
                    </div>
                    <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors font-semibold">
                        <Mail size={14} />
                        <span className="hidden sm:inline">{contactInfo.email}</span>
                    </a>
                </div>
            </div>

            {/* Main Header - White with Logo */}
            <div className="bg-white py-3 md:py-4 border-b-4 border-primary">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 md:gap-3 group" onClick={() => window.scrollTo(0, 0)}>
                        {/* Logo Image */}
                        <img
                            src="/logo.png"
                            alt="INSTA Logo"
                            className="h-10 md:h-16 w-auto transform group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="flex flex-col">
                            <h1 className="text-primary text-base md:text-xl font-extrabold tracking-wide leading-tight"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                INSTA EDUCATIONAL
                            </h1>
                            <p className="text-primary text-[10px] md:text-sm font-semibold tracking-widest"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                GUIDANCE CENTRE
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link, linkIndex) => (
                            <div
                                key={link.name}
                                className="relative group"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                {link.dropdown ? (
                                    <button
                                        onClick={() => navigate(link.path)}
                                        className={`px-4 py-3 text-sm font-bold transition-all duration-300 flex items-center gap-2 rounded relative overflow-hidden group/nav-link ${isActive(link.path)
                                            ? 'text-white bg-primary shadow-lg'
                                            : 'text-primary hover:text-white'
                                            }`}
                                        style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 relative z-10 ${activeDropdown === link.name ? 'rotate-180' : ''}`}
                                        />
                                        {!isActive(link.path) && (
                                            <span className="absolute inset-0 bg-primary opacity-0 group-hover/nav-link:opacity-100 transition-opacity duration-300 -z-0 rounded"></span>
                                        )}
                                    </button>
                                ) : (
                                    <Link
                                        to={link.path}
                                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                        className={`px-4 py-3 text-sm font-bold transition-all duration-300 flex items-center gap-2 rounded relative overflow-hidden group/nav-link ${isActive(link.path)
                                            ? 'text-white bg-primary shadow-lg'
                                            : 'text-primary hover:text-white'
                                            }`}
                                        style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}
                                    >
                                        <span className="relative z-10">{link.name}</span>
                                        {!isActive(link.path) && (
                                            <span className="absolute inset-0 bg-primary opacity-0 group-hover/nav-link:opacity-100 transition-opacity duration-300 -z-0 rounded"></span>
                                        )}
                                    </Link>
                                )}

                                {/* Dropdown */}
                                {link.dropdown && activeDropdown === link.name && (
                                    <div className="absolute top-full left-0 bg-white shadow-2xl border-t-4 border-secondary py-3 min-w-[220px] z-50 rounded-b-lg animate-fade-in-up origin-top">
                                        {link.dropdown.map((item, itemIndex) => (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                                className="block px-6 py-4 text-primary hover:text-white hover:bg-primary transition-all duration-300 text-sm font-medium border-l-4 border-transparent hover:border-secondary group/dropdown-item relative overflow-hidden"
                                                style={{ fontFamily: 'Roboto, sans-serif' }}
                                            >
                                                <span className="relative z-10 flex items-center gap-2">
                                                    {item.name}
                                                </span>
                                                <span className="absolute inset-0 bg-primary opacity-0 group-hover/dropdown-item:opacity-100 transition-opacity duration-300 -z-0"></span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* CTA Button */}
                        <Link
                            to="/enquiry"
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                            className="ml-6 bg-secondary text-primary px-8 py-3 font-bold text-sm hover:bg-secondary-dark transition-all duration-300 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:scale-95 relative overflow-hidden group/cta-btn"
                            style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px' }}
                        >
                            <span className="relative z-10 flex items-center gap-2">FREE COUNSELLING</span>
                            <span className="absolute inset-0 bg-secondary-dark opacity-0 group-hover/cta-btn:opacity-100 transition-opacity duration-300 -z-0"></span>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-primary p-2 hover:bg-primary/10 rounded transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden bg-white border-t-2 border-gray-200 py-5 shadow-2xl animate-slide-in-up">
                        <div className="container mx-auto px-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <button
                                        onClick={() => handleNavClick(link.path)}
                                        className={`w-full text-left py-3 px-5 font-bold transition-all duration-300 rounded relative overflow-hidden group/mobile-nav ${isActive(link.path) ? 'text-white bg-primary' : 'text-primary hover:text-white'
                                            }`}
                                        style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}
                                    >
                                        {!isActive(link.path) && (
                                            <span className="absolute inset-0 bg-primary opacity-0 group-hover/mobile-nav:opacity-100 transition-opacity duration-300 -z-0"></span>
                                        )}
                                        <span className="relative z-10">{link.name}</span>
                                    </button>
                                    {link.dropdown && (
                                        <div className="pl-8 py-3 bg-gray-50 rounded border-l-4 border-secondary">
                                            {link.dropdown.map((item) => (
                                                <button
                                                    key={item.name}
                                                    onClick={() => handleNavClick(item.path)}
                                                    className="w-full text-left py-2 px-4 text-primary/80 hover:text-white text-sm font-medium transition-colors duration-300 rounded hover:bg-primary relative overflow-hidden group/mobile-dropdown"
                                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                                >
                                                    <span className="absolute inset-0 bg-primary opacity-0 group-hover/mobile-dropdown:opacity-100 transition-opacity duration-300 -z-0"></span>
                                                    <span className="relative z-10">{item.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/enquiry"
                                className="mt-6 bg-secondary text-primary px-6 py-4 font-bold text-center rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:bg-secondary-dark transform hover:-translate-y-1 active:scale-95 relative overflow-hidden group/mobile-cta"
                                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px' }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <span className="absolute inset-0 bg-secondary-dark opacity-0 group-hover/mobile-cta:opacity-100 transition-opacity duration-300 -z-0"></span>
                                <span className="relative z-10">FREE COUNSELLING</span>
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
