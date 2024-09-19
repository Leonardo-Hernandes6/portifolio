// Define o tipo de breakpoints
type BreakpointSize = "sm0" | "sm1" | "sm2" | "md1" | "bg1";

const sizes: Record<BreakpointSize, string> = {
  sm0: "580px",
  sm1: "680px",
  sm2: "950px",
  md1: "1200px",
  bg1: "1600px",
};

const breakpoint = {
  sm0: `(max-width: ${sizes.sm0})`,
  sm1: `(max-width: ${sizes.sm1})`,
  sm2: `(max-width: ${sizes.sm2})`,
  md1: `(max-width: ${sizes.md1})`,
  bg1: `(max-width: ${sizes.bg1})`,
};

export default breakpoint;
