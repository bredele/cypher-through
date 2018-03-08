
/**
 * Filter Neo4j query result.
 *
 * @param {Object} result
 * @return {Object|Array}
 * @api public
 */

module.exports = result => {
  return result.records.map(objectify)
}


/**
 * Transform record into an object.
 *
 * A record ha a method to Object but returns identity, labels as well as
 * properties for nodes rather than properties only.
 *
 * @param {Object} record
 * @return {Object}
 * @api private
 */

function objectify (record) {
  const result = {}
  record._fields.map((field, idx) => {
    const key = record.keys[idx]
    if (field != null && typeof field === 'object' && field.toString() !== '[object Object]') {
      result[key] = field instanceof Array ? field.map(obj => obj.properties) : field.properties
    } else {
      result[key] = field
    }
  })
  return result
}
