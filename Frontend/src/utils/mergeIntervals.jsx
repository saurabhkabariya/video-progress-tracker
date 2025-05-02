
const mergeIntervals = (intervals) => {
    if (!intervals.length) return [];
    const sorted = intervals.sort((a, b) => a.start - b.start);
    const merged = [sorted[0]];
  
    for (let i = 1; i < sorted.length; i++) {
      const last = merged[merged.length - 1];
      const current = sorted[i];
  
      if (current.start <= last.end) {
        last.end = Math.max(last.end, current.end);
      } else {
        merged.push(current);
      }
    }
  
    return merged;
  };
  
  export default mergeIntervals;
  