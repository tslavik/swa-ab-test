"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4404],{4404:function(t,e,n){function o(t,e,n){return(1===e&&t.one?t.one:e>=2&&e<=4&&t.twoFour?t.twoFour:t.other)[n].replace("{{count}}",String(e))}function u(t){var e="";return"almost"===t&&(e="takmer"),"about"===t&&(e="približne"),e.length>0?e+" ":""}function r(t){var e="";return"lessThan"===t&&(e="menej než"),"over"===t&&(e="viac než"),e.length>0?e+" ":""}n.r(e);var s={xSeconds:{one:{present:"sekunda",past:"sekundou",future:"sekundu"},twoFour:{present:"{{count}} sekundy",past:"{{count}} sekundami",future:"{{count}} sekundy"},other:{present:"{{count}} sek\xfand",past:"{{count}} sekundami",future:"{{count}} sek\xfand"}},halfAMinute:{other:{present:"pol min\xfaty",past:"pol min\xfatou",future:"pol min\xfaty"}},xMinutes:{one:{present:"min\xfata",past:"min\xfatou",future:"min\xfatu"},twoFour:{present:"{{count}} min\xfaty",past:"{{count}} min\xfatami",future:"{{count}} min\xfaty"},other:{present:"{{count}} min\xfat",past:"{{count}} min\xfatami",future:"{{count}} min\xfat"}},xHours:{one:{present:"hodina",past:"hodinou",future:"hodinu"},twoFour:{present:"{{count}} hodiny",past:"{{count}} hodinami",future:"{{count}} hodiny"},other:{present:"{{count}} hod\xedn",past:"{{count}} hodinami",future:"{{count}} hod\xedn"}},xDays:{one:{present:"deň",past:"dňom",future:"deň"},twoFour:{present:"{{count}} dni",past:"{{count}} dňami",future:"{{count}} dni"},other:{present:"{{count}} dn\xed",past:"{{count}} dňami",future:"{{count}} dn\xed"}},xWeeks:{one:{present:"t\xfdždeň",past:"t\xfdždňom",future:"t\xfdždeň"},twoFour:{present:"{{count}} t\xfdždne",past:"{{count}} t\xfdždňami",future:"{{count}} t\xfdždne"},other:{present:"{{count}} t\xfdždňov",past:"{{count}} t\xfdždňami",future:"{{count}} t\xfdždňov"}},xMonths:{one:{present:"mesiac",past:"mesiacom",future:"mesiac"},twoFour:{present:"{{count}} mesiace",past:"{{count}} mesiacmi",future:"{{count}} mesiace"},other:{present:"{{count}} mesiacov",past:"{{count}} mesiacmi",future:"{{count}} mesiacov"}},xYears:{one:{present:"rok",past:"rokom",future:"rok"},twoFour:{present:"{{count}} roky",past:"{{count}} rokmi",future:"{{count}} roky"},other:{present:"{{count}} rokov",past:"{{count}} rokmi",future:"{{count}} rokov"}}};e.default=function(t,e,n){var a,c=["lessThan","about","over","almost"].filter(function(e){return!!t.match(RegExp("^"+e))})[0]||"",i=s[(a=t.substring(c.length)).charAt(0).toLowerCase()+a.slice(1)];return null!=n&&n.addSuffix?n.comparison&&n.comparison>0?u(c)+"o "+r(c)+o(i,e,"future"):u(c)+"pred "+r(c)+o(i,e,"past"):u(c)+r(c)+o(i,e,"present")}}}]);