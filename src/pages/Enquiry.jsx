import { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, BookOpen, MapPin, CheckCircle } from 'lucide-react';

const Enquiry = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        course: '',
        college: '',
        location: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
    };

    const courseOptions = [
        "Engineering (B.E/B.Tech)",
        "Medical (MBBS/BDS)",
        "Nursing (B.Sc/GNM)",
        "Pharmacy (B.Pharm/D.Pharm)",
        "Arts & Science (BA/B.Sc/B.Com)",
        "Management (BBA/MBA)",
        "Law (LLB/BA LLB)",
        "Diploma / ITI",
        "Abroad Study - USA",
        "Abroad Study - UK",
        "Abroad Study - Canada",
        "Abroad Study - Australia",
        "Abroad Study - Other",
        "Career Guidance",
        "Other"
    ];

    const benefits = [
        "Free one-on-one counselling session",
        "Expert course recommendations",
        "College admission guidance",
        "Scholarship information",
        "Application support",
        "No hidden charges"
    ];

    return (
        <main>
            {/* Hero Section */}
            <section className="bg-primary py-16 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-secondary rounded-full blur-3xl"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <span className="inline-block bg-accent text-white px-6 py-2 font-bold text-sm mb-6 animate-pulse-slow"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        🎓 ADMISSION 2026-27 OPEN
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Get <span className="text-secondary">Free Counselling</span> Today
                    </h1>
                    <p className="text-white/80 max-w-3xl mx-auto text-lg animate-fade-in"
                        style={{ fontFamily: 'Roboto, sans-serif', animationDelay: '0.3s' }}>
                        Fill the form below and our expert counsellor will contact you within 24 hours. It's completely FREE!
                    </p>
                </div>
            </section>

            {/* Form Section */}
            <section className="py-16 bg-bg-light">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Benefits */}
                        <div className="animate-slide-in-left">
                            <div className="bg-primary p-8 text-white sticky top-24">
                                <h3 className="text-2xl font-bold mb-6 text-secondary"
                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    What You Get
                                </h3>
                                <ul className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <li key={index} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                                            <span style={{ fontFamily: 'Roboto, sans-serif' }}>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-8 pt-8 border-t border-white/20">
                                    <p className="text-sm text-white/80 mb-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                        Need immediate assistance?
                                    </p>
                                    <a href="tel:+919876543210"
                                        className="flex items-center gap-2 text-secondary font-bold text-lg hover:underline"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                        <Phone className="w-5 h-5" />
                                        +91 98765 43210
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-2 bg-white p-8 animate-slide-in-right">
                            {submitted ? (
                                <div className="text-center py-16 animate-fade-in">
                                    <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="text-5xl">🎉</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-primary mb-4"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        Thank You!
                                    </h3>
                                    <p className="text-text-dark/70 text-lg mb-6"
                                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                                        Your enquiry has been submitted successfully.<br />
                                        Our counsellor will contact you within 24 hours.
                                    </p>
                                    <div className="bg-secondary p-6 inline-block">
                                        <p className="text-text-dark font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            Reference ID: ENQ{Date.now().toString().slice(-8)}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h2 className="text-2xl font-bold text-primary mb-2"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        Enquiry Form
                                    </h2>
                                    <p className="text-text-dark/60 mb-8"
                                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                                        All fields marked with * are required
                                    </p>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Name */}
                                            <div>
                                                <label className="block text-sm font-semibold text-text-dark mb-2"
                                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    Full Name *
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Enter your full name"
                                                        required
                                                        className="w-full pl-12 pr-4 py-3 border-2 border-bg-light focus:border-primary outline-none transition-colors"
                                                        style={{ fontFamily: 'Roboto, sans-serif' }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div>
                                                <label className="block text-sm font-semibold text-text-dark mb-2"
                                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    Mobile Number *
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="Enter your mobile number"
                                                        required
                                                        className="w-full pl-12 pr-4 py-3 border-2 border-bg-light focus:border-primary outline-none transition-colors"
                                                        style={{ fontFamily: 'Roboto, sans-serif' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-sm font-semibold text-text-dark mb-2"
                                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                Email Address
                                            </label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email address"
                                                    className="w-full pl-12 pr-4 py-3 border-2 border-bg-light focus:border-primary outline-none transition-colors"
                                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                                />
                                            </div>
                                        </div>

                                        <div className="grid md:grid-cols-2 gap-6">
                                            {/* Course Interest */}
                                            <div>
                                                <label className="block text-sm font-semibold text-text-dark mb-2"
                                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    Course Interest *
                                                </label>
                                                <div className="relative">
                                                    <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
                                                    <select
                                                        name="course"
                                                        value={formData.course}
                                                        onChange={handleChange}
                                                        required
                                                        className="w-full pl-12 pr-4 py-3 border-2 border-bg-light focus:border-primary outline-none transition-colors appearance-none bg-white"
                                                        style={{ fontFamily: 'Roboto, sans-serif' }}
                                                    >
                                                        <option value="">Select a course</option>
                                                        {courseOptions.map((course) => (
                                                            <option key={course} value={course}>{course}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>

                                            {/* Location */}
                                            <div>
                                                <label className="block text-sm font-semibold text-text-dark mb-2"
                                                    style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    Your Location
                                                </label>
                                                <div className="relative">
                                                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
                                                    <input
                                                        type="text"
                                                        name="location"
                                                        value={formData.location}
                                                        onChange={handleChange}
                                                        placeholder="City / District"
                                                        className="w-full pl-12 pr-4 py-3 border-2 border-bg-light focus:border-primary outline-none transition-colors"
                                                        style={{ fontFamily: 'Roboto, sans-serif' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Preferred College */}
                                        <div>
                                            <label className="block text-sm font-semibold text-text-dark mb-2"
                                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                Preferred College (if any)
                                            </label>
                                            <input
                                                type="text"
                                                name="college"
                                                value={formData.college}
                                                onChange={handleChange}
                                                placeholder="Enter preferred college name"
                                                className="w-full px-4 py-3 border-2 border-bg-light focus:border-primary outline-none transition-colors"
                                                style={{ fontFamily: 'Roboto, sans-serif' }}
                                            />
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="block text-sm font-semibold text-text-dark mb-2"
                                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                Additional Message
                                            </label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-4 text-primary/50 w-5 h-5" />
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us more about your requirements..."
                                                    rows="4"
                                                    className="w-full pl-12 pr-4 py-3 border-2 border-bg-light focus:border-primary outline-none transition-colors resize-none"
                                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-secondary text-text-dark py-4 font-bold text-lg flex items-center justify-center gap-2 hover:bg-secondary-dark transition-colors disabled:opacity-70"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                                        >
                                            {isSubmitting ? (
                                                <span className="animate-pulse">Submitting Your Enquiry...</span>
                                            ) : (
                                                <>
                                                    Submit Enquiry & Get Free Counselling
                                                    <Send size={20} />
                                                </>
                                            )}
                                        </button>

                                        <p className="text-center text-text-dark/60 text-sm"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}>
                                            By submitting this form, you agree to be contacted by our team.
                                        </p>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Enquiry;
