import React, { useState } from 'react';
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyle';
import ProjectCard from '../Cards/ProjectCard';
import { projects } from '../../data/constants';

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all');

  // Generate unique categories from the projects list
  const categories = Array.from(new Set(projects.map(project => project.category)));

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects, from web apps to Android applications. Here are some highlights:
        </Desc>
        <ToggleButtonGroup>
          <ToggleButton 
            active={toggle === 'all'} 
            onClick={() => setToggle('all')}
          >
            All
          </ToggleButton>
          <Divider />
          {categories.map(category => (
            <>
              <ToggleButton 
                active={toggle === category} 
                onClick={() => setToggle(category)}
                key={category}
              >
                {category.toUpperCase()}
              </ToggleButton>
              <Divider />
            </>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {projects
            .filter(project => toggle === 'all' || project.category === toggle)
            .map(project => (
              <ProjectCard 
                project={project} 
                openModal={openModal} 
                setOpenModal={setOpenModal} 
                key={project.id}
              />
            ))
          }
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
