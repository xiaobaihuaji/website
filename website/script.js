// 数据动态填充（预留接口）
function fetchSystemData() {
  document.getElementById("work-status-value").textContent = "0";
  document.getElementById("temp-value").textContent = "0 °C";
  document.getElementById("version-value").innerHTML = `<span>0</span>`;
  document.getElementById("serial-value").textContent = "0";
  document.getElementById("product-value").textContent = "0";

  // 模拟从系统获取数据（替换为真实接口即可）
  setTimeout(() => {
    document.getElementById("work-status-value").textContent = "OK";
    document.getElementById("temp-value").textContent = `40 ${languageData[currentLanguage].tempUnit}`;
    document.getElementById("version-value").innerHTML = `<span>1.0.1</span> ${languageData[currentLanguage].versionValue}`;
    document.getElementById("serial-value").textContent = "SN95772088";
    document.getElementById("product-value").textContent = "Bcom-8000";
  }, 1000);
}

// 初始化获取数据
fetchSystemData();
