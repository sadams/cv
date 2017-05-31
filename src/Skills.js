
import React from 'react'
import CircleChart from './CircleChart'
import skillsData from './skillsData'

const circleData = skillsData.map(skill => {
  return {
    ...skill,
    name: <a href={"#"+skill.name}><img className="tech-icon" alt={skill.name} src={skill.icon}/>{skill.name}</a>,
  }
});

export default () => <skills>
  <h1>Skills</h1>
  <h2>Relative Rating (details below)</h2>
  <CircleChart data={circleData}/>
  <h2>Details </h2>
  {skillsData.map((skill, i) => (
    <skill-details id={skill.name}>
      <h3><img className="tech-icon" alt={skill.name} src={skill.icon}/> {skill.name}</h3>
      {skill.description}
    </skill-details>
  ))}
</skills>
