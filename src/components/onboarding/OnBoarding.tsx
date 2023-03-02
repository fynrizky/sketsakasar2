import React, { useState } from 'react';
import OnBoardingPage from './OnBoardingPage';


interface OnBoardingInterface {
  onboardingNumber: number;
}

type OnBoardingProps = OnBoardingInterface;

const OnBoarding: React.FC<OnBoardingProps> = ({ onboardingNumber }) => {
  const [currentPage, setCurrentPage] = useState<number>(onboardingNumber);

  const onboarding = [
    { title: 'Page 1', content: 'On1', page: 1 },
    { title: 'Page 2', content: 'On2', page: 2 },
    { title: 'Page 3', content: 'On3', page: 3 },
    { title: 'Page 4', content: 'On4', page: 4 },
  ];

  const onboard = onboarding.find((o) => o.page === currentPage);

  if (!onboard) {
    return <div>Invalid onboarding page number</div>;
  }

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  }

  const handleNextClick = () => {
    if (currentPage < 4) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  }


  return (
  <div> 
    <OnBoardingPage
    title={onboard.title}
    content={onboard.content}
    page={onboard.page}
    onboardingLength={onboarding.length}
    currentPage={currentPage}
    onPrevClick={handlePrevClick}
    onNextClick={handleNextClick}/>
  </div> 
)
};

export default OnBoarding;
