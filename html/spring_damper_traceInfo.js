function RTW_rtwnameSIDMap() {
	this.rtwnameHashMap = new Array();
	this.sidHashMap = new Array();
	this.rtwnameHashMap["<Root>"] = {sid: "spring_damper"};
	this.sidHashMap["spring_damper"] = {rtwname: "<Root>"};
	this.rtwnameHashMap["<Root>/Add1"] = {sid: "spring_damper:9"};
	this.sidHashMap["spring_damper:9"] = {rtwname: "<Root>/Add1"};
	this.rtwnameHashMap["<Root>/Gain3"] = {sid: "spring_damper:10"};
	this.sidHashMap["spring_damper:10"] = {rtwname: "<Root>/Gain3"};
	this.rtwnameHashMap["<Root>/Gain4"] = {sid: "spring_damper:14"};
	this.sidHashMap["spring_damper:14"] = {rtwname: "<Root>/Gain4"};
	this.rtwnameHashMap["<Root>/Gain5"] = {sid: "spring_damper:15"};
	this.sidHashMap["spring_damper:15"] = {rtwname: "<Root>/Gain5"};
	this.rtwnameHashMap["<Root>/Integrator2"] = {sid: "spring_damper:11"};
	this.sidHashMap["spring_damper:11"] = {rtwname: "<Root>/Integrator2"};
	this.rtwnameHashMap["<Root>/Integrator3"] = {sid: "spring_damper:12"};
	this.sidHashMap["spring_damper:12"] = {rtwname: "<Root>/Integrator3"};
	this.rtwnameHashMap["<Root>/Scope1"] = {sid: "spring_damper:13"};
	this.sidHashMap["spring_damper:13"] = {rtwname: "<Root>/Scope1"};
	this.getSID = function(rtwname) { return this.rtwnameHashMap[rtwname];}
	this.getRtwname = function(sid) { return this.sidHashMap[sid];}
}
RTW_rtwnameSIDMap.instance = new RTW_rtwnameSIDMap();
