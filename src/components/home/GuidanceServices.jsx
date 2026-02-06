import { GraduationCap, Globe, Target, Briefcase } from 'lucide-react';
import { guidanceServices } from '../../data/courses';

const iconMap = {
    GraduationCap: GraduationCap,
    Globe: Globe,
    Target: Target,
    Briefcase: Briefcase
};

const GuidanceServices = () => {
    return (
        <section className="py-20 bg-bg-light">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14 animate-fade-in-up">
                    <span className="inline-block bg-secondary px-8 py-3 text-primary font-bold text-sm mb-6 rounded"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        OUR SERVICES
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Comprehensive Guidance Services
                    </h2>
                    <p className="text-text-dark/70 max-w-2xl mx-auto text-lg"
                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                        We provide end-to-end support for your educational journey, from course selection to placement assistance.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {guidanceServices.map((service, index) => {
                        const IconComponent = iconMap[service.icon];
                        return (
                            <div
                                key={service.id}
                                className="group bg-primary p-8 text-center hover:bg-primary-dark transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up cursor-pointer rounded-lg shadow-lg"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Icon */}
                                <div className="w-20 h-20 bg-secondary mx-auto mb-6 flex items-center justify-center rounded-lg group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-10 h-10 text-primary" />
                                </div>

                                {/* Title */}
                                <h3 className="text-white text-xl font-bold mb-4 group-hover:text-secondary transition-colors"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-white/80 text-sm leading-relaxed"
                                    style={{ fontFamily: 'Roboto, sans-serif' }}>
                                    {service.description}
                                </p>

                                {/* Hover Line */}
                                <div className="w-0 h-1 bg-secondary mx-auto mt-6 group-hover:w-20 transition-all duration-300 rounded"></div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default GuidanceServices;
