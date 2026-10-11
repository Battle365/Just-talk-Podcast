const DAY_MS=24*60*60*1000;
export function nextTwiceMonthlyDates(from:Date,count=4):Date[]{
 if(count<1)return[];const out:Date[]=[];let year=from.getUTCFullYear(),month=from.getUTCMonth();
 while(out.length<count){for(const day of [1,15]){const d=new Date(Date.UTC(year,month,day,18,0,0));if(d.getTime()>=from.getTime())out.push(d);if(out.length===count)return out;}month++;if(month>11){month=0;year++;}}
 return out;
}
export function isReasonableScheduleGap(a:Date,b:Date){const days=(b.getTime()-a.getTime())/DAY_MS;return days>=12&&days<=17;}
