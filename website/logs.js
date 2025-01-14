// 等待 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 模拟日志数据
    const logs = [
      { event: "Event 1", category: "Category 1", time: "2025-01-01 12:00:00", description: "Description 1" },
      { event: "Event 2", category: "Category 2", time: "2025-01-02 12:00:00", description: "Description 2" },
    ];
  
    let currentPage = 1;
    const logsPerPage = 10;
  
    // 刷新日志表格
    function refreshLogs() {
      const tbody = document.getElementById("log-table-body");
      if (!tbody) return; // 确保元素存在
  
      tbody.innerHTML = ""; // 清空表格内容
  
      const startIndex = (currentPage - 1) * logsPerPage;
      const endIndex = Math.min(startIndex + logsPerPage, logs.length);
  
      if (logs.length === 0) {
        const noDataRow = document.createElement("tr");
        noDataRow.innerHTML = `<td colspan="5" style="text-align: center; color: gray;" data-lang="noData">No Data</td>`;
        tbody.appendChild(noDataRow);
        return;
      }
  
      // 遍历日志数据，填充表格
      for (let i = startIndex; i < endIndex; i++) {
        const log = logs[i];
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${log.event}</td>
          <td>${log.category}</td>
          <td>${log.time}</td>
          <td>${log.description}</td>
          <td><button class="delete-btn" data-index="${i}">删除</button></td>
        `;
        tbody.appendChild(row);
      }
  
      // 更新分页状态
      const currentPageElem = document.getElementById("current-page");
      const prevPageBtn = document.getElementById("prev-page");
      const nextPageBtn = document.getElementById("next-page");
      const logCountElem = document.getElementById("log-count");
  
      if (currentPageElem) currentPageElem.textContent = currentPage;
      if (prevPageBtn) prevPageBtn.disabled = currentPage === 1;
      if (nextPageBtn) nextPageBtn.disabled = endIndex >= logs.length;
      if (logCountElem) logCountElem.textContent = logs.length;
  
      // 为删除按钮添加事件监听器
      document.querySelectorAll(".delete-btn").forEach((button) => {
        button.addEventListener("click", function(event) {
          const index = parseInt(this.getAttribute("data-index"));
          if (!isNaN(index) && index >= 0 && index < logs.length) {
            logs.splice(index, 1);
            refreshLogs();
          }
        });
      });
    }
  
    // // 获取系统时间  这是获取的标准时区的时间
    // function getCurrentTime() {
    //   const now = new Date();
    //   return now.toISOString().replace("T", " ").split(".")[0];
    // }
    //正确时间
    function getCurrentTime() {
        const now = new Date();
        const localTime = new Date(now.getTime());
        // 格式化为 "YYYY-MM-DD HH:MM:SS"
        const year = localTime.getFullYear();
        const month = String(localTime.getMonth() + 1).padStart(2, "0"); // 月份从0开始
        const day = String(localTime.getDate()).padStart(2, "0");
        const hours = String(localTime.getHours()).padStart(2, "0");
        const minutes = String(localTime.getMinutes()).padStart(2, "0");
        const seconds = String(localTime.getSeconds()).padStart(2, "0");
      
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      }
      
  
    // 添加新日志
    function addLog() {
      const eventInput = document.getElementById("new-event");
      const categoryInput = document.getElementById("new-category");
      const timeInput = document.getElementById("new-time");
      const descriptionInput = document.getElementById("new-description");
  
      if (!eventInput || !categoryInput || !timeInput || !descriptionInput) return;
  
      const event = eventInput.value.trim();
      const category = categoryInput.value.trim();
      const time = timeInput.value.trim();
      const description = descriptionInput.value.trim();
  
      if (!event || !category || !time || !description) {
        alert("请填写所有字段！");
        return;
      }
  
      logs.push({ event, category, time, description });
      refreshLogs();
  
      // 清空输入框
      eventInput.value = "";
      categoryInput.value = "";
      timeInput.value = "";
      descriptionInput.value = "";
    }
  
    // 绑定事件监听器
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");
    const getCurrentTimeBtn = document.getElementById("get-current-time");
    const addLogBtn = document.getElementById("add-log-btn");
    const refreshLogsBtn = document.getElementById("refresh-logs");
  
    if (prevPageBtn) {
      prevPageBtn.addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          refreshLogs();
        }
      });
    }
  
    if (nextPageBtn) {
      nextPageBtn.addEventListener("click", () => {
        if (currentPage * logsPerPage < logs.length) {
          currentPage++;
          refreshLogs();
        }
      });
    }
  
    if (getCurrentTimeBtn) {
      getCurrentTimeBtn.addEventListener("click", () => {
        const timeInput = document.getElementById("new-time");
        if (timeInput) {
          timeInput.value = getCurrentTime();
        }
      });
    }
  
    if (addLogBtn) {
      addLogBtn.addEventListener("click", addLog);
    }
  
    if (refreshLogsBtn) {
      refreshLogsBtn.addEventListener("click", refreshLogs);
    }
  
    // 初始化页面
    refreshLogs();
  });