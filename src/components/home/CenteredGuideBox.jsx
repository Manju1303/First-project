import { CheckCircle, Lightbulb, Target, Zap } from 'lucide-react';

const CenteredGuideBox = () => {
    const guideItems = [
        {
            icon: <Lightbulb className="w-6 h-6 text-secondary" />,
            title: "Identify Your Path",
            description: "Discover courses that align with your interests and career aspirations"
        },
        {
            icon: <Target className="w-6 h-6 text-secondary" />,
            title: "Expert Guidance",
            description: "Get personalized advice from our experienced educational counsellors"
        },
        {
            icon: <CheckCircle className="w-6 h-6 text-secondary" />,
            title: "Smooth Admission",
            description: "We handle the entire admission process from application to enrollment"
        },
        {
            icon: <Zap className="w-6 h-6 text-secondary" />,
            title: "Success Assurance",
            description: "Learn strategies to excel in your chosen course and career path"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Main Guide Box */}
                <div className="guide-box animate-fade-in-up">
                    <div className="guide-box-content">
                        <h3 style={{ fontFamily: 'Poppins, sans-serif' }}>
                            Your Complete Educational Guide
                        </h3>
                        
                        <p style={{ fontFamily: 'Roboto, sans-serif' }}>
                            At INSTA Educational Guidance Centre, we believe in empowering students 
                            with the right knowledge and guidance to make informed decisions about 
                            their educational future.
                        </p>

                        {/* Guide Items Grid */}
                        <div className="guide-box-list">
                            {guideItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="guide-box-item animate-fade-in-up"
                                    style={{ 
                                        animationDelay: `${index * 0.1}s`,
                                        fontFamily: 'Roboto, sans-serif'
                                    }}
                                >
                                    <div className="flex items-start gap-3 mb-2">
                                        <div className="flex-shrink-0 mt-1">
                                            {item.icon}
                                        </div>
                                        <h4 style={{ fontFamily: 'Poppins, sans-serif' }} className="m-0">
                                            {item.title}
                                        </h4>
                                    </div>
                                    <p>{item.description}</p>
                                </div>
                            ))}
                        </div>

                        <p style={{ fontFamily: 'Roboto, sans-serif' }} className="text-white/80 text-base mt-8 mb-0">
                            Ready to take the next step? Book your free consultation today!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CenteredGuideBox;
