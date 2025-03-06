import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import axios from "axios";

// Container for sidebar + main content
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

// Main area for the summary
const MainContent = styled.div`
  flex: 1;
  padding: 40px;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// A simple summary container
const SummaryContainer = styled.div`
  background: white;
  padding: 40px;
  border-radius: 5px;
  width: 60%;
  max-width: 900px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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

const CreateSOPStep5 = () => {
  const navigate = useNavigate();
  const [sopData, setSopData] = useState(null);

  // Retrieve the entire SOP object from sessionStorage on mount
  useEffect(() => {
    const stored = sessionStorage.getItem("currentSOP");
    if (stored) {
      setSopData(JSON.parse(stored));
    }
  }, []);

  // Confirm & Save final SOP
  const handleSave = async () => {
    if (!sopData) return;
    try {
      // Adjust the URL and add authorization headers if needed
      const response = await axios.post("http://localhost:5000/api/sops", sopData, {
        // headers: { Authorization: `Bearer ${token}` }
      });

      if (response.status === 201) {
        alert("SOP successfully saved to the database!");
        sessionStorage.removeItem("currentSOP");
        navigate("/manage-sops");
      }
    } catch (error) {
      console.error("Error saving SOP:", error);
      alert("Error saving SOP. Please try again.");
    }
  };

  if (!sopData) {
    return (
      <Container>
        <Sidebar />
        <MainContent>
          <SummaryContainer>
            <h2>Create SOP</h2>
            <p>No SOP data found.</p>
          </SummaryContainer>
        </MainContent>
      </Container>
    );
  }

  // Deconstruct the stored SOP data
  const { category, title, scope, description, reviewers, workflows = [] } = sopData;

  return (
    <Container>
      <Sidebar />
      <MainContent>
        <SummaryContainer>
          <h2>Create SOP</h2>
          <h3>Step 5: Summary</h3>

          {/* Chapter 1: Information */}
          <h4>Information</h4>
          <p><strong>Category:</strong> {category}</p>
          <p><strong>Title:</strong> {title}</p>
          <p><strong>Scope:</strong> {scope}</p>
          <p><strong>Description:</strong> {description}</p>

          {/* Chapter 2: Workflows */}
          <h4>Workflows</h4>
          {workflows.length === 0 ? (
            <p>No workflows added yet.</p>
          ) : (
            workflows.map((wf, index) => (
              <div key={index} style={{ marginBottom: "10px", border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>
                <p><strong>{wf.description}</strong> - Responsible: {wf.responsible}</p>
                <p>Requirements: {wf.requirements}</p>
              </div>
            ))
          )}

          {/* Chapter 3: Reviewers */}
          <h4>Reviewers</h4>
          {reviewers && reviewers.length > 0 ? (
            reviewers.map((rev, idx) => (
              <p key={idx}>{rev.name} ({rev.email})</p>
            ))
          ) : (
            <p>No reviewers assigned.</p>
          )}

          {/* Confirm & Save Button */}
          <Button onClick={handleSave}>Confirm & Save</Button>
        </SummaryContainer>
      </MainContent>
    </Container>
  );
};

export default CreateSOPStep5;
