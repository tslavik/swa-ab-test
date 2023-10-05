"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[31709,65403,21747,35765,2307,12273],{27699:function(i,n,t){t.d(n,{Z:function(){return u}});var e=t(19785),a=t(52329);function u(i,n,t){(0,e.Z)(2,arguments);var u=(0,a.Z)(i,t),r=(0,a.Z)(n,t);return u.getTime()===r.getTime()}},65403:function(i,n,t){function e(i,n){if(void 0!==i.one&&1===n)return i.one;var t=n%10,e=n%100;return 1===t&&11!==e?i.singularNominative.replace("{{count}}",String(n)):t>=2&&t<=4&&(e<10||e>20)?i.singularGenitive.replace("{{count}}",String(n)):i.pluralGenitive.replace("{{count}}",String(n))}function a(i){return function(n,t){return t&&t.addSuffix?t.comparison&&t.comparison>0?i.future?e(i.future,n):"праз "+e(i.regular,n):i.past?e(i.past,n):e(i.regular,n)+" таму":e(i.regular,n)}}t.r(n);var u={lessThanXSeconds:a({regular:{one:"менш за секунду",singularNominative:"менш за {{count}} секунду",singularGenitive:"менш за {{count}} секунды",pluralGenitive:"менш за {{count}} секунд"},future:{one:"менш, чым праз секунду",singularNominative:"менш, чым праз {{count}} секунду",singularGenitive:"менш, чым праз {{count}} секунды",pluralGenitive:"менш, чым праз {{count}} секунд"}}),xSeconds:a({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунды",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду таму",singularGenitive:"{{count}} секунды таму",pluralGenitive:"{{count}} секунд таму"},future:{singularNominative:"праз {{count}} секунду",singularGenitive:"праз {{count}} секунды",pluralGenitive:"праз {{count}} секунд"}}),halfAMinute:function(i,n){return n&&n.addSuffix?n.comparison&&n.comparison>0?"праз паўхвіліны":"паўхвіліны таму":"паўхвіліны"},lessThanXMinutes:a({regular:{one:"менш за хвіліну",singularNominative:"менш за {{count}} хвіліну",singularGenitive:"менш за {{count}} хвіліны",pluralGenitive:"менш за {{count}} хвілін"},future:{one:"менш, чым праз хвіліну",singularNominative:"менш, чым праз {{count}} хвіліну",singularGenitive:"менш, чым праз {{count}} хвіліны",pluralGenitive:"менш, чым праз {{count}} хвілін"}}),xMinutes:a({regular:{singularNominative:"{{count}} хвіліна",singularGenitive:"{{count}} хвіліны",pluralGenitive:"{{count}} хвілін"},past:{singularNominative:"{{count}} хвіліну таму",singularGenitive:"{{count}} хвіліны таму",pluralGenitive:"{{count}} хвілін таму"},future:{singularNominative:"праз {{count}} хвіліну",singularGenitive:"праз {{count}} хвіліны",pluralGenitive:"праз {{count}} хвілін"}}),aboutXHours:a({regular:{singularNominative:"каля {{count}} гадзіны",singularGenitive:"каля {{count}} гадзін",pluralGenitive:"каля {{count}} гадзін"},future:{singularNominative:"прыблізна праз {{count}} гадзіну",singularGenitive:"прыблізна праз {{count}} гадзіны",pluralGenitive:"прыблізна праз {{count}} гадзін"}}),xHours:a({regular:{singularNominative:"{{count}} гадзіна",singularGenitive:"{{count}} гадзіны",pluralGenitive:"{{count}} гадзін"},past:{singularNominative:"{{count}} гадзіну таму",singularGenitive:"{{count}} гадзіны таму",pluralGenitive:"{{count}} гадзін таму"},future:{singularNominative:"праз {{count}} гадзіну",singularGenitive:"праз {{count}} гадзіны",pluralGenitive:"праз {{count}} гадзін"}}),xDays:a({regular:{singularNominative:"{{count}} дзень",singularGenitive:"{{count}} дні",pluralGenitive:"{{count}} дзён"}}),aboutXWeeks:a({regular:{singularNominative:"каля {{count}} месяца",singularGenitive:"каля {{count}} месяцаў",pluralGenitive:"каля {{count}} месяцаў"},future:{singularNominative:"прыблізна праз {{count}} месяц",singularGenitive:"прыблізна праз {{count}} месяцы",pluralGenitive:"прыблізна праз {{count}} месяцаў"}}),xWeeks:a({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяцы",pluralGenitive:"{{count}} месяцаў"}}),aboutXMonths:a({regular:{singularNominative:"каля {{count}} месяца",singularGenitive:"каля {{count}} месяцаў",pluralGenitive:"каля {{count}} месяцаў"},future:{singularNominative:"прыблізна праз {{count}} месяц",singularGenitive:"прыблізна праз {{count}} месяцы",pluralGenitive:"прыблізна праз {{count}} месяцаў"}}),xMonths:a({regular:{singularNominative:"{{count}} месяц",singularGenitive:"{{count}} месяцы",pluralGenitive:"{{count}} месяцаў"}}),aboutXYears:a({regular:{singularNominative:"каля {{count}} года",singularGenitive:"каля {{count}} гадоў",pluralGenitive:"каля {{count}} гадоў"},future:{singularNominative:"прыблізна праз {{count}} год",singularGenitive:"прыблізна праз {{count}} гады",pluralGenitive:"прыблізна праз {{count}} гадоў"}}),xYears:a({regular:{singularNominative:"{{count}} год",singularGenitive:"{{count}} гады",pluralGenitive:"{{count}} гадоў"}}),overXYears:a({regular:{singularNominative:"больш за {{count}} год",singularGenitive:"больш за {{count}} гады",pluralGenitive:"больш за {{count}} гадоў"},future:{singularNominative:"больш, чым праз {{count}} год",singularGenitive:"больш, чым праз {{count}} гады",pluralGenitive:"больш, чым праз {{count}} гадоў"}}),almostXYears:a({regular:{singularNominative:"амаль {{count}} год",singularGenitive:"амаль {{count}} гады",pluralGenitive:"амаль {{count}} гадоў"},future:{singularNominative:"амаль праз {{count}} год",singularGenitive:"амаль праз {{count}} гады",pluralGenitive:"амаль праз {{count}} гадоў"}})};n.default=function(i,n,t){return t=t||{},u[i](n,t)}},21747:function(i,n,t){t.r(n);var e=t(95569),a={date:(0,e.default)({formats:{full:"EEEE, d MMMM y 'г.'",long:"d MMMM y 'г.'",medium:"d MMM y 'г.'",short:"dd.MM.y"},defaultWidth:"full"}),time:(0,e.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,e.default)({formats:{any:"{{date}}, {{time}}"},defaultWidth:"any"})};n.default=a},35765:function(i,n,t){t.r(n);var e=t(66700),a=t(27699),u=["нядзелю","панядзелак","аўторак","сераду","чацвер","пятніцу","суботу"];function r(i){return"'у "+u[i]+" а' p"}var o={lastWeek:function(i,n,t){var o=(0,e.Z)(i),l=o.getUTCDay();return(0,a.Z)(o,n,t)?r(l):function(i){var n=u[i];switch(i){case 0:case 3:case 5:case 6:return"'у мінулую "+n+" а' p";case 1:case 2:case 4:return"'у мінулы "+n+" а' p"}}(l)},yesterday:"'учора а' p",today:"'сёння а' p",tomorrow:"'заўтра а' p",nextWeek:function(i,n,t){var o=(0,e.Z)(i),l=o.getUTCDay();return(0,a.Z)(o,n,t)?r(l):function(i){var n=u[i];switch(i){case 0:case 3:case 5:case 6:return"'у наступную "+n+" а' p";case 1:case 2:case 4:return"'у наступны "+n+" а' p"}}(l)},other:"P"};n.default=function(i,n,t,e){var a=o[i];return"function"==typeof a?a(n,t,e):a}},2307:function(i,n,t){t.r(n);var e=t(75100),a={ordinalNumber:function(i,n){var t=String(null==n?void 0:n.unit),e=Number(i);return e+("date"===t?"-га":"hour"===t||"minute"===t||"second"===t?"-я":(e%10==2||e%10==3)&&e%100!=12&&e%100!=13?"-і":"-ы")},era:(0,e.default)({values:{narrow:["да н.э.","н.э."],abbreviated:["да н. э.","н. э."],wide:["да нашай эры","нашай эры"]},defaultWidth:"wide"}),quarter:(0,e.default)({values:{narrow:["1","2","3","4"],abbreviated:["1-ы кв.","2-і кв.","3-і кв.","4-ы кв."],wide:["1-ы квартал","2-і квартал","3-і квартал","4-ы квартал"]},defaultWidth:"wide",argumentCallback:function(i){return i-1}}),month:(0,e.default)({values:{narrow:["С","Л","С","К","М","Ч","Л","Ж","В","К","Л","С"],abbreviated:["студз.","лют.","сак.","крас.","май","чэрв.","ліп.","жн.","вер.","кастр.","ліст.","снеж."],wide:["студзень","люты","сакавік","красавік","май","чэрвень","ліпень","жнівень","верасень","кастрычнік","лістапад","снежань"]},defaultWidth:"wide",formattingValues:{narrow:["С","Л","С","К","М","Ч","Л","Ж","В","К","Л","С"],abbreviated:["студз.","лют.","сак.","крас.","мая","чэрв.","ліп.","жн.","вер.","кастр.","ліст.","снеж."],wide:["студзеня","лютага","сакавіка","красавіка","мая","чэрвеня","ліпеня","жніўня","верасня","кастрычніка","лістапада","снежня"]},defaultFormattingWidth:"wide"}),day:(0,e.default)({values:{narrow:["Н","П","А","С","Ч","П","С"],short:["нд","пн","аў","ср","чц","пт","сб"],abbreviated:["нядз","пан","аўт","сер","чац","пят","суб"],wide:["нядзеля","панядзелак","аўторак","серада","чацвер","пятніца","субота"]},defaultWidth:"wide"}),dayPeriod:(0,e.default)({values:{narrow:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дзень",evening:"веч.",night:"ноч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дзень",evening:"веч.",night:"ноч"},wide:{am:"ДП",pm:"ПП",midnight:"поўнач",noon:"поўдзень",morning:"раніца",afternoon:"дзень",evening:"вечар",night:"ноч"}},defaultWidth:"any",formattingValues:{narrow:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дня",evening:"веч.",night:"ночы"},abbreviated:{am:"ДП",pm:"ПП",midnight:"поўн.",noon:"поўд.",morning:"ран.",afternoon:"дня",evening:"веч.",night:"ночы"},wide:{am:"ДП",pm:"ПП",midnight:"поўнач",noon:"поўдзень",morning:"раніцы",afternoon:"дня",evening:"вечара",night:"ночы"}},defaultFormattingWidth:"wide"})};n.default=a},12273:function(i,n,t){t.r(n);var e=t(87204),a={ordinalNumber:(0,t(13701).default)({matchPattern:/^(\d+)(-?(е|я|га|і|ы|ае|ая|яя|шы|гі|ці|ты|мы))?/i,parsePattern:/\d+/i,valueCallback:function(i){return parseInt(i,10)}}),era:(0,e.default)({matchPatterns:{narrow:/^((да )?н\.?\s?э\.?)/i,abbreviated:/^((да )?н\.?\s?э\.?)/i,wide:/^(да нашай эры|нашай эры|наша эра)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^д/i,/^н/i]},defaultParseWidth:"any"}),quarter:(0,e.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234](-?[ыі]?)? кв.?/i,wide:/^[1234](-?[ыі]?)? квартал/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(i){return i+1}}),month:(0,e.default)({matchPatterns:{narrow:/^[слкмчжв]/i,abbreviated:/^(студз|лют|сак|крас|ма[йя]|чэрв|ліп|жн|вер|кастр|ліст|снеж)\.?/i,wide:/^(студзен[ья]|лют(ы|ага)|сакавіка?|красавіка?|ма[йя]|чэрвен[ья]|ліпен[ья]|жні(вень|ўня)|верас(ень|ня)|кастрычніка?|лістапада?|снеж(ань|ня))/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^с/i,/^л/i,/^с/i,/^к/i,/^м/i,/^ч/i,/^л/i,/^ж/i,/^в/i,/^к/i,/^л/i,/^с/i],any:[/^ст/i,/^лю/i,/^са/i,/^кр/i,/^ма/i,/^ч/i,/^ліп/i,/^ж/i,/^в/i,/^ка/i,/^ліс/i,/^сн/i]},defaultParseWidth:"any"}),day:(0,e.default)({matchPatterns:{narrow:/^[нпасч]/i,short:/^(нд|ня|пн|па|аў|ат|ср|се|чц|ча|пт|пя|сб|су)\.?/i,abbreviated:/^(нядз?|ндз|пнд|пан|аўт|срд|сер|чцв|чац|птн|пят|суб).?/i,wide:/^(нядзел[яі]|панядзел(ак|ка)|аўтор(ак|ка)|серад[аы]|чацв(ер|ярга)|пятніц[аы]|субот[аы])/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^н/i,/^п/i,/^а/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[ан]/i,/^а/i,/^с[ер]/i,/^ч/i,/^п[ят]/i,/^с[уб]/i]},defaultParseWidth:"any"}),dayPeriod:(0,e.default)({matchPatterns:{narrow:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,abbreviated:/^([дп]п|поўн\.?|поўд\.?|ран\.?|дзень|дня|веч\.?|ночы?)/i,wide:/^([дп]п|поўнач|поўдзень|раніц[аы]|дзень|дня|вечара?|ночы?)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^дп/i,pm:/^пп/i,midnight:/^поўн/i,noon:/^поўд/i,morning:/^р/i,afternoon:/^д[зн]/i,evening:/^в/i,night:/^н/i}},defaultParseWidth:"any"})};n.default=a},31709:function(i,n,t){t.r(n);var e=t(65403),a=t(21747),u=t(35765),r=t(2307),o=t(12273),l={code:"be",formatDistance:e.default,formatLong:a.default,formatRelative:u.default,localize:r.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};n.default=l}}]);