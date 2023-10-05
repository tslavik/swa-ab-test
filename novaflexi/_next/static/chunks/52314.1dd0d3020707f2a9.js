"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[52314,55594,7123,20948,99475,49809],{55594:function(e,a,t){function i(e){return e.replace(/sekuntia?/,"sekunnin")}function u(e){return e.replace(/minuuttia?/,"minuutin")}function n(e){return e.replace(/tuntia?/,"tunnin")}function l(e){return e.replace(/(viikko|viikkoa)/,"viikon")}function r(e){return e.replace(/(kuukausi|kuukautta)/,"kuukauden")}function o(e){return e.replace(/(vuosi|vuotta)/,"vuoden")}t.r(a);var s={lessThanXSeconds:{one:"alle sekunti",other:"alle {{count}} sekuntia",futureTense:i},xSeconds:{one:"sekunti",other:"{{count}} sekuntia",futureTense:i},halfAMinute:{one:"puoli minuuttia",other:"puoli minuuttia",futureTense:function(e){return"puolen minuutin"}},lessThanXMinutes:{one:"alle minuutti",other:"alle {{count}} minuuttia",futureTense:u},xMinutes:{one:"minuutti",other:"{{count}} minuuttia",futureTense:u},aboutXHours:{one:"noin tunti",other:"noin {{count}} tuntia",futureTense:n},xHours:{one:"tunti",other:"{{count}} tuntia",futureTense:n},xDays:{one:"p\xe4iv\xe4",other:"{{count}} p\xe4iv\xe4\xe4",futureTense:function(e){return e.replace(/päivää?/,"p\xe4iv\xe4n")}},aboutXWeeks:{one:"noin viikko",other:"noin {{count}} viikkoa",futureTense:l},xWeeks:{one:"viikko",other:"{{count}} viikkoa",futureTense:l},aboutXMonths:{one:"noin kuukausi",other:"noin {{count}} kuukautta",futureTense:r},xMonths:{one:"kuukausi",other:"{{count}} kuukautta",futureTense:r},aboutXYears:{one:"noin vuosi",other:"noin {{count}} vuotta",futureTense:o},xYears:{one:"vuosi",other:"{{count}} vuotta",futureTense:o},overXYears:{one:"yli vuosi",other:"yli {{count}} vuotta",futureTense:o},almostXYears:{one:"l\xe4hes vuosi",other:"l\xe4hes {{count}} vuotta",futureTense:o}};a.default=function(e,a,t){var i=s[e],u=1===a?i.one:i.other.replace("{{count}}",String(a));return null!=t&&t.addSuffix?t.comparison&&t.comparison>0?i.futureTense(u)+" kuluttua":u+" sitten":u}},7123:function(e,a,t){t.r(a);var i=t(95569),u={date:(0,i.default)({formats:{full:"eeee d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"d.M.y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH.mm.ss zzzz",long:"HH.mm.ss z",medium:"HH.mm.ss",short:"HH.mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'klo' {{time}}",long:"{{date}} 'klo' {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};a.default=u},20948:function(e,a,t){t.r(a);var i={lastWeek:"'viime' eeee 'klo' p",yesterday:"'eilen klo' p",today:"'t\xe4n\xe4\xe4n klo' p",tomorrow:"'huomenna klo' p",nextWeek:"'ensi' eeee 'klo' p",other:"P"};a.default=function(e,a,t,u){return i[e]}},99475:function(e,a,t){t.r(a);var i=t(75100),u={narrow:["T","H","M","H","T","K","H","E","S","L","M","J"],abbreviated:["tammi","helmi","maalis","huhti","touko","kes\xe4","hein\xe4","elo","syys","loka","marras","joulu"],wide:["tammikuu","helmikuu","maaliskuu","huhtikuu","toukokuu","kes\xe4kuu","hein\xe4kuu","elokuu","syyskuu","lokakuu","marraskuu","joulukuu"]},n={narrow:u.narrow,abbreviated:u.abbreviated,wide:["tammikuuta","helmikuuta","maaliskuuta","huhtikuuta","toukokuuta","kes\xe4kuuta","hein\xe4kuuta","elokuuta","syyskuuta","lokakuuta","marraskuuta","joulukuuta"]},l={narrow:["S","M","T","K","T","P","L"],short:["su","ma","ti","ke","to","pe","la"],abbreviated:["sunn.","maan.","tiis.","kesk.","torst.","perj.","la"],wide:["sunnuntai","maanantai","tiistai","keskiviikko","torstai","perjantai","lauantai"]},r={narrow:l.narrow,short:l.short,abbreviated:l.abbreviated,wide:["sunnuntaina","maanantaina","tiistaina","keskiviikkona","torstaina","perjantaina","lauantaina"]},o={ordinalNumber:function(e,a){return Number(e)+"."},era:(0,i.default)({values:{narrow:["eaa.","jaa."],abbreviated:["eaa.","jaa."],wide:["ennen ajanlaskun alkua","j\xe4lkeen ajanlaskun alun"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1. kvartaali","2. kvartaali","3. kvartaali","4. kvartaali"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:u,defaultWidth:"wide",formattingValues:n,defaultFormattingWidth:"wide"}),day:(0,i.default)({values:l,defaultWidth:"wide",formattingValues:r,defaultFormattingWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ap",pm:"ip",midnight:"keskiy\xf6",noon:"keskip\xe4iv\xe4",morning:"ap",afternoon:"ip",evening:"illalla",night:"y\xf6ll\xe4"},abbreviated:{am:"ap",pm:"ip",midnight:"keskiy\xf6",noon:"keskip\xe4iv\xe4",morning:"ap",afternoon:"ip",evening:"illalla",night:"y\xf6ll\xe4"},wide:{am:"ap",pm:"ip",midnight:"keskiy\xf6ll\xe4",noon:"keskip\xe4iv\xe4ll\xe4",morning:"aamup\xe4iv\xe4ll\xe4",afternoon:"iltap\xe4iv\xe4ll\xe4",evening:"illalla",night:"y\xf6ll\xe4"}},defaultWidth:"wide"})};a.default=o},49809:function(e,a,t){t.r(a);var i=t(87204),u={ordinalNumber:(0,t(13701).default)({matchPattern:/^(\d+)(\.)/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(e|j)/i,abbreviated:/^(eaa.|jaa.)/i,wide:/^(ennen ajanlaskun alkua|jälkeen ajanlaskun alun)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^j/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]\.? kvartaali/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[thmkeslj]/i,abbreviated:/^(tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu)/i,wide:/^(tammikuu|helmikuu|maaliskuu|huhtikuu|toukokuu|kesäkuu|heinäkuu|elokuu|syyskuu|lokakuu|marraskuu|joulukuu)(ta)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^t/i,/^h/i,/^m/i,/^h/i,/^t/i,/^k/i,/^h/i,/^e/i,/^s/i,/^l/i,/^m/i,/^j/i],any:[/^ta/i,/^hel/i,/^maa/i,/^hu/i,/^to/i,/^k/i,/^hei/i,/^e/i,/^s/i,/^l/i,/^mar/i,/^j/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^[smtkpl]/i,short:/^(su|ma|ti|ke|to|pe|la)/i,abbreviated:/^(sunn.|maan.|tiis.|kesk.|torst.|perj.|la)/i,wide:/^(sunnuntai|maanantai|tiistai|keskiviikko|torstai|perjantai|lauantai)(na)?/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^k/i,/^t/i,/^p/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^k/i,/^to/i,/^p/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(ap|ip|keskiyö|keskipäivä|aamupäivällä|iltapäivällä|illalla|yöllä)/i,any:/^(ap|ip|keskiyöllä|keskipäivällä|aamupäivällä|iltapäivällä|illalla|yöllä)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ap/i,pm:/^ip/i,midnight:/^keskiyö/i,noon:/^keskipäivä/i,morning:/aamupäivällä/i,afternoon:/iltapäivällä/i,evening:/illalla/i,night:/yöllä/i}},defaultParseWidth:"any"})};a.default=u},52314:function(e,a,t){t.r(a);var i=t(55594),u=t(7123),n=t(20948),l=t(99475),r=t(49809),o={code:"fi",formatDistance:i.default,formatLong:u.default,formatRelative:n.default,localize:l.default,match:r.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=o}}]);