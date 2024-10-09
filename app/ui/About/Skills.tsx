import { databases, frameworks, languages, tools } from "@/app/lib/skills";
import SkillCard from "./SkillCard";

const Skills = () => {
    return (
        <>
            <h3 className="text-xl">Programming Languages</h3>
            <ul className="grid grid-cols-3 lg:grid-cols-6 gap-4">
                {languages.map(skill =>
                    <li key={skill.id}>
                        <SkillCard skill={skill} />
                    </li>
                )}
            </ul>
            <h3 className="text-xl">Frameworks/Packages</h3>
            <ul className="grid grid-cols-3 lg:grid-cols-5 gap-4">
                {frameworks.map(skill =>
                    <li key={skill.id}>
                        <SkillCard skill={skill} />
                    </li>
                )}
            </ul>
            <h3 className="text-xl">Tools</h3>
            <ul className="grid grid-cols-3 lg:grid-cols-6 gap-4">
                {tools.map(skill =>
                    <li key={skill.id}>
                        <SkillCard skill={skill} />
                    </li>
                )}
            </ul>
            <h3 className="text-xl">Databases</h3>
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {databases.map(skill =>
                    <li key={skill.id}>
                        <SkillCard skill={skill} />
                    </li>
                )}
            </ul>
        </>
    )
}

export default Skills
