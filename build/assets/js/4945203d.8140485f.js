(self.webpackChunkionic_docs=self.webpackChunkionic_docs||[]).push([[1744],{32895:function(n,e,t){"use strict";t.r(e),t.d(e,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),l=t(41395),p=t(58215),o={title:"ion-spinner",demoUrl:"/docs/demos/api/spinner/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/spinner/index.html"},s={unversionedId:"api/spinner",id:"api/spinner",isDocsHomePage:!1,title:"ion-spinner",description:"The Spinner component provides a variety of animated SVG spinners. Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on.",source:"@site/docs/api/spinner.md",sourceDirName:"api",slug:"/api/spinner",permalink:"/docs/api/spinner",editUrl:"https://github.com/ionic-team/ionic-docs/edit/main/docs/api/spinner.md",version:"current",frontMatter:{title:"ion-spinner",demoUrl:"/docs/demos/api/spinner/index.html",demoSourceUrl:"https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/spinner/index.html"},sidebar:"api",previous:{title:"ion-skeleton-text",permalink:"/docs/api/skeleton-text"},next:{title:"ion-radio",permalink:"/docs/api/radio"}},d=[{value:"Usage",id:"usage",children:[]},{value:"Properties",id:"properties",children:[{value:"color",id:"color",children:[]},{value:"duration",id:"duration",children:[]},{value:"name",id:"name",children:[]},{value:"paused",id:"paused",children:[]}]},{value:"CSS Custom Properties",id:"css-custom-properties",children:[]}],m={toc:d};function u(n){var e=n.components,t=(0,r.Z)(n,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Spinner component provides a variety of animated SVG spinners. Spinners are visual indicators that the app is loading content or performing another process that the user needs to wait on."),(0,i.kt)("p",null,"The default spinner to use is based on the platform. The default spinner for ",(0,i.kt)("inlineCode",{parentName:"p"},"ios")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"lines"'),", and the default for ",(0,i.kt)("inlineCode",{parentName:"p"},"android")," is ",(0,i.kt)("inlineCode",{parentName:"p"},'"crescent"'),". If the platform is not ",(0,i.kt)("inlineCode",{parentName:"p"},"ios")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"android"),", the spinner will default to ",(0,i.kt)("inlineCode",{parentName:"p"},"crescent"),". If the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," property is set, then that spinner will be used instead of the platform specific spinner."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)(l.Z,{defaultValue:"angular",values:[{value:"angular",label:"ANGULAR"},{value:"javascript",label:"JAVASCRIPT"},{value:"react",label:"REACT"},{value:"stencil",label:"STENCIL"},{value:"vue",label:"VUE"}],mdxType:"Tabs"},(0,i.kt)(p.Z,{value:"angular",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Spinner --\x3e\n<ion-spinner></ion-spinner>\n\n\x3c!-- Lines --\x3e\n<ion-spinner name="lines"></ion-spinner>\n\n\x3c!-- Lines Small --\x3e\n<ion-spinner name="lines-small"></ion-spinner>\n\n\x3c!-- Dots --\x3e\n<ion-spinner name="dots"></ion-spinner>\n\n\x3c!-- Bubbles --\x3e\n<ion-spinner name="bubbles"></ion-spinner>\n\n\x3c!-- Circles --\x3e\n<ion-spinner name="circles"></ion-spinner>\n\n\x3c!-- Crescent --\x3e\n<ion-spinner name="crescent"></ion-spinner>\n\n\x3c!-- Paused Default Spinner --\x3e\n<ion-spinner paused></ion-spinner>\n'))),(0,i.kt)(p.Z,{value:"javascript",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Default Spinner --\x3e\n<ion-spinner></ion-spinner>\n\n\x3c!-- Lines --\x3e\n<ion-spinner name="lines"></ion-spinner>\n\n\x3c!-- Lines Small --\x3e\n<ion-spinner name="lines-small"></ion-spinner>\n\n\x3c!-- Dots --\x3e\n<ion-spinner name="dots"></ion-spinner>\n\n\x3c!-- Bubbles --\x3e\n<ion-spinner name="bubbles"></ion-spinner>\n\n\x3c!-- Circles --\x3e\n<ion-spinner name="circles"></ion-spinner>\n\n\x3c!-- Crescent --\x3e\n<ion-spinner name="crescent"></ion-spinner>\n\n\x3c!-- Paused Default Spinner --\x3e\n<ion-spinner paused></ion-spinner>\n'))),(0,i.kt)(p.Z,{value:"react",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from \'react\';\nimport { IonSpinner, IonContent } from \'@ionic/react\';\n\nexport const SpinnerExample: React.FC = () => (\n  <IonContent>\n    {/*-- Default Spinner --*/}\n    <IonSpinner />\n\n    {/*-- Lines --*/}\n    <IonSpinner name="lines" />\n\n    {/*-- Lines Small --*/}\n    <IonSpinner name="lines-small" />\n\n    {/*-- Dots --*/}\n    <IonSpinner name="dots" />\n\n    {/*-- Bubbles --*/}\n    <IonSpinner name="bubbles" />\n\n    {/*-- Circles --*/}\n    <IonSpinner name="circles" />\n\n    {/*-- Crescent --*/}\n    <IonSpinner name="crescent" />\n\n    {/*-- Paused Default Spinner --*/}\n    <IonSpinner paused />\n  </IonContent>\n);\n'))),(0,i.kt)(p.Z,{value:"stencil",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Component, h } from \'@stencil/core\';\n\n@Component({\n  tag: \'spinner-example\',\n  styleUrl: \'spinner-example.css\'\n})\nexport class SpinnerExample {\n  render() {\n    return [\n      // Default Spinner\n      <ion-spinner></ion-spinner>,\n\n      // Lines\n      <ion-spinner name="lines"></ion-spinner>,\n\n      // Lines Small\n      <ion-spinner name="lines-small"></ion-spinner>,\n\n      // Dots\n      <ion-spinner name="dots"></ion-spinner>,\n\n      // Bubbles\n      <ion-spinner name="bubbles"></ion-spinner>,\n\n      // Circles\n      <ion-spinner name="circles"></ion-spinner>,\n\n      // Crescent\n      <ion-spinner name="crescent"></ion-spinner>,\n\n      // Paused Default Spinner\n      <ion-spinner paused={true}></ion-spinner>\n    ];\n  }\n}\n'))),(0,i.kt)(p.Z,{value:"vue",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  \x3c!-- Default Spinner --\x3e\n  <ion-spinner></ion-spinner>\n\n  \x3c!-- Lines --\x3e\n  <ion-spinner name="lines"></ion-spinner>\n\n  \x3c!-- Lines Small --\x3e\n  <ion-spinner name="lines-small"></ion-spinner>\n\n  \x3c!-- Dots --\x3e\n  <ion-spinner name="dots"></ion-spinner>\n\n  \x3c!-- Bubbles --\x3e\n  <ion-spinner name="bubbles"></ion-spinner>\n\n  \x3c!-- Circles --\x3e\n  <ion-spinner name="circles"></ion-spinner>\n\n  \x3c!-- Crescent --\x3e\n  <ion-spinner name="crescent"></ion-spinner>\n\n  \x3c!-- Paused Default Spinner --\x3e\n  <ion-spinner paused></ion-spinner>\n</template>\n\n<script>\nimport { IonSpinner } from \'@ionic/vue\';\nimport { defineComponent } from \'vue\';\n\nexport default defineComponent({\n  components: { IonSpinner }\n});\n<\/script>\n')))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"color"},"color"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"The color to use from your application's color palette.",(0,i.kt)("br",null),"Default options are: ",(0,i.kt)("inlineCode",{parentName:"td"},'"primary"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"secondary"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"tertiary"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"success"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"warning"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"danger"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"light"'),", ",(0,i.kt)("inlineCode",{parentName:"td"},'"medium"'),", and ",(0,i.kt)("inlineCode",{parentName:"td"},'"dark"'),".",(0,i.kt)("br",null),"For more information on colors, see ",(0,i.kt)("a",{parentName:"td",href:"/docs/theming/basics"},"theming"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"color"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h3",{id:"duration"},"duration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"Duration of the spinner animation in milliseconds. The default varies based on the spinner.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"duration"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number \\| undefined"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h3",{id:"name"},"name"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the SVG spinner to use. If a name is not provided, the platform's default",(0,i.kt)("br",null),"spinner will be used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"bubbles" \\| "circles" \\| "circular" \\| "crescent" \\| "dots" \\| "lines" \\| "lines-sharp" \\| "lines-sharp-small" \\| "lines-small" \\| undefined'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"undefined"))))),(0,i.kt)("h3",{id:"paused"},"paused"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Description")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"true"),", the spinner's animation will be paused.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Attribute")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"paused"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"Default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("h2",{id:"css-custom-properties"},"CSS Custom Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"--color")),(0,i.kt)("td",{parentName:"tr",align:null},"Color of the spinner")))))}u.isMDXComponent=!0}}]);