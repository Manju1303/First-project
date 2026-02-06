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
            <div className="bg-white py-3 border-b-4 border-primary">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group" onClick={() => window.scrollTo(0, 0)}>
                        {/* Logo Image */}
                        <img
                            src="/logo.svg"
                            alt="INSTA Logo"
                            className="h-12 md:h-14 w-auto transform group-hover:scale-105 transition-transform duration-300"
                        />
                        <div>
                            <h1 className="text-primary text-lg md:text-xl font-extrabold tracking-wide leading-tight"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                INSTA EDUCATIONAL
                            </h1>
                            <p className="text-primary text-xs md:text-sm font-semibold tracking-widest"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                GUIDANCE CENTRE
                            </p>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    to={link.path}
                                    className={`px-3 py-2 text-sm font-bold transition-all duration-300 flex items-center gap-1 rounded ${isActive(link.path)
                                            ? 'text-white bg-primary'
                                            : 'text-primary hover:bg-primary/10'
                                        }`}
                                    style={{ fontFamily: 'Poppins, sans-serif' }}
                                >
                                    {link.name}
                                    {link.dropdown && <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                                </Link>

                                {/* Dropdown */}
                                {link.dropdown && activeDropdown === link.name && (
                                    <div className="absolute top-full left-0 bg-white shadow-xl border-t-4 border-secondary py-2 min-w-[200px] z-50">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.path}
                                                className="block px-4 py-3 text-primary hover:bg-primary hover:text-white transition-colors text-sm font-medium"
                                                style={{ fontFamily: 'Roboto, sans-serif' }}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* CTA Button */}
                        <Link
                            to="/enquiry"
                            className="ml-4 bg-secondary text-primary px-5 py-2 font-bold text-sm hover:bg-secondary-dark transition-colors rounded shadow-md"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            FREE COUNSELLING
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-primary p-2 hover:bg-primary/10 rounded"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden bg-white border-t border-gray-200 py-4 shadow-lg">
                        <div className="container mx-auto px-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <button
                                        onClick={() => handleNavClick(link.path)}
                                        className={`w-full text-left py-3 px-4 font-bold transition-colors rounded ${isActive(link.path) ? 'text-white bg-primary' : 'text-primary hover:bg-primary/10'
                                            }`}
                                        style={{ fontFamily: 'Poppins, sans-serif' }}
                                    >
                                        {link.name}
                                    </button>
                                    {link.dropdown && (
                                        <div className="pl-6 py-2 bg-gray-50 rounded">
                                            {link.dropdown.map((item) => (
                                                <button
                                                    key={item.name}
                                                    onClick={() => handleNavClick(item.path)}
                                                    className="w-full text-left py-2 px-4 text-primary/80 hover:text-primary text-sm font-medium"
                                                >
                                                    {item.name}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Link
                                to="/enquiry"
                                className="mt-4 bg-secondary text-primary px-6 py-3 font-bold text-center rounded shadow"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                FREE COUNSELLING
                            </Link>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    );
};

export default Header;
