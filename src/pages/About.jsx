import { Users, Award, Target, Heart, CheckCircle } from 'lucide-react';
import EnquirySection from '../components/home/EnquirySection';

const About = () => {
    const values = [
        { icon: Target, title: "Our Mission", description: "To guide every student towards their ideal educational path and career success through personalized counselling." },
        { icon: Heart, title: "Our Vision", description: "To be the most trusted educational guidance center in Tamil Nadu, transforming lives through quality education access." },
        { icon: Award, title: "Our Values", description: "Integrity, Student-First Approach, Excellence, and Commitment to Success define everything we do." }
    ];

    const stats = [
        { number: "15+", label: "Years of Experience" },
        { number: "10,000+", label: "Students Guided" },
        { number: "100+", label: "Partner Colleges" },
        { number: "95%", label: "Success Rate" }
    ];

    const team = [
        { name: "Director", role: "Chief Education Consultant", experience: "20+ years in Education" },
        { name: "Senior Counsellor", role: "Career Guidance Expert", experience: "15+ years experience" },
        { name: "Abroad Study Head", role: "International Admissions", experience: "10+ years experience" }
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
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        ABOUT US
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        About <span className="text-secondary">INSTA</span> Educational Guidance Centre
                    </h1>
                    <p className="text-white/80 max-w-3xl mx-auto text-lg animate-fade-in"
                        style={{ fontFamily: 'Roboto, sans-serif', animationDelay: '0.3s' }}>
                        Your trusted partner for academic excellence since 2010. We have helped thousands of students find their perfect educational path.
                    </p>
                </div>
            </section>

            {/* About Content */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="animate-slide-in-left">
                            <span className="inline-block bg-secondary px-4 py-1 text-text-dark font-semibold text-sm mb-4"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                WHO WE ARE
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Guiding Students Towards Bright Futures
                            </h2>
                            <div className="space-y-4 text-text-dark/80" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                <p>
                                    <strong className="text-primary">INSTA Educational Guidance Centre</strong> was established with a single mission: to help students navigate the complex world of higher education and career choices.
                                </p>
                                <p>
                                    With over 15 years of experience, we have become one of the most trusted names in educational consultancy in Tamil Nadu. Our team of expert counsellors works tirelessly to ensure every student finds the right course, college, and career path.
                                </p>
                                <p>
                                    We offer comprehensive guidance for engineering, medical, arts & science, law, and abroad study programs. Our personalized approach ensures that each student receives individual attention and tailored advice.
                                </p>
                            </div>

                            <div className="mt-8 grid grid-cols-2 gap-4">
                                {["Expert Team", "Personalized Guidance", "100+ Colleges", "Proven Track Record"].map((item, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <CheckCircle className="text-secondary w-5 h-5" />
                                        <span className="font-medium" style={{ fontFamily: 'Roboto, sans-serif' }}>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-primary p-8 animate-slide-in-right">
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center p-4 bg-white/10">
                                        <div className="text-3xl md:text-4xl font-extrabold text-secondary mb-2"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                            {stat.number}
                                        </div>
                                        <div className="text-white/80 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
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
            <section className="py-16 bg-bg-light">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {values.map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={index}
                                    className="bg-primary p-8 text-center animate-fade-in-up hover:bg-primary-dark transition-colors"
                                    style={{ animationDelay: `${index * 0.15}s` }}>
                                    <div className="w-16 h-16 bg-secondary mx-auto mb-4 flex items-center justify-center">
                                        <IconComponent className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-secondary px-6 py-2 text-text-dark font-bold text-sm mb-4"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            OUR TEAM
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Meet Our Expert Counsellors
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {team.map((member, index) => (
                            <div key={index}
                                className="text-center p-6 border-2 border-bg-light hover:border-secondary transition-colors animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.15}s` }}>
                                <div className="w-24 h-24 bg-primary mx-auto mb-4 rounded-full flex items-center justify-center">
                                    <Users className="w-12 h-12 text-secondary" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {member.name}
                                </h3>
                                <p className="text-secondary font-semibold text-sm mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {member.role}
                                </p>
                                <p className="text-text-dark/70 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                    {member.experience}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <EnquirySection />
        </main>
    );
};

export default About;
