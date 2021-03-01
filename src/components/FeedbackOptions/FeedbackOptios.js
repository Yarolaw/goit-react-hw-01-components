import React from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const classes = [styles.button];
    return (
        <>
            {Object.keys(options).map((option) => (
                <button
                    key={option}
                    onClick={() => onLeaveFeedback(option)}
                    type="button"
                    className={
                       classes.concat(
                       (option === 'good' && styles.button_good) ||
                       (option === 'bad' && styles.button_bad)
                       ).join(' ')}
                >{option}
                </button>
            ))}
            
        </>
    )
}
FeedbackOptions.propTypes = {
    options: PropTypes.object,
    onLeaveFeedback:PropTypes.func
}
export default FeedbackOptions