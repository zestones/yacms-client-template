import{c as m,j as e}from"./createLucideIcon.DKlEjG4v.js";import{o as h,a as u,s as i,u as j,C as N}from"./use-editable.CSA16oSk.js";import{r as c}from"./index.Bvk5EX3f.js";/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],w=m("chevron-down",k);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],S=m("menu",$);/**
 * @license lucide-react v0.556.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],C=m("x",M),E=h({label:i().describe("preview"),href:i(),dropdown:u(h({label:i().describe("preview"),href:i()})).optional()});h({logo:h({text:i(),href:i().optional(),image:i().describe("image").optional()}),links:u(E),cta:h({text:i(),href:i().optional()}).optional()});function L({data:s}){const r=j(s),[l,v]=c.useState(!1),[x,b]=c.useState(null),[f,g]=c.useState(!1),p=()=>{v(!l),b(null)},y=t=>{b(x===t?null:t)},n=t=>{if(globalThis.window===void 0)return!1;const o=globalThis.window.location.pathname,a=o.endsWith("/")&&o!=="/"?o.slice(0,-1):o,d=t.endsWith("/")&&t!=="/"?t.slice(0,-1):t;return a===d};return c.useEffect(()=>{const t=()=>{g(window.scrollY>20)};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),c.useEffect(()=>(document.body.style.overflow=l?"hidden":"",()=>{document.body.style.overflow=""}),[l]),e.jsx("nav",{className:"fixed top-0 left-0 right-0 z-50",children:e.jsxs("div",{className:"container mx-auto px-4 sm:px-6 lg:px-8 py-4",children:[e.jsxs("div",{className:`
                        relative backdrop-blur-md rounded-2xl flex items-center justify-between 
                        h-14 sm:h-16 px-4 sm:px-6 lg:px-8 
                        transition-all duration-500
                        ${f?"bg-black/50 border-white/10 shadow-2xl":"bg-black/30 border-white/8"}
                        border overflow-visible
                    `,children:[e.jsx("div",{className:"absolute rounded-2xl inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent"}),e.jsx("div",{className:"absolute rounded-2xl inset-0 bg-linear-to-r from-white/5 via-transparent to-black/10 pointer-events-none"}),e.jsxs("div",{className:"relative z-10 flex items-center justify-between w-full",children:[e.jsx(r.A,{path:"logo.href",className:"flex items-center transition-opacity duration-300 hover:opacity-80",children:s.logo.image?e.jsx(N,{src:s.logo.image,alt:s.logo.text,loading:"lazy",decoding:"async",fetchPriority:"auto",className:"h-8 sm:h-9 w-auto"}):e.jsx(r.Span,{path:"logo.text",className:"text-xl sm:text-2xl font-bold text-white tracking-tight"})}),e.jsx("div",{className:"hidden lg:flex items-center gap-1",children:s.links.map((t,o)=>e.jsx("div",{className:"relative group",children:t.dropdown?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:`
                                                    flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-lg
                                                    transition-all duration-300
                                                    ${t.dropdown.some(a=>n(a.href))?"text-white bg-white/10":"text-white/70 hover:text-white hover:bg-white/5"}
                                                `,children:[e.jsx(r.Span,{path:"links.label",index:o}),e.jsx(w,{className:"w-4 h-4 transition-transform duration-300 group-hover:rotate-180"})]}),e.jsx("div",{className:"absolute left-0 top-full pt-4 w-52 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300",children:e.jsxs("div",{className:"relative backdrop-blur-md bg-black/60 rounded-xl border border-white/8 overflow-hidden shadow-2xl",children:[e.jsx("div",{className:"absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent"}),e.jsx("div",{className:"relative py-2",children:t.dropdown.map((a,d)=>e.jsx("a",{href:a.href,className:`
                                                                    block px-4 py-2.5 text-sm transition-all duration-200
                                                                    ${n(a.href)?"text-white bg-secondary/20 border-l-2 border-secondary":"text-white/70 hover:text-white hover:bg-white/5 hover:pl-5"}
                                                                `,children:a.label},`dropdown-item-${a.label}-${d}`))})]})})]}):e.jsx("a",{href:t.href,className:`
                                                relative px-4 py-2 text-sm font-medium rounded-lg
                                                transition-all duration-300
                                                ${n(t.href)?"text-white bg-white/10":"text-white/70 hover:text-white hover:bg-white/5"}
                                            `,children:e.jsx(r.Span,{path:"links.label",index:o})})},`link-${s.links[o].label}-${o}`))}),s.cta&&e.jsx(r.A,{path:"cta.href",className:"hidden lg:inline-flex items-center justify-center bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden before:absolute before:inset-0 before:bg-black/25",children:e.jsx(r.Span,{path:"cta.text",className:"relative z-10"})}),e.jsx("button",{onClick:p,className:"lg:hidden p-2 text-white/80 hover:text-white transition-colors","aria-label":"Toggle menu",children:e.jsxs("div",{className:"relative w-6 h-6",children:[e.jsx(S,{className:`w-6 h-6 absolute inset-0 transition-all duration-300 ${l?"opacity-0 rotate-90":"opacity-100 rotate-0"}`}),e.jsx(C,{className:`w-6 h-6 absolute inset-0 transition-all duration-300 ${l?"opacity-100 rotate-0":"opacity-0 -rotate-90"}`})]})})]})]}),e.jsxs("div",{className:`
                        lg:hidden mt-2 relative backdrop-blur-md bg-black/50 rounded-2xl 
                        border border-white/8 shadow-2xl overflow-hidden
                        transition-all duration-400 ease-out
                        ${l?"max-h-[calc(100vh-100px)] opacity-100":"max-h-0 opacity-0 pointer-events-none"}
                    `,children:[e.jsx("div",{className:"absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/15 to-transparent"}),e.jsxs("div",{className:"relative py-2 overflow-y-auto max-h-[calc(100vh-120px)]",children:[s.links.map((t,o)=>e.jsx("div",{children:t.dropdown?e.jsxs("div",{children:[e.jsxs("button",{onClick:()=>y(o),className:`
                                                w-full flex items-center justify-between px-5 py-3.5
                                                text-sm font-medium transition-all duration-200
                                                ${t.dropdown.some(a=>n(a.href))?"text-white bg-white/5":"text-white/70 hover:text-white hover:bg-white/5"}
                                            `,children:[e.jsx(r.Span,{path:"links.label",index:o}),e.jsx(w,{className:`w-4 h-4 transition-transform duration-300 ${x===o?"rotate-180":""}`})]}),e.jsx("div",{className:`
                                                overflow-hidden transition-all duration-300
                                                ${x===o?"max-h-96":"max-h-0"}
                                            `,children:e.jsx("div",{className:"bg-black/20 border-t border-white/5",children:t.dropdown.map((a,d)=>e.jsx("a",{href:a.href,className:`
                                                            block px-8 py-3 text-sm transition-all duration-200
                                                            ${n(a.href)?"text-white bg-secondary/10 border-l-2 border-secondary":"text-white/60 hover:text-white hover:bg-white/5"}
                                                        `,onClick:p,children:a.label},`mobile-dropdown-item-${a.label}-${d}`))})})]}):e.jsx("a",{href:t.href,className:`
                                            block px-5 py-3.5 text-sm font-medium transition-all duration-200
                                            ${n(t.href)?"text-white bg-white/5 border-l-2 border-secondary":"text-white/70 hover:text-white hover:bg-white/5"}
                                        `,onClick:p,children:e.jsx(r.Span,{path:"links.label",index:o})})},`mobile-link-${t.label}-${o}`)),s.cta&&e.jsx("div",{className:"px-4 py-4 border-t border-white/5 mt-2",children:e.jsx(r.A,{path:"cta.href",className:"block text-center bg-primary text-primary-foreground px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:bg-secondary",onClick:p,children:e.jsx(r.Span,{path:"cta.text"})})})]})]})]})})}export{L as default};
