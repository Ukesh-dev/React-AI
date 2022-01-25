export const Theme = {
    colors: {

    },
    "font-family": {},
    breakpoints: {
        xs: "565px",
        md: "960px",
        lg: "1100px",
    },
    // up: (breakpoint: string): string =>
    //   `@media (min-width:calc(${breakpoint} + 0.02px )) `,
    // down: (breakpoint: string): string => `@media (max-width:${breakpoint}) `,
    up: (breakpoint, vertical = false) =>
        `@media (min-${vertical ? "height" : "width"
        }: calc(${breakpoint} + 0.02px))`,
    down: (breakpoint, vertical = false) =>
        `@media (max-${vertical ? "height" : "width"}: ${breakpoint})`,
    between: (breakpointMin, breakpointMax, vertical = false) =>
        `@media (max-${vertical ? "height" : "width"}: ${breakpointMax}) and (min-${vertical ? "height" : "width"
        }: calc(${breakpointMin} + 0.02px))`,
};