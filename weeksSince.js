// Widget for weeksSince
const widget = new ListWidget();
const now = new Date();

const firstDate = new Date(2023, 6, 21)

const until = new Date(now);
until.setDate(now.getDate() + 7)
const dif = until - now
console.log(dif)
const cal = await Calendar.forEventsByTitle("Calendar");
const events = await CalendarEvent.between(now, until,[cal]);// 
// console.log(events)// 
// const event = events[0];
// console.log(event)
// if (event.title== "BLUE") {
//   widget.backgroundColor = Color.blue();
// } else {
//   widget.backgroundColor = Color.gray();
// }
// 

function diff_weeks(dt2, dt1) 
 {

  var diff =(dt2.getTime() - dt1.getTime()) / 1000;
  diff /= (60 * 60 * 24 * 7);
  return Math.abs(Math.round(diff));
  
 }

const weeksSince = diff_weeks(firstDate, now)

const stack = widget.addStack();
stack.layoutHorizontally();
// 
const df = new DateFormatter();
df.useShortDateStyle();
// 
stack.addText("Weeks since we started dating: " + weeksSince.toString());
// stack.addText("sample text")

Script.setWidget(widget);
Script.complete()
