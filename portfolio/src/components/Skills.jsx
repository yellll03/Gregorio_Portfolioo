function Skills() {
  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React JS',
    'Python',
    'Flask',
    'MySQL',
    'Microsoft Excel',
    'Google Workspace',
    'Canva',
    'Basic Data Analysis',
    'Database Management',
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <ul className="tag-list">
          {skills.map((skill) => (
            <li key={skill} className="tag">{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Skills
