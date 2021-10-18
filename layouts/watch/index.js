import styles from './watch-layout.module.scss';
import classnames from 'classnames';

function WatchLayout({ children }) {
  return (
    <div className={classnames(styles.wrapper)}>
      <div className={classnames(styles.navigator)}>Logo</div>
      <div>{children}</div>
      <div>
        <video controls width="400" autoPlay={true}>
          <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default WatchLayout;
