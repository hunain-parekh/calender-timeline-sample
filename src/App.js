import "./App.css";
import Timeline from "react-calendar-timeline";
// make sure you include the timeline stylesheet or the timeline will not be styled
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";
import { useState, useEffect } from "react";

const groups = [
  { id: 1, title: "group 1" },
  { id: 2, title: "group 2" },
];

function App() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    for (let i = 0; i < 1000; i++) {
      let startDate = moment("2022-01-01");
      let endDate = moment("2023-12-31");
      let start = moment(startDate + Math.random() * (endDate - startDate));
      let end = moment(start + Math.random() * (endDate - start));
      setItems((prev) => [
        ...prev,
        {
          id: i,
          group: 1,
          title: "item " + i,
          start_time: start,
          end_time: end,
        },
      ]);
    }
  }, []);
  return (
    <div className="App">
      Rendered by react!
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-12, "hour")}
        defaultTimeEnd={moment().add(12, "hour")}
      />
    </div>
  );
}

export default App;
