import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, CheckCircle } from 'lucide-react';
import { collegeZones, topUniversities } from '../../data/courses';

const CollegesSection = () => {
    return (
        <section className="bg-bg-light py-16 md:py-20">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <span className="inline-block bg-secondary px-6 py-2 text-primary font-bold text-sm mb-4 rounded"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        TOP COLLEGES
                    </span>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary mb-3"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Partner Colleges Across Tamil Nadu & Bangalore
                    </h2>
                    <p className="text-text-dark/70 max-w-2xl mx-auto text-base"
                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                        We have tie-ups with leading colleges across various zones. Get direct admission assistance.
                    </p>
                </div>

                {/* Top Universities */}
                <div className="bg-secondary rounded-lg p-5 mb-10">
                    <h3 className="text-primary font-bold text-lg mb-4 text-center"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        TOP UNIVERSITIES IN INDIA
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {topUniversities.map((uni, index) => (
                            <div key={index} className="bg-white px-5 py-2 rounded shadow font-bold text-primary text-sm"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                {uni}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Zones Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
                    {collegeZones.map((zone, index) => (
                        <div
                            key={zone.zone}
                            className="bg-primary rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* Zone Header */}
                            <div className="bg-primary-dark px-4 py-3 flex items-center gap-2 border-b border-white/10">
                                <MapPin className="text-secondary w-5 h-5 flex-shrink-0" />
                                <h3 className="text-secondary font-bold text-base"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    {zone.zone}
                                </h3>
                            </div>

                            {/* Colleges List */}
                            <div className="p-4">
                                <ul className="space-y-2">
                                    {zone.colleges.map((college, idx) => (
                                        <li key={idx}
                                            className="text-white/90 text-sm flex items-start gap-2"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}>
                                            <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                                            <span className="leading-relaxed">{college}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center">
                    <Link
                        to="/colleges"
                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 font-bold text-base hover:bg-primary-dark transition-colors rounded-lg shadow-lg"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        View All Partner Colleges
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CollegesSection;
