import React, { useEffect, useState } from "react";

const TextTyping = ({
  sequance = ["Typing Text"],
  delay = 1500,
  stepDelay = 200,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentWord = sequance[currentIndex];

  useEffect(() => {
    setTimeout(
      () => {
        if (currentText.length < sequance[currentIndex].length) {
          setCurrentText(
            sequance[currentIndex].slice(0, currentText.length + 1)
          );
        } else {
          setCurrentIndex(
            currentIndex < sequance.length - 1 ? currentIndex + 1 : 0
          );
          setCurrentText("");
        }
      },
      currentText.length === currentWord.length ? delay : stepDelay
    );
  }, [currentText]);

  return <div className="text-typing">{currentText}</div>;
};

export default TextTyping;
