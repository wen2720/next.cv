import React from 'react';
import Image from "next/image";
import { ProfileContact } from './profile_contacts';

// Define the props type
interface AProfile {
  img_src?: string;
  name?: string;
  hash_tags?: string[];
  // contacts?: string[];
  special_skills?: string[];
  coding_skills?: string[];
  font_style?: string;
  font_color?: string
}

// React component
const OneProfile: React.FC<AProfile> = ({ 
  img_src="/IMG5866-modified1.png", 
  name = "Wenhao Li", 
  hash_tags = ["#Computer Science", "#Software Engineer", "#Full-stack developer"],
  special_skills = ["MLOps", "HPC", "Android App", "iOS App", "Micro-service", "Front-end", "Back-end", "CI/CD", "Data Security and Privacy", "Communication protocols", "Data Structure", "Functional Programming", "Context-free grammar", "OO programming"],
  coding_skills = ["Python", "Elixir", "Dart", "TypeScript", "C#", "F#", "JavaScript", "HTML", "CSS", "Shell script", "c++", "Java", "C" ],
  font_style = "font-serif",
  font_color = "text-white"
}) => {
  return (
    <div className={`flex flex-col items-center mb-6 ${font_style} ${font_color} `}>
      
      {/* Profile image */}
      <Image
        src={img_src} 
        alt="Profile"
        width={128}
        height={128}
        className="rounded-full object-cover"
        priority={false}
      />
    
      {/* Name */}
      <p className="mt-4 text-sm font-semibold">{name}</p>
      
      {/* Hash tags */}
      <div>
        {hash_tags.map((ht,i) =>(
          <p key={i} className="mt-2 text-sm text-left">{ht}</p>  
        ))}
      </div>
      
      {/* Contact */}
      <ProfileContact/>
      
      {/* Specialization */}
      {/* <div>
        {special_skills.map((ht,i) =>(
          <p key={i} className="mt-2 text-xs text-left">{ht}</p>  
        ))}
      </div> */}

      {/* Programming */}
      {/* <IconLabel icon={FaRegFileCode} name={"Programming"}></IconLabel>
      <div>
        {coding_skills.map((ht,i) =>(
          <p key={i} className="mt-2 text-xs text-left">{ht}</p>  
        ))}
      </div> */}

    </div>
  );
};

export default OneProfile;