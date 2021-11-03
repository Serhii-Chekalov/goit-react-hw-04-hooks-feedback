import React, { useState } from "react";
import { Statistic } from "./components/Statistics/Statistics.jsx";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions.jsx";
import { Section } from "./components/Section/Section.jsx";
import { Notification } from "./components/Notification/Notification.jsx";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = (feedback) => {
    switch (feedback) {
      case "good":
        setGood((state) => state + 1);
        break;
      case "neutral":
        setNeutral((state) => state + 1);
        break;
      case "bad":
        setBad((state) => state + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return Math.round((good * 100) / total);
  };

  const options = Object.keys({ good, neutral, bad });
  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={handleIncrement} />
      </Section>
      {good || neutral || bad > 0 ? (
        <Section title="Statistic">
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
}

App.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default App;
