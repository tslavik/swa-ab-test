(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[62625],{27902:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/additional-info",function(){return i(19511)}])},19511:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return ei}});var a,s,r=i(52322),t=i(44245),l=i(83024),d=i(2784),o=i(57643);function c(){let[e]=(0,o.Xs)("isFaceliftVisible",!0);return e}let{additionalInfo:{inputs:{modal:{medicalExamination:m}}}}=t;function p(){return(0,r.jsxs)(l.fef,{className:"mx-5 px-4 ",children:[(0,r.jsx)(l.nvN,{children:m.body.description}),(0,r.jsx)(l.X6q,{level:3,style:{fontSize:"18px"},className:"pt-2 pb-0",children:m.body.contains.title}),(0,r.jsx)(l.aVo,{plain:!1,compact:!0,className:"py-2",children:m.body.contains.items.map(e=>(0,r.jsx)(l.HCh,{children:e},e))}),(0,r.jsx)(l.bZj,{variant:l.bZj.VARIANT.INFO,children:(0,r.jsx)(l.nvN,{children:m.body.info})})]})}function h(e){let n,i,{displayModal:a,setDisplayModal:s,type:d}=e;return n=t.additionalInfo.inputs.modal.medicalExamination.header,i=(0,r.jsx)(p,{}),(0,r.jsx)(l.u_l,{isOpen:a,onClose:()=>s(!1),closeLabel:t.buttons.close,title:n,footer:(0,r.jsx)(l.zxk,{className:"mx-2",variant:l.zxk.VARIANT.PRIMARY,onClick:()=>s(!1),children:t.buttons.close}),children:i})}var x=i(28794);let u=e=>{let{children:n,className:i,padded:a}=e,{device:s}=(0,x.iP)();return(0,x.ge)(s)?(0,r.jsx)(l.Zbd,{style:{boxShadow:"none"},className:i,padded:a,useCardBody:!1,children:n}):(0,r.jsx)(l.Zbd,{className:i,children:n})};var f=i(52829);function j(){let e=G(),n=c(),{t:i}=(0,f.$)();return n?(0,r.jsx)(r.Fragment,{children:e&&(0,r.jsx)(l.JXS,{className:"pr-md-5",children:(0,r.jsx)(l.bZj,{variant:l.bZj.VARIANT.WARNING,className:"ml-md-3",heading:i("additionalInfo.highRiskCountryAlert.heading"),children:i("additionalInfo.highRiskCountryAlert.description")})})}):(0,r.jsx)(r.Fragment,{})}var y=i(20255),N=i(71827);function I(){let e=(0,y.ZV)();if(!e.data?.id)throw Error("missing offerResponse.id");let n=N.kNt({productId:N.jO1.K1Fn,offerId:e.data.id})?.data?.flags,{t:i}=(0,f.$)();return n&&new Set(n).has(N.hmI.AmlOfficerConsent)?(0,r.jsx)(l.JXS,{className:"pr-md-5 mb-2",children:(0,r.jsx)(l.bZj,{variant:l.bZj.VARIANT.WARNING,className:"ml-md-3",heading:i("additionalInfo.highlyInsured.title"),children:i("additionalInfo.highlyInsured.description")})}):null}var b=i(78396);let g=()=>{let{device:e}=(0,x.iP)(),{fullQuestionnaire:{modal:{requestedHealthDocuments:n}}}=b.fullQuestionnaireJson,[i,a]=(0,d.useState)(!1),s=function(){let e=(0,y.ZV)();if(!e.data?.id)throw Error("missing offerResponse.id");let n=U(),i=G(),a=c();return(0,N.kNt)({productId:N.jO1.K1Fn,offerId:e.data?.id},{},{select:e=>(function(e,n,i,a){let s=e.requiredDocuments??[],r=new Set(s.map(e=>e.id)),t=s.reduce((e,n)=>({...e,[n.id]:n.name}),{});return a&&(t[N.BYn.PrijemPotvrzeni]="Př\xedjem - potvrzen\xed",t[N.BYn.FinancniDotaznik]="Finančn\xed dotazn\xedk",n&&(r.add(N.BYn.PrijemPotvrzeni),r.add(N.BYn.FinancniDotaznik)),i&&r.add(N.BYn.PrijemPotvrzeni)),Array.from(r).map(e=>({id:e,name:t[e]}))})(e,n,i,a)})}(),t=s?.data;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(h,{displayModal:i,setDisplayModal:a,type:"medicalExamination"}),(0,r.jsx)(u,{className:"px-md-5 py-md-0",children:(0,r.jsxs)(l.X2j,{className:"align-items-center",children:[(0,r.jsx)("div",{className:"ml-3 mr-2",children:(0,r.jsx)(l.JO$,{icon:l.JO$.ICON.FILE,color:l.JO$.COLOR.BLUE_400,size:(0,x.ge)(e)?l.JO$.SIZE.SIZE_24:l.JO$.SIZE.SIZE_16})}),(0,r.jsx)("div",{className:"pt-1 h-4",children:(0,r.jsx)(l.X6q,{level:3,children:n.title})})]})}),(0,r.jsxs)(u,{className:"px-md-5 py-md-0",children:[(0,r.jsx)(j,{}),(0,r.jsx)(I,{}),t&&t.length?(0,r.jsx)(l.X2j,{children:(0,r.jsx)(l.JXS,{className:"pl-0",children:Array.from(t).map(e=>{var n;return(0,r.jsxs)("div",{className:"d-flex flex-row",children:[(0,r.jsx)(l.nvN,{"data-cy":e.id,className:"ml-4 ml-md-5",children:e.name}),("PROHLIDKA_INTERNI"===(n=e.id)||"PROHLIDKA_INTERNI_1"===n)&&(0,r.jsx)("div",{className:"ml-2 mb-n1 align-items-center",children:(0,r.jsx)(l.zxk,{variant:l.zxk.VARIANT.TERTIARY,icon:l.zxk.ICON.INFO,className:"p-0 m-0 mt-n1",onClick:()=>a(!0),"data-cy":"dokumenty-k-doložen\xed/l\xe9kařsk\xe1-prohl\xeddka/otevř\xedt-mod\xe1l"})})]},e.id)})})}):(0,r.jsx)(l.JXS,{className:"pr-md-5",children:(0,r.jsx)(l.bZj,{size:l.bZj.SIZE.SMALL,variant:l.bZj.VARIANT.INFO,className:"ml-md-3",children:(0,r.jsx)(l.nvN,{children:n.noDocuments})})})]})]})};var v=i(49466),E=i(63955);let O=()=>{let{control:e,formState:{errors:n}}=(0,E.Gc)();function i(e){return e===s.beneficiaryOtherPersonFirstName?n.beneficiaryOtherPersonFirstName?.message!==void 0:e===s.beneficiaryOtherPersonLastName&&n.beneficiaryOtherPersonLastName?.message!==void 0}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(E.Qr,{name:"beneficiaryOtherPersonFirstName",control:e,render:e=>{let{field:n}=e;return(0,r.jsx)(l.WiK,{className:"px-md-2 align-items-baseline",label:t.additionalInfo.inputs.beneficiary.otherPerson.firstName.label,labelColumnWidth:7,...n,inputProps:{innerRef:n.ref,ref:void 0},ref:void 0,input:e=>(0,r.jsxs)("div",{className:" pr-md-0 pt-2 pt-md-0",children:[(0,r.jsx)(l.oil,{...e,"data-cy":"jin\xe1-osoba/jm\xe9no"}),i(s.beneficiaryOtherPersonFirstName)&&(0,r.jsx)(l.bZj,{children:t.additionalInfo.inputs.beneficiary.otherPerson.isBeneficiaryFirstNameEmptyErrorMessage})]}),required:!0})}}),(0,r.jsx)(E.Qr,{name:"beneficiaryOtherPersonLastName",control:e,render:e=>{let{field:n}=e;return(0,r.jsx)(l.WiK,{className:"px-md-2 align-items-baseline",label:t.additionalInfo.inputs.beneficiary.otherPerson.lastName.label,labelColumnWidth:7,...n,ref:void 0,input:e=>(0,r.jsxs)("div",{className:" pr-md-0 pt-2 pt-md-0",children:[(0,r.jsx)(l.oil,{...e,innerRef:n.ref,"data-cy":"jin\xe1-osoba/př\xedjmen\xed"}),i(s.beneficiaryOtherPersonLastName)&&(0,r.jsx)(l.bZj,{children:t.additionalInfo.inputs.beneficiary.otherPerson.isBeneficiaryLastNameEmptyErrorMessage})]}),required:!0})}}),(0,r.jsx)(v.Wr,{name:"beneficiaryOtherPersonDateOfBirth","data-cy":"jin\xe1-osoba/datum-narozen\xed",labelColumnWidth:7,classNameFormField:"px-md-2 align-items-baseline",classNameWrapperDiv:"pr-md-0 pt-2 pt-md-0",label:t.additionalInfo.inputs.beneficiary.otherPerson.dateOfBirth.label,errorMessage:t.additionalInfo.inputs.beneficiary.otherPerson.isBeneficiaryDateOfBirthEmptyErrorMessage})]})},C=()=>{let{device:e}=(0,x.iP)(),n=(0,E.qo)({name:"beneficiary"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{className:"px-md-5 py-md-0",children:(0,r.jsxs)(l.X2j,{className:"align-items-center",children:[(0,r.jsx)("div",{className:"ml-3 mr-2",children:(0,r.jsx)(l.JO$,{icon:l.JO$.ICON.USER,color:l.JO$.COLOR.BLUE_400,size:(0,x.ge)(e)?l.JO$.SIZE.SIZE_24:l.JO$.SIZE.SIZE_16})}),(0,r.jsx)("div",{className:"pt-1 h-4 ",children:(0,r.jsx)(l.X6q,{level:3,children:t.additionalInfo.inputs.beneficiary.title})})]})}),(0,r.jsx)(u,{className:"px-md-5 py-md-0",children:(0,r.jsxs)("div",{"data-cs-mask":!0,className:"row px-md-4 ",children:[(0,r.jsxs)("div",{className:"row px-md-2 align-items-baseline",children:[(0,r.jsx)("div",{className:"col-md-7 align-items-top row",children:(0,r.jsx)("div",{children:(0,r.jsx)("label",{className:"mb-0",children:t.additionalInfo.inputs.beneficiary.label})})}),(0,r.jsx)("div",{className:"col-md-5  pr-md-0 pt-2 pt-md-0",children:(0,r.jsx)("div",{className:"pr-md-3 py-md-1",children:(0,r.jsx)(v.Ph,{required:!0,"data-cy":"obmyšlen\xe1-osoba",name:"beneficiary",label:"",inputProps:{title:t.additionalInfo.inputs.beneficiary.title,label:t.additionalInfo.inputs.beneficiary.label,placeholder:t.additionalInfo.inputs.beneficiary.placeholder,items:t.additionalInfo.inputs.beneficiary.items},errorMessage:t.additionalInfo.inputs.beneficiary.isBeneficiaryEmptyErrorMessage,labelColumnWidth:0})})})]}),Y(n)&&(0,r.jsx)(O,{})]})})]})};(a=s||(s={}))[a.beneficiary=0]="beneficiary",a[a.beneficiaryOtherPersonFirstName=1]="beneficiaryOtherPersonFirstName",a[a.beneficiaryOtherPersonLastName=2]="beneficiaryOtherPersonLastName",a[a.beneficiaryOtherPersonDateOfBirth=3]="beneficiaryOtherPersonDateOfBirth";let P=e=>{var n;let{clientDetail:i}=e,{device:a}=(0,x.iP)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{className:"px-md-5 py-md-0",children:(0,r.jsxs)(l.X2j,{className:"align-items-center",children:[(0,r.jsx)("div",{className:"ml-3 mr-2 ",children:(0,r.jsx)(l.JO$,{icon:l.JO$.ICON.MAIL,color:l.JO$.COLOR.BLUE_400,size:(0,x.ge)(a)?l.JO$.SIZE.SIZE_24:l.JO$.SIZE.SIZE_16})}),(0,r.jsx)("div",{className:"pt-1 h-4",children:(0,r.jsx)(l.X6q,{level:3,children:t.additionalInfo.contactData.title})})]})}),(0,r.jsxs)(u,{className:" py-md-0",children:[(0,r.jsxs)("div",{"data-cs-mask":!0,className:"pb-2 row px-3 px-md-5",children:[(0,r.jsx)(l.nvN,{className:"col-md-7 px-md-5",children:(0,r.jsx)(l.gFv,{emphasis:(0,x.ge)(a),children:t.additionalInfo.contactData.phone.label})}),(0,r.jsx)(l.nvN,{className:"col-md-5 px-md-2",children:(0,r.jsx)(l.gFv,{emphasis:!(0,x.ge)(a),children:(void 0===(n=i?.contacts)||void 0===n.phone?" ":`+420 ${n?.phone?.substring(0,3)} ${n?.phone?.substring(3,6)} ${n?.phone?.substring(6,9)}`)||""})})]}),(0,r.jsxs)("div",{"data-cs-mask":!0,className:"pb-2 row px-3 px-md-5",children:[(0,r.jsx)(l.nvN,{className:"col-md-7 px-md-5",children:(0,r.jsx)(l.gFv,{emphasis:(0,x.ge)(a),children:t.additionalInfo.contactData.email.label})}),(0,r.jsx)(l.nvN,{className:"col-md-5 px-md-2",children:(0,r.jsx)(l.gFv,{emphasis:!(0,x.ge)(a),children:i?.contacts?.email||""})})]}),(0,r.jsxs)("div",{"data-cs-mask":!0,className:"pb-2 row px-3 px-md-5",children:[(0,r.jsx)(l.nvN,{className:"col-md-7 px-md-5",children:(0,r.jsx)(l.gFv,{emphasis:(0,x.ge)(a),children:t.additionalInfo.contactData.contactAddressInCz.label})}),(0,r.jsx)(l.nvN,{className:"col-md-5 px-md-2",children:(0,r.jsx)(l.gFv,{emphasis:!(0,x.ge)(a),children:function(e,n){if(void 0===e)return"";let i=B(e,n);return`${i?.street} ${i?.streetNumber}, ${i?.city}, ${i?.zipCode}`}(i?.contacts?.addresses,"SECONDARY_RESIDENCE")})})]})]})]})};var k=i(9918);let T=e=>{let{clientDetail:n}=e,{offerApi:i}=(0,N.VDw)(),{device:a}=(0,x.iP)(),[s,o]=(0,d.useState)(!1),{control:c,formState:{errors:m},watch:p,setValue:h}=(0,E.Gc)(),{t:j}=(0,f.$)(["application"]),I=(0,y.ZV)();async function b(e){try{!s&&e.target.checked&&(await i.sendModelation({offerId:I.data.id,productId:N.IlD.K1Fn,requiredByClient:!1}),o(!0))}catch(e){console.error(e),o(!1)}}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{className:"px-md-5 py-md-0",children:(0,r.jsxs)(l.X2j,{className:"align-items-center",children:[(0,r.jsx)("div",{className:"ml-3 mr-2",children:(0,r.jsx)(l.JO$,{icon:l.JO$.ICON.THUMB_UP,color:l.JO$.COLOR.BLUE_400,size:(0,x.ge)(a)?l.JO$.SIZE.SIZE_24:l.JO$.SIZE.SIZE_16})}),(0,r.jsx)("div",{className:"pt-1 h-4",children:(0,r.jsx)(l.X6q,{level:3,children:t.additionalInfo.inputs.confirmationsAndAgreements.title})})]})}),(0,r.jsxs)(u,{className:"px-3 px-md-5 py-md-0",children:[(0,r.jsx)("div",{className:"row col-12 px-md-5 pb-md-2",children:(0,r.jsx)(l.nvN,{children:(0,r.jsx)(k.c,{t:j,i18nKey:t.additionalInfo.inputs.confirmationsAndAgreements.marketingCommunicationConsent.description})})}),(0,r.jsx)("div",{className:"row col-12 px-md-4",children:(0,r.jsx)(E.Qr,{name:"marketingCommunicationConsent",control:c,render:e=>{let{field:n}=e;return(0,r.jsx)(l.WiK,{defaultChecked:!1,...n,inputProps:{innerRef:n.ref,ref:void 0},labelColumnWidth:0,error:m.confirmation?.message!==void 0?t.additionalInfo.inputs.confirmationsAndAgreements.marketingCommunicationConsent.confirmationNotCheckedErrorMessage:void 0,input:e=>(0,r.jsx)("div",{className:"px-md-2",children:(0,r.jsx)(l.I07,{name:n.name,"data-cy":"checkbox/nechci-obchodn\xed-sdělen\xed",onChange:function(){for(var e=arguments.length,i=Array(e),a=0;a<e;a++)i[a]=arguments[a];n.onChange(...i),i[0].target.checked&&h("thirdPartyPropositionConsent",!1)},checked:!0===e.value,label:t.additionalInfo.inputs.confirmationsAndAgreements.marketingCommunicationConsent.label})}),ref:void 0})}})})]}),(0,r.jsx)(u,{className:"px-3 px-md-5 py-md-0",children:(0,r.jsx)("div",{className:"row col-12 px-md-4",children:(0,r.jsx)(v.uz,{required:!0,"data-cy":"nab\xeddky-na-m\xedru?",name:"thirdPartyPropositionConsent",label:t.additionalInfo.inputs.confirmationsAndAgreements.thirdPartyPropositionConsent.label,labelYes:t.additionalInfo.inputs.confirmationsAndAgreements.thirdPartyPropositionConsent.yes,labelNo:t.additionalInfo.inputs.confirmationsAndAgreements.thirdPartyPropositionConsent.no,disabled:!!p("marketingCommunicationConsent"),className:"px-md-2",classNameInput:" pt-2  pr-md-2 pt-md-0",labelColumnWidth:7})})}),(0,r.jsx)(l.Z0O,{}),(0,r.jsx)(u,{className:"px-3 px-md-5 py-md-0",children:(0,r.jsx)("div",{className:"row col-12 px-md-4",children:(0,r.jsx)(E.Qr,{name:"confirmationEmail",control:c,render:e=>{let{field:i}=e;return(0,r.jsx)(l.WiK,{defaultChecked:!1,labelColumnWidth:0,error:m.confirmationEmail?.message!==void 0?t.additionalInfo.inputs.confirmationEmail.confirmationEmailNotCheckedErrorMessage:void 0,input:e=>(0,r.jsx)("div",{"data-cs-mask":!0,className:"px-md-2",children:(0,r.jsx)(l.I07,{name:i.name,"data-cy":"checkbox/zasl\xe1n\xed-modelace",onChange:e=>{i.onChange(e),b(e)},checked:!0===e.value,label:t.additionalInfo.inputs.confirmationEmail.label+n?.contacts?.email})})})}})})})]})};var A=i(90392);let R=e=>{let{children:n,className:i}=e,{device:a}=(0,x.iP)();return(0,x.ge)(a)?(0,r.jsx)("div",{className:i,children:n}):(0,r.jsx)(l.umT,{children:n})};function w(e){let{device:n}=(0,x.iP)(),{t:i}=(0,f.$)();return(0,r.jsx)(r.Fragment,{children:(0,x.ge)(n)?(0,r.jsx)(R,{className:"px-md-4",children:(0,r.jsx)(u,{className:"px-md-5 ",children:(0,r.jsxs)(l.d5E,{style:{display:"flex",justifyContent:"center",marginTop:"0"},children:[(0,r.jsx)(A.j,{backLink:e?.backLink}),(0,r.jsx)(v.Mm,{disabled:!e?.canContinue,children:i("buttons.continue")})]})})}):(0,r.jsx)("div",{className:"px-2 pb-3",children:(0,r.jsx)(v.Mm,{disabled:!e?.canContinue,children:i("buttons.continue")})})})}let S=()=>{let{control:e,formState:{errors:n}}=(0,E.Gc)(),{t:i}=(0,f.$)(["application"]),a=(0,E.qo)({name:"incomeType"}),s=U(),d=G(),o=i("additionalInfo.inputs.legalEssentials.politicallyExposedPerson.warning",{returnObjects:!0}),m=i("additionalInfo.inputs.legalEssentials.fromHighRiskCountry.warning",{returnObjects:!0}),p=c();return(0,r.jsxs)(r.Fragment,{children:[(s||!p&&d)&&(0,r.jsx)("div",{className:"row px-md-5",children:(0,r.jsxs)(l.bZj,{variant:l.bZj.VARIANT.WARNING,children:[s&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("strong",{children:o.header}),(0,r.jsx)("ul",{children:(p?o.items:[o.items[0]]).map(e=>(0,r.jsx)("li",{className:"py-0",children:e.value},e.key))})]}),d&&!s&&!p&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("strong",{children:m.header}),(0,r.jsx)(l.nvN,{children:m.items[0].value})]})]})}),(0,r.jsx)("div",{className:"row px-md-4 ",children:(0,r.jsx)(E.Qr,{name:"incomeType",control:e,render:e=>{let{field:i}=e;return(0,r.jsx)(l.WiK,{className:"px-md-2 align-items-start",label:t.additionalInfo.inputs.legalEssentials.incomeType.whichIncomeType.label,labelColumnWidth:7,...i,inputProps:{innerRef:i.ref,ref:void 0},required:!0,input:e=>(0,r.jsxs)("div",{className:" py-0 pr-md-0 pt-2 pt-md-0",children:[(0,r.jsx)(l.COr,{...i,className:"my-2","data-cy":"hrazen\xed/z\xe1visl\xe1-činnost",toggled:"MAIN"===e.value,type:l.COr.TYPE.RADIO,name:"incomeType",value:t.additionalInfo.inputs.legalEssentials.incomeType.whichIncomeType.items[0].value,label:t.additionalInfo.inputs.legalEssentials.incomeType.whichIncomeType.items[0].label,ref:void 0}),(0,r.jsx)(l.COr,{...i,className:"my-2","data-cy":"hrazen\xed/podnik\xe1n\xed",toggled:"SELF_EMPLOYED"===e.value,type:l.COr.TYPE.RADIO,name:"incomeType",value:t.additionalInfo.inputs.legalEssentials.incomeType.whichIncomeType.items[1].value,label:t.additionalInfo.inputs.legalEssentials.incomeType.whichIncomeType.items[1].label,ref:void 0}),(0,r.jsx)(l.COr,{...i,className:"mt-2","data-cy":"hrazen\xed/jin\xfd-zdroj",toggled:"OTHER"===e.value,type:l.COr.TYPE.RADIO,name:"incomeType",value:t.additionalInfo.inputs.legalEssentials.incomeType.whichIncomeType.items[2].value,label:t.additionalInfo.inputs.legalEssentials.incomeType.whichIncomeType.items[2].label,ref:void 0}),n.incomeType?.message!==void 0&&(0,r.jsx)(l.bZj,{size:l.bZj.SIZE.SMALL,children:t.additionalInfo.inputs.legalEssentials.incomeType.incomeTypeErrorMessage})]}),ref:void 0})}})}),H(a)&&(0,r.jsx)("div",{className:"row px-md-4",children:(0,r.jsx)(E.Qr,{name:"otherIncomeType",control:e,render:e=>{let{field:i}=e;return(0,r.jsx)(l.WiK,{className:"px-md-2","data-cy":"z-jak\xe9ho-zdroje?",label:t.additionalInfo.inputs.legalEssentials.incomeType.whichIncomeType.otherIncomeType.label,inputProps:{innerRef:i.ref,ref:void 0},labelColumnWidth:7,optionalLabel:"",...i,input:e=>(0,r.jsxs)("div",{className:"col py-0 pr-md-0 pt-2 pt-md-0",children:[(0,r.jsx)(l.oil,{...e}),n.otherIncomeType?.message!==void 0&&(0,r.jsx)(l.bZj,{children:t.additionalInfo.inputs.legalEssentials.incomeType.whichIncomeType.otherIncomeType.isOtherIncomeTypeEmptyErrorMessage})]}),ref:void 0})}})})]})};function F(){let{control:e}=(0,E.Gc)(),n=(0,E.qo)({name:"discrepanciesInInsuranceNeeds"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"row px-md-4 ",children:(0,r.jsx)(v.uz,{name:"discrepanciesInInsuranceNeeds","data-cy":"nesrovnalosti?",className:"px-md-2",classNameInput:" pt-2  pr-md-2 pt-md-0",label:t.additionalInfo.inputs.legalEssentials.discrepanciesInInsuranceNeeds.label,labelYes:"Ano",labelNo:"Ne",labelColumnWidth:7,errorMessage:t.additionalInfo.inputs.legalEssentials.politicallyExposedPerson.ispoliticallyExposedPersonEmptyErrorMessage,required:!0})}),n&&(0,r.jsx)("div",{className:"row px-md-4 ",children:(0,r.jsx)(E.Qr,{name:"discrepanciesInInsuranceNeedsText",control:e,render:e=>{let{field:n}=e;return(0,r.jsx)(l.WiK,{className:" mb-0","data-cy":"nesrovnalosti/jak\xe9?",...n,inputProps:{innerRef:n.ref,ref:void 0},placeholder:t.additionalInfo.inputs.legalEssentials.discrepanciesInInsuranceNeeds.which.placeholder,labelPosition:l.WiK.LABEL_POSITION.ABOVE,input:e=>(0,r.jsxs)("div",{className:"row px-md-4",children:[(0,r.jsx)("div",{className:"col-12 col-md-7 px-md-0 "}),(0,r.jsx)("div",{className:"col-12 col-md-5 pl-md-3 pr-md-0 pt-2 pt-md-0",children:(0,r.jsx)("div",{className:"pl-md-0",children:(0,r.jsx)(v.oi,{...e,maxLength:50})})})]}),ref:void 0})}})})]})}let Z=()=>{let{device:e}=(0,x.iP)(),{control:n}=(0,E.Gc)(),i=(0,E.qo)({name:"politicallyExposedPerson"}),a=(0,E.qo)({name:"fromHighRiskCountry"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u,{className:"px-md-5 py-md-0",children:(0,r.jsxs)(l.X2j,{className:"align-items-center",children:[(0,r.jsx)("div",{className:"ml-3 mr-2",children:(0,r.jsx)(l.JO$,{icon:l.JO$.ICON.TEMPLATE,color:l.JO$.COLOR.BLUE_400,size:(0,x.ge)(e)?l.JO$.SIZE.SIZE_24:l.JO$.SIZE.SIZE_16})}),(0,r.jsx)("div",{className:"pt-1 h-4",children:(0,r.jsx)(l.X6q,{level:3,children:t.additionalInfo.inputs.legalEssentials.title})})]})}),(0,r.jsxs)(u,{className:"px-md-5 py-md-0",children:[(0,r.jsx)("div",{className:"row px-md-3 ",children:(0,r.jsx)("div",{className:"row px-md-2 align-items-center",children:(0,r.jsx)(v.uz,{required:!0,name:"politicallyExposedPerson","data-cy":"politicky-exponovan\xe1-osoba?",className:"px-md-2",classNameInput:" pt-2  pr-md-2 pt-md-0",labelYes:"Ano",labelNo:"Ne",labelColumnWidth:7,label:t.additionalInfo.inputs.legalEssentials.politicallyExposedPerson.label,errorMessage:t.additionalInfo.inputs.legalEssentials.politicallyExposedPerson.ispoliticallyExposedPersonEmptyErrorMessage})})}),(i||a)&&(0,r.jsx)(S,{})]}),(0,r.jsx)(u,{className:"px-md-5 py-md-0",children:(0,r.jsx)(F,{})}),(0,r.jsx)(u,{className:"px-md-5 py-md-0",children:(0,r.jsx)("div",{className:"row px-md-4 ",children:(0,r.jsx)(E.Qr,{name:"otherReasonForInsurance",control:n,render:e=>{let{field:n}=e;return(0,r.jsx)(l.WiK,{className:" mb-0","data-cy":"dalš\xed-\xfačel",...n,inputProps:{innerRef:n.ref,ref:void 0},labelPosition:l.WiK.LABEL_POSITION.ABOVE,input:e=>(0,r.jsxs)("div",{className:"row px-md-4",children:[(0,r.jsx)("div",{className:"col-12 col-md-7 px-md-0 ",children:(0,r.jsx)(l.nvN,{className:"mb-1 pt-md-0 align-items-start",children:(0,r.jsx)(l.gFv,{emphasis:!0,children:t.additionalInfo.inputs.legalEssentials.additionalPurpose.title})})}),(0,r.jsx)("div",{className:"col-12 col-md-5 pl-md-3 pr-md-0 pt-2 pt-md-0",children:(0,r.jsxs)("div",{className:"pl-md-0",children:[(0,r.jsx)(l.oil,{...e,maxLength:50}),(0,r.jsx)(l.nvN,{small:!0,faded:!0,className:"pt-0 mt-0",children:"Nepovinn\xfd \xfadaj"})]})})]}),ref:void 0})}})})})]})},D=()=>{let{device:e}=(0,x.iP)();return(0,r.jsx)(r.Fragment,{children:(0,x.ge)(e)&&(0,r.jsx)(R,{className:"py-md-0",children:(0,r.jsx)(u,{className:"d-none d-md-block pt-md-3 pb-md-2",padded:!0,children:(0,r.jsx)(l.X6q,{"data-cy":"nadpis-str\xe1nky",className:"",level:2,style:{fontSize:20,textAlign:"center"},children:t.additionalInfo.title})})})})},_=e=>{let{children:n,footer:i}=e,{device:a}=(0,x.iP)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{style:{backgroundColor:"white",borderRadius:"8px",marginTop:0,marginBottom:"10px"},className:`px-2 ${(0,x.ge)(a)?" d-md-block px-md-0 ":"bg-transparent"}`,children:[d.Children.count(n)?n.map((e,i)=>i===n.length-1?e:(0,r.jsx)("div",{children:e},"container-item-"+i)):n,(0,x.ge)(a)&&(0,r.jsx)(r.Fragment,{children:i})]}),!(0,x.ge)(a)&&i]})},L=e=>{let{children:n}=e,{device:i}=(0,x.iP)();return(0,r.jsx)(r.Fragment,{children:(0,x.ge)(i)?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z0O,{}),n?.map((e,i)=>i===n.length-1?e:r.jsxs("div",{children:[e,r.jsx("div",{style:{paddingLeft:"105px",paddingRight:"105px"},children:r.jsx(l.Z0O,{})})]},"main-section-item-"+i)),(0,r.jsx)(l.Z0O,{})]}):n})};var $=i(69183),q=i(5632);let{additionalInfo:z}=t;function B(e,n){if(void 0!==e)return e.find(e=>e.type===n)}var M=i(55830),J=i(62350),W=i(51241),K=i(6812),X=i(44801),V=i(24511);function Y(e){return"OTHER"===e}function H(e){return"OTHER"===e}let Q=V.Ry({beneficiary:V.Z_().oneOf(t.additionalInfo.inputs.beneficiary.items.map(e=>{let{value:n}=e;return n})).required(t.validationTexts.boolean.required),beneficiaryOtherPersonFirstName:V.Z_().transform(e=>e.trim()).when("beneficiary",{is:Y,then:x.vq}),beneficiaryOtherPersonLastName:V.Z_().transform(e=>e.trim()).when("beneficiary",{is:Y,then:x.vq}),beneficiaryOtherPersonDateOfBirth:V.Z_().transform(e=>(function(e){e=e.replace(/\s/g,"");let n=e.split(".").reverse();return n.join("-")})(e)).min(10).max(10).when("beneficiary",{is:Y,then:e=>(0,x.vq)(e,t.additionalInfo.inputs.beneficiary.otherPerson.isBeneficiaryDateOfBirthEmptyErrorMessage)}),fromHighRiskCountry:V.O7(),politicallyExposedPerson:V.O7().required(t.additionalInfo.inputs.legalEssentials.politicallyExposedPerson.ispoliticallyExposedPersonEmptyErrorMessage),incomeType:V.Z_().oneOf(t.additionalInfo.inputs.legalEssentials.incomeType.whichIncomeType.items.map(e=>{let{value:n}=e;return n})).when(["politicallyExposedPerson","fromHighRiskCountry"],{is:(e,n)=>e||n,then:x.vq}),otherIncomeType:V.Z_().when("incomeType",{is:H,then:V.Z_().required()}),discrepanciesInInsuranceNeeds:V.O7().required(t.validationTexts.boolean.required),discrepanciesInInsuranceNeedsText:V.Z_().when("discrepanciesInInsuranceNeeds",{is:!0,then:e=>(0,x.vq)(e,t.validationTexts.string.required)}),otherReasonForInsurance:V.Z_(),marketingCommunicationConsent:V.O7().default(!1),thirdPartyPropositionConsent:V.O7().required(t.additionalInfo.inputs.confirmationsAndAgreements.thirdPartyPropositionConsent.thirdPartyPropositionConsentErrorMessage).when("marketingCommunicationConsent",{is:!0,then:V.O7().oneOf([!1],t.additionalInfo.inputs.confirmationsAndAgreements.thirdPartyPropositionConsent.mustBeNoErrorMessage)}),confirmationEmail:V.O7().required().oneOf([!0])}).required();function U(){return(0,E.qo)({name:"politicallyExposedPerson"})}function G(){return(0,E.qo)({name:"fromHighRiskCountry"})}let{additionalInfo:ee}=t,{additionalInfo:en}=t;var ei=()=>{let{push:e}=(0,q.useRouter)(),{device:n}=(0,x.iP)(),i=(0,N.pqS)({checkAmlProfile:!0}),[a,s]=(0,d.useState)(!1),t=function(){let e=(0,W.Hi)(),{token:n}=(0,W.aC)(e),i=(0,y.ZV)(),a=(0,N.BSe)(),s=(0,N.mc1)(),r=function(){let{offerApi:e}=(0,N.VDw)(),n=(0,M.NL)();return(0,J.D)({mutationKey:["beneficiaries"],mutationFn:n=>e.putBeneficiaries(n),onSuccess(e){n.setQueryData(["beneficiaries"],e,{})},useErrorBoundary:!0})}(),t=function(){let{offerApi:e}=(0,N.VDw)(),n=(0,M.NL)();return(0,J.D)({mutationKey:["clientData"],mutationFn:n=>e.putAdditionalClientData(n),onSuccess(e){n.setQueryData(["clientData"],e,{})},useErrorBoundary:!0})}(),l=(0,W.zC)({checkAmlProfile:!0}),d=function(){let{offerApi:e}=(0,N.VDw)(),n=(0,M.NL)();return(0,J.D)({mutationKey:["signOffer"],mutationFn:n=>e.signOffer(n),onSuccess(e){n.setQueryData(["signOffer"],e,{})},useErrorBoundary:!0})}(),o=window.location.origin,c=window.btoa(`${o}/novaflexi/sign?productId=${N.leK.K1Fn}&offerId=${i.data?.id}#access_token={tokenx}`),{handleSubmit:m,...p}=(0,E.cI)({resolver:(0,K.X)(Q)}),h=async o=>{if(!n)return;let m=i.data.id,p=function(e){let n=[];return!0===e.politicallyExposedPerson&&n.push("politicallyExposedPerson"),!1===e.marketingCommunicationConsent&&n.push("marketingCommunicationConsent"),!0===e.thirdPartyPropositionConsent&&n.push("thirdPartyPropositionConsent"),n}(o),h={productId:N.jO1.K1Fn,offerId:m,beneficiaries:{beneficiaries:[{type:o.beneficiary,...Y(o.beneficiary)&&{name:`${o.beneficiaryOtherPersonFirstName} ${o.beneficiaryOtherPersonLastName}`},percentage:100,...Y(o.beneficiary)&&{birthDate:new Date(o.beneficiaryOtherPersonDateOfBirth)}}]}},u={productId:N.jO1.K1Fn,offerId:m,offersAdditionalClientData:{insured:[{type:"MYSELF",contacts:{address:B(l.data?.contacts?.addresses,"SECONDARY_RESIDENCE"),email:l?.data?.contacts?.email,phone:{countryCallingCode:"+420",phoneNumber:l.data.contacts.phone}}}],...(!0===o.politicallyExposedPerson||!0===o.fromHighRiskCountry)&&{incomeSource:{type:o.incomeType,...H(o.incomeType)&&{description:o.otherIncomeType},other:H(o.incomeType)}},...o.otherReasonForInsurance&&{otherReasonForInsurance:o.otherReasonForInsurance},...o.discrepanciesInInsuranceNeeds&&{discrepanciesInInsuranceNeeds:o.discrepanciesInInsuranceNeedsText},...p.length>0&&{flags:p}}},f=await r.mutateAsync(h),j=await t.mutateAsync(u);return await d.mutateAsync({productId:N.leK.K1Fn,branch:a.data?.branch?a.data.branch:s.data.branches[0]?.id,offerId:m,channel:N.yHi.Tablet}).then(i=>{let a=n?.toString().startsWith("3/")||n?.toString().startsWith("adfs_");if(a)x(i,m);else{let a=JSON.parse(atob(n?.split(".")[1]));"urn:csas:apps:flexi_tablet"===a.appid?x(i,m):window.location.href=`${e?.signUrlTablet}?applicationId=FLEXI_N&productId=${N.leK.K1Fn}&offerId=${m}&bufferId=${i.id}&returnUrl=${c}#access_token={tokenx}`}}),{beneficiaries:f,additionalClientData:j}};function x(n,i){window.location.href=`${e?.signUrlDesktop}?applicationId=FLEXI&bufferId=${n.id}&productId=K_1FN&offerId=${i}&branchId=${a.data?.branch?a.data.branch:s.data.branches[0]?.id}`}return(0,X.Z)("form.additionalInfo",p),{handleSubmit:m,handleSubmitWithValidation:m(h),...p}}(),{handleSubmitWithValidation:o,setValue:c}=t;function m(){return!!i.data&&!i.data?.contacts?.phone||i?.data?.contacts?.addresses!==void 0&&B(i?.data?.contacts?.addresses,"SECONDARY_RESIDENCE")?.country!=="CZ"}(0,d.useEffect)(()=>{window.scrollTo(0,0)},[]);let p=(0,d.useCallback)(i=>{let a=(0,x.ge)(n);"CZ"===i||a||(console.log("redirect"),e($.Xv.CONTACTADDRESSNOTINCZ))},[e,n]);return(0,d.useEffect)(()=>{if(void 0!==i.data&&!a){s(!0);let e=(i.data.flags||[]).includes(N.UYR.FromHighRiskCountry);c("fromHighRiskCountry",e),p(B(i?.data?.contacts?.addresses,"SECONDARY_RESIDENCE")?.country)}},[p,i,a,c]),(0,r.jsxs)("div",{className:"no-gutters fixed-width",children:[m()&&(0,r.jsx)(l.bZj,{icon:l.bZj.ICON.ERROR_CIRCLE,children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-9",children:[(0,r.jsx)(l.X6q,{level:3,children:z.contactData.alert.header}),(0,r.jsxs)(l.nvN,{children:[" ",z.contactData.alert.check]}),(0,r.jsx)("ul",{children:z.contactData.alert.items.map(e=>(0,r.jsx)(l.nvN,{className:"py-0",children:(0,r.jsx)("li",{children:e.value})},e.value))})]}),(0,r.jsx)("div",{className:"col-3",children:(0,r.jsx)(l.zxk,{onClick:()=>i.refetch(),variant:l.zxk.VARIANT.SECONDARY,children:z.contactData.alert.buttonLabel})})]})}),(0,r.jsx)(E.RV,{...t,children:(0,r.jsx)(l.l09,{onSubmit:o,children:(0,r.jsxs)(_,{footer:(0,r.jsx)(w,{canContinue:!m(),backLink:$.Xv.MEDICALQUESTIONNAIRERESULTS}),children:[(0,r.jsx)(D,{}),(0,r.jsxs)(L,{children:[(0,r.jsx)(R,{className:"px-md-4 py-md-2",children:(0,r.jsx)(P,{clientDetail:i.data})}),(0,r.jsx)(R,{className:"px-md-4 py-md-2",children:(0,r.jsx)(C,{})}),(0,r.jsx)(R,{className:"px-md-4 py-md-2",children:(0,r.jsx)(Z,{})}),(0,r.jsx)(R,{className:"px-md-4 py-md-2",children:(0,r.jsx)(g,{})}),(0,r.jsx)(R,{className:"px-md-4 py-md-2",children:(0,r.jsx)(T,{clientDetail:i.data})})]})]})})})]})}}},function(e){e.O(0,[57643,49774,92888,40179],function(){return e(e.s=27902)}),_N_E=e.O()}]);