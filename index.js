'use strict'

module.exports = (pluginContext) => {
  const shell = pluginContext.shell

  function search (query, res) {
    const query_trim = query.trim()

    if (query_trim.length === 0) {
      return
    }

    res.add({
      id: query_trim,
      payload: 'amzn',
      title: query_trim,
	  icon: "#fa fa-shopping-cart",
      desc: 'searching on amazon.com'
    })

	
	
  }

  function execute (id, payload) {
    if (payload !== 'amzn') {
      return
    }
    shell.openExternal(`http://www.amazon.com/s/field-keywords=${id}`)
  }

  return { search, execute }
}
