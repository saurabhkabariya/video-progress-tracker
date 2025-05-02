
const calculateProgress = (intervals, totalDuration) => {
    if (!totalDuration) return 0;
  
    const watchedSeconds = intervals.reduce(
      (sum, interval) => sum + (interval.end - interval.start),
      0
    );
  
    return Math.min(((watchedSeconds / totalDuration) * 100).toFixed(2), 100);
  };
  
  export default calculateProgress;
  