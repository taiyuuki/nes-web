function setWhere(where: string[] | undefined): string {
  return where ? (
    'where '
    + where.reduce((pre, cur) => {
      return pre + ' and ' + cur
    })
  ) : ''
}

export const setSelectSql = (option: SelectSqlOption) => {
  let sql = 'select '
  if (typeof option.select === 'string') {
    sql += option.select + ' '
  }
  else {
    option.select.forEach((item, i) => {
      if (i === option.select.length - 1) {
        sql += `${item} `
      }
      else {
        sql += `${item}, `
      }
    })
  }
  sql += `from ${option.from} `
  sql += setWhere(option.where)
  if (option.order) {
    sql += ` order by ${option.order.by} ${option.order.sort}`
  }
  if (option.limit) {
    const count = Number(option.limit.count)
    const page = Number(option.limit.page)
    sql += ` limit ${count * (page - 1)}, ${count}`
  }
  return sql
}