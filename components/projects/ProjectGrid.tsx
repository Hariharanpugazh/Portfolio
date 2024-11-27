'use client';

import { Paper, Text, Title } from '@mantine/core';
import ExternalLink from '../ui/ExternalLink';

interface ProjectProps {
  image: string;
  title: string;
  category: string;
  repo: string;
  link?: string;
}

const ProjectGrid = ({ projects }) => {
    return (
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <div key={index} className='border p-4 rounded-lg shadow-lg'>
            <img src={project.image} alt={project.title} className='mb-4 rounded-md' />
            <h3 className='font-bold text-lg'>{project.title}</h3>
            <p className='text-sm text-gray-500'>{project.category}</p>
            <a
              href={project.repo}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 text-blue-500 underline block'
            >
              View Repo
            </a>
            {project.link && (
              <a
                href={project.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 underline block'
              >
                Live Demo
              </a>
            )}
          </div>
        ))}
      </div>
    );
  };
  
  export default ProjectGrid;
  
