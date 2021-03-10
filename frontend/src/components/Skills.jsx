import SkillBar from 'react-skillbars';


const Skills = () => {

    const skills = [
        {type: "HTML / CSS", level: 65},
        {type: "Javascript", level: 70},
        {type: "React", level: 75},
        {type: "NodeJS", level: 60},
        {type: "MongoDB", level: 50},
        {type: "Git", level: 50},
      ];
      const colors = {
        "bar": "#ff9d94",
        "title": {
          "text": "#f2f0f0",
          "background": "#FF6F61"
        }
      }
  return (
    <div className="skillBar">
      <SkillBar className='bars' skills={skills} height={15} animationDuration={1500} animationDelay={200} colors={colors}></SkillBar>
    </div>
  );
};

export default Skills;
