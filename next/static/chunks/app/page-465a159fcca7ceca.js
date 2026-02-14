(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    3717: function (e, t, i) {
      (Promise.resolve().then(i.bind(i, 2098)),
        Promise.resolve().then(i.bind(i, 1691)),
        Promise.resolve().then(i.bind(i, 1251)),
        Promise.resolve().then(i.t.bind(i, 1749, 23)),
        Promise.resolve().then(i.t.bind(i, 4965, 23)));
    },
    2098: function (e, t, i) {
      "use strict";
      (i.r(t),
        i.d(t, {
          default: function () {
            return n;
          },
        }));
      var l = i(7437);
      function n(e) {
        let {children: t, className: i, onClick: n} = e;
        return (0, l.jsx)("div", {
          onClick: n,
          className: " bg-red hover:bg-light-red transition-colors duration-300 cursor-pointer w-fit rounded-[4px] " + i,
          children: t,
        });
      }
    },
    6669: function (e, t, i) {
      "use strict";
      i.d(t, {
        Z: function () {
          return a;
        },
      });
      var l = i(7437),
        n = i(2265);
      i(9746);
      var r = i(6691),
        s = i.n(r);
      function a(e) {
        let {data: t, setter: i, active: r, column: a, className: o, small: d} = e;
        (0, n.useEffect)(() => {
          let e = setInterval(() => {
            i((e) => (e + 1) % t.length);
          }, 2e5);
          return () => clearInterval(e);
        }, []);
        let c = (e) => {
          i(e);
        };
        return (0, l.jsx)("div", {
          className: "carousel-buttons ".concat(!d && "lg:flex-col lg:gap-10", " ").concat(a && "flex-col gap-10", " ") + o,
          children:
            null == t
              ? void 0
              : t.map((e, i) =>
                  (0, l.jsxs)(
                    "button",
                    {
                      className: "carousel-button flex items-center gap-3 "
                        .concat(!d && "lg:!w-fit", " ")
                        .concat(r === i ? "active" : "", " ")
                        .concat(a && "w-full"),
                      onClick: () => c(i),
                      style: a ? {} : {width: "calc(100% / ".concat(t.length, ")")},
                      children: [e.icon && (0, l.jsx)(s(), {src: e.icon, width: 28, height: 28, alt: "icon"}), e.title],
                    },
                    i,
                  ),
                ),
        });
      }
    },
    1691: function (e, t, i) {
      "use strict";
      (i.r(t),
        i.d(t, {
          default: function () {
            return m;
          },
        }));
      var l = i(7437);
      i(2265);
      var n = i(6691),
        r = i.n(n),
        s = i(289),
        a = i(2512),
        o = i(6069),
        d = i(762);
      i(9645);
      let c = (e) => {
          console.log("Success:", e);
        },
        u = (e) => {
          console.log("Failed:", e);
        };
      function m() {
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)("h2", {className: "text-[black] text-[44px] font-bold w-full mb-9 sm:text-xl ss:text-lg ", children: "Оставайтесь на связи"}),
            (0, l.jsxs)("div", {
              className: "flex items-center justify-between text-[black] 2lg:flex-col 2lg:gap-16",
              children: [
                (0, l.jsxs)("div", {
                  className: "max-w-[50%] 2lg:max-w-[100%]",
                  children: [
                    (0, l.jsx)("p", {
                      className: "text-[#6C6C6C] mb-[75px] 2lg:w-3/4 sm:w-full",
                      children:
                        "Свяжитесь с нами напрямую по телефону или заполните форму, чтобы получить бесплатную консультацию от нашего персонала.",
                    }),
                    (0, l.jsxs)("ul", {
                      className: "2lg:flex 2lg:justify-between sm:flex-col sm:justify-start",
                      children: [
                        (0, l.jsxs)("li", {
                          className: " mb-7 2lg:mb-0 sm:mb-5",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "flex items-center mb-3 sm:mb-1",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "mr-4",
                                  children: (0, l.jsx)("div", {children: (0, l.jsx)(r(), {src: "/tel.svg", width: 24, height: 24, alt: "Tel"})}),
                                }),
                                (0, l.jsx)("div", {className: "text-[#6C6C6C] text-lg text-semibold", children: "Номер телефона"}),
                              ],
                            }),
                            (0, l.jsx)("div", {className: " font-bold 2lg:font-semibold 2xl:text-[18px] text-[28px]", children: "(995) 885-71-36"}),
                          ],
                        }),
                        (0, l.jsxs)("li", {
                          className: " mb-7 2lg:mb-0 sm:mb-5",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "flex items-center mb-3 sm:mb-1",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "mr-4",
                                  children: (0, l.jsx)("div", {children: (0, l.jsx)(r(), {src: "/mail.svg", width: 24, height: 24, alt: "Mail"})}),
                                }),
                                (0, l.jsx)("div", {className: "text-[#6C6C6C] text-lg text-semibold", children: "Email"}),
                              ],
                            }),
                            (0, l.jsx)("div", {className: " font-semibold text-[18px]", children: "hello@asiafy.ru"}),
                          ],
                        }),
                        (0, l.jsxs)("li", {
                          children: [
                            (0, l.jsxs)("div", {
                              className: "flex items-center mb-3 sm:mb-1",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "mr-4",
                                  children: (0, l.jsx)("div", {children: (0, l.jsx)(r(), {src: "/point.svg", width: 24, height: 24, alt: "Point"})}),
                                }),
                                (0, l.jsx)("div", {className: "text-[#6C6C6C] text-lg text-semibold", children: "Адрес"}),
                              ],
                            }),
                            (0, l.jsx)("div", {className: " font-semibold text-[18px]", children: "ТРЦ АВИАПАРК, 1 ЭТАЖ"}),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "2lg:w-full",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "flex items-center mb-[60px] sm:mb-7",
                      children: [
                        (0, l.jsx)("div", {className: "mr-3", children: (0, l.jsx)(r(), {src: "/mail2.svg", width: 34, height: 34, alt: "Mail"})}),
                        (0, l.jsx)("div", {className: "font-bold text-[22px] ss:text-lg", children: "Напишите нам"}),
                      ],
                    }),
                    (0, l.jsx)(s.ZP, {
                      theme: {token: {colorPrimary: "#AB3534"}, components: {Select: {borderRadius: 0}, Checkbox: {colorPrimary: "#AB3534"}}},
                      children: (0, l.jsxs)(a.Z, {
                        name: "form",
                        onFinish: c,
                        onFinishFailed: u,
                        className: "w-[520px] 2lg:w-full",
                        action: "",
                        children: [
                          (0, l.jsx)("div", {
                            className: "mb-9 sm:mb-5",
                            children: (0, l.jsx)(a.Z.Item, {
                              name: "name",
                              rules: [{required: !0, message: "Пожалуйста укажите ваше имя"}],
                              children: (0, l.jsx)(o.Z, {
                                type: "text",
                                className: "rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium caret-red",
                                style: {boxShadow: "none"},
                                placeholder: "Полное имя",
                              }),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "mb-9 sm:mb-5",
                            children: (0, l.jsx)(a.Z.Item, {
                              name: "phone",
                              rules: [{required: !0, message: "Пожалуйста укажите ваш номер телефона"}],
                              children: (0, l.jsx)(o.Z, {
                                type: "text",
                                className: "rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium caret-red",
                                style: {boxShadow: "none"},
                                placeholder: "Номер телефона",
                              }),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "mb-9 sm:mb-5",
                            children: (0, l.jsx)(a.Z.Item, {
                              name: "email",
                              rules: [{required: !0, message: "Пожалуйста укажите ваш адрес электронной почты", type: "email"}],
                              children: (0, l.jsx)(o.Z, {
                                type: "text",
                                className: "rounded-none border-l-0 border-r-0 border-t-0 font-title font-medium caret-red",
                                style: {boxShadow: "none"},
                                placeholder: "Email адрес",
                              }),
                            }),
                          }),
                          (0, l.jsx)("div", {
                            className: "mb-[60px] sm:mb-10",
                            children: (0, l.jsx)(a.Z.Item, {
                              name: "message",
                              rules: [{required: !0, message: "Пожалуйста укажите сообщение", min: 5}],
                              children: (0, l.jsx)(o.Z.TextArea, {
                                rows: 2,
                                className: "rounded-none border-l-0 border-r-0 border-t-0 font-title h-20 max-h-20 text-start font-medium caret-red",
                                style: {boxShadow: "none", resize: "none"},
                                placeholder: "Сообщение",
                              }),
                            }),
                          }),
                          (0, l.jsx)(a.Z.Item, {
                            children: (0, l.jsx)(d.ZP, {
                              type: "primary",
                              htmlType: "submit",
                              className: " bg-red px-6 py-4 h-fit w-fit",
                              children: (0, l.jsxs)("div", {
                                className: "flex font-semibold text-[white]",
                                children: [(0, l.jsx)(r(), {className: "mr-3", src: "/send.svg", width: 16, height: 15, alt: "Send"}), " Отправить"],
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    1251: function (e, t, i) {
      "use strict";
      (i.r(t),
        i.d(t, {
          default: function () {
            return h;
          },
        }));
      var l = i(7437),
        n = i(2265),
        r = i(6669),
        s = i(404),
        a = i(8731),
        o = i(6691),
        d = i.n(o),
        c = i(2098);
      let u = {transition: "opacity ".concat(300, "ms ease-in-out"), opacity: 0},
        m = {
          entering: {opacity: 0},
          entered: {opacity: 1},
          exiting: {opacity: 0, position: "absolute", top: 0, left: 0},
          exited: {opacity: 0, position: "absolute"},
          unmounted: {opacity: 0, position: "absolute"},
        };
      function f(e) {
        let {img_url: t, description: i, list: r, button: o} = e,
          f = (0, n.useRef)(null);
        return (0, l.jsx)(s.Z, {
          className: " relative",
          children: (0, l.jsx)(
            a.ZP,
            {
              nodeRef: f,
              timeout: 300,
              children: (e) =>
                (0, l.jsxs)("div", {
                  ref: f,
                  className: "flex justify-between items-center gap-[45px] mt-[60px] w-full lg:block",
                  style: {...u, ...m[e]},
                  children: [
                    (0, l.jsxs)("div", {
                      className: "max-w-[504px] min-h-[474px] lg:mb-5",
                      children: [
                        (0, l.jsx)("div", {className: " font-text text-[#6C6C6C]", children: i}),
                        (0, l.jsx)("ul", {
                          className: "text-[black] font-semibold font-title text-[18px] mt-10",
                          children:
                            null == r
                              ? void 0
                              : r.map((e, t) =>
                                  (0, l.jsx)(
                                    "li",
                                    {
                                      className:
                                        "flex items-center before:rotate-45 before:rounded-[2px] before:mr-3 before:min-h-[8px] before:min-w-[8px] before:h-[8px] before:w-[8px] before:bg-red mt-6",
                                      children: e,
                                    },
                                    e,
                                  ),
                                ),
                        }),
                        (0, l.jsxs)("div", {
                          className: "mt-20 flex",
                          children: [
                            (0, l.jsx)(c.default, {
                              className: "px-4 py-3 mr-[30px] min-w-[100px]",
                              children: (0, l.jsx)("div", {className: " font-title font-semibold text-center", children: o}),
                            }),
                            (0, l.jsx)(d(), {src: "/red-arrow.svg", alt: "Red Arrow", width: 33, height: 10}),
                          ],
                        }),
                      ],
                    }),
                    t &&
                      (0, l.jsx)("div", {
                        className: "h-[474px] lg:w-auto flex-1 relative ss:h-[274px]",
                        children: (0, l.jsx)(d(), {
                          src: t,
                          alt: "Warehouse",
                          fill: !0,
                          className: "w-full h-full object-cover object-center relative",
                        }),
                      }),
                  ],
                }),
            },
            t,
          ),
        });
      }
      function h() {
        let [e, t] = (0, n.useState)(0),
          i = [
            {
              title: "Перед отправкой",
              img_url: "/home/warehouse.png",
              description: "Мы гарантируем строгое соблюдение всех процедур до, во время и после перевозки.",
              button: "Читать дальше",
              list: [
                "Стандартные операционные процедуры по обслуживанию транспортных средств",
                "План управления транспортировкой",
                "Стандартные операционные процедуры для погрузки.",
              ],
            },
            {
              title: "Во время отправки",
              img_url: "/home/on-rails-man.png",
              description: "Не мы гарантируем строгое соблюдение всех процедур до, во время и после перевозки.",
              button: "О нас",
              list: ["Стандартные операционные процедуры по обслуживанию транспортных средств", "Стандартные операционные процедуры для погрузки."],
            },
            {
              title: "После отправки",
              img_url: "/home/containers.png",
              description: "Мы гарантируем строгое соблюдение всех процедур до, во время и после перевозки.",
              button: "Читать дальше",
              list: ["План управления транспортировкой", "Стандартные операционные процедуры для погрузки."],
            },
          ];
        return (0, l.jsx)("section", {
          className: "w-full relative",
          children: (0, l.jsxs)("div", {
            className: "max-w-c-full m-auto h-fit lg:h-fit flex flex-col justify-center px-6 py-16 lg:px-10",
            children: [
              (0, l.jsx)("h2", {className: "font-title text-2xl text-[black] font-bold sm:text-xl ss:text-lg", children: "Наши процессы"}),
              (0, l.jsx)(r.Z, {data: i, setter: t, active: e}),
              (0, l.jsx)(f, {list: i[e].list, description: i[e].description, button: i[e].button, img_url: i[e].img_url}),
            ],
          }),
        });
      }
    },
    4965: function (e, t, i) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {value: !0}),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        }));
      let l = i(1024),
        n = i(8533)._(i(2265)),
        r = l._(i(2251)),
        s = i(6906),
        a = i(5291),
        o = i(337);
      i(6184);
      let d = i(2139);
      function c(e) {
        return "/" === e[0] ? e.slice(1) : e;
      }
      let u = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/next/image/",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !0,
        },
        m = new Set(),
        f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
        h = new Map([
          [
            "default",
            function (e) {
              let {config: t, src: i, width: l, quality: n} = e;
              return i.endsWith(".svg") && !t.dangerouslyAllowSVG
                ? i
                : (0, d.normalizePathTrailingSlash)(t.path) + "?url=" + encodeURIComponent(i) + "&w=" + l + "&q=" + (n || 75);
            },
          ],
          [
            "imgix",
            function (e) {
              let {config: t, src: i, width: l, quality: n} = e,
                r = new URL("" + t.path + c(i)),
                s = r.searchParams;
              return (
                s.set("auto", s.getAll("auto").join(",") || "format"),
                s.set("fit", s.get("fit") || "max"),
                s.set("w", s.get("w") || l.toString()),
                n && s.set("q", n.toString()),
                r.href
              );
            },
          ],
          [
            "cloudinary",
            function (e) {
              let {config: t, src: i, width: l, quality: n} = e,
                r = ["f_auto", "c_limit", "w_" + l, "q_" + (n || "auto")].join(",") + "/";
              return "" + t.path + r + c(i);
            },
          ],
          [
            "akamai",
            function (e) {
              let {config: t, src: i, width: l} = e;
              return "" + t.path + c(i) + "?imwidth=" + l;
            },
          ],
          [
            "custom",
            function (e) {
              let {src: t} = e;
              throw Error(
                'Image with src "' + t + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
              );
            },
          ],
        ]);
      function x(e) {
        return void 0 !== e.default;
      }
      function g(e) {
        let {config: t, src: i, unoptimized: l, layout: n, width: r, quality: s, sizes: a, loader: o} = e;
        if (l) return {src: i, srcSet: void 0, sizes: void 0};
        let {widths: d, kind: c} = (function (e, t, i, l) {
            let {deviceSizes: n, allSizes: r} = e;
            if (l && ("fill" === i || "responsive" === i)) {
              let e = /(^|\s)(1?\d?\d)vw/g,
                t = [];
              for (let i; (i = e.exec(l)); i) t.push(parseInt(i[2]));
              if (t.length) {
                let e = 0.01 * Math.min(...t);
                return {widths: r.filter((t) => t >= n[0] * e), kind: "w"};
              }
              return {widths: r, kind: "w"};
            }
            return "number" != typeof t || "fill" === i || "responsive" === i
              ? {widths: n, kind: "w"}
              : {widths: [...new Set([t, 2 * t].map((e) => r.find((t) => t >= e) || r[r.length - 1]))], kind: "x"};
          })(t, r, n, a),
          u = d.length - 1;
        return {
          sizes: a || "w" !== c ? a : "100vw",
          srcSet: d.map((e, l) => o({config: t, src: i, quality: s, width: e}) + " " + ("w" === c ? e : l + 1) + c).join(", "),
          src: o({config: t, src: i, quality: s, width: d[u]}),
        };
      }
      function b(e) {
        return "number" == typeof e ? e : "string" == typeof e ? parseInt(e, 10) : void 0;
      }
      function p(e) {
        var t;
        let i = (null == (t = e.config) ? void 0 : t.loader) || "default",
          l = h.get(i);
        if (l) return l(e);
        throw Error('Unknown "loader" found in "next.config.js". Expected: ' + s.VALID_LOADERS.join(", ") + ". Received: " + i);
      }
      function v(e, t, i, l, n, r) {
        e &&
          e.src !== f &&
          e["data-loaded-src"] !== t &&
          ((e["data-loaded-src"] = t),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentNode && (m.add(t), "blur" === l && r(!0), null == n ? void 0 : n.current)) {
                let {naturalWidth: t, naturalHeight: i} = e;
                n.current({naturalWidth: t, naturalHeight: i});
              }
            }));
      }
      let j = (e) => {
        let {
          imgAttributes: t,
          heightInt: i,
          widthInt: l,
          qualityInt: r,
          layout: s,
          className: a,
          imgStyle: o,
          blurStyle: d,
          isLazy: c,
          placeholder: u,
          loading: m,
          srcString: f,
          config: h,
          unoptimized: x,
          loader: b,
          onLoadingCompleteRef: p,
          setBlurComplete: j,
          setIntersection: w,
          onLoad: y,
          onError: N,
          isVisible: k,
          noscriptSizes: A,
          ...S
        } = e;
        return (
          (m = c ? "lazy" : m),
          n.default.createElement(
            n.default.Fragment,
            null,
            n.default.createElement("img", {
              ...S,
              ...t,
              decoding: "async",
              "data-nimg": s,
              className: a,
              style: {...o, ...d},
              ref: (0, n.useCallback)(
                (e) => {
                  (w(e), (null == e ? void 0 : e.complete) && v(e, f, s, u, p, j));
                },
                [w, f, s, u, p, j],
              ),
              onLoad: (e) => {
                (v(e.currentTarget, f, s, u, p, j), y && y(e));
              },
              onError: (e) => {
                ("blur" === u && j(!0), N && N(e));
              },
            }),
            (c || "blur" === u) &&
              n.default.createElement(
                "noscript",
                null,
                n.default.createElement("img", {
                  ...S,
                  loading: m,
                  decoding: "async",
                  "data-nimg": s,
                  style: o,
                  className: a,
                  ...g({config: h, src: f, unoptimized: x, layout: s, width: l, quality: r, sizes: A, loader: b}),
                }),
              ),
          )
        );
      };
      function w(e) {
        var t;
        let i,
          {
            src: l,
            sizes: d,
            unoptimized: c = !1,
            priority: h = !1,
            loading: v,
            lazyRoot: w = null,
            lazyBoundary: y,
            className: N,
            quality: k,
            width: A,
            height: S,
            style: _,
            objectFit: C,
            objectPosition: I,
            onLoadingComplete: E,
            placeholder: P = "empty",
            blurDataURL: z,
            ...O
          } = e,
          R = (0, n.useContext)(o.ImageConfigContext),
          M = (0, n.useMemo)(() => {
            let e = u || R || s.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              i = e.deviceSizes.sort((e, t) => e - t);
            return {...e, allSizes: t, deviceSizes: i};
          }, [R]),
          Z = d ? "responsive" : "intrinsic";
        "layout" in O && (O.layout && (Z = O.layout), delete O.layout);
        let q = p;
        if ("loader" in O) {
          if (O.loader) {
            let e = O.loader;
            q = (t) => {
              let {config: i, ...l} = t;
              return e(l);
            };
          }
          delete O.loader;
        }
        let T = "";
        if ("object" == typeof (t = l) && (x(t) || void 0 !== t.src)) {
          let e = x(l) ? l.default : l;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e),
            );
          if (((z = z || e.blurDataURL), (T = e.src), (!Z || "fill" !== Z) && ((S = S || e.height), (A = A || e.width), !e.height || !e.width)))
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e),
            );
        }
        let W = !h && ("lazy" === v || void 0 === v);
        (((l = "string" == typeof l ? l : T).startsWith("data:") || l.startsWith("blob:")) && ((c = !0), (W = !1)),
          m.has(l) && (W = !1),
          M.unoptimized && (c = !0));
        let [D, F] = (0, n.useState)(!1),
          [L, B, U] = (0, a.useIntersection)({rootRef: w, rootMargin: y || "200px", disabled: !W}),
          G = !W || B,
          H = {
            boxSizing: "border-box",
            display: "block",
            overflow: "hidden",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          V = {
            boxSizing: "border-box",
            display: "block",
            width: "initial",
            height: "initial",
            background: "none",
            opacity: 1,
            border: 0,
            margin: 0,
            padding: 0,
          },
          J = !1,
          Q = b(A),
          K = b(S),
          X = b(k),
          Y = Object.assign({}, _, {
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            boxSizing: "border-box",
            padding: 0,
            border: "none",
            margin: "auto",
            display: "block",
            width: 0,
            height: 0,
            minWidth: "100%",
            maxWidth: "100%",
            minHeight: "100%",
            maxHeight: "100%",
            objectFit: C,
            objectPosition: I,
          }),
          $ =
            "blur" !== P || D
              ? {}
              : {backgroundSize: C || "cover", backgroundPosition: I || "0% 0%", filter: "blur(20px)", backgroundImage: 'url("' + z + '")'};
        if ("fill" === Z) ((H.display = "block"), (H.position = "absolute"), (H.top = 0), (H.left = 0), (H.bottom = 0), (H.right = 0));
        else if (void 0 !== Q && void 0 !== K) {
          let e = K / Q,
            t = isNaN(e) ? "100%" : "" + 100 * e + "%";
          "responsive" === Z
            ? ((H.display = "block"), (H.position = "relative"), (J = !0), (V.paddingTop = t))
            : "intrinsic" === Z
              ? ((H.display = "inline-block"),
                (H.position = "relative"),
                (H.maxWidth = "100%"),
                (J = !0),
                (V.maxWidth = "100%"),
                (i =
                  "data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27" +
                  Q +
                  "%27%20height=%27" +
                  K +
                  "%27/%3e"))
              : "fixed" === Z && ((H.display = "inline-block"), (H.position = "relative"), (H.width = Q), (H.height = K));
        }
        let ee = {src: f, srcSet: void 0, sizes: void 0};
        G && (ee = g({config: M, src: l, unoptimized: c, layout: Z, width: Q, quality: X, sizes: d, loader: q}));
        let et = l,
          ei = {imageSrcSet: ee.srcSet, imageSizes: ee.sizes, crossOrigin: O.crossOrigin, referrerPolicy: O.referrerPolicy},
          el = n.default.useLayoutEffect,
          en = (0, n.useRef)(E),
          er = (0, n.useRef)(l);
        ((0, n.useEffect)(() => {
          en.current = E;
        }, [E]),
          el(() => {
            er.current !== l && (U(), (er.current = l));
          }, [U, l]));
        let es = {
          isLazy: W,
          imgAttributes: ee,
          heightInt: K,
          widthInt: Q,
          qualityInt: X,
          layout: Z,
          className: N,
          imgStyle: Y,
          blurStyle: $,
          loading: v,
          config: M,
          unoptimized: c,
          placeholder: P,
          loader: q,
          srcString: et,
          onLoadingCompleteRef: en,
          setBlurComplete: F,
          setIntersection: L,
          isVisible: G,
          noscriptSizes: d,
          ...O,
        };
        return n.default.createElement(
          n.default.Fragment,
          null,
          n.default.createElement(
            "span",
            {style: H},
            J
              ? n.default.createElement(
                  "span",
                  {style: V},
                  i
                    ? n.default.createElement("img", {
                        style: {
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: 0,
                          margin: 0,
                          padding: 0,
                        },
                        alt: "",
                        "aria-hidden": !0,
                        src: i,
                      })
                    : null,
                )
              : null,
            n.default.createElement(j, es),
          ),
          h
            ? n.default.createElement(
                r.default,
                null,
                n.default.createElement("link", {
                  key: "__nimg-" + ee.src + ee.srcSet + ee.sizes,
                  rel: "preload",
                  as: "image",
                  href: ee.srcSet ? void 0 : ee.src,
                  ...ei,
                }),
              )
            : null,
        );
      }
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), (e.exports = t.default));
    },
    2185: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {value: !0}),
        (function (e, t) {
          for (var i in t) Object.defineProperty(e, i, {enumerable: !0, get: t[i]});
        })(t, {
          requestIdleCallback: function () {
            return i;
          },
          cancelIdleCallback: function () {
            return l;
          },
        }));
      let i =
          ("undefined" != typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window)) ||
          function (e) {
            let t = Date.now();
            return self.setTimeout(function () {
              e({
                didTimeout: !1,
                timeRemaining: function () {
                  return Math.max(0, 50 - (Date.now() - t));
                },
              });
            }, 1);
          },
        l =
          ("undefined" != typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window)) ||
          function (e) {
            return clearTimeout(e);
          };
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), (e.exports = t.default));
    },
    5291: function (e, t, i) {
      "use strict";
      (Object.defineProperty(t, "__esModule", {value: !0}),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }));
      let l = i(2265),
        n = i(2185),
        r = "function" == typeof IntersectionObserver,
        s = new Map(),
        a = [];
      function o(e) {
        let {rootRef: t, rootMargin: i, disabled: o} = e,
          d = o || !r,
          [c, u] = (0, l.useState)(!1),
          m = (0, l.useRef)(null),
          f = (0, l.useCallback)((e) => {
            m.current = e;
          }, []);
        return (
          (0, l.useEffect)(() => {
            if (r) {
              if (d || c) return;
              let e = m.current;
              if (e && e.tagName)
                return (function (e, t, i) {
                  let {
                    id: l,
                    observer: n,
                    elements: r,
                  } = (function (e) {
                    let t;
                    let i = {root: e.root || null, margin: e.rootMargin || ""},
                      l = a.find((e) => e.root === i.root && e.margin === i.margin);
                    if (l && (t = s.get(l))) return t;
                    let n = new Map();
                    return (
                      (t = {
                        id: i,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = n.get(e.target),
                              i = e.isIntersecting || e.intersectionRatio > 0;
                            t && i && t(i);
                          });
                        }, e),
                        elements: n,
                      }),
                      a.push(i),
                      s.set(i, t),
                      t
                    );
                  })(i);
                  return (
                    r.set(e, t),
                    n.observe(e),
                    function () {
                      if ((r.delete(e), n.unobserve(e), 0 === r.size)) {
                        (n.disconnect(), s.delete(l));
                        let e = a.findIndex((e) => e.root === l.root && e.margin === l.margin);
                        e > -1 && a.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && u(e), {root: null == t ? void 0 : t.current, rootMargin: i});
            } else if (!c) {
              let e = (0, n.requestIdleCallback)(() => u(!0));
              return () => (0, n.cancelIdleCallback)(e);
            }
          }, [d, i, t, c, m.current]),
          [
            f,
            c,
            (0, l.useCallback)(() => {
              u(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default || ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", {value: !0}), Object.assign(t.default, t), (e.exports = t.default));
    },
    9746: function () {},
    9645: function () {},
  },
  function (e) {
    (e.O(0, [893, 749, 797, 309, 328, 971, 938, 744], function () {
      return e((e.s = 3717));
    }),
      (_N_E = e.O()));
  },
]);