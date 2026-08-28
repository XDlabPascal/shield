/* @ds-bundle: {"format":4,"namespace":"OrangeDesignSystem_4d8c32","components":[{"name":"Badge","sourcePath":"components/data/badge/Badge.jsx"},{"name":"Card","sourcePath":"components/data/card/Card.jsx"},{"name":"Alert","sourcePath":"components/feedback/alert/Alert.jsx"},{"name":"Progress","sourcePath":"components/feedback/progress/Progress.jsx"},{"name":"Toast","sourcePath":"components/feedback/toast/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/tooltip/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/button/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/checkbox/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/input/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/radio/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/select/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/switch/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/tabs/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/dialog/Dialog.jsx"}],"sourceHashes":{"components/data/badge/Badge.jsx":"5c5dea807914","components/data/card/Card.jsx":"28de92318303","components/feedback/alert/Alert.jsx":"162e250a6d67","components/feedback/progress/Progress.jsx":"ad2f565a7b5a","components/feedback/toast/Toast.jsx":"56f4561ed89d","components/feedback/tooltip/Tooltip.jsx":"a75efc866630","components/forms/button/Button.jsx":"6f14f15f8aeb","components/forms/checkbox/Checkbox.jsx":"98dfa6f5303f","components/forms/input/Input.jsx":"0b4af133b659","components/forms/radio/Radio.jsx":"43fff6254f70","components/forms/select/Select.jsx":"959cb650108b","components/forms/switch/Switch.jsx":"809feb28db7c","components/navigation/tabs/Tabs.jsx":"bf2bb32820b6","components/overlay/dialog/Dialog.jsx":"5b5797fe4a3f","ui_kits/my-orange/Screens.jsx":"19eef8948aae"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OrangeDesignSystem_4d8c32 = window.OrangeDesignSystem_4d8c32 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/badge/Badge.jsx
try { (() => {
const TONES = {
  neutral: {
    bg: "var(--grey-200)",
    fg: "var(--color-black)"
  },
  success: {
    bg: "var(--status-success)",
    fg: "var(--color-black)"
  },
  info: {
    bg: "var(--status-info)",
    fg: "var(--color-white)"
  },
  warning: {
    bg: "var(--status-warning)",
    fg: "var(--color-black)"
  },
  danger: {
    bg: "var(--status-danger)",
    fg: "var(--color-white)"
  },
  brand: {
    bg: "var(--brand-accent)",
    fg: "var(--color-black)"
  }
};
function Badge({
  tone = "neutral",
  children
}) {
  const t = TONES[tone] || TONES.neutral;
  return React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      background: t.bg,
      color: t.fg,
      fontFamily: "var(--font-base)",
      fontWeight: 600,
      fontSize: 12,
      padding: "3px 8px",
      borderRadius: "var(--radius-sm)",
      letterSpacing: "0.2px"
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/badge/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/card/Card.jsx
try { (() => {
function Card({
  title,
  children,
  footer
}) {
  return React.createElement("div", {
    style: {
      border: "1px solid var(--grey-300)",
      borderRadius: "var(--radius-none)",
      background: "var(--color-white)",
      fontFamily: "var(--font-base)",
      overflow: "hidden"
    }
  }, title ? React.createElement("div", {
    style: {
      padding: "16px 20px",
      borderBottom: "1px solid var(--grey-300)",
      fontWeight: 700,
      fontSize: 17
    }
  }, title) : null, React.createElement("div", {
    style: {
      padding: 20,
      fontSize: 15,
      color: "var(--text-primary)"
    }
  }, children), footer ? React.createElement("div", {
    style: {
      padding: "14px 20px",
      borderTop: "1px solid var(--grey-300)",
      background: "var(--surface-sunken)"
    }
  }, footer) : null);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/card/Card.jsx", error: String((e && e.message) || e) }); }

// components/feedback/alert/Alert.jsx
try { (() => {
const TONES = {
  info: {
    bg: "#eaf2fc",
    border: "var(--status-info)"
  },
  success: {
    bg: "#eafbea",
    border: "var(--status-success)"
  },
  warning: {
    bg: "#fff9e5",
    border: "var(--status-warning)"
  },
  danger: {
    bg: "#fcece7",
    border: "var(--status-danger)"
  }
};
function Alert({
  tone = "info",
  title,
  children
}) {
  const t = TONES[tone] || TONES.info;
  return React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      background: t.bg,
      borderLeft: "4px solid " + t.border,
      padding: "14px 16px",
      fontFamily: "var(--font-base)",
      borderRadius: "var(--radius-none)"
    }
  }, React.createElement("div", {
    style: {
      flex: 1
    }
  }, title ? React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15,
      marginBottom: 2
    }
  }, title) : null, React.createElement("div", {
    style: {
      fontSize: 14,
      color: "var(--text-primary)"
    }
  }, children)));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/alert/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/progress/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  max = 100,
  tone = "brand"
}) {
  const pct = Math.min(100, Math.max(0, value / max * 100));
  const fill = tone === "danger" ? "var(--status-danger)" : tone === "success" ? "var(--status-success)" : "var(--brand-accent)";
  return React.createElement("div", {
    style: {
      width: "100%",
      height: 8,
      background: "var(--grey-300)",
      borderRadius: "var(--radius-pill)",
      overflow: "hidden"
    }
  }, React.createElement("div", {
    style: {
      width: pct + "%",
      height: "100%",
      background: fill,
      transition: "width var(--motion-base) var(--motion-ease)"
    }
  }));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/progress/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/toast/Toast.jsx
try { (() => {
function Toast({
  tone = "neutral",
  children,
  onClose
}) {
  const bg = tone === "danger" ? "var(--status-danger)" : tone === "success" ? "var(--status-success)" : "var(--color-black)";
  const fg = tone === "success" ? "var(--color-black)" : "var(--color-white)";
  return React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14,
      background: bg,
      color: fg,
      fontFamily: "var(--font-base)",
      fontSize: 14,
      padding: "12px 16px",
      borderRadius: "var(--radius-none)",
      boxShadow: "var(--shadow-md)",
      maxWidth: 360
    }
  }, React.createElement("div", {
    style: {
      flex: 1
    }
  }, children), onClose ? React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "none",
      border: "none",
      color: fg,
      fontSize: 16,
      cursor: "pointer",
      padding: 0
    }
  }, "×") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/toast/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/tooltip/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, show ? React.createElement("span", {
    style: {
      position: "absolute",
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)",
      background: "var(--color-black)",
      color: "var(--color-white)",
      fontFamily: "var(--font-base)",
      fontSize: 12,
      padding: "6px 10px",
      borderRadius: "var(--radius-sm)",
      whiteSpace: "nowrap",
      zIndex: 10
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/tooltip/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/button/Button.jsx
try { (() => {
const VARIANTS = {
  primary: {
    background: "var(--action-primary-bg)",
    color: "var(--action-primary-text)",
    border: "2px solid var(--action-primary-bg)"
  },
  secondary: {
    background: "var(--color-white)",
    color: "var(--action-secondary-text)",
    border: "2px solid var(--action-secondary-border)"
  },
  ghost: {
    background: "transparent",
    color: "var(--action-secondary-text)",
    border: "2px solid transparent"
  },
  danger: {
    background: "var(--status-danger)",
    color: "var(--color-white)",
    border: "2px solid var(--status-danger)"
  }
};
const SIZES = {
  sm: {
    padding: "6px 14px",
    fontSize: "14px"
  },
  md: {
    padding: "10px 20px",
    fontSize: "16px"
  },
  lg: {
    padding: "14px 28px",
    fontSize: "18px"
  }
};
function Button({
  variant = "primary",
  size = "md",
  icon,
  disabled = false,
  children,
  onClick,
  type = "button"
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const style = {
    ...v,
    ...s,
    fontFamily: "var(--font-base)",
    fontWeight: 600,
    letterSpacing: "-0.1px",
    borderRadius: "var(--radius-none)",
    cursor: disabled ? "not-allowed" : "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    justifyContent: "center",
    opacity: disabled ? 0.45 : 1,
    transition: "background-color var(--motion-fast) var(--motion-ease), box-shadow var(--motion-fast) var(--motion-ease)",
    boxShadow: active && !disabled ? "inset 0 2px 4px rgba(0,0,0,0.35)" : "none"
  };
  if (!disabled && hover) {
    if (variant === "primary") style.background = "var(--action-primary-bg-hover)";
    if (variant === "secondary") style.background = "var(--grey-100)";
    if (variant === "ghost") style.background = "var(--grey-100)";
    if (variant === "danger") style.background = "#a8300f";
  }
  return React.createElement("button", {
    type,
    disabled,
    style,
    onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, icon ? React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: "inline-flex",
      width: 16,
      height: 16
    }
  }, icon) : null, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/button/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/checkbox/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false
}) {
  const [c, setC] = React.useState(!!checked);
  const isChecked = checked !== undefined ? checked : c;
  const toggle = () => {
    if (disabled) return;
    if (onChange) onChange(!isChecked);
    if (checked === undefined) setC(!isChecked);
  };
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-base)",
      fontSize: 15,
      opacity: disabled ? 0.5 : 1,
      userSelect: "none"
    }
  }, React.createElement("span", {
    onClick: toggle,
    role: "checkbox",
    "aria-checked": isChecked,
    tabIndex: 0,
    style: {
      width: 20,
      height: 20,
      border: "2px solid var(--color-black)",
      background: isChecked ? "var(--color-black)" : "var(--color-white)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "var(--radius-none)",
      flexShrink: 0
    }
  }, isChecked ? React.createElement("svg", {
    width: 12,
    height: 10,
    viewBox: "0 0 12 10"
  }, React.createElement("path", {
    d: "M1 5L4.5 8.5L11 1",
    stroke: "white",
    strokeWidth: "2",
    fill: "none"
  })) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/checkbox/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/input/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = "text",
  error,
  disabled = false,
  defaultValue
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-base)",
      width: "100%"
    }
  }, label ? React.createElement("label", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--text-primary)"
    }
  }, label) : null, React.createElement("input", {
    type,
    placeholder,
    disabled,
    defaultValue,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-base)",
      fontSize: 16,
      padding: "10px 12px",
      border: error ? "2px solid var(--status-danger)" : focus ? "2px solid var(--focus-ring)" : "1px solid var(--border-default)",
      borderRadius: "var(--radius-none)",
      background: disabled ? "var(--grey-100)" : "var(--color-white)",
      color: "var(--text-primary)",
      outline: "none"
    }
  }), error ? React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--status-danger)"
    }
  }, error) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/input/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/radio/Radio.jsx
try { (() => {
function Radio({
  name,
  label,
  checked,
  onChange,
  disabled = false
}) {
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-base)",
      fontSize: 15,
      opacity: disabled ? 0.5 : 1,
      userSelect: "none"
    }
  }, React.createElement("span", {
    onClick: () => {
      if (!disabled && onChange) onChange();
    },
    role: "radio",
    "aria-checked": checked,
    tabIndex: 0,
    style: {
      width: 20,
      height: 20,
      borderRadius: "50%",
      border: "2px solid var(--color-black)",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, checked ? React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: "var(--color-black)"
    }
  }) : null), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/radio/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/select/Select.jsx
try { (() => {
function Select({
  label,
  options = [],
  defaultValue,
  disabled = false
}) {
  const [focus, setFocus] = React.useState(false);
  return React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6,
      fontFamily: "var(--font-base)"
    }
  }, label ? React.createElement("label", {
    style: {
      fontSize: 14,
      fontWeight: 600
    }
  }, label) : null, React.createElement("div", {
    style: {
      position: "relative"
    }
  }, React.createElement("select", {
    disabled,
    defaultValue,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-base)",
      fontSize: 16,
      padding: "10px 32px 10px 12px",
      width: "100%",
      appearance: "none",
      border: focus ? "2px solid var(--focus-ring)" : "1px solid var(--border-default)",
      borderRadius: "var(--radius-none)",
      background: disabled ? "var(--grey-100)" : "var(--color-white)",
      color: "var(--text-primary)",
      outline: "none"
    }
  }, options.map((o, i) => React.createElement("option", {
    key: i,
    value: o
  }, o))), React.createElement("span", {
    style: {
      position: "absolute",
      right: 12,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      fontSize: 12
    }
  }, "▾")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/select/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/switch/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  onChange,
  disabled = false
}) {
  const [c, setC] = React.useState(!!checked);
  const isOn = checked !== undefined ? checked : c;
  const toggle = () => {
    if (disabled) return;
    if (onChange) onChange(!isOn);
    if (checked === undefined) setC(!isOn);
  };
  return React.createElement("label", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      cursor: disabled ? "not-allowed" : "pointer",
      fontFamily: "var(--font-base)",
      fontSize: 15,
      opacity: disabled ? 0.5 : 1,
      userSelect: "none"
    }
  }, React.createElement("span", {
    onClick: toggle,
    role: "switch",
    "aria-checked": isOn,
    tabIndex: 0,
    style: {
      width: 40,
      height: 22,
      borderRadius: "var(--radius-pill)",
      background: isOn ? "var(--color-black)" : "var(--grey-400)",
      position: "relative",
      transition: "background var(--motion-base) var(--motion-ease)",
      flexShrink: 0
    }
  }, React.createElement("span", {
    style: {
      position: "absolute",
      top: 2,
      left: isOn ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "#fff",
      transition: "left var(--motion-base) var(--motion-ease)"
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/switch/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/tabs/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  onChange
}) {
  const [i, setI] = React.useState(0);
  const activeIndex = active !== undefined ? active : i;
  return React.createElement("div", {
    style: {
      display: "flex",
      borderBottom: "1px solid var(--grey-300)",
      fontFamily: "var(--font-base)",
      gap: 24
    }
  }, tabs.map((t, idx) => React.createElement("button", {
    key: idx,
    onClick: () => {
      if (onChange) onChange(idx);
      if (active === undefined) setI(idx);
    },
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: "12px 2px",
      fontSize: 15,
      fontWeight: idx === activeIndex ? 700 : 400,
      color: idx === activeIndex ? "var(--color-black)" : "var(--text-secondary)",
      borderBottom: idx === activeIndex ? "3px solid var(--color-black)" : "3px solid transparent",
      fontFamily: "var(--font-base)"
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/tabs/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/dialog/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  footer,
  onClose
}) {
  if (!open) return null;
  return React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      background: "rgba(0,0,0,0.5)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 100,
      fontFamily: "var(--font-base)"
    },
    onClick: onClose
  }, React.createElement("div", {
    style: {
      background: "var(--color-white)",
      width: 420,
      boxShadow: "var(--shadow-lg)",
      borderRadius: "var(--radius-none)"
    },
    onClick: e => e.stopPropagation()
  }, React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "18px 20px",
      borderBottom: "1px solid var(--grey-300)"
    }
  }, React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18
    }
  }, title), React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      background: "none",
      border: "none",
      fontSize: 20,
      cursor: "pointer"
    }
  }, "×")), React.createElement("div", {
    style: {
      padding: 20,
      fontSize: 15
    }
  }, children), footer ? React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: 10,
      padding: "14px 20px",
      borderTop: "1px solid var(--grey-300)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/dialog/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/my-orange/Screens.jsx
try { (() => {
const {
  useState
} = React;
const {
  Button,
  Input,
  Badge,
  Card,
  Progress,
  Tabs,
  Alert
} = window.OrangeDesignSystem_4d8c32;
function LoginScreen({
  onLogin
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: "100%",
      background: "var(--color-black)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-base)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      width: 360,
      padding: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 28,
      marginBottom: 4
    }
  }, "Orange"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 14,
      marginBottom: 24
    }
  }, "Sign in to your account"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Mobile number",
    placeholder: "06 12 34 56 78"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Password",
    type: "password",
    placeholder: "\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onLogin
  }, "Sign in"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 13,
      textAlign: "center"
    }
  }, "Forgot password?"))));
}
function DashboardScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-base)",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 24
    }
  }, "Hello, Camille"), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, "Le Meilleur Forfait")), /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    title: "Data usage at 80%"
  }, "You have used 104 of 130 Go this cycle. Renews 12 September."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Card, {
    title: "Data"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 8
    }
  }, "104 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 400,
      color: "var(--text-secondary)"
    }
  }, "/ 130 Go")), /*#__PURE__*/React.createElement(Progress, {
    value: 104,
    max: 130,
    tone: "brand"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Calls & texts"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 8
    }
  }, "Unlimited"), /*#__PURE__*/React.createElement(Progress, {
    value: 100,
    max: 100,
    tone: "success"
  })), /*#__PURE__*/React.createElement(Card, {
    title: "Next invoice"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      fontWeight: 700,
      marginBottom: 8
    }
  }, "\u20AC42.99"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, "Due 12 September"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav("billing")
  }, "View invoices"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => onNav("shop")
  }, "Explore plans")));
}
function BillingScreen() {
  const invoices = [["12 August 2026", "€42.99", "Paid"], ["12 July 2026", "€42.99", "Paid"], ["12 June 2026", "€42.99", "Paid"], ["12 May 2026", "€37.99", "Paid"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-base)",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 24
    }
  }, "Invoices"), /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement("table", {
    style: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: {
      textAlign: "left",
      borderBottom: "1px solid var(--grey-300)"
    }
  }, /*#__PURE__*/React.createElement("th", {
    style: {
      padding: "8px 0"
    }
  }, "Date"), /*#__PURE__*/React.createElement("th", null, "Amount"), /*#__PURE__*/React.createElement("th", null, "Status"), /*#__PURE__*/React.createElement("th", null))), /*#__PURE__*/React.createElement("tbody", null, invoices.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    style: {
      borderBottom: "1px solid var(--grey-200)"
    }
  }, /*#__PURE__*/React.createElement("td", {
    style: {
      padding: "12px 0"
    }
  }, row[0]), /*#__PURE__*/React.createElement("td", null, row[1]), /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, row[2])), /*#__PURE__*/React.createElement("td", {
    style: {
      textAlign: "right"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Download PDF"))))))));
}
function ShopScreen() {
  const plans = [{
    name: "Essentiel",
    data: "50 Go",
    price: "19.99"
  }, {
    name: "Le Meilleur Forfait",
    data: "130 Go",
    price: "42.99",
    current: true
  }, {
    name: "Le Meilleur Forfait +",
    data: "200 Go",
    price: "49.99"
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-base)",
      padding: 32,
      display: "flex",
      flexDirection: "column",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 24
    }
  }, "Mobile plans"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr 1fr",
      gap: 16
    }
  }, plans.map((p, i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    title: p.name,
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: p.current ? "secondary" : "primary",
      disabled: p.current
    }, p.current ? "Current plan" : "Switch to this plan")
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 32,
      fontWeight: 700,
      marginBottom: 4
    }
  }, p.data), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      marginBottom: 12
    }
  }, "\u20AC", p.price, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, "/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, "Unlimited calls & texts, EU roaming included")))));
}
window.LoginScreen = LoginScreen;
window.DashboardScreen = DashboardScreen;
window.BillingScreen = BillingScreen;
window.ShopScreen = ShopScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/my-orange/Screens.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
