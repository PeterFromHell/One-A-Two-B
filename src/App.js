import React, { useEffect, useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [firstNumber, changeFirstNumber] = useState(null);
  const [secondNumber, changeSecondNumber] = useState(null);
  const [thirdNumber, changeThirdNumber] = useState(null);
  const [forthNumber, changeForthNumber] = useState(null);
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);
  const [guessHistory, setGuessHistory] = useState([]);
  const [resultHistory, setResultHistory] = useState([]);

  const numberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [digits, setDigits] = useState([]);

  const getRandomFourDigits = () => {
    const numbers = [...Array(10).keys()]; // [0, 1, 2, ..., 9]
    for (let i = numbers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]]; // Swap elements
    }

    const randomFour = numbers.slice(0, 4);
    setDigits(randomFour);
  };

  useEffect(() => {
    getRandomFourDigits();
  }, []);

  const typeIn = (number) => {
    if (
      firstNumber == null &&
      secondNumber == null &&
      thirdNumber == null &&
      forthNumber == null
    ) {
      changeFirstNumber(number);
    } else if (
      firstNumber != null &&
      firstNumber !== number &&
      secondNumber == null &&
      thirdNumber == null &&
      forthNumber == null
    ) {
      changeSecondNumber(number);
    } else if (
      firstNumber != null &&
      firstNumber !== number &&
      secondNumber != null &&
      secondNumber !== number &&
      thirdNumber == null &&
      forthNumber == null
    ) {
      changeThirdNumber(number);
    } else if (
      firstNumber != null &&
      firstNumber !== number &&
      secondNumber != null &&
      secondNumber !== number &&
      thirdNumber != null &&
      thirdNumber !== number &&
      forthNumber == null
    ) {
      changeForthNumber(number);
    }
  };
  const deleteNumber = () => {
    if (forthNumber != null) {
      changeForthNumber(null);
    } else if (thirdNumber != null) {
      changeThirdNumber(null);
    } else if (secondNumber != null) {
      changeSecondNumber(null);
    } else if (firstNumber != null) {
      changeFirstNumber(null);
    }
  };
  const send = () => {
    if (
      firstNumber != null &&
      secondNumber != null &&
      thirdNumber != null &&
      forthNumber != null
    ) {
      let a = 0,
        b = 0;

      if (firstNumber === digits[0]) {
        a++;
      }
      if (secondNumber === digits[1]) {
        a++;
      }
      if (thirdNumber === digits[2]) {
        a++;
      }
      if (forthNumber === digits[3]) {
        a++;
      }
      if (
        firstNumber === digits[1] ||
        firstNumber === digits[2] ||
        firstNumber === digits[3]
      ) {
        b++;
      }
      if (
        secondNumber === digits[0] ||
        secondNumber === digits[2] ||
        secondNumber === digits[3]
      ) {
        b++;
      }
      if (
        thirdNumber === digits[0] ||
        thirdNumber === digits[1] ||
        thirdNumber === digits[3]
      ) {
        b++;
      }
      if (
        forthNumber === digits[0] ||
        forthNumber === digits[1] ||
        forthNumber === digits[2]
      ) {
        b++;
      }
      setGuessHistory([
        firstNumber + "" + secondNumber + "" + thirdNumber + "" + forthNumber,
        ...guessHistory,
      ]);
      setCountA(a);
      setCountB(b);
      changeFirstNumber(null);
      changeSecondNumber(null);
      changeThirdNumber(null);
      changeForthNumber(null);
      setResultHistory([a + "A" + b + "B", ...resultHistory]);
    } else {
      alert("fuck you bitch, you do not even know the rules");
    }
  };

  return (
    <>
      <h1 className="text-red-500 text-[50px]">1A2B Demo</h1>
      <div className="h-[80px] flex flex-row items-center justify-center m-1">
        {numberArray.map((number) => (
          <Button count={number} handleClick={() => typeIn(number)} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={send}
          className="border border-black w-[50px] h-[30px] rounded-md bg-grey-500 mx-1"
        >
          <p>send</p>
        </button>
        <button
          onClick={deleteNumber}
          className="border border-black w-[50px] h-[30px] rounded-md bg-grey-500"
        >
          <p>delete</p>
        </button>
      </div>
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-[40px]">{firstNumber}</h1>
        <h1 className="text-[40px]">{secondNumber}</h1>
        <h1 className="text-[40px]">{thirdNumber}</h1>
        <h1 className="text-[40px]">{forthNumber}</h1>
      </div>
      <div className="flex items-center justify-center">
        <h1 className="text-[40px]">{`${countA}A${countB}B`}</h1>
      </div>
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          {guessHistory?.reverse().map((guess) => (
            <h1 className="text-[40px] m-1">{guess}</h1>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          {resultHistory?.reverse().map((result) => (
            <h1 className="text-[40px] m-1">{result}</h1>
          ))}
        </div>
      </div>

      {/*answer */}
      {/*<h1>{digits}</h1>*/}
    </>
  );
};

export default App;
