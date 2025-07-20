function showTab(tabId) {
  const contents = document.querySelectorAll(".tab-content");
  contents.forEach(tab => {
    tab.classList.remove("active");
  });

  const activeTab = document.getElementById(tabId);
  activeTab.classList.add("active");
}
