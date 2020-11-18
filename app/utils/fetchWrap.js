import { BASE_FETCH_URL_PREFIX } from './CONSTANT'

const payload2url = (data) => {
  const dataSet = []

  Object.entries(data).forEach(([key, value]) => {
    dataSet.push(`${key}=${value}`)
  })

  return `?${dataSet.join('&')}`
}

const payload2body = (data) => JSON.stringify(data)

const isGetFetch = (method) => method === 'GET'

/*
 * payload: {data: Object, contentType: String, ...}
 *
 *
 */
export const fetchWrap = async (path, method, payload) => {
  const { data, contentType = 'x-www-form-urlencoded' } = payload
  let err, res, body

  if (isGetFetch(method)) {
    path = `${BASE_FETCH_URL_PREFIX}${path}${payload2url(data)}`
  } else {
    body = payload2body(data)
  }

  try {
    res = await fetch(path, {
      method,
      headers: {
        'Content-type': contentType
      },
      body
    }).then((res) => res.json())
  } catch (e) {
    err = e
  }

  return [err, res]
}
