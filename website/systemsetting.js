// 获取系统时间
function getCurrentTime() {
    const now = new Date();
    return now.toISOString().replace("T", " ").split(".")[0]; // 格式化为 "YYYY-MM-DD HH:MM:SS"
  }
  
  // 设置当前时间到时间输入框
  document.getElementById("get-system-time").addEventListener("click", function() {
    const currentTime = getCurrentTime();
    document.getElementById("time").value = currentTime.split(" ")[1]; // 只填充时间部分
    document.getElementById("date").value = currentTime.split(" ")[0]; // 只填充日期部分
  });
  
  // 修改密码功能
  document.getElementById("apply-password-btn").addEventListener("click", function() {
    const currentPassword = document.getElementById("current-password").value.trim();
    const newPassword = document.getElementById("new-password").value.trim();
    const confirmNewPassword = document.getElementById("confirm-new-password").value.trim();
  
    if (newPassword !== confirmNewPassword) {
      alert("新密码与确认密码不匹配！");
      return;
    }
  
    if (!currentPassword || !newPassword) {
      alert("请填写所有字段！");
      return;
    }
  
    // 模拟密码更改操作
    alert("密码已成功更改！");
    document.getElementById("current-password").value = "";
    document.getElementById("new-password").value = "";
    document.getElementById("confirm-new-password").value = "";
  });
  
  // 保存日期和时间设置
  document.getElementById("save-date-time").addEventListener("click", function() {
    const selectedDate = document.getElementById("date").value;
    const selectedTime = document.getElementById("time").value;
  
    if (!selectedDate || !selectedTime) {
      alert("请填写日期和时间！");
      return;
    }
  
    // 模拟保存日期和时间
    alert("日期/时间设置已保存！");
  });
  