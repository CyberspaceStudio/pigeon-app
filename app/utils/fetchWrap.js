import { BASE_FETCH_URL_PREFIX } from './CONSTANT'

const payload2url = (payload) => {
  const dataSet = []

  Object.entries(payload).forEach(([key, value]) => {
    dataSet.push(`${key}=${value}`)
  })

  return `?${dataSet.join('&')}`
}

const payload2body = (payload) => JSON.stringify(payload)

const isGetFetch = (method) => method === 'GET'

export const fetchWrap = async (path, method, payload) => {
  let err, res, body

  if (isGetFetch(method)) {
    path = `${BASE_FETCH_URL_PREFIX}${path}${payload2url(payload)}`
  } else {
    body = payload2body(payload)
  }

  try {
    res = await fetch(path, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body
    }).then((res) => res.json())
  } catch (e) {
    err = e
  }

  return [err, res]
}
