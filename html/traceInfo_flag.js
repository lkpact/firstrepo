function TraceInfoFlag() {
    this.traceFlag = new Array();
    this.traceFlag["spring_damper.c:150c18"]=1;
    this.traceFlag["spring_damper.c:150c26"]=1;
    this.traceFlag["spring_damper.c:150c52"]=1;
    this.traceFlag["spring_damper.c:150c59"]=1;
    this.traceFlag["spring_damper.c:150c69"]=1;
}
top.TraceInfoFlag.instance = new TraceInfoFlag();
function TraceInfoLineFlag() {
    this.lineTraceFlag = new Array();
    this.lineTraceFlag["spring_damper.c:142"]=1;
    this.lineTraceFlag["spring_damper.c:150"]=1;
    this.lineTraceFlag["spring_damper.c:151"]=1;
    this.lineTraceFlag["spring_damper.c:183"]=1;
    this.lineTraceFlag["spring_damper.c:186"]=1;
    this.lineTraceFlag["spring_damper.c:223"]=1;
    this.lineTraceFlag["spring_damper.c:226"]=1;
}
top.TraceInfoLineFlag.instance = new TraceInfoLineFlag();
