import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

// Container für Sidebar + Hauptbereich
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

// Hauptbereich mit Formular
const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Formularbox
const FormContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 5px;
  width: 60%;
  max-width: 900px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

// Input-Felder
const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

// Button
const Button = styled.button`
  padding: 10px 20px;
  background: blue;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  width: 100%;
`;

// Bereich für die hinzugefügten Workflows
const WorkflowsContainer = styled.div`
  width: 60%;
  max-width: 900px;
`;

// Einzelner Workflow-Eintrag
const WorkflowItem = styled.div`
  background: white;
  border: 1px solid blue;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const CreateSOPStep3 = () => {
  const navigate = useNavigate();

  // State für die Eingabefelder
  const [description, setDescription] = useState("");
  const [responsible, setResponsible] = useState("");
  const [requirements, setRequirements] = useState("");

  // State-Liste für alle hinzugefügten Workflows
  const [workflows, setWorkflows] = useState([]);

  // Workflow hinzufügen
  const handleAddWorkflow = () => {
    if (!description.trim() || !responsible.trim() || !requirements.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    // Neues Workflow-Objekt
    const newWorkflow = {
      description,
      responsible,
      requirements
    };

    // In lokale Liste hinzufügen
    setWorkflows([...workflows, newWorkflow]);

    // Eingabefelder zurücksetzen
    setDescription("");
    setResponsible("");
    setRequirements("");
  };

  // Nächster Schritt
  const handleNext = () => {
    // Workflows in sessionStorage speichern (oder später via API senden)
    sessionStorage.setItem("sopWorkflows", JSON.stringify(workflows));

    // Weiter zu Step 4
    navigate("/create-sop-step4");
  };

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <FormContainer>
          <h2>Create SOP</h2>
          <h3>Step 3: Add workflows</h3>

          <label>Description:</label>
          <Input
            type="text"
            placeholder="Packaging, Shipping..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label>Responsible (Email):</label>
          <Input
            type="text"
            placeholder="Warehouse, HR, Alex@example.com..."
            value={responsible}
            onChange={(e) => setResponsible(e.target.value)}
          />

          <label>Requirements:</label>
          <Input
            type="text"
            placeholder="Packaging checklist, Onboarding docs..."
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
          />

          <Button onClick={handleAddWorkflow}>Add next step</Button>
        </FormContainer>

        {/* Liste der hinzugefügten Workflows */}
        <WorkflowsContainer>
          <h3>Added workflows</h3>
          {workflows.map((wf, index) => (
            <WorkflowItem key={index}>
              <p><strong>{wf.description}</strong> - Responsible: {wf.responsible}</p>
              <p>Requirements: {wf.requirements}</p>
            </WorkflowItem>
          ))}
        </WorkflowsContainer>

        {/* Button zum nächsten Schritt */}
        {workflows.length > 0 && (
          <Button onClick={handleNext}>Next</Button>
        )}
      </MainContent>
    </Container>
  );
};

export default CreateSOPStep3;
