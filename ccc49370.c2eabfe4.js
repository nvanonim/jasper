(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{168:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(174),m=t(177),i=t(172);var c=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Previous Post"),r.a.createElement("div",{className:"pagination-nav__link--label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Next Post"),r.a.createElement("div",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=a.frontMatter,n=a.metadata,i=n.title,s=n.description,o=n.nextItem,v=n.prevItem,g=n.editUrl;return r.a.createElement(l.a,{title:i,description:s},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--8 col--offset-2"},r.a.createElement(m.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,g&&r.a.createElement("a",{href:g,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(o||v)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(c,{nextItem:o,prevItem:v}))))))}},177:function(e,a,t){"use strict";t(75);var n=t(0),r=t.n(n),l=t(173),m=t.n(l),i=t(171),c=t(172),s=t(179),o=t(131),v=t.n(o),g=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,l,o,E=e.children,u=e.frontMatter,d=e.metadata,p=e.truncated,_=e.isBlogPostPage,h=void 0!==_&&_,N=d.date,b=d.permalink,f=d.tags,k=d.readingTime,w=u.author,x=u.title,I=u.author_url||u.authorURL,M=u.author_title||u.authorTitle,P=u.author_image_url||u.authorImageURL;return r.a.createElement("article",{className:h?void 0:"margin-bottom--xl"},(a=h?"h1":"h2",t=N.substring(0,10).split("-"),n=t[0],l=g[parseInt(t[1],10)-1],o=parseInt(t[2],10),r.a.createElement("header",null,r.a.createElement(a,{className:m()("margin-bottom--sm",v.a.blogPostTitle)},h?x:r.a.createElement(c.a,{to:b},x)),r.a.createElement("div",{className:"margin-vert--md"},r.a.createElement("time",{dateTime:N,className:v.a.blogPostDate},l," ",o,", ",n," ",k&&r.a.createElement(r.a.Fragment,null," \xb7 ",Math.ceil(k)," min read"))),r.a.createElement("div",{className:"avatar margin-vert--md"},P&&r.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:I,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("img",{src:P,alt:w})),r.a.createElement("div",{className:"avatar__intro"},w&&r.a.createElement(r.a.Fragment,null,r.a.createElement("h4",{className:"avatar__name"},r.a.createElement("a",{href:I,target:"_blank",rel:"noreferrer noopener"},w)),r.a.createElement("small",{className:"avatar__subtitle"},M)))))),r.a.createElement("section",{className:"markdown"},r.a.createElement(i.a,{components:s.a},E)),(f.length>0||p)&&r.a.createElement("footer",{className:"row margin-vert--lg"},f.length>0&&r.a.createElement("div",{className:"col"},r.a.createElement("strong",null,"Tags:"),f.map((function(e){var a=e.label,t=e.permalink;return r.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),p&&r.a.createElement("div",{className:"col text--right"},r.a.createElement(c.a,{to:d.permalink,"aria-label":"Read more about "+x},r.a.createElement("strong",null,"Read More")))))}}}]);