import Link from 'next/link';
import Image from 'next/image';

import styles from './video.module.scss';
import classnames from 'classnames';

function VideoCard({ video }) {
  return (
    <Link href={`/watch?title=${video.title}`}>
      <div className={classnames(styles.wrapper)}>
        <img className={classnames(styles.image)} src={video.thumbnail} />
        <div className={classnames(styles.title)}>{video.title}</div>
      </div>
    </Link>
  );
}

export default VideoCard;
