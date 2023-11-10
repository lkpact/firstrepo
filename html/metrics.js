function CodeMetrics() {
	 this.metricsArray = {};
	 this.metricsArray.var = new Array();
	 this.metricsArray.fcn = new Array();
	 this.metricsArray.var["rtDW"] = {file: "C:\\kplikhith\\try\\spring_damper_ert_rtw\\spring_damper.c",
	size: 16};
	 this.metricsArray.var["rtM_"] = {file: "C:\\kplikhith\\try\\spring_damper_ert_rtw\\spring_damper.c",
	size: 521};
	 this.metricsArray.var["rtX"] = {file: "C:\\kplikhith\\try\\spring_damper_ert_rtw\\spring_damper.c",
	size: 16};
	 this.metricsArray.fcn["memcpy"] = {file: "C:\\Program Files\\MATLAB\\R2018b\\sys\\lcc\\include\\string.h",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["spring_damper.c:rt_ertODEUpdateContinuousStates"] = {file: "C:\\kplikhith\\try\\spring_damper_ert_rtw\\spring_damper.c",
	stack: 104,
	stackTotal: -1};
	 this.metricsArray.fcn["spring_damper_derivatives"] = {file: "C:\\kplikhith\\try\\spring_damper_ert_rtw\\spring_damper.c",
	stack: 8,
	stackTotal: 8};
	 this.metricsArray.fcn["spring_damper_initialize"] = {file: "C:\\kplikhith\\try\\spring_damper_ert_rtw\\spring_damper.c",
	stack: 0,
	stackTotal: 0};
	 this.metricsArray.fcn["spring_damper_step"] = {file: "C:\\kplikhith\\try\\spring_damper_ert_rtw\\spring_damper.c",
	stack: 0,
	stackTotal: -1};
	 this.getMetrics = function(token) { 
		 var data;
		 data = this.metricsArray.var[token];
		 if (!data) {
			 data = this.metricsArray.fcn[token];
			 if (data) data.type = "fcn";
		 } else { 
			 data.type = "var";
		 }
	 return data; }; 
	 this.codeMetricsSummary = '<a href="spring_damper_metrics.html">Global Memory: 553(bytes) Maximum Stack: 104(bytes)</a>';
	}
CodeMetrics.instance = new CodeMetrics();
