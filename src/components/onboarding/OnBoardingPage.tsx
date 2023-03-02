import React from "react";
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
  }
  
  const OnBoardingPage = (props: OnBoardingPageProps) => {
  
    const isPrevButtonDisabled = props.currentPage <= 1;
    const isNextButtonDisabled = props.currentPage >= 4;
  
    return (
      <div>
        <h2>{props.title}</h2>
        <div>{props.content}</div>
        {props.currentPage <= props.onboardingLength && (
          <div>
            <button onClick={props.onPrevClick} disabled={isPrevButtonDisabled}>
              Prev
            </button>
            <button onClick={props.onNextClick} disabled={isNextButtonDisabled}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
  export default OnBoardingPage;