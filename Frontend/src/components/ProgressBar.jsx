import React from 'react';

const ProgressBar = ({ progress }) => {
  return (
    <div className="mt-4">
      <div className="bg-gray-300 h-4 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="mt-2 text-sm text-gray-700">Progress: {progress}%</p>
    </div>
  );
};

export default ProgressBar;
