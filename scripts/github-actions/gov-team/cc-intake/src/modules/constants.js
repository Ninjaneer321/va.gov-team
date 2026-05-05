export const NO_RESPONSE = "_No response_";

/**
 * Returns the value if it's a meaningful response, or null otherwise.
 */
export function hasResponse(value) {
  return value && value !== NO_RESPONSE ? value : null;
}
