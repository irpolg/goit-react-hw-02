// import Notification from '../Notification/Notification';
import clsx from 'clsx';
import css from './Feedback.module.css';

export default function Feedback({good, bad, neutral, total, positive}) {
  return (
      <div className={css.feedbackList}>
      <>
      <p className={css.feedbackItem}>Good: {good}</p>
      <p className={css.feedbackItem}>Neutral: {neutral} </p>
      <p className={css.feedbackItem}>Bad: {bad}</p>
      <p className={css.feedbackItem}>Total: {total}</p>
      <p
        className={clsx(
          css.feedbackItem,
          positive >= 50 ? css.yesPositive : css.noPositive
        )}
      >
        Positive: {positive}%
      </p>
    </>
    </div>
  );
}