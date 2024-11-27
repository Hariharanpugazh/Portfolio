import CurrentTimeLineExp, { calculateDuration } from '../content/CurrentTimeLineExp';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import ShowSkills from '../utils/ShowSkills';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProcessWork from '../content/ProcessWork';
import { skills } from '../utils/mySkills';

const AboutSection = () => {
  return (
    <SectionContainer>
      <div className='w-full flex flex-col gap-6'>
        <TitleSectionPageContainer title='About me' />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>
  <p className='text-base text-black dark:text-white'>
    I am a passionate AI Engineer and Data Scientist with a strong foundation in Python, Java, Node.js, and Django, driven by a deep curiosity for generative AI and cutting-edge technologies. With a focus on creating impactful solutions, I specialize in data-driven projects, AI model development, and seamless frontend-backend integration.
  </p>

  <p className='text-base text-black dark:text-white'>
    I have experience working on notable projects like ZARA - AI Bot and DeepSecure AI, where I developed empathetic AI systems and real-time deepfake detection tools. My expertise extends to React, Streamlit, and MongoDB, allowing me to build interactive applications with clean, scalable architectures. I am also skilled in UI/UX design, leveraging tools like Figma and Canva to create user-friendly interfaces.
  </p>

  <p className='text-base text-black dark:text-white'>
    In addition to my professional work, I enjoy exploring personal projects, including personalized AI chatbots and resume builders that streamline workflows. I am constantly learning and expanding my skill set to remain adaptable in the ever-evolving tech landscape.
  </p>

  <p className='text-base text-black dark:text-white'>
    Currently pursuing a B.Tech in AI & Data Science with a CGPA of 8/10, I am dedicated to advancing my knowledge while actively contributing to impactful AI-driven solutions.
  </p>
</AnimationContainer>


        <CurrentTimeLineExp />

        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>
          <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-2 text-black dark:text-white text-start'>Skills</h2>

          <p className='text-base text-black dark:text-white'>
            A look at all the programming languages, libraries, and tools I've worked with, I started programming about 1 year ago. I have tried a few programming languages and technology stack, both Backend and Frontend.
          </p>

          <p className='text-base text-black dark:text-white'>
            Even though the scope of web development is wide, I was very interested and focused on Frontend development.
          </p>

          <div className='flex flex-col items-start gap-3 mt-3'>
            {skills.map(({ title, techs }) => (
              <div key={title}>
                <h3 className='font-bold text-1xl md:text-1xl tracking-tight mb-5 text-black dark:text-white text-start'>{title}</h3>
                <AnimationContainer customClassName='flex items-center flex-wrap gap-3 mb-5'>
                  <ShowSkills skills={techs} />
                </AnimationContainer>
              </div>
            ))}
          </div>
        </AnimationContainer>

        <ProcessWork />
      </div>
    </SectionContainer>
  )
}

export default AboutSection;
