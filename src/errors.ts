/**
 * Custom error classes for figma-ux-audit.
 */

/**
 * Base error class for all FigmaUxAudit errors.
 */
export class FigmaUxAuditError extends Error {
  /** Machine-readable error code. */
  readonly code: string;

  constructor(message: string, code = "FIGMAUXAUDIT_ERROR") {
    super(message);
    this.name = "FigmaUxAuditError";
    this.code = code;
  }
}

/**
 * Raised when the SDK is misconfigured.
 */
export class ConfigurationError extends FigmaUxAuditError {
  constructor(message: string) {
    super(message, "CONFIGURATION_ERROR");
    this.name = "ConfigurationError";
  }
}

/**
 * Raised when input validation fails.
 */
export class ValidationError extends FigmaUxAuditError {
  constructor(message: string) {
    super(message, "VALIDATION_ERROR");
    this.name = "ValidationError";
  }
}

/**
 * Raised when an operation exceeds its time limit.
 */
export class TimeoutError extends FigmaUxAuditError {
  constructor(message: string) {
    super(message, "TIMEOUT_ERROR");
    this.name = "TimeoutError";
  }
}
