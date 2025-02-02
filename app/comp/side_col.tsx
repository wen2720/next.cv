import React from 'react';

// Define the props type
interface ColumnSpaceProps {
  title?: string;
  content?: string;
}

// Using React.FC to define the component with the props type
const SideCol: React.FC<ColumnSpaceProps> = ({ title = "Default Title", content = "Default Content" }) => {
  return (
    <div className="flex justify-center mb-6">
      <img
        src="IMG5866-modified1.png" // Replace with your actual image path
        alt="Profile"
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-300"
      />
    </div>
  );
};

export default SideCol;