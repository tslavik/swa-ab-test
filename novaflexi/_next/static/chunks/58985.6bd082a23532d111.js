"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[58985],{58985:function(a,t,e){e.r(t);var i=e(87204),r={ordinalNumber:(0,e(13701).default)({matchPattern:/^だ?い?\d+(ねん|しはんき|がつ|しゅう|にち|じ|ふん|びょう)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(B\.?C\.?|A\.?D\.?)/i,abbreviated:/^(きげん[前後]|せいれき)/i,wide:/^(きげん[前後]|せいれき)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^B/i,/^A/i],any:[/^(きげんぜん)/i,/^(せいれき|きげんご)/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^Q[1234]/i,wide:/^だい[1234一二三四１２３４]しはんき/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|一|１)/i,/(2|二|２)/i,/(3|三|３)/i,/(4|四|４)/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^([123456789]|1[012])/,abbreviated:/^([123456789]|1[012])がつ/i,wide:/^([123456789]|1[012])がつ/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^1\D/,/^2/,/^3/,/^4/,/^5/,/^6/,/^7/,/^8/,/^9/,/^10/,/^11/,/^12/]},defaultParseWidth:"any"}),day:(0,i.default)({matchPatterns:{narrow:/^(にち|げつ|か|すい|もく|きん|ど)/,short:/^(にち|げつ|か|すい|もく|きん|ど)/,abbreviated:/^(にち|げつ|か|すい|もく|きん|ど)/,wide:/^(にち|げつ|か|すい|もく|きん|ど)ようび/},defaultMatchWidth:"wide",parsePatterns:{any:[/^にち/,/^げつ/,/^か/,/^すい/,/^もく/,/^きん/,/^ど/]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{any:/^(AM|PM|ごぜん|ごご|しょうご|しんや|まよなか|よる|あさ)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^(A|ごぜん)/i,pm:/^(P|ごご)/i,midnight:/^しんや|まよなか/i,noon:/^しょうご/i,morning:/^あさ/i,afternoon:/^ごご/i,evening:/^よる/i,night:/^しんや/i}},defaultParseWidth:"any"})};t.default=r}}]);