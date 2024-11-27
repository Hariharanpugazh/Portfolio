import React from "react";

// Updated technologies and tools
const technologies = [
  { name: "HTML", id: "html-logo" },
  { name: "CSS", id: "css-logo" },
  { name: "JavaScript", id: "javascript-logo" },
  { name: "TypeScript", id: "typescript-logo" },
  { name: "Node.js", id: "nodejs-logo" },
  { name: "React", id: "react-logo" },
  { name: "MongoDB", id: "mongodb-logo" },
];

const TechnologyGrid = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "20px",
          color: "#ffffff",
        }}
      >
        Technologies and tools I'm proficient in
      </h1>
      <div className="grid grid-cols-7 gap-4 place-items-center">
        {technologies.map((tech) => (
          <div
            key={tech.id}
            className="flex flex-col items-center gap-2 transition-transform duration-200 hover:scale-105 hover:opacity-80"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              role="img"
              viewBox="0 0 24 24"
              height="48"
              width="48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <use href={`/logos/logos.svg#${tech.id}`} />
            </svg>
            <span className="text-sm transition-colors duration-200 hover:text-blue-500">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyGrid;
