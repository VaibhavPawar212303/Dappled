const passBuildData = (status, startAt, endAt, totalTests, skipped) => {
  fetch("http://localhost:8000/api/build", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ProjectName: "Dappled",
      build_description: "Visual Testing",
      status: status,
      BuildStartAt: startAt,
      BuildEndAt: endAt,
      totalTests: totalTests,
      totalTestsSkipped: skipped,
    }),
  });
};

module.exports = {
  passBuildData,
};
