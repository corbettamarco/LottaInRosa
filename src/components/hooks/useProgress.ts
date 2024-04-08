import { useState } from "react";

export const useProgress = () => {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(10); const [slideDirection, setSlideDirection] = useState<"left" | "right">(
        "left"
    );
    const [isAnimating, setIsAnimating] = useState(false);
    const [thankyou, setThankyou] = useState(false);

    const handleNextClick = () => {
        if (isAnimating) return; // return early if a slide animation is already in progress
        setIsAnimating(true); // set isAnimating to true to prevent further clicks until the animation is complete
        setSlideDirection("right");
        setStep(step + 1);
        if (step === 10) {
            setProgress(100);
        } else {
            setProgress(progress + 10);
        }
        setTimeout(() => {
            setIsAnimating(false); // set isAnimating back to false after the slide animation is complete
        }, 0.1);
    };

    const handleBackClick = () => {
        if (isAnimating) return; // return early if a slide animation is already in progress
        setIsAnimating(true); // set isAnimating to true to prevent further clicks until the animation is complete
        setSlideDirection("left");
        setStep(step - 1);
        setProgress(progress - 10);
        setTimeout(() => {
            setIsAnimating(false); // set isAnimating back to false after the slide animation is complete
        }, 0.1);
    };

    return { step, setStep, progress, setProgress, isAnimating, setIsAnimating, handleBackClick, handleNextClick, slideDirection, setSlideDirection, thankyou, setThankyou }
}
