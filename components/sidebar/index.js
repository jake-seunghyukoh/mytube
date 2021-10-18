import styles from './sidebar.module.scss';
import classnames from 'classnames';

function SideBar() {
  return (
    <div className={classnames(styles.wrapper)}>
      <div className={classnames(styles.button)}>Button1</div>
      <div className={classnames(styles.button)}>Button2</div>
      <div className={classnames(styles.button)}>Button3</div>
      <div className={classnames(styles.button)}>Button4</div>
      <div className={classnames(styles.button)}>Button5</div>
    </div>
  );
}

export default SideBar;
