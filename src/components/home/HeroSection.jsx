import { Link } from 'react-router-dom';
import { ArrowRight, GraduationCap, Plane, Target, Briefcase, Star, BookOpen } from 'lucide-react';
import BlurText from '../common/BlurText';

const HeroSection = () => {
    const services = [
        { icon: GraduationCap, title: "Higher Education" },
        { icon: Plane, title: "Abroad Study" },
        { icon: Target, title: "Career Guidance" },
        { icon: Briefcase, title: "Job Opportunity" }
    ];

    return (
        <section className="bg-white min-h-[auto] lg:min-h-[600px]">
            {/* Yellow Top Banner */}
            <div className="bg-secondary h-8 lg:h-12 w-full"></div>

            <div className="flex flex-col lg:flex-row min-h-[auto] lg:min-h-[550px]">
                {/* Left Side - Blue Section */}
                <div className="bg-primary lg:w-1/2 py-8 lg:py-20 px-6 lg:px-16 flex flex-col justify-center relative">
                    <div className="max-w-xl mx-auto lg:mx-0">
                        {/* Tagline */}


                        {/* Services List */}
                        <div className="space-y-6 mb-8">
                            {services.map((service, index) => {
                                const IconComponent = service.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center gap-6 hover:translate-x-2 transition-transform duration-300"
                                    >
                                        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-xl flex-shrink-0 hover:scale-125 transition-transform duration-300 hover:bg-secondary">
                                            <IconComponent className="w-6 h-6 text-primary" />
                                        </div>
                                        <BlurText
                                            text={service.title}
                                            delay={80}
                                            className="text-lg md:text-xl lg:text-2xl font-bold text-white tracking-wide leading-tight"
                                            direction="top"
                                            stepDuration={0.35}
                                            animateBy="words"
                                            easing={(t) => t}
                                            style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}
                                        />
                                    </div>
                                );
                            })}
                        </div>

                        {/* Support Message */}
                        <div className="mb-8">
                            <BlurText
                                text="We are here to SUPPORT YOU"
                                delay={150}
                                className="text-lg md:text-xl font-medium text-white"
                                direction="top"
                                stepDuration={0.3}
                                animateBy="words"
                                easing={(t) => t}
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            />
                            <BlurText
                                text="ON YOUR EDUCATIONAL JOURNEY"
                                delay={120}
                                className="text-xl md:text-2xl lg:text-4xl font-extrabold text-secondary mt-3 tracking-wider"
                                direction="top"
                                stepDuration={0.35}
                                animateBy="words"
                                easing={(t) => t}
                                style={{ fontFamily: 'Poppins, sans-serif' }}
                            />
                        </div>

                        {/* CTA Button */}
                        <Link
                            to="/enquiry"
                            className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 font-bold text-base hover:bg-secondary-dark transition-all duration-300 shadow-xl rounded-lg"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                            <BlurText
                                text="GET FREE COUNSELLING"
                                delay={100}
                                className="font-bold text-base"
                                direction="top"
                                stepDuration={0.3}
                                animateBy="words"
                                easing={(t) => t}
                                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px' }}
                            />
                            <ArrowRight size={20} />
                        </Link>
                    </div>

                    {/* Yellow curve at bottom for mobile */}
                    <div className="absolute bottom-0 left-0 right-0 h-16 bg-secondary lg:hidden"
                        style={{ clipPath: 'polygon(0 50%, 100% 0, 100% 100%, 0 100%)' }}></div>
                </div>

                {/* Right Side - White Section with Student Image */}
                <div className="bg-gray-50 lg:w-1/2 py-10 lg:py-0 px-6 lg:px-10 flex items-center justify-center relative overflow-hidden">
                    {/* Admission Badge */}
                    <div className="absolute top-4 right-4 lg:top-10 lg:right-10 z-20 animate-bounce-slow">
                        <div className="bg-white rounded-xl p-3 lg:p-4 shadow-xl border-2 border-accent transform rotate-12 hover:rotate-0 transition-transform duration-300 scale-75 lg:scale-100 origin-top-right">
                            <p className="text-accent font-bold text-[10px] lg:text-xs text-center uppercase tracking-wider"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Admission
                            </p>
                            <p className="text-accent font-bold text-[10px] lg:text-xs text-center uppercase tracking-wider"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Going on
                            </p>
                            <p className="text-primary font-extrabold text-xl lg:text-3xl text-center mt-1"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                2026-27
                            </p>
                        </div>
                    </div>

                    {/* Student Image - Girl with colorful books */}
                    <div className="relative animate-slide-in-right">
                        <div className="w-full max-w-[18rem] h-96 lg:max-w-[450px] lg:w-[450px] lg:h-[600px] rounded-t-full overflow-hidden shadow-2xl bg-gradient-to-b from-gray-100 to-gray-200 border-4 border-white">
                            {/* Using local student image */}
                            <img
                                src="/student.jpg"
                                alt="Happy Student with Books"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Books decoration */}
                        <div className="absolute -bottom-4 -right-6 bg-white p-3 rounded-full shadow-lg animate-float">
                            <BookOpen className="w-8 h-8 text-primary" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -left-6 top-1/3 w-12 h-12 bg-secondary rounded-full flex items-center justify-center shadow-lg animate-float-delayed">
                            <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div className="absolute -right-4 top-1/4 w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg animate-pulse">
                            <Star className="w-5 h-5 text-secondary" fill="currentColor" />
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
