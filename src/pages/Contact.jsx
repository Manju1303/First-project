import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare } from 'lucide-react';
import { contactInfo } from '../data/courses';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
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
            setFormData({ name: '', phone: '', email: '', subject: '', message: '' });
        }, 3000);
    };

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
                        CONTACT US
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Get In Touch With Us
                    </h1>
                    <p className="text-white/80 max-w-3xl mx-auto text-lg animate-fade-in"
                        style={{ fontFamily: 'Roboto, sans-serif', animationDelay: '0.3s' }}>
                        Have questions? We'd love to hear from you. Reach out to us for any enquiries.
                    </p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-16 bg-bg-light">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Contact Info Cards */}
                        <div className="space-y-6 animate-slide-in-left">
                            {/* Address */}
                            <div className="bg-primary p-6 text-white">
                                <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4">
                                    <MapPin className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Our Office
                                </h3>
                                <p className="text-white/80 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                    {contactInfo.address}
                                </p>
                            </div>

                            {/* Phone */}
                            <div className="bg-primary p-6 text-white">
                                <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4">
                                    <Phone className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Call Us
                                </h3>
                                <div className="space-y-1">
                                    {contactInfo.phone.map((phone, index) => (
                                        <a key={index} href={`tel:${phone}`}
                                            className="block text-white/80 hover:text-secondary text-sm transition-colors"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}>
                                            {phone}
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Email */}
                            <div className="bg-primary p-6 text-white">
                                <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4">
                                    <Mail className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Email Us
                                </h3>
                                <a href={`mailto:${contactInfo.email}`}
                                    className="text-white/80 hover:text-secondary text-sm transition-colors"
                                    style={{ fontFamily: 'Roboto, sans-serif' }}>
                                    {contactInfo.email}
                                </a>
                            </div>

                            {/* Hours */}
                            <div className="bg-primary p-6 text-white">
                                <div className="w-12 h-12 bg-secondary flex items-center justify-center mb-4">
                                    <Clock className="w-6 h-6 text-primary" />
                                </div>
                                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                    Working Hours
                                </h3>
                                <p className="text-white/80 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                    {contactInfo.workingHours}
                                </p>
                                <p className="text-secondary text-sm font-semibold mt-1" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                    Sunday: By Appointment
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2 bg-white p-8 animate-slide-in-right">
                            <h2 className="text-2xl font-bold text-primary mb-6"
                                style={{ fontFamily: 'Poppins, sans-serif' }}>
                                Send Us a Message
                            </h2>

                            {submitted ? (
                                <div className="text-center py-16 animate-fade-in">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <span className="text-4xl">✅</span>
                                    </div>
                                    <h4 className="text-xl font-bold text-primary mb-2" style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        Message Sent!
                                    </h4>
                                    <p className="text-text-dark/70" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                        We'll get back to you shortly.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {/* Name */}
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Your Name *"
                                                required
                                                className="w-full pl-12 pr-4 py-3 border-2 border-bg-light focus:border-primary outline-none transition-colors"
                                                style={{ fontFamily: 'Roboto, sans-serif' }}
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="relative">
                                            <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone Number *"
                                                required
                                                className="w-full pl-12 pr-4 py-3 border-2 border-bg-light focus:border-primary outline-none transition-colors"
                                                style={{ fontFamily: 'Roboto, sans-serif' }}
                                            />
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="relative">
                                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-primary/50 w-5 h-5" />
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email Address"
                                            className="w-full pl-12 pr-4 py-3 border-2 border-bg-light focus:border-primary outline-none transition-colors"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        />
                                    </div>

                                    {/* Subject */}
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="Subject *"
                                        required
                                        className="w-full px-4 py-3 border-2 border-bg-light focus:border-primary outline-none transition-colors"
                                        style={{ fontFamily: 'Roboto, sans-serif' }}
                                    />

                                    {/* Message */}
                                    <div className="relative">
                                        <MessageSquare className="absolute left-4 top-4 text-primary/50 w-5 h-5" />
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            placeholder="Your Message *"
                                            required
                                            rows="5"
                                            className="w-full pl-12 pr-4 py-3 border-2 border-bg-light focus:border-primary outline-none transition-colors resize-none"
                                            style={{ fontFamily: 'Roboto, sans-serif' }}
                                        ></textarea>
                                    </div>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-secondary text-text-dark py-4 font-bold text-lg flex items-center justify-center gap-2 hover:bg-secondary-dark transition-colors disabled:opacity-70"
                                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                                    >
                                        {isSubmitting ? (
                                            <span className="animate-pulse">Sending...</span>
                                        ) : (
                                            <>
                                                Send Message
                                                <Send size={20} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 bg-gray-200">
                <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                    <div className="text-center">
                        <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                        <p className="text-text-dark font-semibold" style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Google Maps Embed
                        </p>
                        <p className="text-text-dark/60 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                            (Add your Google Maps API key to enable the map)
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;
