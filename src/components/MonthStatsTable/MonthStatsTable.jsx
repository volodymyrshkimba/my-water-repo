import { useEffect, useState } from "react";
import { addMonths, format, subMonths } from "date-fns";

const NovWater = [
  {
    date: "1 Nov",
    norma: "1.8L",
    perc: "60%",
    zaps: "6",
  },
  {
    date: "2 Nov",
    norma: "1.8L",
    perc: "65%",
    zaps: "6",
  },
  {
    date: "3 Nov",
    norma: "1.8L",
    perc: "10%",
    zaps: "6",
  },
  {
    date: "4 Nov",
    norma: "1.8L",
    perc: "20%",
    zaps: "6",
  },
  {
    date: "5 Nov",
    norma: "1.8L",
    perc: "69%",
    zaps: "6",
  },
];

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [currentDayInfo, setCurrentDayInfo] = useState(null);

  const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));

  const handleClick = (item) => {
    setCurrentDayInfo(item);
  };

  // useEffect({
  // 	 dispatch(setNewMonth)
  //  }, [currentMonth]);

  return (
    <div>
      {format(currentMonth, "MMMM yyyy")}
      <button type="button" onClick={prevMonth}>
        {"<-"}
      </button>
      <button type="button" onClick={nextMonth}>
        {"->"}
      </button>
      <ul>
        {NovWater.map((item) => (
          <li key={item.date} onMouseEnter={() => handleClick(item)}>
            {currentDayInfo?.date === item.date && (
              <div>
                {item.date}, {item.norma}, {item.perc}, {item.zaps}
              </div>
            )}
            {item.date.split(" ")[0]} {item.perc}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;
