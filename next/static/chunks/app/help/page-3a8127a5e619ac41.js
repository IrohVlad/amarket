(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [569],
  {
    3879: function (e, s, t) {
      Promise.resolve().then(t.bind(t, 6866));
    },
    6669: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      var l = t(7437),
        n = t(2265);
      t(9746);
      var r = t(6691),
        i = t.n(r);
      function a(e) {
        let {data: s, setter: t, active: r, column: a, className: o, small: c} = e;
        (0, n.useEffect)(() => {
          let e = setInterval(() => {
            t((e) => (e + 1) % s.length);
          }, 2e5);
          return () => clearInterval(e);
        }, []);
        let d = (e) => {
          t(e);
        };
        return (0, l.jsx)("div", {
          className: "carousel-buttons ".concat(!c && "lg:flex-col lg:gap-10", " ").concat(a && "flex-col gap-10", " ") + o,
          children:
            null == s
              ? void 0
              : s.map((e, t) =>
                  (0, l.jsxs)(
                    "button",
                    {
                      className: "carousel-button flex items-center gap-3 "
                        .concat(!c && "lg:!w-fit", " ")
                        .concat(r === t ? "active" : "", " ")
                        .concat(a && "w-full"),
                      onClick: () => d(t),
                      style: a ? {} : {width: "calc(100% / ".concat(s.length, ")")},
                      children: [e.icon && (0, l.jsx)(i(), {src: e.icon, width: 28, height: 28, alt: "icon"}), e.title],
                    },
                    t,
                  ),
                ),
        });
      }
    },
    1691: function (e, s, t) {
      "use strict";
      (t.r(s),
        t.d(s, {
          default: function () {
            return x;
          },
        }));
      var l = t(7437);
      t(2265);
      var n = t(6691),
        r = t.n(n),
        i = t(289),
        a = t(2512),
        o = t(6069),
        c = t(762);
      t(9645);
      let d = (e) => {
          console.log("Success:", e);
        },
        m = (e) => {
          console.log("Failed:", e);
        };
      function x() {
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
                    (0, l.jsx)(i.ZP, {
                      theme: {token: {colorPrimary: "#AB3534"}, components: {Select: {borderRadius: 0}, Checkbox: {colorPrimary: "#AB3534"}}},
                      children: (0, l.jsxs)(a.Z, {
                        name: "form",
                        onFinish: d,
                        onFinishFailed: m,
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
                            children: (0, l.jsx)(c.ZP, {
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
    1169: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return i;
        },
      });
      var l = t(7437),
        n = t(2265);
      function r(e) {
        let {question: s, answer: t} = e,
          [r, i] = (0, n.useState)(!1);
        return (0, l.jsxs)("article", {
          className: "py-7 border-b-[1px] border-[#00000050] transition-all duration-300",
          children: [
            (0, l.jsxs)("div", {
              className: "flex gap-3 items-center justify-between",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "text-black flex items-center font-title font-semibold text-lg before:h-2 before:w-2 before:min-h-2 before:min-w-2 before:bg-red before:block before:mr-4 before:rounded-full",
                  children: s,
                }),
                (0, l.jsxs)("svg", {
                  onClick: () => {
                    i((e) => !e);
                  },
                  className: " cursor-pointer min-h-8 min-w-8",
                  width: "32",
                  height: "32",
                  viewBox: "0 0 32 32",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: [
                    (0, l.jsx)("circle", {cx: "16", cy: "16", r: "16", fill: r ? "#F8F8F8" : "#AB3534"}),
                    (0, l.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M15.9995 21C15.5308 21 15.1504 20.6193 15.1504 20.1503V11.8497C15.1504 11.3807 15.5308 11 15.9995 11C16.4682 11 16.8486 11.3807 16.8486 11.8497V20.1503C16.8486 20.6193 16.4682 21 15.9995 21Z",
                      fill: r ? "#F8F8F8" : "white",
                    }),
                    (0, l.jsx)("path", {
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                      d: "M20.1509 16.8487H11.8491C11.3793 16.8487 11 16.4681 11 15.9991C11 15.5301 11.3793 15.1494 11.8491 15.1494H20.1509C20.6196 15.1494 21 15.5301 21 15.9991C21 16.4681 20.6196 16.8487 20.1509 16.8487Z",
                      fill: r ? "#6C6C6C" : "white",
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: " font-text transition-all duration-300 text-h-grey px-6 max-h-0 opacity-0 ".concat(r && "opacity-100 !max-h-[1200px]"),
              children: t,
            }),
          ],
        });
      }
      function i(e) {
        let {items: s} = e;
        return (0, l.jsx)("div", {
          className: "grid gap-x-16 grid-cols-[1fr_1fr] lg:grid-cols-[1fr]",
          children: (null == s ? void 0 : s.length) && s.map((e, s) => (0, l.jsx)(r, {question: e.question, answer: e.answer}, s)),
        });
      }
    },
    9837: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return i;
        },
      });
      var l = t(7437);
      t(2265);
      var n = t(4983);
      function r(e) {
        let {routes: s, black: t, className: r} = e;
        return (0, l.jsx)("div", {className: r, children: (0, l.jsx)(n.Z, {className: t ? "" : "white-bread", separator: ">", items: s})});
      }
      function i(e) {
        let {title: s, routes: t, img_url: n, className: i} = e;
        return (0, l.jsxs)("section", {
          className: " relative text-white bg-cover bg-center bg-no-repeat " + i,
          style: n ? {backgroundImage: "url(".concat(n, ")")} : {},
          children: [
            (0, l.jsxs)("div", {
              className: " max-w-c-full m-auto h-[362px] p-6 lg:px-8 lg:h-40 flex flex-col justify-center relative z-10 sshort:h-fit",
              children: [
                (0, l.jsx)("h1", {className: " ss:text-lg sm:text-[25px] lg:text-2xl font-title font-bold text-3xl mb-5", children: s}),
                (0, l.jsx)(r, {routes: t}),
              ],
            }),
            (0, l.jsx)("div", {className: "absolute top-0 left-0 w-[100%] h-[100%] bg-[#202020] opacity-50"}),
          ],
        });
      }
      t(1729);
    },
    5356: function (e, s, t) {
      "use strict";
      t.d(s, {
        Z: function () {
          return i;
        },
      });
      var l = t(7437);
      t(2265);
      var n = t(6691),
        r = t.n(n);
      function i() {
        return (0, l.jsx)("section", {
          className: "bg-[#F8F8F8]",
          children: (0, l.jsxs)("div", {
            className: " h-[245px] flex items-center justify-between max-w-c-full m-auto p-6 lg:hidden lg:gap-6",
            children: [
              (0, l.jsx)("div", {
                className: "h-[77px] w-[219px] relative",
                children: (0, l.jsx)(r(), {className: "h-[100%] w-[100%]", fill: !0, src: "/services/3@32.png", alt: ""}),
              }),
              (0, l.jsx)("div", {
                className: "h-[77px] w-[219px] relative",
                children: (0, l.jsx)(r(), {className: "h-[100%] w-[100%]", fill: !0, src: "/services/4@32.png", alt: ""}),
              }),
              (0, l.jsx)("div", {
                className: "h-[77px] w-[219px] relative",
                children: (0, l.jsx)(r(), {className: "h-[100%] w-[100%]", fill: !0, src: "/services/5@32.png", alt: ""}),
              }),
              (0, l.jsx)("div", {
                className: "h-[85px] w-[173px] relative",
                children: (0, l.jsx)(r(), {className: "h-[100%] w-[100%]", fill: !0, src: "/services/6@32.png", alt: ""}),
              }),
            ],
          }),
        });
      }
    },
    6866: function (e, s, t) {
      "use strict";
      (t.r(s),
        t.d(s, {
          default: function () {
            return m;
          },
        }));
      var l = t(7437),
        n = t(2265),
        r = t(9837),
        i = t(6669),
        a = t(1169),
        o = t(5356),
        c = t(1691);
      let d = [
        {
          title: "Морские перевозки",
          icon: "/portfolio/ship.svg",
          items: [
            {
              question: "Обеспечиваете ли вы уплату налогов за нас ?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Где находятся ваши склады?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Где можно прочитать про ваши услуги?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "В какие европейские страны вы доставляете?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Какие услуги логистики вы предоставляете?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Как оплатить ваши услуги после доставки?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
          ],
        },
        {
          title: "Авиаперевозки",
          icon: "/portfolio/plane.svg",
          items: [
            {
              question: "Где находятся ваши склады?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Где можно прочитать про ваши услуги?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "В какие европейские страны вы доставляете?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Какие услуги логистики вы предоставляете?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Как оплатить ваши услуги после доставки?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
          ],
        },
        {
          title: "Железнодорожные перевозки",
          icon: "/portfolio/train.svg",
          items: [
            {
              question: "Обеспечиваете ли вы уплату налогов за нас ?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Где находятся ваши склады?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Где можно прочитать про ваши услуги?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Как оплатить ваши услуги после доставки?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
          ],
        },
        {
          title: "Автомобильные перевозки",
          icon: "/portfolio/car.svg",
          items: [
            {
              question: "Обеспечиваете ли вы уплату налогов за нас ?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Где находятся ваши склады?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Где можно прочитать про ваши услуги?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "В какие европейские страны вы доставляете?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Какие услуги логистики вы предоставляете?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Как оплатить ваши услуги после доставки?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
          ],
        },
        {
          title: "Складские услуги",
          icon: "/portfolio/store.svg",
          items: [
            {
              question: "Обеспечиваете ли вы уплату налогов за нас ?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Где находятся ваши склады?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Где можно прочитать про ваши услуги?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "В какие европейские страны вы доставляете?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Какие услуги логистики вы предоставляете?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Как оплатить ваши услуги после доставки?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
          ],
        },
        {
          title: "Таможенное оформление",
          icon: "/questions/customs.svg",
          items: [
            {
              question: "Обеспечиваете ли вы уплату налогов за нас ?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Где находятся ваши склады?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Где можно прочитать про ваши услуги?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "В какие европейские страны вы доставляете?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Какие услуги логистики вы предоставляете?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
            {
              question: "Как оплатить ваши услуги после доставки?",
              answer:
                "С гордостью мы являемся ведущей компанией в сфере транспортировки и логистики, предоставляющей полный спектр комплексных услуг, включая транспортировку, складское хранение, таможенное оформление и упаковку.",
            },
          ],
        },
      ];
      function m() {
        let [e, s] = (0, n.useState)(0);
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(r.Z, {
              title: "Центр помощи",
              routes: [
                {title: "Главная", href: "/"},
                {title: "Центр помощи", href: "help"},
              ],
              className:
                "relative after:absolute after:block bg-[#C4C4C4] after:top-0 after:left-0 after:w-full after:h-full after:z-100 after:bg-[linear-gradient(90deg,rgba(171,53,52,0.5)0%,rgba(255,7,5,0.5)200%)] after:bg-opacity-50",
            }),
            (0, l.jsx)("section", {
              children: (0, l.jsxs)("div", {
                className: "max-w-c-full mt-[120px] lg:mt-0 mb-12 lg:mb-0 mx-auto p-6 lg:px-8",
                children: [
                  (0, l.jsx)("h2", {
                    className: " font-title mb-20 lg:mb-10 text-black font-bold text-2xl max-w-[550px] sm:text-xl ss:text-lg",
                    children: "О чем нас спрашивают наши клиенты",
                  }),
                  (0, l.jsx)(i.Z, {active: e, setter: s, data: d, className: ""}),
                ],
              }),
            }),
            (0, l.jsx)("section", {
              className: "mb-[130px] lg:mb-0",
              children: (0, l.jsx)("div", {className: "max-w-c-full mb-6 mx-auto p-6 lg:px-8", children: (0, l.jsx)(a.Z, {items: d[e].items})}),
            }),
            (0, l.jsx)("section", {
              className: "mb-[100px] lg:mb-0",
              children: (0, l.jsx)("div", {className: "max-w-c-full mb-6 mx-auto p-6 lg:px-8", children: (0, l.jsx)(c.default, {})}),
            }),
            (0, l.jsx)(o.Z, {}),
          ],
        });
      }
    },
    7447: function (e, s, t) {
      "use strict";
      (Object.defineProperty(s, "__esModule", {value: !0}),
        (function (e, s) {
          for (var t in s) Object.defineProperty(e, t, {enumerable: !0, get: s[t]});
        })(s, {
          unstable_getImgProps: function () {
            return o;
          },
          default: function () {
            return c;
          },
        }));
      let l = t(1024),
        n = t(8630),
        r = t(6184),
        i = t(1749),
        a = l._(t(536)),
        o = (e) => {
          (0, r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
          let {props: s} = (0, n.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/next/image/",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !0,
            },
          });
          for (let [e, t] of Object.entries(s)) void 0 === t && delete s[e];
          return {props: s};
        },
        c = i.Image;
    },
    9746: function () {},
    9645: function () {},
    1729: function () {},
    622: function (e, s, t) {
      "use strict";
      var l = t(2265),
        n = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        a = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        o = {key: !0, ref: !0, __self: !0, __source: !0};
      function c(e, s, t) {
        var l,
          r = {},
          c = null,
          d = null;
        for (l in (void 0 !== t && (c = "" + t), void 0 !== s.key && (c = "" + s.key), void 0 !== s.ref && (d = s.ref), s))
          i.call(s, l) && !o.hasOwnProperty(l) && (r[l] = s[l]);
        if (e && e.defaultProps) for (l in (s = e.defaultProps)) void 0 === r[l] && (r[l] = s[l]);
        return {$$typeof: n, type: e, key: c, ref: d, props: r, _owner: a.current};
      }
      ((s.Fragment = r), (s.jsx = c), (s.jsxs = c));
    },
    7437: function (e, s, t) {
      "use strict";
      e.exports = t(622);
    },
    6691: function (e, s, t) {
      e.exports = t(7447);
    },
  },
  function (e) {
    (e.O(0, [893, 749, 64, 565, 983, 797, 309, 971, 938, 744], function () {
      return e((e.s = 3879));
    }),
      (_N_E = e.O()));
  },
]);
