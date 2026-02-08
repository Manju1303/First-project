import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Stethoscope, BookOpen, Microscope, Wrench, Scale } from 'lucide-react';
import { engineeringCourses, medicalCourses, diplomaCourses, artsScienceCourses, lawCourses, alliedHealthCourses } from '../../data/courses';
import useScrollReveal from '../../hooks/useScrollReveal';

const CoursesSection = () => {
    const sectionRef = useScrollReveal();
    const courseCategories = [
        {
            title: "Engineering - B.E. / B.Tech.",
            color: "primary",
            icon: Cog,
            courses: engineeringCourses.beTech.slice(0, 8),
            link: "/courses/engineering"
        },
        {
            title: "Medical & Nursing",
            color: "primary",
            icon: Stethoscope,
            courses: [...medicalCourses.mbbs, ...medicalCourses.nursing.slice(0, 3)],
            link: "/courses/medical"
        },
        {
            title: "Arts & Science",
            color: "primary",
            icon: BookOpen,
            courses: artsScienceCourses.ug.slice(0, 8),
            link: "/courses/arts-science"
        },
        {
            title: "Allied Health Sciences",
            color: "primary",
            icon: Microscope,
            courses: alliedHealthCourses.slice(0, 8),
            link: "/courses/medical"
        },
        {
            title: "Diploma Courses",
            color: "primary",
            icon: Wrench,
            courses: diplomaCourses.slice(0, 8),
            link: "/courses/diploma"
        },
        {
            title: "Law & Management",
            color: "primary",
            icon: Scale,
            courses: [...lawCourses, "MBA", "MCA", "MBA (Integrated)"],
            link: "/courses/law"
        }
    ];

    return (
        <section className="py-12 lg:py-20 bg-white scroll-reveal" ref={sectionRef}>
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-10 animate-fade-in-up scroll-reveal" style={{ animationDelay: '0s' }}>
                    <span className="inline-block bg-secondary px-8 py-3 text-primary font-bold text-sm mb-8 rounded scroll-reveal"
                        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '1px' }}>
                        COURSES OFFERED
                    </span>
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-primary mb-6 scroll-reveal"
                        style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.4' }}>
                        Explore Our Wide Range of Courses
                    </h2>
                    <p className="text-text-dark/70 max-w-3xl mx-auto text-base md:text-lg leading-relaxed scroll-reveal"
                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                        From Engineering to Medical, Arts to Law - we guide you to the right course for your career goals.
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {courseCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        const cardRef = useScrollReveal({ rootMargin: '0px 0px -50px 0px' });
                        return (
                            <div
                                key={category.title}
                                ref={cardRef}
                                className="bg-primary group hover:bg-primary-dark transition-all duration-300 animate-fade-in-up overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 scroll-reveal scroll-reveal-delay-1"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Header */}
                                <div className="bg-secondary p-6 flex items-center gap-4">
                                    <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center shadow-md">
                                        <IconComponent className="w-7 h-7 text-secondary" />
                                    </div>
                                    <h3 className="text-primary font-bold text-base md:text-lg"
                                        style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}>
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Course List */}
                                <div className="p-7">
                                    <ul className="space-y-4 mb-8">
                                        {category.courses.slice(0, 6).map((course, idx) => (
                                            <li key={idx}
                                                className="text-white/90 text-sm md:text-base flex items-start gap-4 hover:translate-x-2 transition-transform"
                                                style={{ fontFamily: 'Roboto, sans-serif' }}>
                                                <span className="text-secondary text-xl flex-shrink-0 font-bold">✓</span>
                                                <span className="leading-relaxed">{course}</span>
                                            </li>
                                        ))}
                                        {category.courses.length > 6 && (
                                            <li className="text-secondary text-sm font-semibold pt-2 italic"
                                                style={{ fontFamily: 'Roboto, sans-serif' }}>
                                                + {category.courses.length - 6} more courses...
                                            </li>
                                        )}
                                    </ul>

                                    {/* View All Link */}
                                    <Link
                                        to={category.link}
                                        className="inline-flex items-center gap-3 text-secondary font-bold text-sm hover:gap-5 transition-all duration-300 pt-4 border-t border-white/20"
                                        style={{ fontFamily: 'Poppins, sans-serif', letterSpacing: '0.5px' }}
                                    >
                                        View All Courses
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16 animate-fade-in-up scroll-reveal">
                    <p className="text-primary font-semibold text-lg md:text-xl mb-8 leading-relaxed scroll-reveal"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Not sure which course to choose? Our expert counsellors will help you!
                    </p>
                    <Link
                        to="/enquiry"
                        className="inline-flex items-center gap-4 bg-secondary text-primary px-10 py-5 font-bold text-base md:text-lg hover:bg-secondary-dark transition-all duration-300 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-1 scroll-reveal"
                        style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.5px' }}
                    >
                        Get Free Guidance
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CoursesSection;
