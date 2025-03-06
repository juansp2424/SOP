const response = await axios.get("http://localhost:5000/api/sops");

sessionStorage.setItem("currentSOP", JSON.stringify(sop));
// If the user completed step 2 last time, jump to step 3
navigate("/create-sop-step3");

const handleResume = (sop) => {
    sessionStorage.setItem("currentSOP", JSON.stringify(sop));
    // Suppose sop.currentStep = 3
    navigate(`/create-sop-step${sop.currentStep}`);
  };
  