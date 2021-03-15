const addSorting = (function () {
  let cols


  const currentSort = {
    index: 0,
    desc: false
  }

  // returns the summary table element

  function getTable () { return document.querySelector('.coverage-summary') }

  // returns the thead element of the summary table

  function getTableHeader () { return getTable().querySelector('thead tr') }

  // returns the tbody element of the summary table

  function getTableBody () { return getTable().querySelector('tbody') }

  // returns the th element for nth column

  function getNthColumn (n) { return getTableHeader().querySelectorAll('th')[n] }

  // loads all columns

  function loadColumns () {
    const colNodes = getTableHeader().querySelectorAll('th')


    let colNode


    const cols = []


    let col


    let index

    for (index = 0; index < colNodes.length; index += 1) {
      colNode = colNodes[index]

      col = {
        key: colNode.getAttribute('data-col'),
        sortable: !colNode.getAttribute('data-nosort'),
        type: colNode.getAttribute('data-type') || 'string'
      }

      cols.push(col)
      if (col.sortable) {
        col.defaultDescSort = col.type === 'number'
        colNode.innerHTML = `${colNode.innerHTML}<span class="sorter"></span>`
      }
    }
    return cols
  }

  // attaches a data attribute to every tr element with an object
  // of data values keyed by column name

  function loadRowData (tableRow) {
    const tableCols = tableRow.querySelectorAll('td')


    let colNode


    let col


    const data = {}


    let index


    let value
    for (index = 0; index < tableCols.length; index += 1) {
      colNode = tableCols[index]
      col = cols[index]
      value = colNode.getAttribute('data-value')
      if (col.type === 'number') {
        value = Number(value)
      }
      data[col.key] = value
    }
    return data
  }

  // loads all row data

  function loadData () {
    const rows = getTableBody().querySelectorAll('tr')


    let index

    for (index = 0; index < rows.length; index += 1) {
      rows[index].data = loadRowData(rows[index])
    }
  }

  // sorts the table using the data for the ith column

  function sortByIndex (index, desc) {
    const key = cols[index].key


    const sorter = function (a, b) {
      a = a.data[key]
      b = b.data[key]
      return a < b ? -1 : a > b ? 1 : 0
    }


    let finalSorter = sorter


    const tableBody = document.querySelector('.coverage-summary tbody')


    const rowNodes = tableBody.querySelectorAll('tr')


    const rows = []


    let index_

    if (desc) {
      finalSorter = function (a, b) {
        return -1 * sorter(a, b)
      }
    }

    for (index_ = 0; index_ < rowNodes.length; index_ += 1) {
      rows.push(rowNodes[index_])
      rowNodes[index_].remove()
    }

    rows.sort(finalSorter)

    for (index_ = 0; index_ < rows.length; index_ += 1) {
      tableBody.append(rows[index_])
    }
  }

  // removes sort indicators for current column being sorted

  function removeSortIndicators () {
    const col = getNthColumn(currentSort.index)


    let cls = col.className

    cls = cls.replace(/ sorted$/, '').replace(/ sorted-desc$/, '')
    col.className = cls
  }

  // adds sort indicators for current column being sorted

  function addSortIndicators () {
    getNthColumn(currentSort.index).className += currentSort.desc ? ' sorted-desc' : ' sorted'
  }

  // adds event listeners for all sorter widgets

  function enableUI () {
    let index


    let element


    const ithSorter = function ithSorter (index_) {
      const col = cols[index_]

      return function () {
        let desc = col.defaultDescSort

        if (currentSort.index === index_) {
          desc = !currentSort.desc
        }
        sortByIndex(index_, desc)
        removeSortIndicators()
        currentSort.index = index_
        currentSort.desc = desc
        addSortIndicators()
      }
    }
    for (index = 0; index < cols.length; index += 1) {
      if (cols[index].sortable) {
        // add the click event handler on the th so users
        // dont have to click on those tiny arrows

        element = getNthColumn(index).querySelector('.sorter').parentElement
        if (element.addEventListener) {
          element.addEventListener('click', ithSorter(index))
        } else {
          element.attachEvent('onclick', ithSorter(index))
        }
      }
    }
  }

  // adds sorting functionality to the UI

  return function () {
    if (!getTable()) {
      return
    }
    cols = loadColumns()
    loadData(cols)
    addSortIndicators()
    enableUI()
  }
})()

window.addEventListener('load', addSorting)
