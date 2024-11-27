import SearchAllProjects from '../content/SearchAllProjects';
import AnimationContainer from '../utils/AnimationContainer';
import SectionContainer from '../utils/SectionContainer';
import TitleSectionPageContainer from '../utils/TitleSectionPageContainer';
import ProjectGrid from '../projects/ProjectGrid'; // Import your project grid component

const myGithub = 'https://github.com/Hariharanpugazh';

// Define your project data
const allProjects = [
  {
    image: 'deepsecure.jpg',
    title: 'DeepSecure AI',
    category: 'Python - Hugging Face',
    repo: 'https://github.com/Hariharanpugazh/DeepSecure-AI',
  },
  {
    image: 'images.jpg',
    title: 'Zara - An AI Bot',
    category: 'Python - GenAI - Machine Learning - TensorFlow',
    repo: 'https://github.com/Hariharanpugazh/GenAI-Website',
  },
  {
    image: 'deepfake.jpg',
    title: 'Deepfake Detection',
    category: 'Python - Machine Learning - Hugging Face',
    repo: 'https://github.com/Hariharanpugazh/DeepSecure-AI',
    link: 'https://huggingface.co/spaces/ninjaonsteroids/DeepSecure-AI',
  },
];

const ProjectsSection = () => {
  return (
    <SectionContainer>
      <div className='w-full flex flex-col gap-6'>
        {/* Title Section */}
        <TitleSectionPageContainer title='Projects' />

        {/* Description Section */}
        <AnimationContainer customClassName='w-full flex flex-col gap-5 mb-8'>
          <p className='w-full text-base text-gray-400'>
            These are most of the projects I've done since I started programming, some of them are personal projects, freelance, work, practice or for other situations. If you want to see absolutely all my projects go to my <a href={myGithub} target='_blank' rel='noopener noreferrer' className='hover:text-white hover:underline transition-all ease'>github.com/</a>.
          </p>
        </AnimationContainer>

        {/* Search Component */}
        <SearchAllProjects />

        {/* Projects Grid */}
        <AnimationContainer customClassName='mt-10'>
          <h2 className='text-lg font-bold mb-4'>All Projects</h2>
          <ProjectGrid projects={allProjects} />
        </AnimationContainer>
      </div>
    </SectionContainer>
  );
};

export default ProjectsSection;
