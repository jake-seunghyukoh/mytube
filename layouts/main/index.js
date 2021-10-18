import styles from './main-layout.module.scss';
import classnames from 'classnames';

import VideoContainer from '@components/container/video';
import SideBar from '../../components/sidebar';

function MainLayout({ children }) {
  return (
    <div className={classnames(styles.wrapper)}>
      <div className={classnames(styles.navigator)}>Logo</div>
      <div className={classnames(styles.main)}>
        <div className={classnames(styles.sidebar)}>
          <SideBar />
        </div>
        <div className={classnames(styles.container)}>
          <VideoContainer>{children}</VideoContainer>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
