import { motion } from "framer-motion";

function Skills() {

const skills = [
{ name: "React.js", percentage: 75 },
{ name: "JavaScript", percentage: 80 },
{ name: "Tailwind CSS", percentage: 75 },
{ name: "Node.js", percentage: 75 },
{ name: "PHP", percentage: 70 },
{ name: "WordPress", percentage: 60 },
{ name: "Canva", percentage: 90 },
{ name: "UI/UX", percentage: 90 },
];

return (
<section
id="skills"
className="px-6 lg:px-20 py-24"
>

<div className="max-w-7xl mx-auto">

<div className="text-center mb-16">

<p className="text-purple-400 mb-3">
Technical Skills
</p>

<h2 className="text-4xl lg:text-6xl font-bold">
Technologies I Work With
</h2>

</div>

<div className="grid lg:grid-cols-2 gap-12">

{/* Left */}

<div>

{skills.map((skill,index)=>(

<motion.div
key={index}
initial={{opacity:0,x:-30}}
whileInView={{opacity:1,x:0}}
transition={{
duration:.6,
delay:index*.1
}}
viewport={{once:true}}
className="mb-7"
>

<div className="flex justify-between mb-2">

<h3>{skill.name}</h3>

<span>
{skill.percentage}%
</span>

</div>

<div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">

<motion.div
initial={{width:0}}
whileInView={{
width:`${skill.percentage}%`
}}
transition={{
duration:1.5
}}
viewport={{once:true}}
className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
/>

</div>

</motion.div>

))}

</div>

{/* Right */}

<div className="grid grid-cols-2 gap-5">

{skills.map((skill,index)=>(

<motion.div
key={index}
initial={{opacity:0,y:30}}
whileInView={{
opacity:1,
y:0
}}
transition={{
duration:.5,
delay:index*.1
}}
viewport={{once:true}}
className="glass p-8 rounded-3xl hover:scale-105 transition cursor-pointer"
>

<h3 className="font-bold text-xl">

{skill.name}

</h3>

<p className="text-gray-400 mt-2">

Development Journey

</p>

</motion.div>

))}

</div>

</div>

</div>

</section>

);

}

export default Skills;