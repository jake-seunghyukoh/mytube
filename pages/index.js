import MainLayout from '@layouts/main';
import VideoCard from '@components/card/video';

export default function Home({ videos }) {
  return (
    <MainLayout>
      {videos.map((video) => (
        // eslint-disable-next-line react/jsx-key
        <VideoCard video={video} />
      ))}
    </MainLayout>
  );
}

export async function getStaticProps(context) {
  return {
    props: {
      videos: [
        {
          title: 'video_1',
          thumbnail: 'https://i.ytimg.com/an_webp/kkoXRN1Qg4Y/mqdefault_6s.webp?du=3000&sqp=CMKar4sG&rs=AOn4CLBAcVPrGvIu0saV07EVuUMZE4u6pg',
        },
        {
          title: 'video_2',
          thumbnail: 'https://i.ytimg.com/an_webp/kkoXRN1Qg4Y/mqdefault_6s.webp?du=3000&sqp=CMKar4sG&rs=AOn4CLBAcVPrGvIu0saV07EVuUMZE4u6pg',
        },
        {
          title: 'video_3',
          thumbnail: 'https://i.ytimg.com/an_webp/kkoXRN1Qg4Y/mqdefault_6s.webp?du=3000&sqp=CMKar4sG&rs=AOn4CLBAcVPrGvIu0saV07EVuUMZE4u6pg',
        },
        {
          title: 'video_4',
          thumbnail: 'https://i.ytimg.com/an_webp/kkoXRN1Qg4Y/mqdefault_6s.webp?du=3000&sqp=CMKar4sG&rs=AOn4CLBAcVPrGvIu0saV07EVuUMZE4u6pg',
        },
        {
          title: 'video_5',
          thumbnail: 'https://i.ytimg.com/an_webp/kkoXRN1Qg4Y/mqdefault_6s.webp?du=3000&sqp=CMKar4sG&rs=AOn4CLBAcVPrGvIu0saV07EVuUMZE4u6pg',
        },
      ],
    },
  };
}
