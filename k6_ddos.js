import { sleep } from 'k6'
import http from 'k6/http'

// See https://k6.io/docs/using-k6/options
export const options = {
  stages: [
    { duration: '10s', target: 100 },
    // { duration: '5s', target: 2000 },
    // { duration: '5s', target: 2000 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.02'], // http errors should be less than 2%
    http_req_duration: ['p(95)<2000'], // 95% requests should be below 2s
  },
  ext: {
    loadimpact: {
      projectID: 3668086,
      name: "DDOS_SIM",
      distribution: {
        'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 },
      },
    },
  },
}

export default function main() {
  // let response = http.get('https://phukienlaser.vn/xep-phoi-tiet-kiem-voi-cypcut-don-gian/')
  let response = http.get('http://localhost:19999/')
  sleep(1)
}