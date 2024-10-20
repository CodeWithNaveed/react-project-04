import './App.css';
import { useState } from "react";
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

  // Calculate the new date by adding 'count' to the current date
  const newDate = new Date();
  newDate.setDate(currentDate.getDate() + count);

  const displayDate = newDate.getDate();
  const displayMonth = months[newDate.getMonth()];
  const displayDay = days[newDate.getDay()];

  return (
    <div className='main-container'>
      <div className='container'>
        <StepCounter title="Step" value={step} increamentValue={stepIncrementHandler} decreamentValue={stepDecremamentHandler} />
        <StepCounter title="Count" value={count} increamentValue={countIncrementHandler} decreamentValue={countDecrementHandler} />
        <h3 style={{ color: "purple" }}>
          {count ? `After ${count} days from Today, ` : ''}
          {displayDate} {displayMonth} ({displayDay})
        </h3>
      </div>
    </div>
  );
}

export default App;