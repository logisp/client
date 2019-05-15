import axios from '@/providers/axios'

export function build (route = '', method = 'post') {
  return params => axios[method](route, params)
}
