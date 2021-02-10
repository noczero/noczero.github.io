(this["webpackJsonpreact-frontend-dev-portfolio"]=this["webpackJsonpreact-frontend-dev-portfolio"]||[]).push([[0],{31:function(e,t,a){},32:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var s=a(1),i=a(14),n=a.n(i),c=(a(42),a(4)),r=a(5),o=a(8),l=a(7),d=a(24),j=a.n(d),h=(a(43),a(19)),m=a(26),u=a(29),p=a.n(u),b=a(0),f=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={checked:!1},e.onThemeSwitchChange=e.onThemeSwitchChange.bind(Object(h.a)(e)),e}return Object(r.a)(a,[{key:"onThemeSwitchChange",value:function(e){this.setState({checked:e}),this.setTheme()}},{key:"setTheme",value:function(){var e="data-theme",t=document.body,a="dark"===t.getAttribute(e)?"light":"dark";t.setAttribute(e,a)}},{key:"render",value:function(){if(this.props.sharedData)var e=this.props.sharedData.name,t=this.props.sharedData.titles.toUpperCase();return Object(b.jsx)("header",{id:"home",style:{height:window.innerHeight-140,display:"block"},children:Object(b.jsx)("div",{className:"row aligner",style:{height:"100%"},children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"iconify header-icon","data-icon":"la:laptop-code","data-inline":"false"}),Object(b.jsx)("br",{}),Object(b.jsx)("h1",{className:"mb-0",children:Object(b.jsx)(m.a,{steps:[e],wrapper:"p"})}),Object(b.jsx)(m.a,{className:"title-styles",steps:[t],wrapper:"p"}),Object(b.jsx)(p.a,{checked:this.state.checked,onChange:this.onThemeSwitchChange,offColor:"#baaa80",onColor:"#353535",className:"react-switch mx-auto",width:90,height:40,uncheckedIcon:Object(b.jsx)("span",{className:"iconify","data-icon":"twemoji:owl","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"20px",color:"#353239"}}),checkedIcon:Object(b.jsx)("span",{className:"iconify","data-icon":"noto-v1:sun-with-face","data-inline":"false",style:{display:"block",height:"100%",fontSize:25,textAlign:"end",marginLeft:"10px",color:"#353239"}}),id:"icon-switch"})]})})})})}}]),a}(s.Component),x=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e=this.props.sharedBasicInfo.social.map((function(e){return Object(b.jsx)("span",{className:"m-4",children:Object(b.jsx)("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",children:Object(b.jsx)("i",{className:e.class})})},e.name)}));return Object(b.jsx)("footer",{children:Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("div",{className:"social-links",children:e}),Object(b.jsx)("div",{className:"col-md-4"}),Object(b.jsx)("div",{className:"copyright py-4 text-center",children:Object(b.jsxs)("div",{className:"container",children:["Copyright \xa9"," ",this.props.sharedBasicInfo?this.props.sharedBasicInfo.name:"???",Object(b.jsx)("br",{}),Object(b.jsxs)("span",{className:"copyright",children:[" Made with ",Object(b.jsx)("span",{className:"fa fa-heartbeat",style:{color:"#f66767"}})," in Bandung, Indonesia"]})]})})]})})}}]),a}(s.Component),O=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(this.props.sharedBasicInfo)var e="images/"+this.props.sharedBasicInfo.image;if(this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.about,a=this.props.resumeBasicInfo.description_header,s=this.props.resumeBasicInfo.description;return Object(b.jsx)("section",{id:"about",children:Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("h1",{className:"display-1 font-weight-bold",children:t}),Object(b.jsxs)("div",{className:"row center mx-auto mb-5",children:[Object(b.jsx)("div",{className:"col-md-4 mb-5 center",children:Object(b.jsx)("div",{className:"polaroid",children:Object(b.jsx)("span",{style:{cursor:"auto"},children:Object(b.jsx)("img",{className:"img-fluid",height:"250px",src:e,alt:"Avatar placeholder"})})})}),Object(b.jsx)("div",{className:"col-md-8 center",children:Object(b.jsx)("div",{className:"col-md-10",children:Object(b.jsxs)("div",{className:"card",children:[Object(b.jsxs)("div",{className:"card-header",children:[Object(b.jsx)("span",{className:"iconify","data-icon":"emojione:red-circle","data-inline":"false"})," ","\xa0"," ",Object(b.jsx)("span",{className:"iconify","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",Object(b.jsx)("span",{className:"iconify","data-icon":"twemoji:green-circle","data-inline":"false"})]}),Object(b.jsxs)("div",{className:"card-body font-europa text-center ml-3 mr-3",style:{height:"auto",fontSize:"140%",lineHeight:"200%"},children:[Object(b.jsx)("br",{}),Object(b.jsxs)("span",{className:"wave",children:[a," You :) "]}),Object(b.jsx)("br",{}),Object(b.jsx)("br",{}),s,Object(b.jsx)("a",{href:"https://blog.zeroinside.in/?page_id=13",className:"btn btn-light font-europa",role:"button","data-bs-toggle":"button",children:" More ..."})]})]})})})]})]})})}}]),a}(s.Component),g=a(15),v=(a(28),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(this.props.resumeExperience&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.experience,t=this.props.resumeExperience.map((function(e,t){return Object(b.jsxs)(g.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.years,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:Object(b.jsx)("i",{className:"far fa-caret-square-down experience-icon m-2"}),children:[Object(b.jsx)("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"},children:e.title}),Object(b.jsx)("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"},children:e.company}),Object(b.jsx)("div",{className:"font-europa",style:{textAlign:"left",marginTop:"15px"},children:e.description})]},t)}));return Object(b.jsxs)("section",{id:"resume",className:"pb-5",children:[Object(b.jsx)("div",{className:"col-md-12 mx-auto",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsx)("h1",{className:"section-title font-weight-bold",style:{color:"black"},children:Object(b.jsx)("span",{className:"text-black",style:{textAlign:"center"},children:e})})})}),Object(b.jsx)("div",{className:"col-md-8 mx-auto",children:Object(b.jsxs)(g.VerticalTimeline,{children:[t,Object(b.jsx)(g.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:Object(b.jsx)("i",{className:"fas fa-hourglass-start mx-auto experience-icon m-2"})})]})})]})}}]),a}(s.Component)),y=a(27),N=a(78),w=a(30),k=a.n(w),I=a(31),B=a.n(I),S=a(32),A=a.n(S),L=(a(52),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(this.props.data){var e=this.props.data.technologies,t=this.props.data.images,a=this.props.data.title,s=this.props.data.description,i=this.props.data.url;if(this.props.data.technologies){var n=e.map((function(e,t){return Object(b.jsx)("li",{className:"list-inline-item mx-3",children:Object(b.jsx)("span",{children:Object(b.jsxs)("div",{className:"text-center",children:[Object(b.jsx)("i",{className:e.class,style:{fontSize:"300%"},children:"  "}),Object(b.jsx)("p",{className:"text-center",children:e.name})]})})},t)}));if(this.props.data.images)var c=t.map((function(e,t){return Object(b.jsx)("div",{"data-src":e},t)}))}}return Object(b.jsxs)(N.a,Object(y.a)(Object(y.a)({},this.props),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,className:"modal-inside",children:[Object(b.jsx)("span",{onClick:this.props.onHide,className:"modal-close",children:Object(b.jsx)("i",{className:"fas fa-times fa-3x close-icon"})}),Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsxs)("div",{className:"col-md-10 mx-auto",style:{paddingBottom:"50px"},children:[Object(b.jsxs)("div",{className:"slider-tab",children:[Object(b.jsx)("span",{className:"iconify slider-iconfiy","data-icon":"emojione:red-circle","data-inline":"false",style:{marginLeft:"5px"}})," ","\xa0"," ",Object(b.jsx)("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:yellow-circle","data-inline":"false"})," ","\xa0"," ",Object(b.jsx)("span",{className:"iconify slider-iconfiy","data-icon":"twemoji:green-circle","data-inline":"false"})]}),Object(b.jsx)(k.a,{cssModule:[B.a,A.a],animation:"scaleOutAnimation",className:"slider-image",children:c})]}),Object(b.jsxs)("div",{className:"col-md-10 mx-auto",children:[Object(b.jsxs)("h3",{style:{padding:"5px 5px 0 5px"},children:[a,i?Object(b.jsx)("a",{href:i,target:"_blank",rel:"noopener noreferrer",className:"link-href",children:Object(b.jsx)("i",{className:"fas fa-external-link-alt",style:{marginLeft:"10px"}})}):null]}),Object(b.jsx)("p",{className:"modal-description",children:s}),Object(b.jsx)("div",{className:"col-md-12 text-center",children:Object(b.jsx)("ul",{className:"list-inline mx-auto",children:n})})]})]})]}))}}]),a}(s.Component)),C=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={deps:{},detailsModalShow:!1},s}return Object(r.a)(a,[{key:"render",value:function(){var e=this;if(this.props.resumeProjects&&this.props.resumeBasicInfo)var t=this.props.resumeBasicInfo.section_name.projects,a=this.props.resumeProjects.map((function(t){return Object(b.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-4",style:{cursor:"pointer"},children:Object(b.jsx)("span",{className:"portfolio-item d-block",children:Object(b.jsx)("div",{className:"foto",onClick:function(){return a=t,void e.setState({detailsModalShow:!0,deps:a});var a},children:Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{className:"img-thumbnail",src:t.images[0],alt:"projectImages",height:"230",style:{marginBottom:0,paddingBottom:0,position:"relative"}}),Object(b.jsx)("span",{className:"project-date",children:t.startDate}),Object(b.jsx)("br",{}),Object(b.jsx)("p",{className:"project-title-settings mt-3",children:t.title})]})})})},t.title)}));return Object(b.jsx)("section",{id:"project",children:Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("h1",{className:"section-title font-weight-bold",style:{color:"black"},children:Object(b.jsx)("span",{children:t})}),Object(b.jsx)("div",{className:"col-md-12 mx-auto",children:Object(b.jsx)("div",{className:"row mx-auto",children:a})}),Object(b.jsx)(L,{show:this.state.detailsModalShow,onHide:function(){return e.setState({detailsModalShow:!1})},data:this.state.deps})]})})}}]),a}(s.Component),D=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(this.props.sharedSkills&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.skills,t=this.props.sharedSkills.map((function(e,t){var a=e.icons.map((function(e,t){return Object(b.jsx)("li",{className:"list-inline-item mx-3",children:Object(b.jsx)("span",{children:Object(b.jsx)("div",{className:"text-center skills-tile",children:Object(b.jsx)("i",{className:e.class,style:{fontSize:"220%"},children:Object(b.jsx)("p",{className:"font-europa text-center",style:{fontSize:"30%",marginTop:"4px"},children:e.name})})})})},t)}));return Object(b.jsxs)("div",{className:"text-white pt-3",children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsx)("ul",{className:"list-inline mx-auto skill-icon",children:a})]},t)}));return Object(b.jsx)("section",{id:"skills",children:Object(b.jsxs)("div",{className:"col-md-12",children:[Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsx)("h1",{className:"section-title",children:Object(b.jsx)("span",{className:"text-white font-weight-bold",children:e})})}),Object(b.jsx)("div",{className:"col-md-12 text-center",children:t})]})})}}]),a}(s.Component),_=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){if(this.props.resumeEducation&&this.props.resumeBasicInfo)var e=this.props.resumeBasicInfo.section_name.education,t=this.props.resumeEducation.map((function(e,t){return Object(b.jsxs)(g.VerticalTimelineElement,{className:"vertical-timeline-element--work",date:e.year,iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:Object(b.jsx)("i",{className:"far fa-caret-square-down experience-icon m-2"}),children:[Object(b.jsx)("h3",{className:"vertical-timeline-element-title",style:{textAlign:"left"},children:e.name}),Object(b.jsxs)("h4",{className:"vertical-timeline-element-subtitle",style:{textAlign:"left"},children:[Object(b.jsx)("hr",{}),Object(b.jsx)("small",{children:Object(b.jsx)("i",{className:"fa fa-building m-2","aria-hidden":"true"})}),e.university]})]},t)}));return Object(b.jsxs)("section",{id:"resume",className:"pb-5",children:[Object(b.jsx)("div",{className:"col-md-12 mx-auto",children:Object(b.jsx)("div",{className:"col-md-12",children:Object(b.jsx)("h1",{className:"section-title font-weight-bold",style:{color:"black"},children:Object(b.jsx)("span",{className:"text-black",style:{textAlign:"center"},children:e})})})}),Object(b.jsx)("div",{className:"col-md-8 mx-auto",children:Object(b.jsxs)(g.VerticalTimeline,{children:[t,Object(b.jsx)(g.VerticalTimelineElement,{iconStyle:{background:"#AE944F",color:"#fff",textAlign:"center"},icon:Object(b.jsx)("i",{className:"fas fa-hourglass-start mx-auto experience-icon m-2"})})]})})]})}}]),a}(s.Component),E=a(37),T=a.n(E),$=(a(72),function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this)).state={foo:"bar",resumeData:{},sharedData:{}},s}return Object(r.a)(a,[{key:"applyPickedLanguage",value:function(e,t){this.swapCurrentlyActiveLanguage(t),document.documentElement.lang=e;var a=document.documentElement.lang===window.$primaryLanguage?"res_primaryLanguage.json":"res_secondaryLanguage.json";this.loadResumeFromPath(a)}},{key:"swapCurrentlyActiveLanguage",value:function(e){var t=e===window.$primaryLanguageIconId?window.$secondaryLanguageIconId:window.$primaryLanguageIconId;document.getElementById(e).removeAttribute("filter","brightness(40%)"),document.getElementById(t).setAttribute("filter","brightness(40%)")}},{key:"componentDidMount",value:function(){this.loadSharedData(),this.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)}},{key:"loadResumeFromPath",value:function(e){j.a.ajax({url:e,dataType:"json",cache:!1,success:function(e){this.setState({resumeData:e})}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"loadSharedData",value:function(){j.a.ajax({url:"portfolio_shared_data.json",dataType:"json",cache:!1,success:function(e){this.setState({sharedData:e}),document.title="".concat(this.state.sharedData.basic_info.name)}.bind(this),error:function(e,t,a){alert(a)}})}},{key:"render",value:function(){var e=this;return this.state.loading?Object(b.jsx)(T.a,{type:"Puff",color:"#00BFFF",height:100,width:100,timeout:3e3}):Object(b.jsxs)("div",{children:[Object(b.jsx)(f,{sharedData:this.state.sharedData.basic_info}),Object(b.jsxs)("div",{className:"col-md-12 mx-auto text-center language",children:[Object(b.jsx)("div",{onClick:function(){return e.applyPickedLanguage(window.$primaryLanguage,window.$secondaryLanguageIconId)},style:{display:"inline"},children:Object(b.jsx)("span",{className:"iconify language-icon mr-5","data-icon":"twemoji-flag-for-flag-united-kingdom","data-inline":"false",id:window.$primaryLanguageIconId})}),Object(b.jsx)("div",{onClick:function(){return e.applyPickedLanguage(window.$secondaryLanguage,window.$primaryLanguageIconId)},style:{display:"inline"},children:Object(b.jsx)("span",{className:"iconify language-icon","data-icon":"twemoji-flag-for-flag-indonesia","data-inline":"false",id:window.$secondaryLanguageIconId})})]}),Object(b.jsx)(O,{resumeBasicInfo:this.state.resumeData.basic_info,sharedBasicInfo:this.state.sharedData.basic_info}),Object(b.jsx)(_,{resumeBasicInfo:this.state.resumeData.basic_info,resumeEducation:this.state.resumeData.education}),Object(b.jsx)(v,{resumeExperience:this.state.resumeData.experience,resumeBasicInfo:this.state.resumeData.basic_info}),Object(b.jsx)(C,{resumeProjects:this.state.resumeData.projects,resumeBasicInfo:this.state.resumeData.basic_info}),Object(b.jsx)(D,{sharedSkills:this.state.sharedData.skills,resumeBasicInfo:this.state.resumeData.basic_info}),Object(b.jsx)(x,{sharedBasicInfo:this.state.sharedData.basic_info})]})}}]),a}(s.Component)),P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(73);window.$primaryLanguage="en",window.$secondaryLanguage="pl",window.$primaryLanguageIconId="primary-lang-icon",window.$secondaryLanguageIconId="secondary-lang-icon",n.a.render(Object(b.jsx)($,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var s=a.headers.get("content-type");404===a.status||null!=s&&-1===s.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):F(t,e)}))}}()}},[[74,1,2]]]);
//# sourceMappingURL=main.3472098f.chunk.js.map