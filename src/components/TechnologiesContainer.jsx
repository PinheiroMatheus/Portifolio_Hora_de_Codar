import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact
} from 'react-icons/di'

import '../styles/components/technologiescontainer.sass'

const technologies = [
  { id: 'html', name: 'HTML5', icon: <DiHtml5 />, level: "Básico" },
  { id: 'css', name: 'CSS3', icon: <DiCss3 />, level: "Básico" },
  { id: 'js', name: 'JavaScript', icon: <DiJsBadge />, level: "Básico" },
  { id: 'node', name: 'Node.js', icon: <DiNodejsSmall />, level: "Básico" },
  { id: 'mysql', name: 'MySQSL', icon: <DiMysql />, level: "Básico" },
  { id: 'react', name: 'React', icon: <DiReact />, level: "Básico" },
]

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechnologiesContainer