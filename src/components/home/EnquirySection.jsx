import { useState } from 'react';
import { Send, User, Phone, Mail, BookOpen, CheckCircle, MessageSquare, ArrowRight } from 'lucide-react';
import useScrollReveal from '../../hooks/useScrollReveal';

const EnquirySection = () => {
    const sectionRef = useScrollReveal();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        course: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const encode = (data) => {
            return Object.keys(data)
                .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
                .join("&");
        };

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "enquiry", ...formData }),
        })
            .then(() => {
                setSubmitted(true);
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    course: '',
                    message: ''
                });
            })
            .catch((error) => alert(error))
            .finally(() => setIsSubmitting(false));
    };

    const courseOptions = [
        "Engineering (B.E/B.Tech)",
        "Medical (MBBS/BDS)",
        "Nursing",
        "Pharmacy",
        "Allied Health Sciences",
        "Arts & Science",
        "Management (MBA/MCA)",
        "Law",
        "Diploma",
        "Abroad Study",
        "Career Guidance",
        "Other"
    ];

    const benefits = [
        { title: "Expert Counselling", desc: "Get guidance from industry veterans." },
        { title: "Course Selection", desc: "Find the perfect course for your goals." },
        { title: "College Admissions", desc: "Hassle-free prediction & admission process." },
        { title: "Scholarship Support", desc: "Financial aid and scholarship assistance." }
    ];

    return (
        <section className="py-8 lg:py-12 bg-gradient-to-br from-primary via-primary-dark to-primary-light relative overflow-hidden scroll-reveal" id="enquiry" ref={sectionRef}>
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-float"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 animate-float-slow"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch">

                    {/* Left Content - Information */}
                    <div className="lg:w-1/2 text-white flex flex-col justify-center animate-slide-in-left" style={{ animationDelay: '0s' }}>
                        <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 backdrop-blur-sm px-5 py-3 rounded-full w-fit mb-4">
                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                            <span className="text-secondary font-bold text-xs tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>Free Consultation</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight"
                            style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}>
                            Shape Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-white">Future Today</span>
                        </h2>

                        <p className="text-white/85 text-base md:text-lg mb-6 leading-relaxed max-w-xl"
                            style={{ fontFamily: 'Roboto, sans-serif', lineHeight: '1.8' }}>
                            Confused about your career path? Our expert counsellors are here to guide you through every step of your educational journey.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                            {benefits.map((item, index) => {
                                return (
                                    <div key={index} className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:translate-x-2" style={{ animationDelay: `${index * 0.1}s` }}>
                                        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 shadow-lg">
                                            <CheckCircle className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white text-sm mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.title}</h4>
                                            <p className="text-white/70 text-xs leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>{item.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-auto hidden lg:block pt-4 border-t border-white/20">
                            <p className="text-white/60 text-sm italic leading-relaxed" style={{ fontFamily: 'Georgia, serif' }}>
                                "Education is the passport to the future, for tomorrow belongs to those who prepare for it today."
                            </p>
                        </div>
                    </div>

                    {/* Right Content - Form Card */}
                    <div className="lg:w-1/2 animate-slide-in-right">
                        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-white/20 transform hover:-translate-y-2 transition-all duration-300">
                            <div className="bg-secondary py-5 px-10">
                                <h3 className="text-xl font-bold text-primary flex items-center gap-3"
                                    style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}>
                                    <MessageSquare className="w-6 h-6" />
                                    Book Your Free Session
                                </h3>
                            </div>

                            <div className="p-10">
                                {submitted ? (
                                    <div className="text-center py-20">
                                        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-subtle">
                                            <CheckCircle className="w-12 h-12 text-green-600" />
                                        </div>
                                        <h4 className="text-2xl font-bold text-primary mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            Request Sent!
                                        </h4>
                                        <p className="text-text-dark/70 text-base md:text-lg mb-8 max-w-sm mx-auto leading-relaxed" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                            Thank you for reaching out. Our expert guidance team will contact you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="text-primary font-semibold hover:text-primary-dark underline transition-colors"
                                        >
                                            Submit another response
                                        </button>
                                    </div>
                                ) : (
                                    <form name="enquiry" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-8">
                                        <input type="hidden" name="form-name" value="enquiry" />
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                                            {/* Name */}
                                            <div className="group">
                                                <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <User className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        placeholder="Enter your full name"
                                                        required
                                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none text-sm font-medium text-gray-700 placeholder-gray-400 hover:border-gray-300"
                                                        style={{ fontFamily: 'Roboto, sans-serif' }}
                                                    />
                                                </div>
                                            </div>

                                            {/* Phone */}
                                            <div className="group">
                                                <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                    Phone Number <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <Phone className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300" />
                                                    </div>
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        placeholder="Enter your phone number"
                                                        required
                                                        className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none text-sm font-medium text-gray-700 placeholder-gray-400 hover:border-gray-300"
                                                        style={{ fontFamily: 'Roboto, sans-serif' }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Email */}
                                        <div className="group">
                                            <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                Email Address <span className="text-gray-400 text-xs">(Optional)</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <Mail className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300" />
                                                </div>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    placeholder="Enter your email address"
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none text-sm font-medium text-gray-700 placeholder-gray-400 hover:border-gray-300"
                                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                                />
                                            </div>
                                        </div>

                                        {/* Course Interest */}
                                        <div className="group">
                                            <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                Select Interested Course <span className="text-red-500">*</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                    <BookOpen className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300" />
                                                </div>
                                                <select
                                                    name="course"
                                                    value={formData.course}
                                                    onChange={handleChange}
                                                    required
                                                    className="w-full pl-12 pr-12 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none text-sm font-medium text-gray-700 appearance-none cursor-pointer hover:border-gray-300"
                                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                                >
                                                    <option value="" className="text-gray-400">Choose a course</option>
                                                    {courseOptions.map((course) => (
                                                        <option key={course} value={course}>{course}</option>
                                                    ))}
                                                </select>
                                                <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                    <ArrowRight className="h-4 w-4 text-gray-400 transform rotate-90" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="group">
                                            <label className="block text-sm font-semibold text-gray-700 mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                Your Message <span className="text-gray-400 text-xs">(Optional)</span>
                                            </label>
                                            <div className="relative">
                                                <div className="absolute top-4 left-4 flex items-start pointer-events-none">
                                                    <MessageSquare className="h-5 w-5 text-gray-400 group-focus-within:text-primary transition-colors duration-300 mt-0.5" />
                                                </div>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    placeholder="Tell us how we can help you..."
                                                    rows="5"
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all outline-none text-sm font-medium text-gray-700 placeholder-gray-400 resize-none hover:border-gray-300"
                                                    style={{ fontFamily: 'Roboto, sans-serif' }}
                                                ></textarea>
                                            </div>
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-primary text-white py-5 font-bold text-base tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-primary-dark transition-all duration-300 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
                                            style={{ fontFamily: 'Montserrat, sans-serif' }}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-2">
                                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                    Processing...
                                                </span>
                                            ) : (
                                                <>
                                                    Get Free Guidance
                                                    <Send size={20} />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnquirySection;
