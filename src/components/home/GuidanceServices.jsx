import { GraduationCap, Globe, Target, Briefcase } from 'lucide-react';
import { guidanceServices } from '../../data/courses';
import useScrollReveal from '../../hooks/useScrollReveal';

const iconMap = {
    GraduationCap: GraduationCap,
    Globe: Globe,
    Target: Target,
    Briefcase: Briefcase
};

const GuidanceServices = () => {
    const sectionRef = useScrollReveal();

    return (
        <section className="pt-12 pb-6 bg-bg-light scroll-reveal" ref={sectionRef}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-10 animate-fade-in-up" style={{ animationDelay: '0s' }}>
                    <span className="inline-block bg-secondary px-8 py-3 text-primary font-bold text-sm mb-4 rounded"
                        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '1px' }}>
                        OUR SERVICES
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4"
                        style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.4' }}>
                        Comprehensive Guidance Services
                    </h2>
                    <p className="text-text-dark/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed"
                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                        We provide end-to-end support for your educational journey, from course selection to placement assistance.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
                    {guidanceServices.map((service, index) => {
                        const IconComponent = iconMap[service.icon];
                        const cardRef = useScrollReveal({ rootMargin: '0px 0px -50px 0px' });
                        return (
                            <div
                                key={service.id}
                                ref={cardRef}
                                className="group bg-primary p-8 text-center hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-3 animate-fade-in-up cursor-pointer rounded-xl shadow-lg hover:shadow-2xl scroll-reveal scroll-reveal-delay-1"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Icon */}
                                <div className="w-20 h-20 bg-secondary mx-auto mb-6 flex items-center justify-center rounded-lg group-hover:scale-125 transition-transform duration-300 shadow-md">
                                    <IconComponent className="w-10 h-10 text-primary" />
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-lg md:text-xl font-bold mb-4 group-hover:text-secondary transition-colors"
                                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/85 text-sm md:text-base leading-relaxed"
                                    style={{ fontFamily: 'Roboto, sans-serif', minHeight: '4rem' }}>
                                    {service.description}
                                </p>

                                {/* Hover Line */}
                                <div className="w-0 h-1 bg-secondary mx-auto mt-6 group-hover:w-24 transition-all duration-300 rounded"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GuidanceServices;
