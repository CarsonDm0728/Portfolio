import Bar from "@/components/Bar";
import { skills, tools } from "@/data";

export default function Portfolio() {
  return (
    <div className="px-5 py-2">
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="mb-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              B.IT (Hons.) Security Tech
            </h5>
            <p className="font-semibold">Multimedia Univercity (2020-2023)</p>
            <p className="my-3">
              Develop own Carpool Post Application(Android) as my Degree FYP
            </p>
          </div>
        </div>
        <div>
          <h5 className="mb-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Atecl Technology</h5>
            <p className="font-semibold">Web Developer</p>
            <p className="my-3">
              Developed and maintaained WorPress websites and custom themes for
              diverse clients
            </p>
          </div>
        </div>
      </div>
      <div className="grid mt-6 gap-6 md:grid-cols-2">
        <div>
          <h5 className="mb-3 text-2xl font-bold">Skill</h5>
          <div className="my-2">
            {skills.map((skill, i) => (
              <Bar key={i} title={skill.title} level={skill.level}/>
            ))}
          </div>
        </div>
        <div>
          <h5 className="mb-3 text-2xl font-bold">Tools & Software</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar key={i} title={tool.title} level={tool.level}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
