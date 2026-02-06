import { Link } from 'react-router-dom';
import { ArrowRight, Cog, Stethoscope, BookOpen, Microscope, Wrench, Scale } from 'lucide-react';
import { engineeringCourses, medicalCourses, diplomaCourses, artsScienceCourses, lawCourses, alliedHealthCourses } from '../../data/courses';

const CoursesSection = () => {
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
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-14 animate-fade-in-up">
                    <span className="inline-block bg-secondary px-8 py-3 text-primary font-bold text-sm mb-6 rounded"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        COURSES OFFERED
                    </span>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Explore Our Wide Range of Courses
                    </h2>
                    <p className="text-text-dark/70 max-w-2xl mx-auto text-lg"
                        style={{ fontFamily: 'Roboto, sans-serif' }}>
                        From Engineering to Medical, Arts to Law - we guide you to the right course for your career goals.
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courseCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={category.title}
                                className="bg-primary group hover:bg-primary-dark transition-all duration-300 animate-fade-in-up overflow-hidden rounded-lg shadow-lg"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Header */}
                                <div className="bg-secondary p-5 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                        <IconComponent className="w-6 h-6 text-secondary" />
                                    </div>
                                    <h3 className="text-primary font-bold text-lg"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Course List */}
                                <div className="p-6">
                                    <ul className="space-y-3 mb-6">
                                        {category.courses.slice(0, 6).map((course, idx) => (
                                            <li key={idx}
                                                className="text-white/90 text-sm flex items-start gap-3"
                                                style={{ fontFamily: 'Roboto, sans-serif' }}>
                                                <span className="text-secondary mt-0.5 text-lg">▸</span>
                                                <span className="leading-relaxed">{course}</span>
                                            </li>
                                        ))}
                                        {category.courses.length > 6 && (
                                            <li className="text-secondary text-sm font-medium pt-2"
                                                style={{ fontFamily: 'Roboto, sans-serif' }}>
                                                + {category.courses.length - 6} more courses...
                                            </li>
                                        )}
                                    </ul>

                                    {/* View All Link */}
                                    <Link
                                        to={category.link}
                                        className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:gap-4 transition-all duration-300 pt-2 border-t border-white/20"
                                        style={{ fontFamily: 'Poppins, sans-serif' }}
                                    >
                                        View All Courses
                                        <ArrowRight size={16} />
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-14 animate-fade-in-up">
                    <p className="text-primary font-semibold text-lg mb-6"
                        style={{ fontFamily: 'Poppins, sans-serif' }}>
                        Not sure which course to choose? Our expert counsellors will help you!
                    </p>
                    <Link
                        to="/enquiry"
                        className="inline-flex items-center gap-3 bg-secondary text-primary px-10 py-4 font-bold text-lg hover:bg-secondary-dark transition-colors rounded shadow-lg"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
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
