/**
 * @param {string} title
 * @param {string} [body]
 */
export function error(title, body) {
  const messages = [`[DatePicker] :: ${title}`];
  if (typeof body === 'string') messages.push(body);
  throw new Error(messages.join('\n'));
}

/**
 * @param {any} value
 * @returns {boolean}
 */
export function isDate(value) {
  return !isNaN(/** @type {any} */ (new Date(value)));
}

/**
 * @param {unknown} value
 * @returns {value is string}
 */
export const isString = (value) => typeof value === 'string';

/**
 * @param {unknown} value
 * @returns {value is undefined}
 */
export const isUndefined = (value) => value === undefined;

/**
 * @param {unknown} value
 * @returns {value is null}
 */
export const isNull = (value) => value === null;

/**
 * @param {unknown} value
 * @returns {value is number}
 */
export const isNumber = (value) => typeof value === 'number';

/**
 * @param {unknown} value
 * @returns {value is boolean}
 */
export const isBoolean = (value) => typeof value === 'boolean';

/**
 * @param {unknown} value
 * @returns {value is Function}
 */
export const isFunction = (value) => typeof value === 'function';

/**
 * @param {unknown} value
 * @returns {value is Record<string|number|symbol, any>}
 */
export const isObject = (value) => !isNull(value) && typeof value === 'object';

/**
 * @template {keyof HTMLElementEventMap} K
 * @template {HTMLElement} [T = HTMLElement]
 * @typedef {HTMLElementEventMap[K] & { currentTarget: T }} Evt
 */

/**
 * @template {keyof HTMLElementEventMap} K
 * @template {HTMLElement} [T = HTMLElement]
 * @callback EvtListener
 * @param {T} this
 * @param {Evt<K, T>} event
 */

/**
 * @template {keyof HTMLElementEventMap} K
 * @template {HTMLElement} [T = HTMLElement]
 * @param {T} element
 * @param {K} eventType
 * @param {EvtListener<K, T>} listener
 * @param {AddEventListenerOptions} [options]
 */
export const on = (element, eventType, listener, options) =>
  element.addEventListener(eventType, /** @type {any} */ (listener), options);

/**
 * @template {HTMLElement} T
 * @template {keyof HTMLElementEventMap} K
 * @param {T} element
 * @param {K} eventType
 * @param {EvtListener<K, T>} listener
 */
export const off = (element, eventType, listener) =>
  element.removeEventListener(eventType, /** @type {any} */ (listener));

export const getToday = () => {
  const date = new Date();
  return [date.getFullYear(), date.getMonth(), date.getDate()];
};
