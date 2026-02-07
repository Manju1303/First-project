import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { collegeZones, topUniversities } from '../../data/courses';
import useScrollReveal from '../../hooks/useScrollReveal';

const CollegesSection = () => {
    const sectionRef = useScrollReveal();
    return (
        <section className="bg-bg-light py-28 scroll-reveal" ref={sectionRef}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16 animate-fade-in-up scroll-reveal" style={{ animationDelay: '0s' }}>
                    <span className="inline-block bg-secondary px-8 py-3 text-primary font-bold text-sm mb-8 rounded scroll-reveal"
                        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '1px' }}>
                        TOP COLLEGES
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-6 scroll-reveal"
                        style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.4' }}>
                        Partner Colleges Across Tamil Nadu & Bangalore
                    </h2>
                    <p className="text-text-dark/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed scroll-reveal"
                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                        We have tie-ups with leading colleges across various zones. Get direct admission assistance and counselling.
                    </p>
                </div>

                {/* Top Universities */}
                <div className="bg-secondary rounded-xl p-10 mb-16 animate-fade-in-up scroll-reveal border-2 border-secondary shadow-lg">
                    <h3 className="text-primary font-bold text-2xl md:text-3xl mb-10 text-center scroll-reveal"
                        style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}>
                        TOP UNIVERSITIES IN INDIA
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
                        {topUniversities.map((uni, index) => {
                            const uniRef = useScrollReveal({ rootMargin: '0px 0px -30px 0px' });
                            return (
                                <div 
                                    key={index} 
                                    ref={uniRef}
                                    className="bg-white px-4 py-4 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-center border border-secondary/10 scroll-reveal scroll-reveal-delay-1"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                >
                                    <p className="font-bold text-primary text-sm leading-snug"
                                        style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.3px' }}>
                                        {uni}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Zones Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {collegeZones.map((zone, index) => {
                        const zoneRef = useScrollReveal({ rootMargin: '0px 0px -50px 0px' });
                        return (
                            <div
                                key={zone.zone}
                                ref={zoneRef}
                                className="bg-primary rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-300 animate-fade-in-up scroll-reveal scroll-reveal-delay-1"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                            {/* Zone Header */}
                            <div className="bg-primary-dark px-6 py-4 flex items-center gap-3 border-b border-white/10">
                                <MapPin className="text-secondary w-6 h-6 flex-shrink-0" />
                                <h3 className="text-secondary font-bold text-lg"
                                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}>
                                    {zone.zone}
                                </h3>
                            </div>

                            {/* Colleges List */}
                            <div className="p-7">
                                <ul className="space-y-4">
                                    {zone.colleges.map((college, idx) => (
                                        <li key={idx}
                                            className="text-white/90 text-sm md:text-base flex items-start gap-3 hover:translate-x-2 transition-transform"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}>
                                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                            <span className="leading-relaxed">{college}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center animate-fade-in-up scroll-reveal">
                    <Link
                        to="/colleges"
                        className="inline-flex items-center gap-4 bg-primary text-white px-12 py-5 font-bold text-base md:text-lg hover:bg-primary-dark transition-all duration-300 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 scroll-reveal"
                        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px' }}
                    >
                        View All Partner Colleges
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CollegesSection;
