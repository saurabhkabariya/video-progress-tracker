import React, { useRef, useState } from 'react';

const VideoPlayer = ({ onIntervalCapture, onDurationLoad }) => {
  const videoRef = useRef(null);
  const [currentStart, setCurrentStart] = useState(null);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!currentStart) {
      setCurrentStart(video.currentTime);
    }
  };

  const handlePauseOrEnded = () => {
    const video = videoRef.current;
    if (currentStart !== null) {
      const endTime = video.currentTime;
      if (endTime > currentStart) {
        onIntervalCapture({ start: currentStart, end: endTime });
      }
      setCurrentStart(null);
    }
  };

  const handleLoadedMetadata = () => {
    const video = videoRef.current;
    onDurationLoad(video.duration);
  };

  return (
    <video
      ref={videoRef}
      width="100%"
      controls
      onTimeUpdate={handleTimeUpdate}
      onPause={handlePauseOrEnded}
      onEnded={handlePauseOrEnded}
      onLoadedMetadata={handleLoadedMetadata}
    >
      <source src="/sample-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
