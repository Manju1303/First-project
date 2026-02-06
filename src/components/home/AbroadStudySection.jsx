import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, FileText, BookMarked, Wallet } from 'lucide-react';
import { abroadCountries } from '../../data/courses';

const AbroadStudySection = () => {
    const features = [
        { title: "University Selection", icon: GraduationCap },
        { title: "Visa Assistance", icon: FileText },
        { title: "IELTS/TOEFL Prep", icon: BookMarked },
        { title: "Scholarship Guidance", icon: Wallet }
    ];

    return (
        <section className="py-20 bg-secondary relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        ABROAD STUDY & JOBS
                    </h2>
                    <p className="text-primary/80 max-w-2xl mx-auto text-lg"
                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                        Get expert guidance for admissions in top universities across the globe
                    </p>
                </div>

                {/* Countries Grid - 5 columns on large screens, 4 on medium */}
                <div className="grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-10 gap-6 lg:gap-4 mb-12">
                    {abroadCountries.map((country, index) => (
                        <div
                            key={country.name}
                            className="group text-center animate-fade-in-up cursor-pointer"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            {/* Flag Circle with Image */}
                            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 border-4 border-primary p-1">
                                <img
                                    src={country.flag}
                                    alt={`${country.name} Flag`}
                                    className="w-full h-full object-cover rounded-full"
                                    loading="lazy"
                                />
                            </div>

                            {/* Country Name */}
                            <p className="mt-3 text-primary font-bold text-xs md:text-sm uppercase tracking-wide"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                {country.name}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Features Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div
                                key={feature.title}
                                className="bg-primary text-white p-6 text-center hover:bg-primary-dark transition-colors animate-fade-in-up rounded-lg shadow-md"
                                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                            >
                                <div className="w-14 h-14 bg-secondary rounded-full mx-auto mb-3 flex items-center justify-center">
                                    <IconComponent className="w-7 h-7 text-primary" />
                                </div>
                                <span className="font-bold text-sm" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {feature.title}
                                </span>
                            </div>
                        );
                    })}
                </div>

                {/* CTA */}
                <div className="text-center animate-fade-in-up" style={{ animationDelay: '1s' }}>
                    <Link
                        to="/abroad"
                        className="inline-flex items-center gap-3 bg-primary text-white px-10 py-4 font-bold text-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 rounded-lg shadow-lg"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Explore Abroad Study Options
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AbroadStudySection;
