import React, { Children } from "react";
import '../styles/skills.css'
import SkillItem from "./SkillItem";

export default function Skills(props)
{

  var style = {};
  console.log(props.style);

  return <div className="skills" style={props.style}>
        <h3>{props.title}</h3>

        <div className="skillsGrid">
          {props.children}
        </div>
      </div>
    
}
