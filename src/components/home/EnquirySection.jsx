import { useState } from 'react';
import { Send, User, Phone, Mail, MessageSquare, BookOpen, CheckCircle } from 'lucide-react';

const EnquirySection = () => {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', phone: '', email: '', course: '', message: '' });
        }, 3000);
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
        "Personalized career assessment",
        "Course & college recommendations",
        "Scholarship guidance",
        "Admission process support"
    ];

    return (
        <section className="bg-primary py-16 md:py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
                    {/* Left Content */}
                    <div className="lg:w-1/2 text-white">
                        <span className="inline-block bg-secondary text-primary px-6 py-2 font-bold text-sm mb-6 rounded"
                            style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            FREE COUNSELLING
                        </span>

                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold mb-6 leading-tight"
                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Get <span className="text-secondary">Expert Guidance</span><br />For Your Career
                        </h2>

                        <p className="text-white/80 text-base mb-8 leading-relaxed"
                            style={{ fontFamily: 'Roboto, sans-serif' }}>
                            Our experienced counsellors will help you choose the right course and college based on your interests, aptitude, and career goals. Book your free session now!
                        </p>

                        <div className="space-y-4">
                            {benefits.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <div className="w-6 h-6 bg-secondary flex items-center justify-center rounded flex-shrink-0">
                                        <CheckCircle className="w-4 h-4 text-primary" />
                                    </div>
                                    <span className="text-white/90 text-base" style={{ fontFamily: 'Roboto, sans-serif' }}>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-6 md:p-8 rounded-lg shadow-2xl">
                            <h3 className="text-xl font-bold text-primary mb-6 text-center"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Book Your Free Session
                            </h3>

                            {submitted ? (
                                <div className="text-center py-10">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <CheckCircle className="w-10 h-10 text-green-500" />
                                    </div>
                                    <h4 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        Thank You!
                                    </h4>
                                    <p className="text-text-dark/70" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                        We'll contact you within 24 hours.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Name */}
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your Full Name *"
                                            required
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 focus:border-primary rounded text-sm bg-white"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Mobile Number *"
                                            required
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 focus:border-primary rounded text-sm bg-white"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 focus:border-primary rounded text-sm bg-white"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        />
                                    </div>

                                    {/* Course Interest */}
                                    <div className="relative">
                                        <BookOpen className="absolute left-3 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
                                        <select
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            required
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 focus:border-primary rounded text-sm bg-white appearance-none"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        >
                                            <option value="">Select Course Interest *</option>
                                            {courseOptions.map((course) => (
                                                <option key={course} value={course}>{course}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {/* Message */}
                                    <div className="relative">
                                        <MessageSquare className="absolute left-3 top-3 text-primary/50 w-5 h-5" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message (Optional)"
                                            rows="3"
                                            className="w-full pl-11 pr-4 py-3 border-2 border-gray-200 focus:border-primary rounded text-sm bg-white resize-none"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        ></textarea>
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-secondary text-primary py-3 font-bold text-base flex items-center justify-center gap-2 hover:bg-secondary-dark transition-colors disabled:opacity-70 rounded shadow-md"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                                    >
                                        {isSubmitting ? (
                                            <span className="animate-pulse">Submitting...</span>
                                        ) : (
                                            <>
                                                Get Free Counselling
                                                <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}

                            <p className="text-center text-text-dark/60 text-xs mt-4 flex items-center justify-center gap-2" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                <Phone className="w-3 h-3" />
                                Or call us: <a href="tel:+919865921258" className="text-primary font-semibold">+91 98659 21258</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EnquirySection;
