import { Users, Award, Target, CheckCircle, Lightbulb, Zap, Globe } from 'lucide-react';
import EnquirySection from '../components/home/EnquirySection';

const About = () => {
    const values = [
        { icon: Target, title: "Our Mission", description: "To guide every student towards their ideal educational path and career success through personalized counselling." },
        { icon: Lightbulb, title: "Our Vision", description: "To be the most trusted educational guidance center in Tamil Nadu, transforming lives through quality education access." },
        { icon: Award, title: "Our Values", description: "Integrity, Student-First Approach, Excellence, and Commitment to Success define everything we do." }
    ];

    const stats = [
        { number: "15+", label: "Years of Experience" },
        { number: "10,000+", label: "Students Guided" },
        { number: "100+", label: "Partner Colleges" },
        { number: "95%", label: "Success Rate" }
    ];

    const whyChoose = [
        { icon: Target, title: "Expert Guidance", description: "Our experienced counsellors provide personalized guidance based on individual strengths and aspirations." },
        { icon: Zap, title: "Fast Track Process", description: "Streamlined admission process with quick response times and dedicated support throughout." },
        { icon: Globe, title: "Global Reach", description: "Connections with 500+ colleges and universities across India and internationally." },
        { icon: Award, title: "Proven Success", description: "95% success rate with thousands of students successfully admitted to their preferred institutions." }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="bg-primary py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block bg-secondary text-text-dark px-6 py-2 font-bold text-sm mb-6 animate-fade-in"
                        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '1px' }}>
                        ABOUT US
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-slide-in-up leading-tight"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        About <span className="text-secondary">INSTA</span> Educational Guidance Centre
                    </h1>
                    <p className="text-white/85 max-w-3xl mx-auto text-lg animate-fade-in leading-relaxed"
                        style={{ fontFamily: 'Roboto, sans-serif', animationDelay: '0.3s' }}>
                        Your trusted partner for academic excellence since 2010. We have helped thousands of students find their perfect educational path.
                    </p>
                </div>
            </section>

            {/* About Content */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in-left">
                            <span className="inline-block bg-secondary px-6 py-2 text-text-dark font-semibold text-sm mb-6 rounded"
                                style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '1px' }}>
                                WHO WE ARE
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Guiding Students Towards Bright Futures
                            </h2>
                            <div className="space-y-6 text-text-dark/80" style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.8' }}>
                                <p className="text-base md:text-lg">
                                    <strong className="text-primary">INSTA Educational Guidance Centre</strong> was established with a single mission: to help students navigate the complex world of higher education and career choices.
                                </p>
                                <p className="text-base md:text-lg">
                                    With over 15 years of experience, we have become one of the most trusted names in educational consultancy in Tamil Nadu. Our team of expert counsellors works tirelessly to ensure every student finds the right course, college, and career path.
                                </p>
                                <p className="text-base md:text-lg">
                                    We offer comprehensive guidance for engineering, medical, arts & science, law, and abroad study programs. Our personalized approach ensures that each student receives individual attention and tailored advice.
                                </p>
                            </div>

                            <div className="mt-10 grid grid-cols-2 gap-5">
                                {["Expert Team", "Personalized Guidance", "500+ Colleges", "Proven Track Record"].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3 p-3 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors">
                                        <CheckCircle className="text-secondary w-6 h-6 flex-shrink-0" />
                                        <span className="font-semibold text-primary text-sm md:text-base" style={{ fontFamily: 'Roboto, sans-serif' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-primary to-primary-dark p-10 rounded-xl animate-slide-in-right shadow-2xl">
                            <div className="grid grid-cols-2 gap-8">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center p-5 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20 hover:border-secondary/50 transition-all">
                                        <div className="text-3xl md:text-4xl font-extrabold text-secondary mb-3"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {stat.number}
                                        </div>
                                        <div className="text-white/90 text-sm font-semibold" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Vision Values */}
            <section className="py-24 bg-bg-light">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Our Foundation
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index}
                                    className="bg-white p-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up border-t-4 border-secondary"
                                    style={{ animationDelay: `${index * 0.15}s` }}>
                                    <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-6 flex items-center justify-center shadow-md">
                                        <IconComponent className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-primary mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-text-dark/70 text-center leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-16 text-center"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Why Choose INSTA?
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {whyChoose.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div 
                                    key={index}
                                    className="p-8 bg-bg-light rounded-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fade-in-up text-center border border-secondary/10 hover:border-secondary"
                                    style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                    <div className="w-14 h-14 bg-secondary rounded-full mx-auto mb-5 flex items-center justify-center shadow-md">
                                        <IconComponent className="w-7 h-7 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-bold text-primary mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-text-dark/70 text-sm leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
                <div className="container mx-auto px-4 text-center animate-fade-in-up">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Ready to Shape Your Future?
                    </h2>
                    <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed"
                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                        Get in touch with our expert counsellors today and start your journey towards success.
                    </p>
                    <a
                        href="/enquiry"
                        className="inline-flex items-center gap-3 bg-secondary text-primary px-12 py-5 font-bold text-lg hover:bg-secondary-dark transition-all duration-300 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1"
                        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px' }}
                    >
                        Book A Free Session
                    </a>
                </div>
            </section>

            <EnquirySection />
        </main>
    );
};

export default About;
