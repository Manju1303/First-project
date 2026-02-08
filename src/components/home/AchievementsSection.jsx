import { Trophy, Users, Building, Globe } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const AchievementsSection = () => {
    const sectionRef = useScrollReveal();

    const stats = [
        {
            icon: Trophy,
            value: "15+",
            label: "Years of Experience"
        },
        {
            icon: Users,
            value: "10,000+",
            label: "Students Counseled"
        },
        {
            icon: Building,
            value: "150+",
            label: "Partner Colleges"
        },
        {
            icon: Globe,
            value: "20+",
            label: "Countries Covered"
        }
    ];

    return (
        <section className="py-10 bg-primary text-white relative overflow-hidden" ref={sectionRef}>
            {/* Decorative Background Patterns */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <div
                                key={index}
                                className="text-center group hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 backdrop-blur-sm">
                                    <IconComponent className="w-8 h-8" />
                                </div>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-secondary mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {stat.value}
                                </h3>
                                <p className="text-white/80 font-medium text-sm md:text-base" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default AchievementsSection;
