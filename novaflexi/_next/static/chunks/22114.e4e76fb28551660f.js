"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[22114,23611,74565,66278,56662,13231],{23611:function(e,a,n){n.r(a);var t={lessThanXSeconds:{one:"mwens pase yon segond",other:"mwens pase {{count}} segond"},xSeconds:{one:"1 segond",other:"{{count}} segond"},halfAMinute:"30 segond",lessThanXMinutes:{one:"mwens pase yon minit",other:"mwens pase {{count}} minit"},xMinutes:{one:"1 minit",other:"{{count}} minit"},aboutXHours:{one:"anviwon in\xe8",other:"anviwon {{count}} \xe8"},xHours:{one:"1 l\xe8",other:"{{count}} l\xe8"},xDays:{one:"1 jou",other:"{{count}} jou"},aboutXWeeks:{one:"anviwon 1 sem\xe8n",other:"anviwon {{count}} sem\xe8n"},xWeeks:{one:"1 sem\xe8n",other:"{{count}} sem\xe8n"},aboutXMonths:{one:"anviwon 1 mwa",other:"anviwon {{count}} mwa"},xMonths:{one:"1 mwa",other:"{{count}} mwa"},aboutXYears:{one:"anviwon 1 an",other:"anviwon {{count}} an"},xYears:{one:"1 an",other:"{{count}} an"},overXYears:{one:"plis pase 1 an",other:"plis pase {{count}} an"},almostXYears:{one:"pr\xe8ske 1 an",other:"pr\xe8ske {{count}} an"}};a.default=function(e,a,n){var i,r=t[e];return(i="string"==typeof r?r:1===a?r.one:r.other.replace("{{count}}",String(a)),null!=n&&n.addSuffix)?n.comparison&&n.comparison>0?"nan "+i:"sa f\xe8 "+i:i}},74565:function(e,a,n){n.r(a);var t=n(95569),i={date:(0,t.default)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,t.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,t.default)({formats:{full:"{{date}} 'nan l\xe8' {{time}}",long:"{{date}} 'nan l\xe8' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=i},66278:function(e,a,n){n.r(a);var t={lastWeek:"eeee 'pase nan l\xe8' p",yesterday:"'y\xe8 nan l\xe8' p",today:"'jodi a' p",tomorrow:"'demen nan l\xe8' p'",nextWeek:"eeee 'pwochen nan l\xe8' p",other:"P"};a.default=function(e,a,n,i){return t[e]}},56662:function(e,a,n){n.r(a);var t=n(75100),i={ordinalNumber:function(e,a){var n=Number(e);return 0===n?String(n):n+(1===n?"ye":"y\xe8m")},era:(0,t.default)({values:{narrow:["av. J.-K","ap. J.-K"],abbreviated:["av. J.-K","ap. J.-K"],wide:["anvan Jezi Kris","apre Jezi Kris"]},defaultWidth:"wide"}),quarter:(0,t.default)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1ye trim.","2y\xe8m trim.","3y\xe8m trim.","4y\xe8m trim."],wide:["1ye trim\xe8s","2y\xe8m trim\xe8s","3y\xe8m trim\xe8s","4y\xe8m trim\xe8s"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,t.default)({values:{narrow:["J","F","M","A","M","J","J","O","S","O","N","D"],abbreviated:["janv.","fevr.","mas","avr.","me","jen","jiy\xe8","out","sept.","okt.","nov.","des."],wide:["janvye","fevrye","mas","avril","me","jen","jiy\xe8","out","septanm","okt\xf2b","novanm","desanm"]},defaultWidth:"wide"}),day:(0,t.default)({values:{narrow:["D","L","M","M","J","V","S"],short:["di","le","ma","m\xe8","je","va","sa"],abbreviated:["dim.","len.","mad.","m\xe8k.","jed.","van.","sam."],wide:["dimanch","lendi","madi","m\xe8kredi","jedi","vandredi","samdi"]},defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"swa",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"maten",afternoon:"apr\xe8midi",evening:"swa",night:"maten"},wide:{am:"AM",pm:"PM",midnight:"minwit",noon:"midi",morning:"nan maten",afternoon:"nan apr\xe8midi",evening:"nan asw\xe8",night:"nan maten"}},defaultWidth:"wide"})};a.default=i},13231:function(e,a,n){n.r(a);var t=n(87204),i={ordinalNumber:(0,n(13701).default)({matchPattern:/^(\d+)(ye|yèm)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,t.default)({matchPatterns:{narrow:/^(av\.J\.K|ap\.J\.K|ap\.J\.-K)/i,abbreviated:/^(av\.J\.-K|av\.J-K|apr\.J\.-K|apr\.J-K|ap\.J-K)/i,wide:/^(avan Jezi Kris|apre Jezi Kris)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^av/i,/^ap/i]},defaultParseWidth:"any"}),quarter:(0,t.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^t[1234]/i,wide:/^[1234](ye|yèm)? trimès/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,t.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv|fevr|mas|avr|me|jen|jiyè|out|sept|okt|nov|des)\.?/i,wide:/^(janvye|fevrye|mas|avril|me|jen|jiyè|out|septanm|oktòb|novanm|desanm)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^o/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^ma/i,/^av/i,/^me/i,/^je/i,/^ji/i,/^ou/i,/^s/i,/^ok/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,t.default)({matchPatterns:{narrow:/^[lmjvsd]/i,short:/^(di|le|ma|me|je|va|sa)/i,abbreviated:/^(dim|len|mad|mèk|jed|van|sam)\.?/i,wide:/^(dimanch|lendi|madi|mèkredi|jedi|vandredi|samdi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^le/i,/^ma/i,/^mè/i,/^je/i,/^va/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,t.default)({matchPatterns:{narrow:/^(a|p|minwit|midi|mat\.?|ap\.?m\.?|swa)/i,any:/^([ap]\.?\s?m\.?|nan maten|nan aprèmidi|nan aswè)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/sw/i,night:/nwit/i}},defaultParseWidth:"any"})};a.default=i},22114:function(e,a,n){n.r(a);var t=n(23611),i=n(74565),r=n(66278),o=n(56662),d=n(13231),m={code:"ht",formatDistance:t.default,formatLong:i.default,formatRelative:r.default,localize:o.default,match:d.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};a.default=m}}]);