let records = [];

document.getElementById("workerForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const fatherName = document.getElementById("fatherName").value;
  const workerType = document.getElementById("workerType").value;
  const bloodGroup = document.getElementById("bloodGroup").value;
  const emergency = document.getElementById("emergency").value;
  const validUpto = document.getElementById("validUpto").value;
  const competency = document.getElementById("competency").value;
  const employer = document.getElementById("employer").value;

  // Update ID Card Preview (no father’s name shown)
  document.getElementById("cardName").innerText = name;
  document.getElementById("cardType").innerText = workerType;
  document.getElementById("cardBlood").innerText = bloodGroup;
  document.getElementById("cardEmergency").innerText = emergency;
  document.getElementById("cardValid").innerText = validUpto;
  document.getElementById("cardCompetency").innerText = competency;
  document.getElementById("cardEmployer").innerText = employer;

  // Save record including father’s name
  records.push({ name, fatherName, workerType, bloodGroup, emergency, validUpto, competency, employer });

  // Reset form
  document.getElementById("workerForm").reset();
});

// Export to Excel
document.getElementById("exportExcel").addEventListener("click", function() {
  if (records.length === 0) {
    alert("No records to export!");
    return;
  }

  let csv = "Name,Father's Name,Type of Worker,Blood Group,Emergency Contact,Valid Upto,Competency,Main Employer\n";
  records.forEach(r => {
    csv += `${r.name},${r.fatherName},${r.workerType},${r.bloodGroup},${r.emergency},${r.validUpto},${r.competency},${r.employer}\n`;
  });

  let blob = new Blob([csv], { type: "text/csv" });
  let url = window.URL.createObjectURL(blob);
  let a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("download", "workers_records.csv");
  a.click();
});
