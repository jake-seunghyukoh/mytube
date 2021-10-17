import { useRouter } from 'next/router';
import WatchLayout from '@layouts/watch';

function Watch() {
  const router = useRouter();
  const { title } = router.query;

  return <WatchLayout>{title}</WatchLayout>;
}

export default Watch;
