/**
 * Configuration options for FigmaUxAudit.
 */
export interface FigmaUxAuditOptions {
  /**
   * Enable verbose logging for debugging.
   * @default false
   */
  verbose?: boolean;

  /**
   * Configuration for: Figma token export (colors, typography, spacing) to JSON
   */
  feature1?: Record<string, unknown>;

  /**
   * Configuration for: Rule-based checks for contrast, tap targets, and text sizing
   */
  feature2?: Record<string, unknown>;

  /**
   * Configuration for: CI-friendly report output (JUnit/JSON/Markdown)
   */
  feature3?: Record<string, unknown>;
}

/**
 * Result returned by FigmaUxAudit operations.
 */
export interface FigmaUxAuditResult<T = unknown> {
  /** Whether the operation succeeded. */
  success: boolean;
  /** The result data, if successful. */
  data?: T;
  /** Error message, if the operation failed. */
  error?: string;
}
