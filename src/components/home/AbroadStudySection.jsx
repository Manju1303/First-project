import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, FileText, BookMarked, Wallet } from 'lucide-react';
import { abroadCountries } from '../../data/courses';
import useScrollReveal from '../../hooks/useScrollReveal';

const AbroadStudySection = () => {
    const sectionRef = useScrollReveal();
    const features = [
        { title: "University Selection", icon: GraduationCap },
        { title: "Visa Assistance", icon: FileText },
        { title: "IELTS/TOEFL Prep", icon: BookMarked },
        { title: "Scholarship Guidance", icon: Wallet }
    ];

    return (
        <section className="py-8 lg:py-12 bg-secondary relative overflow-hidden scroll-reveal" ref={sectionRef}>
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 animate-fade-in-up">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-4"
                        style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
                        ABROAD STUDY
                    </h2>
                    <p className="text-primary/80 max-w-2xl mx-auto text-sm sm:text-base font-medium leading-relaxed mt-2"
                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                        Your gateway to world-class education. Discover opportunities in top universities across the globe.
                    </p>
                </div>

                {/* Countries Grid - 3 columns on mobile, 5 on medium, 10 on large */}
                <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-10 gap-4 lg:gap-5 mb-10">
                    {abroadCountries.map((country, index) => {
                        const countryRef = useScrollReveal({ rootMargin: '0px 0px -40px 0px' });
                        return (
                            <div
                                key={country.name}
                                ref={countryRef}
                                className="group text-center animate-fade-in-up cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 scroll-reveal scroll-reveal-delay-1"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {/* Flag Circle with Image */}
                                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:scale-125 transition-all duration-300 border-4 border-primary p-1">
                                    <img
                                        src={country.flag}
                                        alt={`${country.name} Flag`}
                                        className="w-full h-full object-cover rounded-full"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Country Name */}
                                <p className="mt-4 text-primary font-bold text-xs md:text-sm uppercase tracking-wider"
                                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '1px' }}>
                                    {country.name}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Features Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-16">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        const featureRef = useScrollReveal({ rootMargin: '0px 0px -50px 0px' });
                        return (
                            <div
                                key={feature.title}
                                ref={featureRef}
                                className="bg-primary text-white p-5 md:p-7 text-center hover:bg-primary-dark hover:-translate-y-2 transition-all duration-300 animate-fade-in-up rounded-xl shadow-lg hover:shadow-2xl scroll-reveal scroll-reveal-delay-1"
                                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                            >
                                <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                                    <IconComponent className="w-8 h-8 text-primary" />
                                </div>
                                <span className="font-bold text-sm md:text-base" style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}>
                                    {feature.title}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center animate-fade-in-up scroll-reveal" style={{ animationDelay: '1s' }}>
                    <Link
                        to="/abroad"
                        className="inline-flex items-center gap-4 bg-primary text-white px-12 py-5 font-bold text-base md:text-lg hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl rounded-lg shadow-lg scroll-reveal"
                        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px' }}
                    >
                        Explore Abroad Study Options
                        <ArrowRight size={22} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AbroadStudySection;
