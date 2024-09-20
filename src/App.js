import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import StepCounter from './step-counter/Stepcounter.js';

function App() {
  const [step, setStep] = useState(0);
  const [count, setCount] = useState(0);
  const currentDate = new Date();


  function stepIncrementHandler() {
    setStep(step + 1);
  }

  function stepDecremamentHandler() {
    if (step > 0) {
      setStep(step - 1);
    }
  }

  function countIncrementHandler() {
    setCount(count + step);
  }

  function countDecrementHandler() {
    if (count > 0) {
      setCount(count - step);
    }
  }

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "September",
    "Oct",
    "Nov",
    "Dec",
  ];

  const numDate = currentDate.getDate() + count
  // const [numDate, setNumDate] = useState(currentDate.getDate() + count)
  const numDays = currentDate.getDay() + count
  const [numMonths, setMonths] = useState(currentDate.getMonth())

  useEffect(() => {
   
    if (numDate > 31 && numMonths < 11) {
      setMonths(numMonths + 1)
    }
  }, [numDate], [numMonths])




  return (
    <div className='main-container'>
      <div className='container'>
        <StepCounter title="Step" value={step} increamentValue={stepIncrementHandler} decreamentValue={stepDecremamentHandler} />
        <StepCounter title="Count" value={count} increamentValue={countIncrementHandler} decreamentValue={countDecrementHandler} />
        <h3 style={{ color: "purple" }}>
          {count ? `After ${count} days from Today, ` : ''}
          {numDate > 31 ? numDate % 31 : numDate} {months[numMonths]} {numDays > 6 ? days[numDays % 7] : days[numDays]}
        </h3>
      </div>
    </div>
  );
}

export default App;