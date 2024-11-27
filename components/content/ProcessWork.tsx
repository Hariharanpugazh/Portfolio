import AnimationContainer from '../utils/AnimationContainer';

const myWorkProcess = [
  {
    id: '1',
    title: 'Ideation and Planning',
    des: 'Begin with a thorough discussion to understand the project(s) purpose, objectives, and requirements. This step includes brainstorming ideas, identifying challenges, and setting clear goals to ensure the project is aligned with your vision.',
    delay: 0.3
  },
  {
    id: '2',
    title: 'Prototyping and Design',
    des: "Develop wireframes and prototypes using tools like Figma or Canva. These visual mockups provide a clear representation of the website's structure, design elements, and user experience, ensuring alignment before development.",
    delay: 0.4
  },
  {
    id: '3',
    title: 'Content and SEO Optimization',
    des: "Create and integrate SEO-friendly content to enhance visibility on search engines. This phase ensures that the website's content resonates with the target audience and improves its online presence.",
    delay: 0.5
  },
  {
    id: '4',
    title: 'Development and Coding',
    des: 'Transform the prototypes into a fully functional product. Using technologies like React, Django, or Streamlit (based on the project), the design is implemented with optimized and maintainable code to ensure scalability.',
    delay: 0.6
  },
  {
    id: '5',
    title: 'Testing and Validation',
    des: "Conduct comprehensive testing to ensure the platform's functionality, security, and responsiveness. This includes debugging, performance analysis, and ensuring compatibility across devices and browsers.",
    delay: 0.7
  },
  {
    id: '6',
    title: 'Launch and Maintenance',
    des: "Deploy the completed project to a hosting platform (e.g., Vercel or Docker). Post-launch, provide optional maintenance and updates to keep the website or application optimized and up to date.",
    delay: 0.8
  },
];

const ProcessWork = () => {
  return (
    <AnimationContainer customClassName='w-full mb-4'>

      <h2 className='font-bold text-2xl md:text-2xl tracking-tight mb-12 text-white text-start'>
        My work process
      </h2>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 mx-auto'>
        {
          myWorkProcess.map(({ id, title, des, delay }) => (
            <AnimationContainer
              key={id}
              customClassName='rounded border border-gray-800 hover:border-gray-900 bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease'
              customDelay={delay}
            >

              <h3 className='font-bold text-1xl tracking-tight text-white text-start'>
                {title}
              </h3>

              <p className='mt-2 text-base text-gray-400'>
                {des}
              </p>

            </AnimationContainer>
          ))
        }
      </div>

    </AnimationContainer>
  )
}

export default ProcessWork;