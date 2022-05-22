import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
// import PropTypes from 'prop-types';

export const FeedbackStats = () => {

    const {feedback} = useContext(FeedbackContext)


    // calculate ratings average
    let average = feedback.reduce((acc, cur) => {
        return acc + cur.rating
    }, 0) / feedback.length

    average.toFixed(1).replace(/[.,]0$/, '')

    return (
        <div className='feedback-stats'>
            <h4>{feedback.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
        </div>
    )

}

// FeedbackStats.propType = {
//     feedback: PropTypes.array.isRequired
// }
