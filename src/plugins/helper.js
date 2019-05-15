export default {
  install (Vue) {
    Vue.prototype.$removeIds = removeIds
    Vue.prototype.$handleMultiSelect = handleMultiSelect
    Vue.prototype.$handleMultiSelectAll = handleMultiSelectAll
    Vue.prototype.$syncObjectValues = syncObjectValues
  }
}

function syncObjectValues (a, b) {
  for (let key in a) {
    a[key] = b[key]
  }
}

function removeIds (ids, list, data) {
  ids.forEach(id => {
    const index = list.indexOf(id)
    if (index !== -1) {
      list.splice(index, 1)
      data[id] = undefined
    }
  })
}

function handleMultiSelect (list, id) {
  const index = list.indexOf(id)
  index === -1 ? list.push(id) : list.splice(index, 1)
}

function handleMultiSelectAll (list, all) {
  const total = all.length
  const selected = list.length

  if (total === selected) {
    list.splice(0, selected)
  } else {
    list.splice(0, selected, ...all.map(id => id))
  }
}
