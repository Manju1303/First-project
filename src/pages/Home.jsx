import HeroSection from '../components/home/HeroSection';
import GuidanceServices from '../components/home/GuidanceServices';
import CoursesSection from '../components/home/CoursesSection';
import AbroadStudySection from '../components/home/AbroadStudySection';
import CollegesSection from '../components/home/CollegesSection';
import EnquirySection from '../components/home/EnquirySection';

const Home = () => {
    return (
        <div className="overflow-hidden">
            <HeroSection />
            <GuidanceServices />
            <CoursesSection />
            <AbroadStudySection />
            <CollegesSection />
            <EnquirySection />
        </div>
    );
};

export default Home;
