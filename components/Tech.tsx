"use client";

const Tech = () => {
  const techData = [
    {
      title: "Languages",
      description: "JavaScript, TypeScript, Python, C, C++, Java, OCaml",
    },
    {
      title: "Web Technologies",
      description: "React, Next.js, HTML5, CSS3, Tailwind CSS, Bootstrap, WordPress",
    },
    {
      title: "Technologies",
      description: "Firebase, Git, REST APIs, Node.js, Express, Docker",
    },
    {
      title: "Developer Tools",
      description: "VSCode, GitHub, Postman, Figma, Chrome DevTools, Jupyter Notebook",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {techData.map((tech, index) => (
          <div
            key={index}
            className="p-6 bg-gray-900 text-white rounded-2xl shadow-lg border border-gray-700 hover:shadow-xl transition duration-300"
          >
            <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
            <p className="text-gray-300 text-sm">{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
