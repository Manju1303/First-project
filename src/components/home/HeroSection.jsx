import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Plane, Target, Briefcase, Handshake, Star, BookOpen } from 'lucide-react';

const HeroSection = () => {
    const services = [
        { icon: GraduationCap, title: "Higher Education" },
        { icon: Plane, title: "Abroad Study" },
        { icon: Target, title: "Career Guidance" },
        { icon: Briefcase, title: "Job Opportunity" }
    ];

    return (
        <section className="bg-white min-h-[600px] lg:min-h-[650px]">
            {/* Yellow Top Banner */}
            <div className="bg-secondary h-12 w-full"></div>

            <div className="flex flex-col lg:flex-row min-h-[550px]">
                {/* Left Side - Blue Section */}
                <div className="bg-primary lg:w-1/2 py-10 lg:py-14 px-6 lg:px-10 relative">
                    <div className="max-w-lg mx-auto lg:mx-0">
                        {/* Tagline */}
                        <p className="text-lg md:text-xl font-light italic text-white/90 mb-5"
                            style={{ fontFamily: 'Georgia, serif' }}>
                            Guidance for
                        </p>

                        {/* Services List */}
                        <div className="space-y-3 mb-6">
                            {services.map((service, index) => {
                                const IconComponent = service.icon;
                                return (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                                            <IconComponent className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="text-base md:text-lg lg:text-xl font-bold text-white"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            {service.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Support Message */}
                        <div className="mb-6">
                            <p className="text-lg md:text-xl font-medium text-white flex items-center gap-2"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                We are here to
                                <Handshake className="w-6 h-6 text-secondary" />
                            </p>
                            <p className="text-xl md:text-2xl lg:text-3xl font-extrabold text-secondary mt-1"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                SUPPORT YOU
                            </p>
                        </div>

                        {/* CTA Button */}
                        <Link
                            to="/enquiry"
                            className="inline-flex items-center gap-2 bg-secondary text-primary px-6 py-3 font-bold text-sm hover:bg-secondary-dark transition-all duration-300 shadow-xl rounded-lg"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            GET FREE COUNSELLING
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    {/* Yellow curve at bottom for mobile */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-secondary lg:hidden"
                        style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }}></div>
                </div>

                {/* Right Side - White Section with Student Image */}
                <div className="bg-gray-50 lg:w-1/2 py-8 lg:py-6 px-6 lg:px-10 flex items-center justify-center relative">
                    {/* Admission Badge */}
                    <div className="absolute top-6 right-6 z-20">
                        <div className="bg-white rounded-xl p-3 shadow-xl border-2 border-accent">
                            <p className="text-accent font-bold text-xs text-center"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Admission
                            </p>
                            <p className="text-accent font-bold text-xs text-center"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Going on
                            </p>
                            <p className="text-primary font-extrabold text-2xl text-center"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                2026-27
                            </p>
                        </div>
                    </div>

                    {/* Student Image - Girl with colorful books */}
                    <div className="relative">
                        <div className="w-56 h-72 lg:w-72 lg:h-96 rounded-t-full overflow-hidden shadow-2xl bg-gradient-to-b from-gray-100 to-gray-200">
                            {/* Using local student image */}
                            <img
                                src="/student.jpg"
                                alt="Happy Student with Books"
                                className="w-full h-full object-cover object-top"
                            />
                        </div>

                        {/* Books decoration */}
                        <div className="absolute -bottom-2 -right-4 bg-white p-2 rounded-full shadow-lg">
                            <BookOpen className="w-7 h-7 text-primary" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -left-4 top-1/3 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-lg">
                            <GraduationCap className="w-5 h-5 text-primary" />
                        </div>
                        <div className="absolute -right-2 top-1/4 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                            <Star className="w-4 h-4 text-secondary" fill="currentColor" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Yellow Strip */}
            <div className="bg-secondary py-3">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-8 text-primary font-bold text-xs lg:text-sm"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" fill="currentColor" /> Better Consultant!
                        </span>
                        <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" fill="currentColor" /> Free Guidance!!
                        </span>
                        <span className="flex items-center gap-1">
                            <Star className="w-3 h-3" fill="currentColor" /> Better Education!!!
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
