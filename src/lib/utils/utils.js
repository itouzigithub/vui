/**
 * 返回数据类型
 * undefined => 'undefined'
 * null => 'null'
 * 1 => 'number'
 * 'abc' => 'string'
 * true => 'boolean'
 * [1,2,3] => 'array' 
 * function => 'function'
 * {a: 1} => 'object'
 * new Set() => 'set'
 */
export const getType = v =>
  v === undefined ? 'undefined' : v === null ? 'null' : v.constructor.name.toLowerCase()