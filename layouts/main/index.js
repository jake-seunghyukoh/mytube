import VideoContainer from '@components/container/video';

function MainLayout({ children }) {
  return (
    <div>
      <h1>MyTube</h1>
      <h2>Videos</h2>
      <VideoContainer>{children}</VideoContainer>
    </div>
  );
}

export default MainLayout;
