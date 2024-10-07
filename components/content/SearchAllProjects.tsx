// Define skill categories and logos
const skillCategories = [
  {
    category: 'Languages',
    skills: [
      { name: 'HTML', logo: '/logos/html-logo.svg' },
      { name: 'CSS', logo: '/logos/css-logo.svg' },
      { name: 'JavaScript', logo: '/logos/javascript-logo.svg' },
      { name: 'TypeScript', logo: '/logos/typescript-logo.svg' },
    ]
  },
  {
    category: 'Frameworks and Libraries',
    skills: [
      { name: 'React', logo: '/logos/react-logo.svg' },
      { name: 'Next.js', logo: '/logos/nextjs-logo.svg' },
      { name: 'Angular', logo: '/logos/angular-logo.svg' },
      { name: 'Ionic', logo: '/logos/ionic-logo.svg' },
    ]
  },
  {
    category: 'Backend Stack',
    skills: [
      { name: 'Node.js', logo: '/logos/nodejs-logo.svg' },
      { name: 'Express.js', logo: '/logos/express-logo.svg' },
      { name: 'MongoDB', logo: '/logos/mongodb-logo.svg' },
    ]
  },
];

// Render the skills and logos
const SkillDisplay = () => {
  return (
    <div>
      {skillCategories.map((category, catIndex) => (
        <div key={catIndex} className="my-6">
          <h2 className="text-xl font-bold text-white">{category.category}</h2>
          <div className="skills-grid">
            {category.skills.map((skill, skillIndex) => (
              <div key={skillIndex} className="skill-item">
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="skill-logo"
                />
                <span className="sr-only">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillDisplay;
