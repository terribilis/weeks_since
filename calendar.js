const widget = new ListWidget();
const now = new Date();

const until = new Date(now);
until.setDate(now.getDate() + 7)

const cal = await Calendar.forEventsByTitle("Bin Collection");
const events = await CalendarEvent.between(now, until,[cal]);

const event = events[0];

if (event.title== "BLUE") {
  widget.backgroundColor = Color.blue();
} else {
  widget.backgroundColor = Color.gray();
}

const stack = widget.addStack();
stack.layoutHorizontally();

const df = new DateFormatter();
df.useShortDateStyle();

stack.addText(df.string(event.string.startDate));

Script.setWidget(widget);
Script.complete()
