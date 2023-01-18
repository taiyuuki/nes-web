function setWhere(where: string[] | undefined): string {
  return (where && where.length > 0) ? (
    'WHERE '
    + where.reduce((pre, cur) => {
      return pre + ' AND ' + cur
    })
  ) : ''
}

export const setSelectSql = (option: SelectSqlOption) => {
  let sql = 'SELECT '
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
  sql += `FROM ${option.from} `
  sql += setWhere(option.where)
  if (option.order) {
    sql += ` ORDER BY ${option.order.by} ${option.order.sort}`
  }
  if (option.limit) {
    const count = Number(option.limit.count)
    const page = Number(option.limit.page)
    sql += ` LIMIT ${count * (page - 1)}, ${count}`
  }
  return sql
}