import AnimationContainer from '../utils/AnimationContainer';
import { calculateDuration } from './CurrentTimeLineExp';

const AboutMe = () => {
  return (
    <AnimationContainer customClassName='w-full mb-16'>

      <h2 className='font-bold text-2xl tracking-tight mb-8 text-white text-center lg:text-start'>
        About me
      </h2>

      <p className='text-base text-gray-400'>
       My journey began with a deep interest in emerging technologies, leading to a focus on programming and software development. They built a foundation through online courses and hands-on projects in Python and Machine Learning, working on projects like Deepfake Detection using Hugging Face models and analyzing manufacturing process data. Passionate about problem-solving and innovation, the user is committed to continuous learning, especially in AI. Currently pursuing a B.Tech in Artificial Intelligence and Data Science, they have a strong focus on frontend web development and contribute to open-source projects while staying updated on AI and automation trends.
      </p>

    </AnimationContainer>
  )
}

export default AboutMe;