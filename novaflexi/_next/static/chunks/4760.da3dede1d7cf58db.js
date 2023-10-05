"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4760,50777],{4760:function(e,n,t){t.r(n);var o=t(50777),r={lessThanXSeconds:{one:"প্রায় ১ সেকেন্ড",other:"প্রায় {{count}} সেকেন্ড"},xSeconds:{one:"১ সেকেন্ড",other:"{{count}} সেকেন্ড"},halfAMinute:"আধ মিনিট",lessThanXMinutes:{one:"প্রায় ১ মিনিট",other:"প্রায় {{count}} মিনিট"},xMinutes:{one:"১ মিনিট",other:"{{count}} মিনিট"},aboutXHours:{one:"প্রায় ১ ঘন্টা",other:"প্রায় {{count}} ঘন্টা"},xHours:{one:"১ ঘন্টা",other:"{{count}} ঘন্টা"},xDays:{one:"১ দিন",other:"{{count}} দিন"},aboutXWeeks:{one:"প্রায় ১ সপ্তাহ",other:"প্রায় {{count}} সপ্তাহ"},xWeeks:{one:"১ সপ্তাহ",other:"{{count}} সপ্তাহ"},aboutXMonths:{one:"প্রায় ১ মাস",other:"প্রায় {{count}} মাস"},xMonths:{one:"১ মাস",other:"{{count}} মাস"},aboutXYears:{one:"প্রায় ১ বছর",other:"প্রায় {{count}} বছর"},xYears:{one:"১ বছর",other:"{{count}} বছর"},overXYears:{one:"১ বছরের বেশি",other:"{{count}} বছরের বেশি"},almostXYears:{one:"প্রায় ১ বছর",other:"প্রায় {{count}} বছর"}};n.default=function(e,n,t){var a,u=r[e];return(a="string"==typeof u?u:1===n?u.one:u.other.replace("{{count}}",(0,o.numberToLocale)(n)),null!=t&&t.addSuffix)?t.comparison&&t.comparison>0?a+" এর মধ্যে":a+" আগে":a}},50777:function(e,n,t){t.r(n),t.d(n,{numberToLocale:function(){return a}});var o=t(75100),r={locale:{1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"}};function a(e){return e.toString().replace(/\d/g,function(e){return r.locale[e]})}var u={ordinalNumber:function(e,n){var t=Number(e),o=a(t);if("date"===(null==n?void 0:n.unit))return function(e,n){if(e>18&&e<=31)return n+"শে";switch(e){case 1:return n+"লা";case 2:case 3:return n+"রা";case 4:return n+"ঠা";default:return n+"ই"}}(t,o);if(t>10||0===t)return o+"তম";switch(t%10){case 2:case 3:return o+"য়";case 4:return o+"র্থ";case 6:return o+"ষ্ঠ";default:return o+"ম"}},era:(0,o.default)({values:{narrow:["খ্রিঃপূঃ","খ্রিঃ"],abbreviated:["খ্রিঃপূর্ব","খ্রিঃ"],wide:["খ্রিস্টপূর্ব","খ্রিস্টাব্দ"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["১","২","৩","৪"],abbreviated:["১ত্রৈ","২ত্রৈ","৩ত্রৈ","৪ত্রৈ"],wide:["১ম ত্রৈমাসিক","২য় ত্রৈমাসিক","৩য় ত্রৈমাসিক","৪র্থ ত্রৈমাসিক"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,o.default)({values:{narrow:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],abbreviated:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],wide:["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"]},defaultWidth:"wide"}),day:(0,o.default)({values:{narrow:["র","সো","ম","বু","বৃ","শু","শ"],short:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],abbreviated:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],wide:["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার ","শুক্রবার","শনিবার"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}},defaultWidth:"wide",formattingValues:{narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}},defaultFormattingWidth:"wide"})};n.default=u}}]);