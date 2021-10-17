import styles from './video-container.module.scss';
import classnames from 'classnames';

function VideoContainer({ children }) {
  return <div className={classnames(styles.wrapper)}>{children}</div>;
}

export default VideoContainer;
