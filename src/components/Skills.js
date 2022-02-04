import React from "react";
import '../styles/skills.css'
import SkillItem from "./SkillItem";

export default function Skills()
{
    return <div style={{marginTop: '2%'}}>
    <div className="skills">
        <h3>TOOLS</h3>

        <div className="skillsGrid">
        <SkillItem img='../images/skillsIcons/Unity.png'/>
        <SkillItem img='../images/skillsIcons/Unity.png'/>
        <SkillItem img='../images/skillsIcons/Unity.png'/>
        <SkillItem img='../images/skillsIcons/Unity.png'/>
        <SkillItem img='../images/skillsIcons/Unity.png'/>
        <SkillItem img='../images/skillsIcons/Unity.png'/>
        <SkillItem img='../images/skillsIcons/Unity.png'/>
        <SkillItem img='../images/skillsIcons/Unity.png'/>
        </div>
          {/*<ul>
            <li>Unity</li>
            <li>Unreal</li>
            <li>C#</li>
            <li>C++</li>
            <li>HLSL</li>
            <li>Blender</li>
            <li>Substance Painter</li>
          </ul>*/}
      </div>
    </div>
}
