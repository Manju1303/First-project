import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { engineeringCourses, medicalCourses, diplomaCourses, artsScienceCourses, lawCourses } from '../data/courses';
import EnquirySection from '../components/home/EnquirySection';

const Courses = () => {
    const { category } = useParams();
    const [expandedSection, setExpandedSection] = useState(null);

    const allCourses = {
        engineering: {
            title: "Engineering & Technology",
            icon: "⚙️",
            description: "Explore cutting-edge engineering programs across various disciplines",
            sections: [
                { title: "Undergraduate (UG)", courses: engineeringCourses.ug },
                { title: "Postgraduate (PG)", courses: engineeringCourses.pg },
                { title: "Specializations", courses: engineeringCourses.specializations }
            ]
        },
        medical: {
            title: "Medical & Health Sciences",
            icon: "🏥",
            description: "Pursue your dream of serving in healthcare with top medical programs",
            sections: [
                { title: "Undergraduate (UG)", courses: medicalCourses.ug },
                { title: "Postgraduate (PG)", courses: medicalCourses.pg }
            ]
        },
        "arts-science": {
            title: "Arts, Science & Commerce",
            icon: "📚",
            description: "Build a strong foundation in arts, science, and business studies",
            sections: [
                { title: "Undergraduate (UG)", courses: artsScienceCourses.ug },
                { title: "Postgraduate (PG)", courses: artsScienceCourses.pg }
            ]
        },
        diploma: {
            title: "Diploma & ITI",
            icon: "🔧",
            description: "Skill-based diploma programs for immediate career opportunities",
            sections: [
                { title: "Diploma Programs", courses: diplomaCourses }
            ]
        },
        law: {
            title: "Law Courses",
            icon: "⚖️",
            description: "Prepare for a career in legal profession with top law programs",
            sections: [
                { title: "Law Programs", courses: lawCourses }
            ]
        }
    };

    const toggleSection = (index) => {
        setExpandedSection(expandedSection === index ? null : index);
    };

    // If specific category, show only that
    const displayCategories = category && allCourses[category]
        ? { [category]: allCourses[category] }
        : allCourses;

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
                        COURSES OFFERED
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in-up"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        {category && allCourses[category]
                            ? allCourses[category].title
                            : "Explore All Courses"}
                    </h1>
                    <p className="text-white/80 max-w-3xl mx-auto text-lg animate-fade-in"
                        style={{ fontFamily: 'Roboto, sans-serif', animationDelay: '0.3s' }}>
                        {category && allCourses[category]
                            ? allCourses[category].description
                            : "From Engineering to Medical, Arts to Law - find the perfect course for your career goals."}
                    </p>
                </div>
            </section>

            {/* Courses Content */}
            <section className="py-16 bg-bg-light">
                <div className="container mx-auto px-4">
                    <div className="grid gap-8">
                        {Object.entries(displayCategories).map(([key, courseData], categoryIndex) => (
                            <div key={key} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                                {/* Category Header */}
                                <div className="bg-secondary p-4 flex items-center gap-3 mb-0">
                                    <span className="text-3xl">{courseData.icon}</span>
                                    <div>
                                        <h2 className="text-primary text-xl md:text-2xl font-bold"
                                            style={{ fontFamily: 'Poppins, sans-serif' }}>
                                            {courseData.title}
                                        </h2>
                                        <p className="text-text-dark/70 text-sm" style={{ fontFamily: 'Roboto, sans-serif' }}>
                                            {courseData.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Course Sections */}
                                <div className="bg-primary">
                                    {courseData.sections.map((section, sectionIndex) => {
                                        const isExpanded = expandedSection === `${key}-${sectionIndex}` || !category;
                                        return (
                                            <div key={sectionIndex}>
                                                {/* Section Header (Accordion on mobile) */}
                                                <button
                                                    onClick={() => toggleSection(`${key}-${sectionIndex}`)}
                                                    className="w-full p-4 flex justify-between items-center bg-primary-dark hover:bg-primary-light transition-colors text-left md:cursor-default"
                                                >
                                                    <h3 className="text-secondary font-bold text-lg"
                                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                                        {section.title}
                                                    </h3>
                                                    <span className="md:hidden">
                                                        {isExpanded ? <ChevronUp className="text-secondary" /> : <ChevronDown className="text-secondary" />}
                                                    </span>
                                                </button>

                                                {/* Course List */}
                                                <div className={`p-6 ${isExpanded ? 'block' : 'hidden md:block'}`}>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                        {section.courses.map((course, courseIndex) => (
                                                            <div key={courseIndex}
                                                                className="flex items-start gap-2 text-white/90 hover:text-white transition-colors"
                                                                style={{ fontFamily: 'Roboto, sans-serif' }}>
                                                                <span className="text-secondary mt-0.5">•</span>
                                                                <span>{course}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <EnquirySection />
        </main>
    );
};

export default Courses;
