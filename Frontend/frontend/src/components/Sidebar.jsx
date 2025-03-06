import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  width: 250px;
  background: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
`;

const Button = styled.button`
  background: blue;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  cursor: pointer;
  margin-bottom: 20px;
`;

const Sidebar = () => {
  const navigate = useNavigate(); // React Router Navigation Hook

  return (
    <SidebarContainer>
      <h2>Process Studio</h2>
      <Button onClick={() => navigate("/create-sop")}>+ Create SOP</Button>
      <div>Manage SOPs</div>
      <div>Manage Users</div>
      <div>Export SOPs</div>
      <div>Responsibilities</div>
    </SidebarContainer>
  );
};

export default Sidebar;
