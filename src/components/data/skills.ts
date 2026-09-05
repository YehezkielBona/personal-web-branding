export interface Skill {
    name: string
}

export const skillCategories = {
    frontEnd: [
        {name: "HTML"},
        {name: "CSS"},
        {name: "JavaScript"},
        {name: "TypeScript"},
        {name: "ReactJs"},
        {name: "TailwindCSS"},
    ],
    backEnd: [
        {name: "Node.js"},
        {name: "Express"},
        {name: "Django"},
        {name: "REST API"},
    ],
    tools: [
        {name: "Git"},
        {name: "Docker"},
        {name: "Jenkins"},
        {name: "AWS"},
        {name: "CI/CD"},
    ],
}