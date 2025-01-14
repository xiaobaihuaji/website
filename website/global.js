// 定义中英文语言内容
const languageData = {
    zh: {
      title: "Bcom-8000 DRM调制器",
      logTitle: "日志页面",
      statusMenu: "系统状态",
      statusOverviewLink: "状态概览",
      logLink: "日志",
      systemMenu: "系统设置",
      systemSettingsLink: "基本设置",
      networkSettingsLink: "网络配置",
      drmMenu: "DRM配置",
      muxInputLink: "复用流输入",
      modulationOutputLink: "调制输出",
      clockSyncLink: "时钟同步",
      basebandRecordingLink: "基带录制",
      logoutMenu: "退出",
      languageBtn: "中文",
      logHeader: "当前日志条数",
      logEvent: "事件",
      logCategory: "分类",
      logTime: "时间",
      logDescription: "描述",
      refreshBtn: "刷新",
      noData: "无数据",
      prevPage: "上一页",
      nextPage: "下一页",
      tableHeaderItem: "项目",
      tableHeaderValue: "值/设置",
      tableWorkStatus: "工作状态",
      tableTemperature: "主板温度",
      tableSoftwareVersion: "软件版本",
      tableSerialNumber: "序列号",
      tableProductModel: "产品型号",
    },
    en: {
      title: "Bcom-8000 DRM Modulator",
      logTitle: "Logs Page",
      statusMenu: "System Status",
      statusOverviewLink: "Status Overview",
      logLink: "Logs",
      systemMenu: "System Settings",
      systemSettingsLink: "Basic Settings",
      networkSettingsLink: "Network Configuration",
      drmMenu: "DRM Settings",
      muxInputLink: "Multiplex Input",
      modulationOutputLink: "Modulation Output",
      clockSyncLink: "Clock Synchronization",
      basebandRecordingLink: "Baseband Recording",
      logoutMenu: "Logout",
      languageBtn: "English",
      logHeader: "Current Log Entries",
      logEvent: "Event",
      logCategory: "Category",
      logTime: "Time",
      logDescription: "Description",
      refreshBtn: "Refresh",
      noData: "No Data",
      prevPage: "Previous",
      nextPage: "Next",
      tableHeaderItem: "Item",
      tableHeaderValue: "Value/Setting",
      tableWorkStatus: "Work Status",
      tableTemperature: "Mainboard Temperature",
      tableSoftwareVersion: "Software Version",
      tableSerialNumber: "Serial Number",
      tableProductModel: "Product Model",
    },
  };
  
  // 获取当前语言状态
  let currentLanguage = localStorage.getItem("language") || "zh";
  
  // 切换语言的函数
  function switchLanguage() {
    currentLanguage = currentLanguage === "zh" ? "en" : "zh";
    localStorage.setItem("language", currentLanguage); // 保存语言状态
    applyLanguage();
  }
  
  // 应用语言设置
  function applyLanguage() {
    const langData = languageData[currentLanguage];
    document.querySelectorAll("[data-lang]").forEach((element) => {
      const key = element.getAttribute("data-lang");
      if (langData[key]) {
        element.textContent = langData[key];
      }
    });
  
    // 更新表格内容（状态概览表格）
    const tableTranslations = {
      "table-header-item": "tableHeaderItem",
      "table-header-value": "tableHeaderValue",
      "table-work-status": "tableWorkStatus",
      "table-temperature": "tableTemperature",
      "table-software-version": "tableSoftwareVersion",
      "table-serial-number": "tableSerialNumber",
      "table-product-model": "tableProductModel",
    };
  
    Object.keys(tableTranslations).forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = langData[tableTranslations[id]];
      }
    });
  
    // 更新按钮文字
    document.getElementById("language-btn").textContent = langData.languageBtn;
  }
  
  // 页面加载时应用语言
  applyLanguage();
  
  // 为语言切换按钮绑定事件
  document.getElementById("language-btn").addEventListener("click", switchLanguage);
  