function syncData() {
  document.getElementById("status").textContent = "Syncing data from KoboToolbox...";
  
  // This would call an API or trigger a Google Apps Script web app
  setTimeout(() => {
    alert("Manual sync complete! Check your Google Sheet.");
    document.getElementById("status").textContent = "✅ Sync completed!";
  }, 2000);
}
