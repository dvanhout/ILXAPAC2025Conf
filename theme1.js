(() => {
   "use strict";
   document.addEventListener("DOMContentLoaded", (function () {
      console.log("Hi from dv");
      function e() {
         document.querySelectorAll(".filter_cell .select2-container--open.select2-container-focusborder").forEach((e => {
            setTimeout((() => {
               const e = document.querySelector(".select2-dropdown");
               e && (e.classList.remove("custom-dropdown-below", "custom-dropdown-above"), (e.classList.contains("select2-dropdown--below") || e.classList.contains("select2-dropdown--above")) && e.classList.add("select2-custom-dropdown-below"))
            }), 50)
         }))
      }

      function t(e) {
         const t = document.getElementById(e);
         t && t.addEventListener("pointerdown", (function (e) {
            e.stopPropagation();
            const o = t.classList.contains("dropdown-active");
            document.querySelectorAll(".dropdown-active").forEach((e => {
               e !== t && e.classList.remove("dropdown-active")
            })), t.classList.toggle("dropdown-active", !o)
         }))
      }

      function o() {
         setTimeout((() => {
            document.querySelectorAll(".mobile-nav__list-btn p").forEach((e => {
               const t = e.textContent,
                  o = t.toLowerCase().replace(/\b\w/g, (e => e.toUpperCase()));
               t !== o && (e.textContent = o)
            }))
         }), 500)
      }
      setTimeout((function () {
            var e = document.getElementById("activeLocationLink");
            e && (e.style.display = "none", e.click())
         }), 500), new MutationObserver((() => {
            let e = document.getElementById("locationOption");
            e && !e.classList.contains("simple-select2") && (e.classList.add("simple-select2"), window.jQuery ? $(e).select2({
               dropdownAutoWidth: !0,
               width: "resolve",
               templateResult: function (e) {
                  return e.text ? $('<div class="select2_option_container"><div class="text_container"><span class="select2_main">' + e.text + "</span></div></div>") : e
               },
               templateSelection: function (e) {
                  return e.text ? e.text.trim() : ""
               }
            }) : console.error("jQuery not loaded. Make sure jQuery is included in your project."))
         })).observe(document.body, {
            childList: !0,
            subtree: !0
         }), setTimeout((function () {
            var e = document.getElementById("activeBusinessHierarchyLink");
            e && (e.style.display = "none", e.click())
         }), 500), new MutationObserver((() => {
            let e = document.getElementById("businessHierarchyOption");
            e && !e.classList.contains("simple-select2") && (e.classList.add("simple-select2"), window.jQuery ? $(e).select2({
               dropdownAutoWidth: !0,
               width: "resolve",
               templateResult: function (e) {
                  return e.text ? $('<div class="select2_option_container"><div class="text_container"><span class="select2_main">' + e.text + "</span></div></div>") : e
               },
               templateSelection: function (e) {
                  return e.text ? e.text.trim() : ""
               }
            }) : console.error("jQuery not loaded. Make sure jQuery is included in your project."))
         })).observe(document.body, {
            childList: !0,
            subtree: !0
         }), new MutationObserver(e).observe(document.body, {
            childList: !0,
            subtree: !0
         }), e(),
         function () {
            const e = document.querySelectorAll(".nav-bar__settings button");
            e.forEach((t => {
               t.addEventListener("click", (() => {
                  e.forEach((e => {
                     e.style.setProperty("background-color", "", "important")
                  })), t.style.setProperty("background-color", "#EEF6FB", "important"), t.style.setProperty("border-radius", "100px", "important")
               }))
            }))
         }(), t("location-dropdown"), t("businessHierarchy-dropdown"), t("application-dropdown"), document.addEventListener("pointerdown", (function (e) {
            e.target.closest("#location-dropdown") || e.target.closest("#businessHierarchy-dropdown") || document.querySelectorAll(".dropdown-active").forEach((e => {
               e.classList.remove("dropdown-active")
            }))
         })), document.querySelectorAll("#toolbaroptions > ul > li").forEach((e => {
            e.addEventListener("touchstart", (function (e) {
               let t = this.querySelector("ul");
               if (t) {
                  e.preventDefault(), e.stopPropagation();
                  let o = "inline-table" === t.style.display;
                  document.querySelectorAll("#toolbaroptions > ul > li").forEach((e => {
                     let o = e.querySelector("ul");
                     o && o !== t && (o.style.display = "none", e.style.backgroundColor = "")
                  })), setTimeout((() => {
                     t.style.display = o ? "none" : "inline-table", this.style.backgroundColor = o ? "" : "#f0f0f0"
                  }), 50)
               }
            }))
         })), document.querySelectorAll("#toolbaroptions ul li ul").forEach((e => {
            e.addEventListener("touchstart", (function (e) {
               e.stopPropagation()
            }))
         })), document.addEventListener("touchstart", (function (e) {
            e.target.closest("#toolbaroptions") || (document.querySelectorAll("#toolbaroptions > ul > li").forEach((e => {
               e.style.backgroundColor = ""
            })), document.querySelectorAll("#toolbaroptions > ul > li ul").forEach((e => {
               e.style.display = "none"
            })))
         })), new MutationObserver((e => {
            e.forEach((e => {
               e.addedNodes.forEach((e => {
                  1 === e.nodeType && e.matches(".nav-bar-mobile-expanded, .mobile-nav-item-open, .mobile-nav-item__groups, .mobile-nav__list-btn, .mobile-nav__list-btn p") && o()
               }))
            }))
         })).observe(document.body, {
            childList: !0,
            subtree: !0
         }), o(), new MutationObserver((e => {
            e.forEach((e => {
               e.addedNodes.forEach((e => {
                  if (1 === e.nodeType && e.classList.contains("mobile-nav-item__groups")) {
                     const t = e.previousElementSibling;
                     e.addEventListener("click", (o => {
                        const n = o.target.closest(".mobile-nav__list-btn");
                        if (n) {
                           if (n.classList.contains("mobile-nav__list-btn-styles")) return n.classList.remove("mobile-nav__list-btn-styles"), void(t && t.style.setProperty("background-color", "#D8ECF8", "important"));
                           e.querySelectorAll(".mobile-nav__list-btn").forEach((e => {
                              e.classList.remove("mobile-nav__list-btn-styles")
                           })), n.classList.add("mobile-nav__list-btn-styles"), t && t.style.setProperty("background-color", "#FEFEFE", "important")
                        }
                     })), t && t.addEventListener("click", (() => {
                        t.style.removeProperty("background-color")
                     }))
                  }
               }))
            }))
         })).observe(document.body, {
            childList: !0,
            subtree: !0
         }), setTimeout((function () {
            var e = document.querySelectorAll(".tab-menu #setupMenu .collapsible-panel-header");
            e.forEach((function (t) {
               var o = t.querySelector(".img");
               o && (t.addEventListener("click", (function () {
                  e.forEach((function (e) {
                     var o = e.querySelector(".img");
                     e !== t && o && o.classList.remove("panelheaderImage")
                  })), o.classList.toggle("panelheaderImage"), o.classList.remove("panelheaderImageHover")
               })), t.addEventListener("mouseenter", (function () {
                  o.classList.contains("panelheaderImage") && o.classList.add("panelheaderImageHover")
               })), t.addEventListener("mouseleave", (function () {
                  o.classList.remove("panelheaderImageHover")
               })))
            }))
         }), 500);
      var n = document.querySelectorAll(".wfDiagram > div > div[color]"),
         r = document.querySelectorAll(".wfDiagram > div"),
         i = null,
         l = Array.from(n).some((e => {
            var t = e.getAttribute("color")?.trim();
            return t
         }));
      if (r.forEach((function (e) {
            e.classList.remove("current-blue", "current-green", "current-red", "after-blue", "after-green", "after-red", "last-visible", "before-blue")
         })), l) {
         var s = null,
            a = null;
         n.forEach((function (e) {
            var t = e.parentElement,
               o = e.getAttribute("color")?.trim();
            i || (i = t), "blue" === o ? (a ? t.classList.add("before-blue") : (a = t).classList.add("current-blue"), s = t) : "green" === o && (s && (s.classList.remove("current-blue"), s.classList.add("before-blue")), t.classList.add("current-green"), s = t)
         }));
         var c = !1;
         r.forEach((function (e) {
            c && (s.classList.contains("current-green") || e.classList.add("after-blue")), e === s && (c = !0)
         })), (u = Array.from(r).reverse().find((e => "none" !== window.getComputedStyle(e).display))) && u.classList.add("last-visible")
      }
      if (0 === n.length) {
         r = document.querySelectorAll(".wfDiagram > div");
         var d = !1,
            u = (i = null, null);
         r.forEach((function (e) {
            e.classList.remove("before-blue", "current-blue", "current-red", "current-green", "after-blue", "last-visible")
         })), r.forEach((function (e) {
            var t = e.querySelector("div").getAttribute("selected"),
               o = "none" !== window.getComputedStyle(e).display;
            !i && o && (i = e), o && (u = e), !d && o ? "blue" === t || "red" === t || "green" === t || "Green" === t ? (d = t, e.classList.add("current-" + t.toLowerCase())) : e.classList.add("before-blue") : o && (e[0] === i ? i.classList.add("current-blue") : e.classList.add("after-blue"))
         })), u && u.classList.add("last-visible"), d || r.forEach((function (e) {
            e.classList.remove("before-blue"), e != i && e.classList.add("after-blue"), i.classList.add("current-blue")
         }))
      }
      var p = document.querySelector(".wfDiagram > div.current-blue, .wfDiagram > div.current-green, .wfDiagram > div.current-red");

      function m(e) {
         var t = document.querySelector(".wfDiagram"),
            o = e.getBoundingClientRect(),
            n = t.getBoundingClientRect(),
            r = o.left - n.left + o.width / 2 - t.clientWidth / 2;
         t.scrollLeft = r
      }

      function f() {
         document.querySelector(".ui-dialog.ui-widget.ui-widget-content.ui-corner-all.ui-front.ui-draggable.ui-resizable")
      }
      p ? setTimeout((function () {
         m(p)
      }), 500) : u && setTimeout((function () {
         m(u)
      }), 500), document.querySelector(".wfDiagram"), f(), window.addEventListener("resize", f);
      var y = document.querySelector(".systemLink.openInPopup");
      y?.addEventListener("click", f);
      var b = function (e, t) {
         for (var o of e) "childList" === o.type && o.addedNodes.forEach((function (e) {
            e.nodeType === Node.ELEMENT_NODE && e.classList.contains("ui-dialog") && f()
         }))
      };

      function v(e) {
         const t = window.getComputedStyle(e),
            o = t.getPropertyValue("background"),
            n = t.getPropertyValue("background-image");
         e.style.setProperty("color", "#004C8F"), o.includes("url(") && "none" !== n || e.style.setProperty("padding-left", "16px", "important")
      }

      function h(e) {
         e && (new MutationObserver((e => {
            e.forEach((e => {
               e.addedNodes.length > 0 && e.addedNodes.forEach((e => {
                  e.nodeType === Node.ELEMENT_NODE && (e.matches?.(".grid-action-links a, .menu-action-links a, .menu-action-links .wf-link") && v(e), e.querySelectorAll?.(".grid-action-links a, .menu-action-links a, .menu-action-links .wf-link").forEach((e => {
                     v(e)
                  })))
               }))
            }))
         })).observe(e, {
            childList: !0,
            subtree: !0
         }), e.querySelectorAll(".grid-action-links a, .menu-action-links a, .menu-action-links .wf-link").forEach(v))
      }

      function g(e) {
         try {
            const t = e.contentDocument || e.contentWindow.document;
            "complete" === t.readyState ? h(t.body) : e.addEventListener("load", (() => h(t.body)))
         } catch (e) {
            console.warn("Cross-origin iframe detected. Cannot modify:", e)
         }
      }

      function L() {
         document.querySelectorAll("#workbench-preview-container iframe").forEach(g)
      }
      new MutationObserver(b).observe(document.body, {
         attributes: !1,
         childList: !0,
         subtree: !1
      }), document.querySelectorAll(".severity").forEach((function (e) {
         "low" === e.innerText.toLowerCase() ? e.classList.add("severity-low") : "moderate" === e.innerText.toLowerCase() ? e.classList.add("severity-moderate") : "severe" === e.innerText.toLowerCase() && e.classList.add("severity-severe")
      })), document.querySelectorAll(".prettyCell").forEach((function (e) {
         "low" === e.innerText.toLowerCase() ? (e.classList.add("severity"), e.classList.add("severity-low")) : "medium" === e.innerText.toLowerCase() ? (e.classList.add("severity"), e.classList.add("severity-moderate")) : "high" === e.innerText.toLowerCase() && (e.classList.add("severity"), e.classList.add("severity-severe"))
      })), document.querySelectorAll(".prettyCell").forEach((function (e) {
         "checked-in" === e.innerText.toLowerCase() ? (e.classList.add("severity"), e.classList.add("severity-low"), e.style.setProperty("width", "155px", "important")) : "checked-out" === e.innerText.toLowerCase() ? (e.classList.add("severity"), e.classList.add("severity-severe"), e.style.setProperty("width", "155px", "important")) : "unavailable" === e.innerText.toLowerCase() && (e.classList.add("severity"), e.style.backgroundColor = "#F0F0F0", e.style.border = "2px solid #464646", e.style.setProperty("color", "#464646", "important"), e.style.setProperty("width", "155px", "important"))
      })), document.querySelectorAll(".menu-action-links a").forEach((function (e) {
         "hidden" === window.getComputedStyle(e).visibility && e.style.setProperty("display", "none", "important")
      })), document.querySelectorAll(".systemLink.gridExecuteActionLink").forEach((function (e) {
         0 === e.innerText.length && e.style.setProperty("border", "none", "important")
      })), h(document.body), L(), new MutationObserver((() => L())).observe(document.body, {
         childList: !0,
         subtree: !0
      });
      var w = document.querySelector(".filter-container .header .name input");
      w && (w.placeholder = "Enter the name of the filter");
      var x = document.querySelector(".filter-container .header .name input");
      x && (x.value = "");
      var E = document.querySelector(".grid_container .grid-notification-wrapper .right");

      function S(e, t) {
         Object.assign(e.style, t)
      }

      function q({
         containerSelector: e,
         tabsSelector: t,
         enableExtraTabHandling: o
      }) {
         const n = document.querySelector(e),
            r = n?.querySelector(t);
         if (!n || !r) return;
         const i = document.createElement("button");
         i.classList.add("scroll-arrow", "left-arrow");
         const l = document.createElement("button");

         function s() {
            r.scrollLeft = Math.max(r.scrollLeft - r.clientWidth, 0)
         }

         function a() {
            const e = r.scrollWidth - r.clientWidth;
            r.scrollLeft = Math.min(r.scrollLeft + r.clientWidth, e)
         }
         l.classList.add("scroll-arrow", "right-arrow"), r.parentNode.insertBefore(i, r), r.parentNode.insertBefore(l, r.nextSibling), i.addEventListener("click", s), l.addEventListener("click", a), i.addEventListener("touchstart", (e => {
            e.preventDefault(), s()
         })), l.addEventListener("touchstart", (e => {
            e.preventDefault(), a()
         }));
         const c = r.scrollWidth > r.clientWidth;

         function d() {
            const e = window.location.href,
               t = document.querySelector(".selected-tab a")?.id;
            if (r.querySelectorAll("li").forEach((t => {
                  const o = t.querySelector("a");
                  t.classList.toggle("selected-tab", o && e.includes(o.href))
               })), t) {
               const e = document.getElementById(t)?.closest("li");
               e && (r.querySelectorAll("li").forEach((e => e.classList.remove("selected-tab"))), e.classList.add("selected-tab"))
            }
            const o = document.querySelector("#more-button"),
               n = document.querySelector("#more-button > a"),
               i = o?.querySelector(".extra-tabs .selected-tab");
            i && (o?.classList.add("selected-tab"), n.textContent = "More"),
               function () {
                  const e = r.querySelector(".selected-tab");
                  if (!e || u) return;
                  const t = e.getBoundingClientRect();
                  t.left >= 0 && t.right <= window.innerWidth || e.scrollIntoView({
                     behavior: "smooth",
                     inline: "center",
                     block: "nearest"
                  })
               }()
         }
         ".tabs-panel.ui-tabs.ui-widget" === e && (S(i, {
            left: 0,
            padding: "0px 20px",
            borderRadius: "100px 0 0 100px",
            backgroundColor: "#eef6fb"
         }), S(l, {
            padding: "0px 20px",
            borderRadius: "0 100px 100px 0",
            backgroundColor: "#eef6fb"
         }));
         let u = !1;
         window.addEventListener("scroll", (e => {
            u = !0, clearTimeout(window.userScrollTimeout), window.userScrollTimeout = setTimeout((() => u = !1), 1e3)
         }));
         const p = () => {
               i.style.visibility = l.style.visibility = c ? "visible" : "hidden", c && r.classList.add("tabs-overflow"), o && function () {
                  if (!o) return;
                  const e = document.querySelector("#more-button"),
                     t = document.querySelector(".extra-tabs");
                  e && t && (c && (t.querySelectorAll("li").forEach((e => {
                     e.classList.add("moved-tab"), r.appendChild(e)
                  })), e.remove()), d())
               }(), d()
            },
            m = (e => {
               let t;
               return function () {
                  clearTimeout(t), t = setTimeout((() => e.apply(this, arguments)), 150)
               }
            })(p);
         window.addEventListener("resize", m), document.addEventListener("DOMContentLoaded", p), p()
      }

      function S(e, t) {
         Object.assign(e.style, t)
      }

      function k(e) {
         try {
            var t = e.contentDocument || e.contentWindow.document,
               o = t.getElementById("failure"),
               n = t.getElementById("success");
            o || n ? (e.classList.remove("frameUpload"), e.style.height = "23px", e.style.width = "100%") : e.classList.add("frameUpload"),
               function (e) {
                  var t = e.createElement("link");
                  t.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap", t.rel = "stylesheet", e.head.appendChild(t)
               }(t);
            var r = t.querySelector("#formUpload");
            r && S(r, {
               display: "flex",
               justifyContent: "space-between"
            });
            var i = t.querySelectorAll("input"),
               l = t.querySelector("input[type='submit']");
            l && S(l, {
               backgroundColor: "#004C8F",
               borderRadius: "100px",
               height: "36px",
               padding: "8px 16px",
               gap: "2px",
               color: "var(--ILXwhite, #FEFEFE)",
               fontFamily: "Poppins",
               fontSize: "12px",
               fontStyle: "normal",
               fontWeight: "500",
               lineHeight: "16px",
               letterSpacing: "0.46px",
               maxWidth: "122px",
               border: "unset",
               marginLeft: "16px",
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
               width: "100%"
            });
            var s = t.querySelector("input[type='file']");
            if (s) {
               S(s, {
                  opacity: "0",
                  position: "absolute",
                  zIndex: "-1",
                  width: "0.1px",
                  height: "0.1px",
                  overflow: "hidden"
               });
               var a = t.createElement("label");
               a.htmlFor = s.id, a.innerHTML = "Choose File...", S(a, {
                  display: "flex",
                  padding: "8px 16px",
                  alignItems: "center",
                  gap: "2px",
                  border: "2px solid #004C8F",
                  borderRadius: "100px",
                  color: "#004C8F",
                  backgroundColor: "#EEF6FB",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px",
                  letterSpacing: "0.46px"
               }), s.parentNode.querySelectorAll("label[for='" + s.id + "']").forEach((e => e.remove())), s.parentNode.insertBefore(a, s.nextSibling);
               var c = s.parentNode.querySelector("span") || s.files.length > 0;
               if (c) d = c;
               else {
                  var d = t.createElement("span");
                  d.textContent = "No File Chosen", S(d, {
                     position: "absolute",
                     left: "125px",
                     top: "10px",
                     color: "var(--ILXmono-black, #262626)",
                     fontFamily: "Open Sans",
                     fontSize: "14px",
                     fontStyle: "normal",
                     fontWeight: "400",
                     lineHeight: "18px",
                     letterSpacing: "0.15px",
                     marginLeft: "16px",
                     display: "block",
                     width: "64%",
                     whiteSpace: "nowrap",
                     overflow: "hidden",
                     textOverflow: "ellipsis"
                  }), s.parentNode.insertBefore(d, a.nextSibling)
               }
               s.addEventListener("change", (function () {
                  d.textContent = s.files.length > 0 ? s.files[0].name : "No File Chosen"
               }));
               var u = window.matchMedia("(max-width: 540px)"),
                  p = window.matchMedia("(max-width: 768px)");

               function m() {
                  const e = document.getElementById("frameUpload");
                  if (!e) return;
                  const t = e.contentDocument.querySelector("span");
                  if (!t) return;
                  if (window.innerWidth > 640) return void(e.style.height = "36px");
                  const o = parseFloat(window.getComputedStyle(t).lineHeight),
                     n = t.scrollHeight,
                     r = Math.round(n / o);
                  e.style.height = r > 1 ? "130px" : "113px"
               }

               function f() {
                  r.style.flexDirection = "row", d.style.position = "absolute", d.style.display = "inline-block", d.style.marginBottom = "unset", d.style.marginLeft = "16px", l.style.marginLeft = "16px", p.matches && (d.style.width = "60%", d.style.marginLeft = "16px", l.style.marginLeft = "16px"), u.matches && (r.style.flexDirection = "column", a.style.marginBottom = "10px", a.style.width = "fit-content", l.style.setProperty("margin-left", "0px", "important"), d.style.setProperty("margin-left", "5px", "important"), d.style.position = "unset", d.style.marginBottom = "10px", d.style.width = "100%", d.style.overflow = "hidden", d.style.textOverflow = "ellipsis", d.style.display = "-webkit-box", d.style.WebkitLineClamp = "2", d.style.WebkitBoxOrient = "vertical", d.style.whiteSpace = "normal"), m()
               }
               s.addEventListener("change", (function (e) {
                  m()
               })), u.addEventListener("change", (function (e) {
                  f()
               })), p.addEventListener("change", (function (e) {
                  f()
               })), f()
            }
            i.length > 0 ? i.forEach((function (e) {
               S(e, {
                  backgroundColor: "#004C8F",
                  borderRadius: "100px",
                  display: "flex",
                  height: "36px",
                  padding: "8px 16px",
                  alignItems: "center",
                  gap: "2px",
                  color: "var(--ILXwhite, #FEFEFE)",
                  fontFamily: "Poppins",
                  fontSize: "12px",
                  fontStyle: "normal",
                  fontWeight: "500",
                  lineHeight: "16px",
                  letterSpacing: "0.46px",
                  maxWidth: "122px",
                  border: "unset"
               })
            })) : setTimeout((function () {
               k(e)
            }), 100)
         } catch (y) {
            console.error("Error accessing iframe contents:", y)
         }
      }

      function C(e) {
         e.onload = function () {
            k(e)
         }, "complete" === e.contentDocument.readyState && k(e)
      }
      E && (E.childNodes[2].nodeValue = " Close"), setTimeout((function () {
         var e = document.querySelector(".filterbuilder .footer .predicate-expression");
         e && (e.classList.remove("edit"), e.addEventListener("click", (function () {
            var t = e.querySelector("input");
            t.value.trim().length > 0 && !e.classList.contains("edit") ? (e.classList.add("edit"), t.classList.add("predicateInput")) : 0 == t.value.trim().length && t.classList.contains("predicateInput") && (e.classList.remove("edit"), t.classList.remove("predicateInput"))
         })))
      }), 500), setTimeout((() => {
         q({
            containerSelector: ".app-tabs",
            tabsSelector: "ul",
            enableExtraTabHandling: !0
         }), q({
            containerSelector: ".tabs-panel.ui-tabs.ui-widget",
            tabsSelector: "ul",
            enableExtraTabHandling: !1
         })
      }), 500);
      var T = document.querySelector('[id*="MailMerge"]');
      if (T && T.addEventListener("click", (function (e) {
            setTimeout((function () {
               var e = document.getElementById("frameUpload");
               e && (new MutationObserver(b).observe(document.querySelector('[id*="MailMerge"], [class="links"]'), {
                  childList: !0,
                  subtree: !0
               }), C(e))
            }), 500)
         })), b = function (e) {
            for (var t of e) "childList" === t.type && t.addedNodes.forEach((function (e) {
               e.nodeType === Node.ELEMENT_NODE && "frameUpload" === e.id && C(e)
            }))
         }, window.innerWidth < "1470") {
         document.body.textContent.includes("Visits History") && document.querySelector(".secbase.secbase-raven .content table").style.setProperty("table-layout", "fixed", "important");
         let e = document.querySelector(".secbase.secbase-raven .content table tbody tr ");
         e.style.display = "flex", e.style.flexDirection = "column";
         let t = document.querySelectorAll(".secbase.secbase-raven .content table tbody tr td");
         for (let e = 0; e < t.length; e++) 2 == e && t[2].setAttribute("style", "overflow-x: auto !important; width: 100%; white-space: nowrap;")
      }
   }))
})();
