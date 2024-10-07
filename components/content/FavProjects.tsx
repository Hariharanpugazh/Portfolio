'use client';

import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, useMantineTheme } from '@mantine/core';
import ExternalLink from '../ui/ExternalLink';
import AnimationContainer from '../utils/AnimationContainer';

interface CardProps {
  image: string;
  title: string;
  category: string;
  repo: string;
  link?: string; // Make link optional
}

const Card = ({ image, title, category, repo, link }: CardProps) => {
  return (
    <Paper shadow='md' radius='md' style={{ padding: '10px', textAlign: 'center' }}>
      <img src={image} alt={title} style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
      <Text size='xs'>{category}</Text>
      <Title order={3}>{title}</Title>
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-around' }}>
        <ExternalLink href={repo}>
          View Repo
        </ExternalLink>
        {link && (
          <ExternalLink href={link}>
            Live Demo
          </ExternalLink>
        )}
      </div>
    </Paper>
  );
}

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
    image: 'https://cdn.sanity.io/images/jqaxrty6/production/bb12572785fdc98c304ff9823cab3f60bc16f8b7-1422x809.png',
    title: 'Github Issues',
    category: 'React - React Query - TypeScript - Bootstrap',
    repo: 'https://github.com/jeandv/react-query',
    link: 'https://github.com/jeandv/react-query'
  },
];

const FavProjects = () => {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);

  const slides = favProjects.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card
        image={item.image}
        title={item.title}
        category={item.category}
        repo={item.repo}
        link={item.link}
      />
    </Carousel.Slide>
  ));

  return (
    <AnimationContainer>
      <Carousel
        slideSize={mobile ? '100%' : '30%'}
        breakpoints={[
          { maxWidth: 'sm', slideSize: '100%', slideGap: 10 },
          { maxWidth: 'md', slideSize: '50%', slideGap: 10 },
        ]}
        align='start'
        slidesToScroll={mobile ? 1 : 2}
        className='mt-10'
      >
        {slides}
      </Carousel>
    </AnimationContainer>
  );
};

export default FavProjects;
