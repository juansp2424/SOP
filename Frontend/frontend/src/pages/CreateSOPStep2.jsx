import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar"; // ✅ Sidebar bleibt

const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const FormContainer = styled.div`
  background: white;
  padding: 40px;
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

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 100px;
  resize: none;
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

const CreateSOPStep2 = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [scope, setScope] = useState("");
  const [description, setDescription] = useState("");

  const handleNextStep = () => {
    if (!title.trim() || !scope.trim() || !description.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    // Daten in sessionStorage speichern (später kann Redux oder Context verwendet werden)
    sessionStorage.setItem("sopTitle", title);
    sessionStorage.setItem("sopScope", scope);
    sessionStorage.setItem("sopDescription", description);

    navigate("/create-sop-step3"); // 🚀 Weiter zu Step 3
  };

  return (
    <Container>
      <Sidebar /> {/* ✅ Sidebar bleibt links */}
      <MainContent>
        <FormContainer>
          <h2>Create SOP</h2>
          <h3>Step 2: Enter SOP Details</h3>
          
          <label>SOP Title:</label>
          <Input 
            type="text" 
            placeholder="Enter SOP Title..." 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
          />

          <label>Scope:</label>
          <Input 
            type="text" 
            placeholder="Define the scope of the SOP..." 
            value={scope} 
            onChange={(e) => setScope(e.target.value)} 
          />

          <label>Description:</label>
          <TextArea 
            placeholder="Enter a short description..." 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />

          <Button onClick={handleNextStep}>Next</Button>
        </FormContainer>
      </MainContent>
    </Container>
  );
};

export default CreateSOPStep2;
