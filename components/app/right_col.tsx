import React from 'react';
import AboutProfile from './profile_about';
import clsx from 'clsx';
import ProfileWorked from './profile_worked';


interface CvContent {
  font_style?: string
  font_color?: string
}

const MainCol: React.FC<CvContent> = ({ 
  font_style = "font-serif",
  font_color = "text-white"
}) => {
  return (
    <div className={clsx("flex flex-col p-6 m-6 rounded-lg", font_style, font_color )}>
      <AboutProfile/>
      <ProfileWorked/>
    </div>
  );
};

export default MainCol;

