"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[88864],{27699:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(19785),a=r(52329);function c(e,t,r){(0,n.Z)(2,arguments);var c=(0,a.Z)(e,r),u=(0,a.Z)(t,r);return c.getTime()===u.getTime()}},88864:function(e,t,r){r.r(t);var n=r(66700),a=r(27699),c=["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"];function u(e){var t=c[e];return 2===e?"'във "+t+" в' p":"'в "+t+" в' p"}var s={lastWeek:function(e,t,r){var s=(0,n.Z)(e),o=s.getUTCDay();return(0,a.Z)(s,t,r)?u(o):function(e){var t=c[e];switch(e){case 0:case 3:case 6:return"'миналата "+t+" в' p";case 1:case 2:case 4:case 5:return"'миналия "+t+" в' p"}}(o)},yesterday:"'вчера в' p",today:"'днес в' p",tomorrow:"'утре в' p",nextWeek:function(e,t,r){var s=(0,n.Z)(e),o=s.getUTCDay();return(0,a.Z)(s,t,r)?u(o):function(e){var t=c[e];switch(e){case 0:case 3:case 6:return"'следващата "+t+" в' p";case 1:case 2:case 4:case 5:return"'следващия "+t+" в' p"}}(o)},other:"P"};t.default=function(e,t,r,n){var a=s[e];return"function"==typeof a?a(t,r,n):a}}}]);