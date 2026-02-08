import HeroSection from '../components/home/HeroSection';
import GuidanceServices from '../components/home/GuidanceServices';
import CoursesSection from '../components/home/CoursesSection';
import CenteredGuideBox from '../components/home/CenteredGuideBox';
import AbroadStudySection from '../components/home/AbroadStudySection';
import CollegesSection from '../components/home/CollegesSection';
import EnquirySection from '../components/home/EnquirySection';
import AchievementsSection from '../components/home/AchievementsSection';

const Home = () => {
    return (
        <div className="overflow-hidden">
            <HeroSection />
            <GuidanceServices />
            <CoursesSection />
            <CenteredGuideBox />
            <AbroadStudySection />
            <AchievementsSection />
            <CollegesSection />
            <EnquirySection />
        </div>
    );
};

export default Home;
