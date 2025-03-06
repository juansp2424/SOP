import styled from "styled-components";

const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProjectRow = styled.div`
  display: flex;
  justify-content: space-between;
  background: white;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid blue;
`;

const projects = [
  { name: "Supplier Notification", category: "Procurement", date: "18/12/2024" },
  { name: "Packaging Process", category: "Warehouse", date: "12/12/2024" },
  { name: "Onboarding Project Manager", category: "HR", date: "12/12/2024" },
];

const ProjectList = () => {
  return (
    <ProjectContainer>
      {projects.map((project, index) => (
        <ProjectRow key={index}>
          <span>{project.name}</span>
          <span>{project.category}</span>
          <span>{project.date}</span>
        </ProjectRow>
      ))}
    </ProjectContainer>
  );
};

export default ProjectList;
