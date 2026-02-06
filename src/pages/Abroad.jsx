import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Plane, FileText, BookOpen, DollarSign } from 'lucide-react';
import { abroadCountries } from '../data/courses';
import EnquirySection from '../components/home/EnquirySection';

const Abroad = () => {
    const services = [
        { icon: BookOpen, title: "University Selection", description: "Expert guidance to choose the right university matching your profile and goals." },
        { icon: FileText, title: "Visa Assistance", description: "Complete visa documentation support and interview preparation." },
        { icon: Plane, title: "Travel & Accommodation", description: "Help with travel arrangements and finding suitable accommodation." },
        { icon: DollarSign, title: "Scholarship Guidance", description: "Information about scholarships and financial aid opportunities." }
    ];

    const process = [
        { step: "01", title: "Profile Assessment", description: "We analyze your academic background and career goals." },
        { step: "02", title: "Country & Course Selection", description: "Recommend best-fit countries and courses." },
        { step: "03", title: "Application Support", description: "Complete application preparation and submission." },
        { step: "04", title: "Visa Processing", description: "Documentation and visa interview preparation." },
        { step: "05", title: "Pre-Departure Briefing", description: "Guidance for travel, stay, and cultural adaptation." }
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="bg-primary py-20 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block bg-secondary text-primary px-8 py-3 font-bold text-sm mb-8 rounded"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        🌍 STUDY ABROAD
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 animate-slide-in-up"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Your Gateway to <span className="text-secondary">Global Education</span>
                    </h1>
                    <p className="text-white/80 max-w-3xl mx-auto text-lg mb-10 animate-fade-in"
                        style={{ fontFamily: 'Roboto, sans-serif', animationDelay: '0.3s' }}>
                        Dream of studying in top universities abroad? We make it possible with comprehensive guidance for admissions, visa, and more.
                    </p>
                    <Link
                        to="/enquiry"
                        className="inline-flex items-center gap-3 bg-secondary text-primary px-10 py-4 font-bold text-lg hover:bg-secondary-dark transition-colors animate-bounce-subtle rounded shadow-lg"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Start Your Journey
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Countries Section */}
            <section className="py-20 bg-secondary">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Popular Study Destinations
                        </h2>
                        <p className="text-primary/70 max-w-2xl mx-auto text-lg"
                            style={{ fontFamily: 'Roboto, sans-serif' }}>
                            We provide expert guidance for admissions in these top countries.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-8">
                        {abroadCountries.map((country, index) => (
                            <div
                                key={country.name}
                                className="bg-white p-4 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up cursor-pointer group rounded-lg"
                                style={{ animationDelay: `${index * 0.05}s` }}
                            >
                                {/* Flag Image */}
                                <div className="w-16 h-16 mx-auto mb-4 bg-primary rounded-full flex items-center justify-center overflow-hidden border-4 border-secondary group-hover:scale-110 transition-transform p-1">
                                    <img
                                        src={country.flag}
                                        alt={`${country.name} Flag`}
                                        className="w-full h-full object-cover rounded-full"
                                        loading="lazy"
                                    />
                                </div>

                                {/* Country Name */}
                                <h3 className="text-primary font-bold text-sm"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {country.name}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-secondary px-8 py-3 text-primary font-bold text-sm mb-6 rounded"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            OUR SERVICES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Complete Abroad Study Support
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-primary p-8 text-center hover:bg-primary-dark transition-colors animate-fade-in-up group rounded-lg shadow-lg"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <div className="w-20 h-20 bg-secondary mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform rounded-lg">
                                        <IconComponent className="w-10 h-10 text-primary" />
                                    </div>
                                    <h3 className="text-white font-bold text-xl mb-4"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-white/80 text-sm leading-relaxed"
                                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-bg-light">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-14">
                        <span className="inline-block bg-secondary px-8 py-3 text-primary font-bold text-sm mb-6 rounded"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            HOW IT WORKS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Your Journey to Studying Abroad
                        </h2>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {process.map((item, index) => (
                            <div
                                key={index}
                                className="flex gap-6 mb-8 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex-shrink-0 w-20 h-20 bg-primary flex items-center justify-center text-secondary font-extrabold text-2xl rounded-lg"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {item.step}
                                </div>
                                <div className="flex-grow bg-white p-6 border-l-4 border-secondary rounded-r-lg shadow-md">
                                    <h3 className="text-primary font-bold text-xl mb-2"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-text-dark/70 text-base"
                                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-primary">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="text-white">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Why Study Abroad with <span className="text-secondary">INSTA?</span>
                            </h2>

                            <div className="space-y-6">
                                {[
                                    "10+ years of abroad study experience",
                                    "500+ students placed in top universities",
                                    "Partnerships with leading universities",
                                    "IELTS/TOEFL preparation support",
                                    "Scholarship assistance up to 100%",
                                    "Post-study work visa guidance"
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                        <CheckCircle className="text-secondary w-7 h-7 flex-shrink-0" />
                                        <span className="text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-secondary p-10 animate-slide-in-right rounded-lg shadow-xl">
                            <h3 className="text-primary text-2xl font-bold mb-6 text-center"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Quick Enquiry
                            </h3>
                            <p className="text-primary/70 text-center mb-8"
                                style={{ fontFamily: 'Roboto, sans-serif' }}>
                                Fill in your details and our abroad study expert will contact you.
                            </p>
                            <Link
                                to="/enquiry"
                                className="block bg-primary text-white py-4 font-bold text-center text-lg hover:bg-primary-dark transition-colors rounded"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}
                            >
                                Get Free Consultation
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <EnquirySection />
        </main>
    );
};

export default Abroad;
