"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[95229,63407,53207,77734,10807,61963],{63407:function(e,a,n){n.r(a);var i={lessThanXSeconds:{one:"mens d’una segonda",other:"mens de {{count}} segondas"},xSeconds:{one:"1 segonda",other:"{{count}} segondas"},halfAMinute:"30 segondas",lessThanXMinutes:{one:"mens d’una minuta",other:"mens de {{count}} minutas"},xMinutes:{one:"1 minuta",other:"{{count}} minutas"},aboutXHours:{one:"environ 1 ora",other:"environ {{count}} oras"},xHours:{one:"1 ora",other:"{{count}} oras"},xDays:{one:"1 jorn",other:"{{count}} jorns"},aboutXWeeks:{one:"environ 1 setmana",other:"environ {{count}} setmanas"},xWeeks:{one:"1 setmana",other:"{{count}} setmanas"},aboutXMonths:{one:"environ 1 mes",other:"environ {{count}} meses"},xMonths:{one:"1 mes",other:"{{count}} meses"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"mai d’un an",other:"mai de {{count}} ans"},almostXYears:{one:"gaireben un an",other:"gaireben {{count}} ans"}};a.default=function(e,a,n){var t,r=i[e];return(t="string"==typeof r?r:1===a?r.one:r.other.replace("{{count}}",String(a)),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?"d’aqu\xed "+t:"fa "+t:t}},53207:function(e,a,n){n.r(a);var i=n(95569),t={date:(0,i.default)({formats:{full:"EEEE d 'de' MMMM y",long:"d 'de' MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} 'a' {{time}}",long:"{{date}} 'a' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=t},77734:function(e,a,n){n.r(a);var i={lastWeek:"eeee 'passat a' p",yesterday:"'i\xe8r a' p",today:"'u\xe8i a' p",tomorrow:"'deman a' p",nextWeek:"eeee 'a' p",other:"P"};a.default=function(e,a,n,t){return i[e]}},10807:function(e,a,n){n.r(a);var i=n(75100),t={ordinalNumber:function(e,a){var n,i=Number(e),t=null==a?void 0:a.unit;switch(i){case 1:n="\xe8r";break;case 2:n="nd";break;default:n="en"}return("year"===t||"week"===t||"hour"===t||"minute"===t||"second"===t)&&(n+="a"),i+n},era:(0,i.default)({values:{narrow:["ab. J.C.","apr. J.C."],abbreviated:["ab. J.C.","apr. J.C."],wide:["abans J\xe8sus-Crist","apr\xe8s J\xe8sus-Crist"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1\xe8r trim.","2nd trim.","3en trim.","4en trim."],wide:["1\xe8r trim\xe8stre","2nd trim\xe8stre","3en trim\xe8stre","4en trim\xe8stre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["GN","FB","M\xc7","AB","MA","JN","JL","AG","ST","OC","NV","DC"],abbreviated:["gen.","febr.","mar\xe7","abr.","mai","junh","jul.","ag.","set.","oct.","nov.","dec."],wide:["geni\xe8r","febri\xe8r","mar\xe7","abril","mai","junh","julhet","agost","setembre","oct\xf2bre","novembre","decembre"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],short:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],wide:["dimenge","diluns","dimars","dim\xe8cres","dij\xf2us","divendres","dissabte"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"am",pm:"pm",midnight:"mi\xe8janu\xe8ch",noon:"mi\xe8gjorn",morning:"matin",afternoon:"apr\xe8p-mi\xe8gjorn",evening:"v\xe8spre",night:"nu\xe8ch"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mi\xe8janu\xe8ch",noon:"mi\xe8gjorn",morning:"matin",afternoon:"apr\xe8p-mi\xe8gjorn",evening:"v\xe8spre",night:"nu\xe8ch"},wide:{am:"a.m.",pm:"p.m.",midnight:"mi\xe8janu\xe8ch",noon:"mi\xe8gjorn",morning:"matin",afternoon:"apr\xe8p-mi\xe8gjorn",evening:"v\xe8spre",night:"nu\xe8ch"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"mi\xe8janu\xe8ch",noon:"mi\xe8gjorn",morning:"del matin",afternoon:"de l’apr\xe8p-mi\xe8gjorn",evening:"del ser",night:"de la nu\xe8ch"},abbreviated:{am:"AM",pm:"PM",midnight:"mi\xe8janu\xe8ch",noon:"mi\xe8gjorn",morning:"del matin",afternoon:"de l’apr\xe8p-mi\xe8gjorn",evening:"del ser",night:"de la nu\xe8ch"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mi\xe8janu\xe8ch",noon:"mi\xe8gjorn",morning:"del matin",afternoon:"de l’apr\xe8p-mi\xe8gjorn",evening:"del ser",night:"de la nu\xe8ch"}},defaultFormattingWidth:"wide"})};a.default=t},61963:function(e,a,n){n.r(a);var i=n(87204),t={ordinalNumber:(0,n(13701).default)({matchPattern:/^(\d+)(èr|nd|en)?[a]?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(ab\.J\.C|apr\.J\.C|apr\.J\.-C)/i,abbreviated:/^(ab\.J\.-C|ab\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(abans Jèsus-Crist|après Jèsus-Crist)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ab/i,/^ap/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^T[1234]/i,abbreviated:/^[1234](èr|nd|en)? trim\.?/i,wide:/^[1234](èr|nd|en)? trimèstre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,i.default)({matchPatterns:{narrow:/^(GN|FB|MÇ|AB|MA|JN|JL|AG|ST|OC|NV|DC)/i,abbreviated:/^(gen|febr|març|abr|mai|junh|jul|ag|set|oct|nov|dec)\.?/i,wide:/^(genièr|febrièr|març|abril|mai|junh|julhet|agost|setembre|octòbre|novembre|decembre)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^g/i,/^f/i,/^ma[r?]|MÇ/i,/^ab/i,/^ma[i?]/i,/^ju[n?]|JN/i,/^ju[l?]|JL/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^d[glmcjvs]\.?/i,short:/^d[glmcjvs]\.?/i,abbreviated:/^d[glmcjvs]\.?/i,wide:/^(dimenge|diluns|dimars|dimècres|dijòus|divendres|dissabte)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],short:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],abbreviated:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],any:[/^dg|dime/i,/^dl|dil/i,/^dm|dima/i,/^dc|dimè/i,/^dj|dij/i,/^dv|div/i,/^ds|dis/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{any:/(^(a\.?m|p\.?m))|(ante meridiem|post meridiem)|((del |de la |de l’)(matin|aprèp-miègjorn|vèspre|ser|nuèch))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/(^a)|ante meridiem/i,pm:/(^p)|post meridiem/i,midnight:/^mièj/i,noon:/^mièg/i,morning:/matin/i,afternoon:/aprèp-miègjorn/i,evening:/vèspre|ser/i,night:/nuèch/i}},defaultParseWidth:"any"})};a.default=t},95229:function(e,a,n){n.r(a);var i=n(63407),t=n(53207),r=n(77734),d=n(10807),o=n(61963),m={code:"oc",formatDistance:i.default,formatLong:t.default,formatRelative:r.default,localize:d.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=m}}]);