import React, { useEffect, useRef, useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import ProgressBar from './components/ProgressBar';
import mergeIntervals from './utils/mergeIntervals';
import calculateProgress from './utils/calculateProgress';

const App = () => {
  const [watchedIntervals, setWatchedIntervals] = useState([]);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleNewInterval = (newInterval) => {
    const updatedIntervals = mergeIntervals([...watchedIntervals, newInterval]);
    setWatchedIntervals(updatedIntervals);

    const updatedProgress = calculateProgress(updatedIntervals, duration);
    setProgress(updatedProgress);
  };

  const handleVideoDuration = (videoDuration) => {
    setDuration(videoDuration);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold mb-4">🎓 Lecture Video Tracker</h1>

      <VideoPlayer
        onIntervalCapture={handleNewInterval}
        onDurationLoad={handleVideoDuration}
      />

      <ProgressBar progress={progress} />
    </div>
  );
};

export default App;
