import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(setupDate());

  function setupDate() {
    const currentDate = new Date();
    return {
      hour: currentDate.getHours(),
      minute: currentDate.getMinutes(),
      day: currentDate.getDate(),
      month: currentDate.toLocaleString("en-US", { month: "long" }),
      year: currentDate.getFullYear(),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(setupDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="clock">
      <p>
        <span className="velvet">const</span> clock ={" "}
        <span className="yellow">&#123;</span>
      </p>
      <p className="inner">
        hour: <span className="blue">{date.hour}</span>,
      </p>
      <p className="inner">
        minute:{" "}
        <span className="blue">
          {date.minute < 10 && "0"}
          {date.minute}
        </span>
        ,
      </p>
      <p className="inner">
        day:{" "}
        <span className="blue">
          {" "}
          {date.day < 10 && "0"}
          {date.day}
        </span>
        ,
      </p>
      <p className="inner">
        month: <span className="blue">"{date.month}"</span>,
      </p>
      <p className="inner">
        year: <span className="blue">"{date.year}"</span>
      </p>
      <p className="yellow">&#125;</p>
    </section>
  );
}

export default Clock;
