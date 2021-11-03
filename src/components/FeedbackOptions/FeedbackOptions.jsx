import React from "react";
import PropTypes from "prop-types";
import { ButtonStyle } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map((option) => (
    <ButtonStyle
      type="button"
      key={option}
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </ButtonStyle>
  ));

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func,
};
