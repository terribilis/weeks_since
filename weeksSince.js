// Widget for weeksSince
const widget = new ListWidget();
const now = new Date();


const firstDate = new Date(2023, 7, 21, 12)

// returns difference in weeks between two dates. 
function diff_weeks(dt2, dt1) 
 {
  var diff = Math.round(dt2.getTime() - dt1.getTime());
  // Divide by millisecconds, seconds, minutes, hours, days in week. 
  diff /= (1000 * 60 * 60 * 24 * 7);
  return Math.floor(Math.abs(diff));
  
 }

const weeksSince = diff_weeks(firstDate, now)

const stack = widget.addStack();
stack.layoutHorizontally();
const df = new DateFormatter();
df.useShortDateStyle();
// 
stack.addText("Weeks since we started dating: " + weeksSince.toString());
// stack.addText("sample text")

Script.setWidget(widget);
Script.complete()
