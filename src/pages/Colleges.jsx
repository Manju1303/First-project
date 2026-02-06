import { MapPin, Phone, ExternalLink } from 'lucide-react';
import { collegeZones } from '../data/courses';
import EnquirySection from '../components/home/EnquirySection';

const Colleges = () => {
    return (
        <main>
            {/* Hero Section */}
            <section className="bg-primary py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block bg-secondary text-text-dark px-6 py-2 font-bold text-sm mb-6 animate-fade-in"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        PARTNER COLLEGES
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Top Colleges Across Tamil Nadu
                    </h1>
                    <p className="text-white/80 max-w-3xl mx-auto text-lg animate-fade-in"
                        style={{ fontFamily: 'Roboto, sans-serif', animationDelay: '0.3s' }}>
                        We have tie-ups with 100+ leading colleges. Get direct admission guidance and scholarship assistance.
                    </p>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-secondary py-6">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        {[
                            { number: "100+", label: "Partner Colleges" },
                            { number: "5", label: "Zones Covered" },
                            { number: "50+", label: "Universities" },
                            { number: "95%", label: "Admission Success" }
                        ].map((stat, index) => (
                            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="text-2xl md:text-3xl font-extrabold text-primary"
                                    style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                    {stat.number}
                                </div>
                                <div className="text-text-dark/70 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Colleges by Zone */}
            <section className="py-16 bg-bg-light">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {collegeZones.map((zone, index) => (
                            <div
                                key={zone.zone}
                                className="bg-primary group hover:bg-primary-dark transition-all duration-300 animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Zone Header */}
                                <div className="bg-secondary p-4 flex items-center gap-2">
                                    <MapPin className="text-primary w-6 h-6" />
                                    <h3 className="text-primary font-bold text-xl"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {zone.zone}
                                    </h3>
                                </div>

                                {/* Colleges List */}
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        {zone.colleges.map((college, idx) => (
                                            <li key={idx}
                                                className="text-white/90 text-sm flex items-start gap-2 hover:text-secondary transition-colors cursor-pointer group/item"
                                                style={{ fontFamily: 'Roboto, sans-serif' }}>
                                                <span className="text-secondary mt-0.5">✓</span>
                                                <span className="flex-grow">{college}</span>
                                                <ExternalLink className="w-4 h-4 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="mt-6 pt-4 border-t border-white/10">
                                        <button className="text-secondary text-sm font-semibold hover:underline"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            + View More Colleges
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* CTA Card */}
                        <div className="bg-secondary p-6 flex flex-col justify-center items-center text-center animate-fade-in-up">
                            <Phone className="w-12 h-12 text-primary mb-4" />
                            <h3 className="text-primary text-xl font-bold mb-2"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Need College Recommendations?
                            </h3>
                            <p className="text-text-dark/80 mb-4"
                                style={{ fontFamily: 'Roboto, sans-serif' }}>
                                Our counsellors can suggest the best colleges based on your preferences and budget.
                            </p>
                            <a href="tel:+919876543210"
                                className="bg-primary text-white px-6 py-3 font-bold hover:bg-primary-dark transition-colors"
                                style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                Call Now: +91 98765 43210
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <EnquirySection />
        </main>
    );
};

export default Colleges;
