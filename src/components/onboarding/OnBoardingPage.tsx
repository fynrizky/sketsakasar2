import React, { useState } from "react";

interface OnBoardingPageInterface {
  title: string;
  content: string;
  page: number;
}

type OnBoardingPageProps = OnBoardingPageInterface & {
  onboardingLength: number;
  currentPage: number;
  onPrevClick: () => void;
  onNextClick: () => void;
};

const OnBoardingPage = (props: OnBoardingPageProps) => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const isPrevButtonDisabled = props.currentPage <= 1;
  const isNextButtonDisabled = props.currentPage >= 4;

  const handlePrevClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      props.onPrevClick();
      setIsVisible(true);
    }, 700);
  };

  const handleNextClick = () => {
    setIsVisible(false);
    setTimeout(() => {
      props.onNextClick();
      setIsVisible(true);
    }, 700);
  };

  return (
    <div>
      <div style={{ opacity: isVisible ? 1 : 0, transition: "opacity 0.7s ease-out" }}>
        <h2>{props.title}</h2>
        <div>{props.content}</div>
      {props.currentPage <= props.onboardingLength && (
          <div>
          <button onClick={handlePrevClick} disabled={isPrevButtonDisabled}>
            Prev
          </button>
          <button onClick={handleNextClick} disabled={isNextButtonDisabled}>
            Next
          </button>
        </div>
      )}
      </div>
    </div>
  );
};

export default OnBoardingPage;
