import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube, MessageCircle } from 'lucide-react';
import { contactInfo } from '../../data/courses';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Courses', path: '/courses' },
        { name: 'Colleges', path: '/colleges' },
        { name: 'Abroad Study', path: '/abroad' },
        { name: 'Career Guidance', path: '/career' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Free Counselling', path: '/enquiry' },
    ];

    const courses = [
        { name: 'Engineering', path: '/courses/engineering' },
        { name: 'Medical', path: '/courses/medical' },
        { name: 'Arts & Science', path: '/courses/arts-science' },
        { name: 'Diploma', path: '/courses/diploma' },
        { name: 'Law', path: '/courses/law' },
        { name: 'Abroad Study', path: '/abroad' },
    ];

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-primary text-white">
            {/* Main Footer */}
            <div className="container mx-auto px-4 py-10 lg:py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <img
                                src="/logo.png"
                                alt="INSTA Logo"
                                className="h-10 w-auto bg-white p-1 rounded object-contain"
                            />
                            <div>
                                <h3 className="text-sm font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>INSTA</h3>
                                <p className="text-secondary text-xs font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>GUIDANCE CENTRE</p>
                            </div>
                        </div>
                        <p className="text-white/80 text-sm leading-relaxed mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
                            Your trusted partner for academic excellence. Comprehensive guidance for higher education, abroad study, career counselling.
                        </p>
                        <div className="flex gap-2">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 flex items-center justify-center rounded hover:bg-secondary hover:text-primary transition-all">
                                <Facebook size={14} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 flex items-center justify-center rounded hover:bg-secondary hover:text-primary transition-all">
                                <Instagram size={14} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 flex items-center justify-center rounded hover:bg-secondary hover:text-primary transition-all">
                                <Twitter size={14} />
                            </a>
                            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 flex items-center justify-center rounded hover:bg-secondary hover:text-primary transition-all">
                                <Youtube size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-secondary text-sm font-bold mb-4 pb-2 border-b border-secondary/50" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        onClick={scrollToTop}
                                        className="text-white/80 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                                        style={{ fontFamily: 'Roboto, sans-serif' }}
                                    >
                                        <span className="w-1 h-1 bg-secondary rounded-full"></span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Courses */}
                    <div>
                        <h4 className="text-secondary text-sm font-bold mb-4 pb-2 border-b border-secondary/50" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Our Courses
                        </h4>
                        <ul className="space-y-2">
                            {courses.map((course) => (
                                <li key={course.name}>
                                    <Link
                                        to={course.path}
                                        onClick={scrollToTop}
                                        className="text-white/80 hover:text-secondary transition-colors text-sm flex items-center gap-2"
                                        style={{ fontFamily: 'Roboto, sans-serif' }}
                                    >
                                        <span className="w-1 h-1 bg-secondary rounded-full"></span>
                                        {course.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-secondary text-sm font-bold mb-4 pb-2 border-b border-secondary/50" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Contact Us
                        </h4>
                        <ul className="space-y-3">
                            <li className="flex gap-2">
                                <MapPin size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                                <span className="text-white/80 text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>{contactInfo.address}</span>
                            </li>
                            <li>
                                <a href={`tel:${contactInfo.phone[0]}`} className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors">
                                    <Phone size={16} className="text-secondary flex-shrink-0" />
                                    <span className="text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>{contactInfo.phone[0]}</span>
                                </a>
                            </li>
                            <li>
                                <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 text-white/80 hover:text-secondary transition-colors">
                                    <Mail size={16} className="text-secondary flex-shrink-0" />
                                    <span className="text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>{contactInfo.email}</span>
                                </a>
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock size={16} className="text-secondary flex-shrink-0" />
                                <span className="text-white/80 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>{contactInfo.workingHours}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-primary-dark py-3">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
                    <p className="text-white/60 text-xs text-center" style={{ fontFamily: 'Roboto, sans-serif' }}>
                        © {currentYear} INSTA Educational Guidance Centre. All Rights Reserved.
                    </p>
                    <div className="flex gap-4">
                        <Link to="/contact" onClick={scrollToTop} className="text-white/60 hover:text-secondary text-xs transition-colors">Privacy Policy</Link>
                        <Link to="/contact" onClick={scrollToTop} className="text-white/60 hover:text-secondary text-xs transition-colors">Terms</Link>
                    </div>
                </div>
            </div>

            {/* WhatsApp Floating Button */}
            <a
                href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-5 right-5 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors z-50"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={24} className="text-white" />
            </a>
        </footer>
    );
};

export default Footer;
