"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[19249,81403,48069,56155,35108,95493],{81403:function(e,t,a){a.r(t);var n={lessThanXSeconds:{one:"m\xeb pak se nj\xeb sekond\xeb",other:"m\xeb pak se {{count}} sekonda"},xSeconds:{one:"1 sekond\xeb",other:"{{count}} sekonda"},halfAMinute:"gjys\xebm minuti",lessThanXMinutes:{one:"m\xeb pak se nj\xeb minute",other:"m\xeb pak se {{count}} minuta"},xMinutes:{one:"1 minut\xeb",other:"{{count}} minuta"},aboutXHours:{one:"rreth 1 or\xeb",other:"rreth {{count}} or\xeb"},xHours:{one:"1 or\xeb",other:"{{count}} or\xeb"},xDays:{one:"1 dit\xeb",other:"{{count}} dit\xeb"},aboutXWeeks:{one:"rreth 1 jav\xeb",other:"rreth {{count}} jav\xeb"},xWeeks:{one:"1 jav\xeb",other:"{{count}} jav\xeb"},aboutXMonths:{one:"rreth 1 muaj",other:"rreth {{count}} muaj"},xMonths:{one:"1 muaj",other:"{{count}} muaj"},aboutXYears:{one:"rreth 1 vit",other:"rreth {{count}} vite"},xYears:{one:"1 vit",other:"{{count}} vite"},overXYears:{one:"mbi 1 vit",other:"mbi {{count}} vite"},almostXYears:{one:"pothuajse 1 vit",other:"pothuajse {{count}} vite"}};t.default=function(e,t,a){var r,i=n[e];return(r="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",String(t)),null!=a&&a.addSuffix)?a.comparison&&a.comparison>0?"n\xeb "+r:r+" m\xeb par\xeb":r}},48069:function(e,t,a){a.r(t);var n=a(95569),r={date:(0,n.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,n.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,n.default)({formats:{full:"{{date}} 'n\xeb' {{time}}",long:"{{date}} 'n\xeb' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=r},56155:function(e,t,a){a.r(t);var n={lastWeek:"'t\xeb' eeee 'e shkuar n\xeb' p",yesterday:"'dje n\xeb' p",today:"'sot n\xeb' p",tomorrow:"'nes\xebr n\xeb' p",nextWeek:"eeee 'at' p",other:"P"};t.default=function(e,t,a,r){return n[e]}},35108:function(e,t,a){a.r(t);var n=a(75100),r={ordinalNumber:function(e,t){var a=Number(e);return(null==t?void 0:t.unit)==="hour"?String(a):1===a?a+"-r\xeb":4===a?a+"t":a+"-t\xeb"},era:(0,n.default)({values:{narrow:["P","M"],abbreviated:["PK","MK"],wide:["Para Krishtit","Mbas Krishtit"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["4-mujori I","4-mujori II","4-mujori III","4-mujori IV"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,n.default)({values:{narrow:["J","S","M","P","M","Q","K","G","S","T","N","D"],abbreviated:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","N\xebn","Dhj"],wide:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","N\xebntor","Dhjetor"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["D","H","M","M","E","P","S"],short:["Di","H\xeb","Ma","M\xeb","En","Pr","Sh"],abbreviated:["Die","H\xebn","Mar","M\xebr","Enj","Pre","Sht"],wide:["Diel\xeb","H\xebn\xeb","Mart\xeb","M\xebrkur\xeb","Enjte","Premte","Shtun\xeb"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"m\xebngjes",afternoon:"dite",evening:"mbr\xebmje",night:"nat\xeb"},abbreviated:{am:"PD",pm:"MD",midnight:"mesn\xebt\xeb",noon:"drek",morning:"m\xebngjes",afternoon:"mbasdite",evening:"mbr\xebmje",night:"nat\xeb"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesn\xebt\xeb",noon:"drek",morning:"m\xebngjes",afternoon:"mbasdite",evening:"mbr\xebmje",night:"nat\xeb"}},defaultWidth:"wide",formattingValues:{narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"n\xeb m\xebngjes",afternoon:"n\xeb mbasdite",evening:"n\xeb mbr\xebmje",night:"n\xeb mesnat\xeb"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnat\xeb",noon:"drek",morning:"n\xeb m\xebngjes",afternoon:"n\xeb mbasdite",evening:"n\xeb mbr\xebmje",night:"n\xeb mesnat\xeb"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnat\xeb",noon:"drek",morning:"n\xeb m\xebngjes",afternoon:"n\xeb mbasdite",evening:"n\xeb mbr\xebmje",night:"n\xeb mesnat\xeb"}},defaultFormattingWidth:"wide"})};t.default=r},95493:function(e,t,a){a.r(t);var n=a(87204),r={ordinalNumber:(0,a(13701).default)({matchPattern:/^(\d+)(-rë|-të|t|)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(p|m)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(para krishtit|mbas krishtit)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(p|m)/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]-mujori (i{1,3}|iv)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[jsmpqkftnd]/i,abbreviated:/^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i,wide:/^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^s/i,/^m/i,/^p/i,/^m/i,/^q/i,/^k/i,/^g/i,/^s/i,/^t/i,/^n/i,/^d/i],any:[/^ja/i,/^shk/i,/^mar/i,/^pri/i,/^maj/i,/^qer/i,/^kor/i,/^gu/i,/^sht/i,/^tet/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[dhmeps]/i,short:/^(di|hë|ma|më|en|pr|sh)/i,abbreviated:/^(die|hën|mar|mër|enj|pre|sht)/i,wide:/^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^h/i,/^m/i,/^m/i,/^e/i,/^p/i,/^s/i],any:[/^d/i,/^h/i,/^ma/i,/^më/i,/^e/i,/^p/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i,any:/^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^p/i,pm:/^m/i,midnight:/^me/i,noon:/^dr/i,morning:/mëngjes/i,afternoon:/mbasdite/i,evening:/mbrëmje/i,night:/natë/i}},defaultParseWidth:"any"})};t.default=r},19249:function(e,t,a){a.r(t);var n=a(81403),r=a(48069),i=a(56155),o=a(35108),m=a(95493),d={code:"sq",formatDistance:n.default,formatLong:r.default,formatRelative:i.default,localize:o.default,match:m.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=d}}]);