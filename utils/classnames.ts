type SupportedClassName = string | Record<string, boolean>;

const isString = (arg: SupportedClassName): arg is string =>
  typeof arg === "string";
const isRecord = (arg: SupportedClassName): arg is Record<string, boolean> =>
  typeof arg === "object";

/**
 * Emulates the npm library `classNames`
 *
 * Example:
 * `c('pt-12', 'pb-12', {'mt-12': false, 'grid-layout': true })`
 *
 * Returns: `pt-12 pb-12 grid-layout`
 */
export const c = (...args: SupportedClassName[]) => {
  const classNames = args.filter(isString);
  const conditionals = args.filter(isRecord);

  for (const conditional of conditionals) {
    const classNamesOfConditional = Object.keys(conditional);

    for (const classNameOfConditional of classNamesOfConditional) {
      if (conditional[classNameOfConditional]) {
        classNames.push(classNameOfConditional);
      }
    }
  }

  return classNames.join(" ");
};
