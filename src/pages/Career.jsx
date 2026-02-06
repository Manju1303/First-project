import { Link } from 'react-router-dom';
import { Target, TrendingUp, Users, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';
import EnquirySection from '../components/home/EnquirySection';

const Career = () => {
    const services = [
        {
            icon: Target,
            title: "Aptitude Assessment",
            description: "Scientific assessment to understand your strengths, interests, and ideal career paths."
        },
        {
            icon: Lightbulb,
            title: "Career Counselling",
            description: "One-on-one sessions with expert counsellors to explore suitable career options."
        },
        {
            icon: TrendingUp,
            title: "Industry Insights",
            description: "Learn about current job market trends, salary expectations, and growth opportunities."
        },
        {
            icon: Users,
            title: "Placement Support",
            description: "Access to job opportunities and placement assistance through our network."
        }
    ];

    const careerPaths = [
        { field: "Engineering & Technology", careers: ["Software Developer", "Data Scientist", "AI Engineer", "Civil Engineer", "Mechanical Engineer", "Electronics Engineer"] },
        { field: "Medical & Healthcare", careers: ["Doctor", "Nurse", "Pharmacist", "Physiotherapist", "Lab Technician", "Hospital Administrator"] },
        { field: "Business & Management", careers: ["Business Analyst", "Marketing Manager", "HR Manager", "Financial Analyst", "Entrepreneur", "Consultant"] },
        { field: "Arts & Humanities", careers: ["Journalist", "Content Writer", "Teacher", "Psychologist", "Social Worker", "Lawyer"] }
    ];

    const faqs = [
        { q: "When should I get career counselling?", a: "Ideally after 10th or 12th standard, but it's never too late. Even working professionals can benefit from career guidance for transitions." },
        { q: "How long does the assessment take?", a: "The aptitude assessment takes about 1-2 hours. The counselling session is typically 45-60 minutes." },
        { q: "Is the assessment scientifically valid?", a: "Yes, we use internationally recognized assessment tools that are validated and reliable." },
        { q: "Can you help with job placements?", a: "Yes, we have tie-ups with various companies and can assist with placement opportunities." }
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
                        🎯 CAREER GUIDANCE
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Discover Your <span className="text-secondary">Perfect Career Path</span>
                    </h1>
                    <p className="text-white/80 max-w-3xl mx-auto text-lg mb-8 animate-fade-in"
                        style={{ fontFamily: 'Roboto, sans-serif', animationDelay: '0.3s' }}>
                        Confused about which career to choose? Our expert counsellors will help you find the right direction based on your interests and aptitude.
                    </p>
                    <Link
                        to="/enquiry"
                        className="inline-flex items-center gap-2 bg-secondary text-text-dark px-8 py-4 font-bold hover:bg-secondary-dark transition-colors"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                        Book Free Session
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

            {/* Services */}
            <section className="py-16 bg-bg-light">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-secondary px-6 py-2 text-text-dark font-bold text-sm mb-4"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            OUR SERVICES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Comprehensive Career Guidance
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => {
                            const IconComponent = service.icon;
                            return (
                                <div
                                    key={index}
                                    className="bg-primary p-6 text-center hover:bg-primary-dark transition-colors transform hover:-translate-y-2 duration-300 animate-fade-in-up group"
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <div className="w-16 h-16 bg-secondary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <IconComponent className="w-8 h-8 text-primary" />
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {service.title}
                                    </h3>
                                    <p className="text-white/70 text-sm"
                                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Career Paths */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-secondary px-6 py-2 text-text-dark font-bold text-sm mb-4"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            EXPLORE CAREERS
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-primary"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Popular Career Paths
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {careerPaths.map((path, index) => (
                            <div
                                key={index}
                                className="animate-fade-in-up"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="bg-secondary p-4">
                                    <h3 className="text-primary font-bold text-lg"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {path.field}
                                    </h3>
                                </div>
                                <div className="bg-primary p-6">
                                    <div className="grid grid-cols-2 gap-3">
                                        {path.careers.map((career, idx) => (
                                            <div key={idx} className="flex items-center gap-2 text-white/90 text-sm"
                                                style={{ fontFamily: 'Roboto, sans-serif' }}>
                                                <span className="text-secondary">•</span>
                                                {career}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-16 bg-primary">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="text-white">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Why Choose <span className="text-secondary">INSTA</span> for Career Guidance?
                            </h2>

                            <div className="space-y-4">
                                {[
                                    "Experienced career counsellors",
                                    "Scientific aptitude assessment",
                                    "Personalized guidance",
                                    "Industry-aligned recommendations",
                                    "Job market insights",
                                    "Placement assistance"
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                        <CheckCircle className="text-secondary w-6 h-6 flex-shrink-0" />
                                        <span className="text-lg" style={{ fontFamily: 'Roboto, sans-serif' }}>{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-secondary p-8">
                            <h3 className="text-primary text-2xl font-bold mb-6 text-center"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Frequently Asked Questions
                            </h3>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="bg-white p-4">
                                        <h4 className="text-primary font-bold text-sm mb-2"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            {faq.q}
                                        </h4>
                                        <p className="text-text-dark/70 text-sm"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}>
                                            {faq.a}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <EnquirySection />
        </main>
    );
};

export default Career;
