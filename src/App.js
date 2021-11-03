import React, { Component } from "react";
import { Statistic } from "./components/Statistics/Statistics.jsx";
import { FeedbackOptions } from "./components/FeedbackOptions/FeedbackOptions.jsx";
import { Section } from "./components/Section/Section.jsx";
import { Notification } from "./components/Notification/Notification.jsx";

class App extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  handleIncrement = (option) => {
    this.setState((prevState) => {
      return {
        [option]: prevState[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        {good || neutral || bad > 0 ? (
          <Section title="Statistic">
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}

App.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default App;
