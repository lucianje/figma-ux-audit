/**
 * figma-ux-audit
 * Exports Figma design tokens and runs automated UI accessibility and consistency checks.
 */

export { FigmaUxAudit } from "./figma-token-export-colors-typo";
export type { FigmaUxAuditOptions, FigmaUxAuditResult } from "./types";
export { FigmaUxAuditError, ConfigurationError, ValidationError } from "./errors";
