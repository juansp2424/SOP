import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar"; // ✅ Sidebar importieren

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 0 px;
  background:rgb(f5f5f5);
  display: flex;
  justify-content: center;
  align-items: top;
`;

const FormContainer = styled.div`
  background: white;
  padding: 60px;
  border-radius: 5px;
  width: 60%;
  max-width: 900px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 20px;
`;

const Examples = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: gray;
`;

const CreateSOP = () => {
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handleNextStep = () => {
    if (!category.trim()) {
      alert("Please enter a category.");
      return;
    }
    sessionStorage.setItem("sopCategory", category);
    navigate("/create-sop-step2");
  };

  return (
    <Container>
      <Sidebar /> {/* ✅ Sidebar bleibt links stehen */}
      <MainContent>
        <FormContainer>
          <h2>Create SOP</h2>
          <h3>Step 1: Choose structure</h3>
          <Input
            type="text"
            placeholder="Enter SOP category..."
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <Examples>
            <b>Examples:</b>
            <ul>
              <li>Internal Process</li>
              <li>External Communication</li>
              <li>Supplier Notification</li>
              <li>Packaging Procedure</li>
              <li>Onboarding Checklist</li>
              <li>Shipping Requirements</li>
            </ul>
          </Examples>
          <Button onClick={handleNextStep}>Next</Button>
        </FormContainer>
      </MainContent>
    </Container>
  );
};

export default CreateSOP;
