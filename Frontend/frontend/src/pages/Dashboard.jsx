import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import ProjectList from "../components/ProjectList";

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background: #f5f5f5;
`;

const WelcomeBox = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Dashboard = () => {
  const user = localStorage.getItem("user") || "User";

  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <WelcomeBox>
          <h2>Welcome "{user}"!</h2>
          <p>Let‘s streamline your processes</p>
          <ButtonContainer>
            <Button>+ Create SOP</Button>
            <Button>Manage SOPs</Button>
            <Button>Check Responsibilities</Button>
          </ButtonContainer>
        </WelcomeBox>
        <h3>Your last projects</h3>
        <ProjectList />
      </MainContent>
    </DashboardContainer>
  );
};

export default Dashboard;
