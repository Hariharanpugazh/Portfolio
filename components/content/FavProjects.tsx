'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme } from '@mantine/core';
import ProjectGrid from '../projects/ProjectGrid';
import AnimationContainer from '../utils/AnimationContainer';

const favProjects = [
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

const FavProjects = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  return (
    <AnimationContainer>
      <Carousel
        slideSize={mobile ? '100%' : '30%'}
        breakpoints={[
          { maxWidth: 'sm', slideSize: '100%', slideGap: 10 },
          { maxWidth: 'md', slideSize: '50%', slideGap: 10 },
        ]}
        align="start"
        slidesToScroll={mobile ? 1 : 2}
        className="mt-10"
      >
        <ProjectGrid projects={favProjects} />
      </Carousel>
    </AnimationContainer>
  );
};

export default FavProjects;
