import { sleep, group } from 'k6'
import http from 'k6/http'
import jsonpath from 'https://jslib.k6.io/jsonpath/1.0.2/index.js'

export const options = {
  ext: {
    loadimpact: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
      apm: [],
    },
  },
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<500'], // 95 percent of response times must be below 900ms
  },
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '60s',
      stages: [
        { target: 20, duration: '1m' },
        { target: 20, duration: '3m30s' },
        { target: 0, duration: '1m' },
      ],
      gracefulRampDown: '60s',
      exec: 'scenario_1',
    },
  },
}

export function scenario_1() {
  let response

  const vars = {}

  group('byo-homepage-bosak-kia - https://web-testing.upstart.com/byo/bosak-kia/', function () {
    response = http.get('https://web-testing.upstart.com/byo/bosak-kia/', {
      headers: {
        'upgrade-insecure-requests': '1',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/333.ad42ca0bdfbb4e9868cd.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/app.78d059cbffd65fc65323.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/browse.000a59c7eb8537077738.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/707.b1c624e444ef795ba392.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/documentUpload.7b1f42fd2ebdfab9e5d1.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/summary.0e42a8bfb061b4d4bcfe.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/section.3d0116d7e95e6cfc9b69.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://web-testing.upstart.com/applicationSteps.0df8ecdac6ae4df97347.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://web-testing.upstart.com/appointmentSteps.aecfad937d1c648bc679.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://web-testing.upstart.com/protectionSteps.43506b48b53d7f6fdfee.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/33.347ba426ecd250c7bbdf.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/paymentSteps.187c416b3ed353670fb1.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://web-testing.upstart.com/accessoriesSteps.e1b5cbee5f4f6ec8230f.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://web-testing.upstart.com/tradeInSteps.116aabbc82209396795c.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/zipCode.65f197b318a7508f0d31.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/268.33e48c704788fb37a87b.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/537.cdbcdfcb0fb61a166375.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://web-testing.upstart.com/CarCompareOverlay.a2c60e555bad49eca91a.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://web-testing.upstart.com/CarCompareFooter.b518b16978f6ad4a925b.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://web-testing.upstart.com/852.75539789e4890adb548c.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/531.005586f92e363e8752a9.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/Login.cf0b0683d97886f2d6fd.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/VerifyEmail.6c915d37c24046d96dbd.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/ForgotPassword.d5387b8a3e7b2aee1caf.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/ResetPassword.8c9005c1af9ac1957fe4.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://growthbook-api.upstart.com/api/features/sdk-vnBbHhWGH5DKgvZN', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/CreatePassword.51579222fcc18258d529.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/526.a5f903da161e1154518e.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/625.89fe551f6021b5fb7da6.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/ChatBox.8b89cf60612e663756a1.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/BYOPageLoader.70677d0d5fb11b6307e2.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://testing-prodigy-cdn-252321367175-us-east-1.s3.us-east-1.amazonaws.com/system-status.json',
      {
        headers: {
          accept: 'application/json, text/plain, */*',
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get(
      'https://cdn.cookielaw.org/consent/01e8d177-940c-4e5e-9c89-cc14b6c6e74d-test/OtAutoBlock.js',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://cdn.cookielaw.org/scripttemplates/otSDKStub.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get('https://web-testing.upstart.com/39ac38d8a27bed2a16e4.woff2', {
      headers: {
        origin: 'https://web-testing.upstart.com',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://cdn.cookielaw.org/consent/01e8d177-940c-4e5e-9c89-cc14b6c6e74d-test/01e8d177-940c-4e5e-9c89-cc14b6c6e74d-test.json',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )

    response = http.get('https://testing-autoretail-api.upstart.com/websites/bosak-kia', {
      headers: {
        accept: 'application/json',
        'x-clienttype': 'instore',
        'x-dealerid': '',
        'x-uar-client-codename': 'web',
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'x-datadog-origin': 'rum',
        'x-datadog-parent-id': '5798333665978291568',
        'x-datadog-sampling-priority': '1',
        'x-datadog-trace-id': '8041259224924112841',
      },
    })

    response = http.options('https://testing-autoretail-api.upstart.com/websites/bosak-kia', null, {
      headers: {
        accept: '*/*',
        'access-control-request-headers':
          'x-clienttype,x-datadog-origin,x-datadog-parent-id,x-datadog-sampling-priority,x-datadog-trace-id,x-dealerid,x-uar-client-codename',
        'access-control-request-method': 'GET',
        origin: 'https://web-testing.upstart.com',
        'sec-fetch-mode': 'cors',
      },
    })

    response = http.get('https://web-testing.upstart.com/favicon.png', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.post(
      'https://testing-autoretail-api.upstart.com/byo/websites/bosak-kia/deals',
      '{}',
      {
        headers: {
          accept: 'application/json',
          authorization: 'Bearer bosak-kia',
          'content-type': 'application/json',
          'x-clienttype': 'online',
          'x-dealerid': 'bosak-kia',
          'x-uar-client-codename': 'web',
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'x-datadog-origin': 'rum',
          'x-datadog-parent-id': '5021292698533516635',
          'x-datadog-sampling-priority': '1',
          'x-datadog-trace-id': '5480524651492347011',
        },
      }
    )

    vars['token1'] = jsonpath.query(response.json(), '$.token')[0]

    response = http.options(
      'https://testing-autoretail-api.upstart.com/byo/websites/bosak-kia/deals',
      null,
      {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'authorization,content-type,x-clienttype,x-datadog-origin,x-datadog-parent-id,x-datadog-sampling-priority,x-datadog-trace-id,x-dealerid,x-uar-client-codename',
          'access-control-request-method': 'POST',
          origin: 'https://web-testing.upstart.com',
          'sec-fetch-mode': 'cors',
        },
      }
    )

    response = http.get('https://cdn.cookielaw.org/scripttemplates/202302.1.0/otBannerSdk.js', {
      headers: {
        'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
      },
    })

    response = http.get(
      'https://cdn.cookielaw.org/consent/01e8d177-940c-4e5e-9c89-cc14b6c6e74d-test/77d92d26-5ccf-44cb-89bd-890fdc8ed7fc/en.json',
      {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      }
    )
  })

  group(
    'page_2 - https://web-testing.upstart.com/byo/bosak-kia/812c5834-0dde-4eca-8314-838f248fa97b',
    function () {
      response = http.get('https://web-testing.upstart.com/418.844f99e674f0426b2e2e.js', {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })

      response = http.get('https://web-testing.upstart.com/BYOSteps.2703faddcc66b6f437de.js', {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })

      response = http.get(
        'https://prodigy-cdn.s3.us-west-1.amazonaws.com/dealers/bosak-kia/images/logo_1631478244.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get('https://web-testing.upstart.com/8674a7f379ba1884331f.png', {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })

    

      response = http.get('https://web-testing.upstart.com/ea8a923ec6d3ea7cf7bc.woff2', {
        headers: {
          origin: 'https://web-testing.upstart.com',
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })

      response = http.get('https://web-testing.upstart.com/f3e79b3d83d8a599df08.woff2', {
        headers: {
          origin: 'https://web-testing.upstart.com',
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })

      response = http.get('https://web-testing.upstart.com/0b9e6f7cba2cc4f5dff0.png', {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })

      response = http.get(
        'https://testing-autoretail-api.upstart.com/byo/websites/bosak-kia/Kia/models',
        {
          headers: {
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MTJjNTgzNC0wZGRlLTRlY2EtODMxNC04MzhmMjQ4ZmE5N2IiLCJpc3MiOiJiYWNrZW5kIiwiY2xhaW1zIjpbeyJ0eXBlIjoiZGVhbCIsImRlYWxJZCI6IjgxMmM1ODM0LTBkZGUtNGVjYS04MzE0LTgzOGYyNDhmYTk3YiJ9XSwiaWF0IjoxNjkzOTAyMDM0LCJleHAiOjE2OTM5MDM4MzR9.NbTFtOqFaxmPc8PxvVFlXanoPL1OmmRiC9Ez6m3WmE-Eetm9s2f6te7QuNWVGM4AgYDJ59ogu6jV7yP5sIQOX-qNauwlEbiN7-qhhYSYUlkLioTTApcoXbDMQ3esfCaJxFu4GWrukadjuLggDAlWsTMe4Tkk9TvpJ6JJTPTlIwzcoXAQjJP9aTsj_IXaL178KpRGF-a_6RZkD_Qf6bsCRsPCPKjN39FwCDS8MHdFYadOaQ0ovvF11BV_qtFzPUgHyIC36p4IzAXHYekOTKcvYQatcWH0tcud9es2ejnBbnClG6xpN1-tPKuG-rgx27xs_hHX-z_VjVv9y-oJ4GgEJjKvQrUf6gER6TJWB_tJ3e80AVu2xqtIjMmvhUxML6xH9CpKb4XxdE0_V56SYmff_47JlEWpO6Ub5yZC73S41ewf9kcw-gSMm-oY0NrbbVjwIb9rkwGWSimWM_fMdZFP2nVUYIupUG9yh_OUPbiO4Gy9CMDtQTNqPnlXLbxlF3Nzs0b_ykSV00kOA_NdEdvQKWxdoruAVYPD2RbKmbNVDXP2m5wgEnCVigJVs_N_C8is6xaJbL2PWZk5key6dXeehTuSzLdP7Ki2qMWvWNucDNabb6mmi9opBajCRgVYmM7LzLfuwbKLKb6qC0MGSsv4f1LZvbAvRucD8K8Ss1G2W_s',
            'x-clienttype': 'online',
            'x-dealerid': 'bosak-kia',
            'x-uar-client-codename': 'web',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-datadog-origin': 'rum',
            'x-datadog-parent-id': '3117709085533630374',
            'x-datadog-sampling-priority': '1',
            'x-datadog-trace-id': '5887994261239518070',
          },
        }
      )

      vars['id1'] = jsonpath.query(response.json(), '$[1].id')[0]

      vars['alt1'] = jsonpath.query(response.json(), '$[37].images[2].alt')[0]

      vars['alt2'] = jsonpath.query(response.json(), '$[37].images[3].alt')[0]

      vars['alt3'] = jsonpath.query(response.json(), '$[37].images[4].alt')[0]

      vars['alt4'] = jsonpath.query(response.json(), '$[37].images[7].alt')[0]

      response = http.options(
        'https://testing-autoretail-api.upstart.com/byo/websites/bosak-kia/Kia/models',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'authorization,x-clienttype,x-datadog-origin,x-datadog-parent-id,x-datadog-sampling-priority,x-datadog-trace-id,x-dealerid,x-uar-client-codename',
            'access-control-request-method': 'GET',
            origin: 'https://web-testing.upstart.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )

      response = http.get(
        'https://cdn.cookielaw.org/scripttemplates/202302.1.0/assets/otFlat.json',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://cdn.cookielaw.org/scripttemplates/202302.1.0/assets/v2/otPcCenter.json',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://cdn.cookielaw.org/scripttemplates/202302.1.0/assets/otCommonStyles.css',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get('https://cdn.cookielaw.org/logos/static/ot_guard_logo.svg', {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })

      response = http.get(
        'https://cdn.cookielaw.org/logos/c98c354f-0ef7-4a6d-8999-d26d836f0bef/128ee006-e75f-480d-a229-b2d0f75957f1/9857ddbd-9c8c-4fd8-aecf-19ecc72f7e9f/crb-1661268045.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get('https://cdn.cookielaw.org/logos/static/powered_by_logo.svg', {
        headers: {
          'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
        },
      })

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Du0AjeO8LV9SOMlfcXhgsgGKOP-EZOjyLldZ30TAID8L0Utl-iZ9bh7foG2m_UMbcZM2sRdaqlZ_HSOI49cpEm0uBNAaa7YC-ilClgX_IP4GueDemFYOZ5zkKM8kZCHbX6Qx13bXC78/2022KIS090056_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshpwios9uryFnMkjnKPEbms414hCS4asxMKngWlRcM3TwzLjGNHV2eUt5HN2C_B1WHPcVJ8G0Bx-pKSFPyDQPB4SUK4mioS6kRVPEY93CvRcc/2022KIS100001_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Du0AjeO8LV_tqyGI94R2-xbBSRfFBplIa6LytiyT3Svo8OHTUwpPE7eqSTtPwLvjL2v-2u9SPFm_WB87BkzEW7cm00hQ3gluUxSkENtq_nVY68vaLmIAN-H4scxyo38tuak7Sb8VZn4/2022KIS010001_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/j1-mtAMphi5aVHos_bgWQQzeOp7ixnjplGgQZMB4oxRtSrCFce4CI-JC3Mv37HAMVBSE0zB9Axvzi5YRLH49jKPwyV7HcHimwUhrC0bpukv_lxy-7c8vmvCscF3__RpgQnZzO9jWF9_bD4OUv51ebA/2023KIC030015_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/rV7QtEUl-EdGlitlMOQYoDtrORKCvWWMvvH4H1AyYmjcD07M0k5iCKksYqEJXShabfu6nRccJB0FXlr-MmtExii2Y14Igt0QCSib6RW9Mgai0bwWVz4RFM_SnNd1tx8Hx5KGWAO2_Yk/2023KIC110032_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Wpxhcbv9d0E_qKDC0euAtNi9vYReuquKPh32PeIyMKFe3rx-9B8GX6Pj7WDuGuFrrXHrIdg9uQTQ27LZqmXhZCbMfMG5Gy9N717oaSg2_36V5v6JwvBjxajTc_qOIjSoCdnmIY4t-eQ/2023KIV020064_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/PoSiGHUYgNVlrsOs9nzxU1oC_0JfMumk7PVxL3mNxuWg9ssW3fY9xptxF_ttKlzG9Gdc3rZM6t4J7sCDQxZ9hYd2IqlRMCAiSfun-cJzG9n1DnqM47amH8oSHUEG2U9LhxBpJjS--i2NPcrSrMQ26w/2023KIC200064_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/j1-mtAMphi6IYl4vNwICPGOznDxkicNlHHXKO00kdBulbUwrfEHuzJIKEzh4hR4v0II5h6qWh02xjnqbk0OYYF7im7SxGpWCqHySG2GQIACF7IzunjbeppBUI3V8Ps0Z4fsqH8PGJ4o/2023KIC030001_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/rV7QtEUl-EelFiLAcQ9pSMTb6RZShQVmPr4XXR1uMLgD_klDKUZU1lfq8AZ64rFvTmWhPBnqY6lPWGPoDuUbDY2SyT741rOlyHdvxfd952gprMCPkocGcxgmetSgm648f029XAZ6MS8/2023KIC190001_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/0o27QzpQqwCb_Rj4nIXxWtNub2TQ9r1jnj7sIstuPf5Ugpph5G9reKVc-5IiXP9EpErxZ_wkO7hOCj9z2zifcg6-4_PNL_YoHQgkq8oA19MSoC0eMscOkbYEBgjCcAlwMjBMbBbJQhY/2024KIV020033_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/lciF4DU-rNx1kKYxbajDYi3k35xf-GtxZd_rhTYRvqoCRhgv00wBINgAwToxv4XEQZ_O0z3XomvmyYUwCHwZ4bdqmYxTnWdpn7iiO9mlZoM2xgK_nrgMIbbXAOs2yzoxkhwoiVgCZVk/2022KIV020033_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/c_L3srs4iEexAf_eR6ZutkvYgbhG2lbQUOPnINiAcnZQZIEeGZwSF6STdcZfKQEuBggdEfxic6v_7zN3Ca8lthJRdVcBzPS4TRXzRcZQdCPKGVhmgw2uV_xIl24_o_i5pFRlOROK0x0/2022KIC110091_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/ydQgIsx5-XugHQfqpBr3GNhGE6UaY2LHRZBZsmq4Nm8kKesd0zH7yKEonHyuLmAKaGd7QrSgDR9t4I4qoJWkD9_veeTwwm1XG25V-y5tn2QrJd7ps5uwu_C_f5RMUppWgFyVpL1b8lc/2022KIC200001_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Rw89BGvyjIur7TCT_Zv2sfXvK-kW0dY3aTrj_N9IcNzIo4AvlsOTILwFWjcyeIxkT9NtR9OnOoaJ-bSUGuKO_FUla879_tAsfPVtZDQ6oOHIDnWQbeCq5hEsyx7DeQ89_9q95k16_LY/2022KIC030001_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Rw89BGvyjItZ4KV_bFDBr6zp52OtxLT_IlCwzxd3u7L9Jc2vPsIKs25wnauFlUgbndfS7vxTwaNTcQ1c3u5vBmhZMPx1zv4Wegh6Txhg0aHs5zrdghUVNqSun7v8BH8aZVhDq08sUC-Z5ui_aBktcw/2022KIC030029_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/c_L3srs4iEduPDQS1eK3jDGY-8O17XWzkVEn6JjmJj7tBWDrIrLfbhix4lT7jLD1KlEDfCivD-RndtSt9UK6SsuPYSV3mMglCMOt-Kv37yXG5TKjFMBl5iKjewo2NAnkUngPxtK5g80/2022KIC100143_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/c_L3srs4iEfIsCOpszeQMfNV-vvMhjamOUVI0butZOPANW3YgrJ_3q53wMqFbE4DpF16Awr-LfiYBe7fHlrjZRJRpThtem4lk7c-jZVt7lfeRrNqVw4XnpHKDZhj4mG9pCICgP_Kjag/2022KIC190103_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/rV7QtEUl-EfbMnMxDxicWxU_SOOLjrykStxgKFXofMSiSv3fvPVfwPSQSptyDe8iA-tP_62zf3lgUbCPjTnoz6q8DMt_wsL1amXJHOzqM1PhZI8K4Z8FQQjwyzrSs0IgOwFObcmLRtI/2023KIC100028_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Du0AjeO8LV9wEIb-8jeoXRARZeUDwz_fjUwR1wGFNx6n1VwJ89hNz_vGzB85BYw2IBEi_z-qv980KBjSqGva2OKqIwEw1pbsz1_IPpr_QdI08ATvP0jsOBclm2YituZnM8axmlbOmtk/2022KIS040001_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Du0AjeO8LV_w3RI3r4vHV01aN4fT4SVGmAwsNO34JlwTjWRf_aHfI9nXxLxJE-cbLjiy8NxDnwTYwn_NyV7tFGWjrYMJdSAwrhxyM0g9Egx2yCO5yA4wXLODvhwK13F9FzrUX7A2R4g/2022KIS020063_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Du0AjeO8LV_1oYwzWbPZe4tuRMR0frwCdUi7IFj3U1EBLB8dVlwr9Dq1Qnck6TfT0sabymJ5-8L9k8yMMeeqMW4nI65J1BrauGXxYwzgsKb7Mhroe-qI48FWmUqy2CaDGmpkiQr8lRI/2022KIS070001_320_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/E0HxlGDKtLHrKQ6aTvc55Rc7l6I41aUYij_gxWwdcjwFcleUHOP4FBupcGy4N4pE0hWY3VstzN3WQVILAipBh3rXW59XMi3kGEtWAIYcxfFmoX49XFMiUz8_jo9EBHitn8cP8QotXko/2023KIS110017_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Du0AjeO8LV9rSqfGWSl630hDPUUZZn9tTW_EAl4mUBVFBt78fvf1_lAdnE8QPFlfZRPRbJoMWRw400fQ5kZ0UJk8yck61OSy6Dftm1jSXECSQdXPIvI9oEqme173htAW1I1dJZL_odQ/2022KIS050039_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Du0AjeO8LV8Vbaso_wvBFpTp4m-idON6tc8dAghN9N--QyWVQd_oSqCwWrjpIqr8znL-7x1hioszx4GR88WBbkHlMazo6aTzfOvM_Wd9L35xhNJ7b9sX8bwAfVdPdgvXTekp8cnZcgM/2022KIS080038_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Du0AjeO8LV_oB8m6RmRsV2BC-MC6K0_IO47tfcoCTCQNpUSKq5Rdik_LMwzFeMoTnI5DupwK-VHgDz9yqd1JdzhiSMXuvGbzFcrgwJx116midTG7CenP1F4GbLPQhZf6zGaxamC-r4k/2022KIS060054_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/RKVG3wyc5ds275iJKkyAQZhmM5HmRBTYczUoIzRqngJhv4qdJgQme6wOxwD-0EixhWy7UYC2uz9c9dNj4DKJ1dSA6lLVf1Me56DoNZqbYu4wai3chvNDObC9JLyWWTmAuNqUqnedDuc/2023KIS040122_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/RKVG3wyc5dvp74PqwC8l9HRCcgKaljwqowoqIHij_Nzo6zmIRYQLxMQlPnZWKyaRaSJBAk72fcNoeeGqwYdnbkt2SwXmuMXNFepJg3e5AmzKoS-Mk2mGJ2MFrzLQBsc5yo9XKrfRD3o/2023KIS070051_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/RKVG3wyc5dsrC0WJs0zCI4Bjb2rrkZckl66AMhniZNjh9Lx2eF4U1cuHgbPZG1XoCvGZJDK9rWQgEmfLdZvQcmQfE78Cst1lOEOklxzlYlMFLFZb_w4Ak6PF-Y6Qe1xsNp26SvaISx4/2023KIS050001_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/pSekdA-gw9MaIzoRE0Ynl0RRxJSolDRbWrWCvQlsMdygipVaFdx0-xYhuk6N2q56YxRFcd3AyCH7_Ctir7dOnvS9HyfxsIpM-Lvqo-4ILbrSjK7ER_3taEWfeU60tLe0sAXaUi7zrFg/2024KIS080022_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/RKVG3wyc5dvV3fq-pWXQKCAGZKHvSh6E8Is99-oWQTxm_qSU6rZ7lEO19ai5-XmifAUwravNN2M6tAN4pXEvN0X4Fxk5sVznr8ob8K2i_YW6b-tZGa6uqB0nzzCmH6uWzFrZ_bAsxP4/2023KIS020100_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/RKVG3wyc5ds_ZOmxYMezYH3GVVb7hG11IT0elD9JC4eC8r6t3504NfwgJxuI2pSzelOUo26z8vtgAKz3eSvM_GWztFsZPMqdAK5LtR_Y0e3VscPj0t0S2FzU48jZXRfeSy3xrXS-kjk/2023KIS060086_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/E0HxlGDKtLHjssnAAuZw0-cPIPPSx4Nvx2e3-d6NYgIojv_wAKr6sweg_0Ex9R3mpr86IsOMldq5-dFSXdShCv0KPZd3rZU5p1O2YxQzeK2J9Ubot-Wc6fi0seFxU2q9720KRtodzbw/2023KIS120065_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/E0HxlGDKtLGWmveOKB32CBiiurjS4OGTfmbwzG5Bvh26KxXg7kGCQ-46SHxCqNzyqWYSK_tw0PQle3-F8DvtAXe-EBEFkAVWJpcldCgQvhbV1fnJcDxHR3qA585wl2iwfT-XeopMM01tofZlKul_GQ/2023KIS130008_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN2TZPrizoagOKMvYlomCa9OqYjayI8vMl5-IKKdpS5yxfCfiJFlURdKJ9cN1vT5VoIOcD7Wezr7Dis3zbcfaE9vjx0Uz-gdchKo_nmD_JDWrCO38dEpha1izJriqMid4IQ/2022KIS110005_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/RKVG3wyc5dt_tOTGiJygGxAvqd5DLLjBDbOMsTCI4FLK6_fOMhWcI6orZMRCxLliLkeC64cjKxW-vbKdByDkeoGlE4MKCIGa5LGa_S7I1b2Q2pNQBp5_91MSNJvXe1tVDEeGfNHiIFk/2023KIS080061_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/RKVG3wyc5dvS41syoX7s2t-EbNRCa8GAmkm-6NqfGRWfwqswPNgAf9V49G9fZT0MYJA0TYv-FAHfJY4zqOXbOBabZweidgUWd8QjHwWydc8FZDPYCapxwNbx5f4hoiw_FkIMzkqav_A/2023KIS090015_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/E0HxlGDKtLGIv-Zl7d4BCbAetP9je8d1tF5oL2Dtr29AbNqBaImulWvUUyjEblRiSCdr0mFOL6ATmnjwOMIBeySDW9awkuosMvCcZeOxmtJ20ZGncnqo4cfXLuPkozrh2ueBNpZisemejaKHaU8fQw/2023KIS100001_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/RKVG3wyc5duFX3-syidkm5tDTssR-cKZ6BQsohthH5xbVcBL0gqb8sHYqu-k9q_PzjRvzu3GdVs-4bgu9i-24GIv6uchd_Av9btBiHm3Q-mGIhkxeDiu4cAyGw6k_Vj32VLuucX2qsc/2023KIS010050_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Du0AjeO8LV9SOMlfcXhgsgGKOP-EZOjyMUh7YNp5piPXD_pLAZhhKdi5KbkxSc4l0vADgGoona-rwpfX2SSMbm1GC1roi_2gElC_2FD3teyWnzUHZS5gqF0jTCMrmQExE5FVI9AZpEY/2022KIS090056_1280_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(2.6)

      response = http.get(
        'https://dev-prodigy-cdn-523714237973-us-east-1.s3.amazonaws.com/uar_speed_test2.png?nnn=1693902038993',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(1)

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshJ5_MlFb9IPFAqbcIfMUtn8RzEStnWy2zHPOnPhaAAPPdKr85HkqQ7U4KS5kYiPP9UJ9lPh2kODhvTIILhrUfIDCq-XxcWTO1MpHFS5nqB8KYlVT7aEI5Xw/2022KIS100001_1280_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.put(
        'https://testing-autoretail-api.upstart.com/byo/deals/812c5834-0dde-4eca-8314-838f248fa97b',
        `{"car":{"modelId":"${vars['id1']}"}}`,
        {
          headers: {
            accept: 'application/json',
            authorization: `Bearer ${vars['token1']}`,
            'content-type': 'application/json',
            'x-clienttype': 'online',
            'x-dealerid': 'bosak-kia',
            'x-uar-client-codename': 'web',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-datadog-origin': 'rum',
            'x-datadog-parent-id': '3998684812880744168',
            'x-datadog-sampling-priority': '1',
            'x-datadog-trace-id': '7477728640034208225',
          },
        }
      )

      response = http.options(
        'https://testing-autoretail-api.upstart.com/byo/deals/812c5834-0dde-4eca-8314-838f248fa97b',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'authorization,content-type,x-clienttype,x-datadog-origin,x-datadog-parent-id,x-datadog-sampling-priority,x-datadog-trace-id,x-dealerid,x-uar-client-codename',
            'access-control-request-method': 'PUT',
            origin: 'https://web-testing.upstart.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh9IhK7_Wf66IkdIe7rEfPRdK9dPxX9RoKeaVNXkPva0tdUhiPiiZE8wcgnBKLrOxK2kdoXD24quEjNT_NUu2K_hnkpuep6YT-QGoT5NM7ouk/2022KIS100002_640_02.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshV-7V7qzmBMX_I4-zbYJEkKTO-BrSjNq91mLRFafjEBK9EQaX2VEgh3DvhL0D1RTMFxDl4ZJwCcS1kzT6i1pady4TAUDUh9g4tej9EKuamyo/2022KIS100003_640_03.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh1dKhbbzCfeglvkcB4HZgCSMohgwDgfDuJ-AWHf3CPKRlU7DLnmY3T6AWNhq6_pWzEsRU-RQq5EdoaBukWoDMdMcNHCEgQBqciehG6P2igQ8/2022KIS100008_640_12.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh05XvpHD7cs82m1A0Nu2MNIi97BOmhw6HZhaxiV35BZV-8wHUgUzoZgBj9BSvonX-7_-RQpVBaA-gfOQJXWse5GHTYNzZ-RYc1NlvYNItj60/2022KIS100016_640_13.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh4TJc2KcjtfmmWeDLmKsSQja7kcaJDJejc3vaYKLaUJGkF23hmsAetbiQ2u6GYCOUQ-aO-4iV1VtQ6VPY7pI-EqNQusqx8NuTAN_AhlTyc80/2022KIS100051_640_25.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshXUEdCsLJ9VOU3VjzzieCHDbdaBysH1bR1YgUwbzhM0gbauUl4s3XOZMByoxmuKuUA1Yqij-B9vMX6YlVBZ5W-Rt74c-J2dpBC6kddFOs1mk/2022KIS100052_640_28.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshAay53ELVUagPaAX2wBCOCWnJu7cmy7r47wPaLeTbaQzadzHLqNZb5N_DOerWnQ-UV6rvXMgTHu4GgIGpQKgqrqIdKrwSiw_d29zHEOYrMC0/2022KIS100053_640_43.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshCU2fglPvrmXCBE6ChVhmgwkYpOVtjSui1u2gJAS7TDq3LbJO3ixfgZ73zwQS6J_UQAi2HA4jLTNuZhkSulSq5627Mz-5ozGP5UohMpWjwkU/2022KIS100054_640_44.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

    

      response = http.get(
        'https://testing-autoretail-api.upstart.com/byo/models/23c774bd-bb9a-442f-bd8b-7afb4c7c2e53/trims',
        {
          headers: {
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MTJjNTgzNC0wZGRlLTRlY2EtODMxNC04MzhmMjQ4ZmE5N2IiLCJpc3MiOiJiYWNrZW5kIiwiY2xhaW1zIjpbeyJ0eXBlIjoiZGVhbCIsImRlYWxJZCI6IjgxMmM1ODM0LTBkZGUtNGVjYS04MzE0LTgzOGYyNDhmYTk3YiJ9XSwiaWF0IjoxNjkzOTAyMDYzLCJleHAiOjE2OTM5MDM4NjN9.hhHEcp1deOu6caKx0esquWO4C9PAF_vFxCgS4dZA0kt3PIas9lyvjRHZCNCLi4FhqOQOlPP1HROtquET2aW5AjhVy1wk2DzwzV7xwJEwrio2QQQom1-mU2wH1a0pd_fi4krDt-W6JU9LIsr44iR2GijV_JoeOBctMUfLATbYO8ksMxqICiaNfX15kalLfdTzH2UfPbuSw-GNw2mpM_v99va1bkGnHVvznOEZMcn0ZwYJE8EAOH8isFOD1SgfVjf4Kw5pvPEctDY9NCgWJD5MH5JJoEFLhJLBD3aQbiQSd4k6DR07UgFWcFVYt8DKb_Uds9y0j49mqLUG3Hu9cAlSApQhgqSktun-hYXmN8LCh3tIb_dhtXL62kUX4ZXlcwsdnk4yiXVniJGxKsloqB3tQduGMFJ0hblJORC34Ii-e9mYsWnErIejt-FZFpLtvMQWQkfWc3RY6RgfGN2Zg9XcT8JwcOsFIgTj52thduievBjAvhxedPv2Mamv1WvCIshMHaNprHrBWdaUx5S-gE4tz9lruuOEnOBaBX0mUOa5eEqG05CNeDBAcjhXe7OSSBOADcjcOeQ98uesX8KW8wAV1y5N7eNerh-9j614P6utu4Pg0pHTfdVnzOHf00gGLsPtgI9YIWMdIGAVylQS5JOEDwRtu4yLpc59kqGfo_3Zgc8',
            'x-clienttype': 'online',
            'x-dealerid': 'bosak-kia',
            'x-uar-client-codename': 'web',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-datadog-origin': 'rum',
            'x-datadog-parent-id': '412124429220142422',
            'x-datadog-sampling-priority': '1',
            'x-datadog-trace-id': '5953921473099102142',
          },
        }
      )

      response = http.options(
        'https://testing-autoretail-api.upstart.com/byo/models/23c774bd-bb9a-442f-bd8b-7afb4c7c2e53/trims',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'authorization,x-clienttype,x-datadog-origin,x-datadog-parent-id,x-datadog-sampling-priority,x-datadog-trace-id,x-dealerid,x-uar-client-codename',
            'access-control-request-method': 'GET',
            origin: 'https://web-testing.upstart.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN1r8Oyim353rIAXFTziZu8Yq9oOx6SH5GBt2pteqwUBwk64s-IHkyxZY1RqKkLetr5BMnV545VDH-FHmHWCixotBOFtUx-SlQ2_hfuOL2N3NzKL3ePTcB5WEtSXJ6w6SyaYYJ5aIvjw5g/2022KIS100017_640_01.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://testing-autoretail-api.upstart.com/byo/trims/af3898c2-9e69-4d7e-80c6-ef7aa6070298/packages',
        {
          headers: {
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MTJjNTgzNC0wZGRlLTRlY2EtODMxNC04MzhmMjQ4ZmE5N2IiLCJpc3MiOiJiYWNrZW5kIiwiY2xhaW1zIjpbeyJ0eXBlIjoiZGVhbCIsImRlYWxJZCI6IjgxMmM1ODM0LTBkZGUtNGVjYS04MzE0LTgzOGYyNDhmYTk3YiJ9XSwiaWF0IjoxNjkzOTAyMDYzLCJleHAiOjE2OTM5MDM4NjN9.hhHEcp1deOu6caKx0esquWO4C9PAF_vFxCgS4dZA0kt3PIas9lyvjRHZCNCLi4FhqOQOlPP1HROtquET2aW5AjhVy1wk2DzwzV7xwJEwrio2QQQom1-mU2wH1a0pd_fi4krDt-W6JU9LIsr44iR2GijV_JoeOBctMUfLATbYO8ksMxqICiaNfX15kalLfdTzH2UfPbuSw-GNw2mpM_v99va1bkGnHVvznOEZMcn0ZwYJE8EAOH8isFOD1SgfVjf4Kw5pvPEctDY9NCgWJD5MH5JJoEFLhJLBD3aQbiQSd4k6DR07UgFWcFVYt8DKb_Uds9y0j49mqLUG3Hu9cAlSApQhgqSktun-hYXmN8LCh3tIb_dhtXL62kUX4ZXlcwsdnk4yiXVniJGxKsloqB3tQduGMFJ0hblJORC34Ii-e9mYsWnErIejt-FZFpLtvMQWQkfWc3RY6RgfGN2Zg9XcT8JwcOsFIgTj52thduievBjAvhxedPv2Mamv1WvCIshMHaNprHrBWdaUx5S-gE4tz9lruuOEnOBaBX0mUOa5eEqG05CNeDBAcjhXe7OSSBOADcjcOeQ98uesX8KW8wAV1y5N7eNerh-9j614P6utu4Pg0pHTfdVnzOHf00gGLsPtgI9YIWMdIGAVylQS5JOEDwRtu4yLpc59kqGfo_3Zgc8',
            'x-clienttype': 'online',
            'x-dealerid': 'bosak-kia',
            'x-uar-client-codename': 'web',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-datadog-origin': 'rum',
            'x-datadog-parent-id': '2354697936280923111',
            'x-datadog-sampling-priority': '1',
            'x-datadog-trace-id': '7771888071185954510',
          },
        }
      )

      response = http.get(
        'https://testing-autoretail-api.upstart.com/byo/trims/af3898c2-9e69-4d7e-80c6-ef7aa6070298/transmissions',
        {
          headers: {
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MTJjNTgzNC0wZGRlLTRlY2EtODMxNC04MzhmMjQ4ZmE5N2IiLCJpc3MiOiJiYWNrZW5kIiwiY2xhaW1zIjpbeyJ0eXBlIjoiZGVhbCIsImRlYWxJZCI6IjgxMmM1ODM0LTBkZGUtNGVjYS04MzE0LTgzOGYyNDhmYTk3YiJ9XSwiaWF0IjoxNjkzOTAyMDYzLCJleHAiOjE2OTM5MDM4NjN9.hhHEcp1deOu6caKx0esquWO4C9PAF_vFxCgS4dZA0kt3PIas9lyvjRHZCNCLi4FhqOQOlPP1HROtquET2aW5AjhVy1wk2DzwzV7xwJEwrio2QQQom1-mU2wH1a0pd_fi4krDt-W6JU9LIsr44iR2GijV_JoeOBctMUfLATbYO8ksMxqICiaNfX15kalLfdTzH2UfPbuSw-GNw2mpM_v99va1bkGnHVvznOEZMcn0ZwYJE8EAOH8isFOD1SgfVjf4Kw5pvPEctDY9NCgWJD5MH5JJoEFLhJLBD3aQbiQSd4k6DR07UgFWcFVYt8DKb_Uds9y0j49mqLUG3Hu9cAlSApQhgqSktun-hYXmN8LCh3tIb_dhtXL62kUX4ZXlcwsdnk4yiXVniJGxKsloqB3tQduGMFJ0hblJORC34Ii-e9mYsWnErIejt-FZFpLtvMQWQkfWc3RY6RgfGN2Zg9XcT8JwcOsFIgTj52thduievBjAvhxedPv2Mamv1WvCIshMHaNprHrBWdaUx5S-gE4tz9lruuOEnOBaBX0mUOa5eEqG05CNeDBAcjhXe7OSSBOADcjcOeQ98uesX8KW8wAV1y5N7eNerh-9j614P6utu4Pg0pHTfdVnzOHf00gGLsPtgI9YIWMdIGAVylQS5JOEDwRtu4yLpc59kqGfo_3Zgc8',
            'x-clienttype': 'online',
            'x-dealerid': 'bosak-kia',
            'x-uar-client-codename': 'web',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-datadog-origin': 'rum',
            'x-datadog-parent-id': '159798177737731668',
            'x-datadog-sampling-priority': '1',
            'x-datadog-trace-id': '7739117192395592803',
          },
        }
      )

      response = http.options(
        'https://testing-autoretail-api.upstart.com/byo/trims/af3898c2-9e69-4d7e-80c6-ef7aa6070298/packages',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'authorization,x-clienttype,x-datadog-origin,x-datadog-parent-id,x-datadog-sampling-priority,x-datadog-trace-id,x-dealerid,x-uar-client-codename',
            'access-control-request-method': 'GET',
            origin: 'https://web-testing.upstart.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )

      response = http.options(
        'https://testing-autoretail-api.upstart.com/byo/trims/af3898c2-9e69-4d7e-80c6-ef7aa6070298/transmissions',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'authorization,x-clienttype,x-datadog-origin,x-datadog-parent-id,x-datadog-sampling-priority,x-datadog-trace-id,x-dealerid,x-uar-client-codename',
            'access-control-request-method': 'GET',
            origin: 'https://web-testing.upstart.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )

      response = http.put(
        'https://testing-autoretail-api.upstart.com/byo/deals/812c5834-0dde-4eca-8314-838f248fa97b',
        '{"car":{"trimId":"af3898c2-9e69-4d7e-80c6-ef7aa6070298"}}',
        {
          headers: {
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MTJjNTgzNC0wZGRlLTRlY2EtODMxNC04MzhmMjQ4ZmE5N2IiLCJpc3MiOiJiYWNrZW5kIiwiY2xhaW1zIjpbeyJ0eXBlIjoiZGVhbCIsImRlYWxJZCI6IjgxMmM1ODM0LTBkZGUtNGVjYS04MzE0LTgzOGYyNDhmYTk3YiJ9XSwiaWF0IjoxNjkzOTAyMDYzLCJleHAiOjE2OTM5MDM4NjN9.hhHEcp1deOu6caKx0esquWO4C9PAF_vFxCgS4dZA0kt3PIas9lyvjRHZCNCLi4FhqOQOlPP1HROtquET2aW5AjhVy1wk2DzwzV7xwJEwrio2QQQom1-mU2wH1a0pd_fi4krDt-W6JU9LIsr44iR2GijV_JoeOBctMUfLATbYO8ksMxqICiaNfX15kalLfdTzH2UfPbuSw-GNw2mpM_v99va1bkGnHVvznOEZMcn0ZwYJE8EAOH8isFOD1SgfVjf4Kw5pvPEctDY9NCgWJD5MH5JJoEFLhJLBD3aQbiQSd4k6DR07UgFWcFVYt8DKb_Uds9y0j49mqLUG3Hu9cAlSApQhgqSktun-hYXmN8LCh3tIb_dhtXL62kUX4ZXlcwsdnk4yiXVniJGxKsloqB3tQduGMFJ0hblJORC34Ii-e9mYsWnErIejt-FZFpLtvMQWQkfWc3RY6RgfGN2Zg9XcT8JwcOsFIgTj52thduievBjAvhxedPv2Mamv1WvCIshMHaNprHrBWdaUx5S-gE4tz9lruuOEnOBaBX0mUOa5eEqG05CNeDBAcjhXe7OSSBOADcjcOeQ98uesX8KW8wAV1y5N7eNerh-9j614P6utu4Pg0pHTfdVnzOHf00gGLsPtgI9YIWMdIGAVylQS5JOEDwRtu4yLpc59kqGfo_3Zgc8',
            'content-type': 'application/json',
            'x-clienttype': 'online',
            'x-dealerid': 'bosak-kia',
            'x-uar-client-codename': 'web',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-datadog-origin': 'rum',
            'x-datadog-parent-id': '5847954065766661835',
            'x-datadog-sampling-priority': '1',
            'x-datadog-trace-id': '6261546602146924969',
          },
        }
      )

      response = http.options(
        'https://testing-autoretail-api.upstart.com/byo/deals/812c5834-0dde-4eca-8314-838f248fa97b',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'authorization,content-type,x-clienttype,x-datadog-origin,x-datadog-parent-id,x-datadog-sampling-priority,x-datadog-trace-id,x-dealerid,x-uar-client-codename',
            'access-control-request-method': 'PUT',
            origin: 'https://web-testing.upstart.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )

      response = http.get(
        'https://testing-autoretail-api.upstart.com/byo/trims/af3898c2-9e69-4d7e-80c6-ef7aa6070298/combined-colors',
        {
          headers: {
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MTJjNTgzNC0wZGRlLTRlY2EtODMxNC04MzhmMjQ4ZmE5N2IiLCJpc3MiOiJiYWNrZW5kIiwiY2xhaW1zIjpbeyJ0eXBlIjoiZGVhbCIsImRlYWxJZCI6IjgxMmM1ODM0LTBkZGUtNGVjYS04MzE0LTgzOGYyNDhmYTk3YiJ9XSwiaWF0IjoxNjkzOTAyMDczLCJleHAiOjE2OTM5MDM4NzN9.gsncYr541UTuNW37Xt3r1t4fOJs8wYJqssLFMzkZXiK42tj6EgFxlMPO74P7jraHLsbXN2l1i_tu77NFLKjbyU95DA7ObM4FT5avz3J92yUd4Z08I7n9Eor647QIN4Ebp4oSXBm5NHkw88KwukMp-aNRQuzMtTSFi0oSewxgqsu5M5zpO7ylZv3sd8JPji1jMIJnXBw8kTxoSNOsgXUaQ9IMRr9tKQF-qM1yIwsGNJP7K42_x5fuaxZO6yuNDE0oaUNRlzRmsteuj9gyO6zRainvBfYgOnZD5lHCawcMQw7buoc-A7DQsK2vAxNYYkUf2NRJ57MBfTh9UoGUOGOKoAUgcsKdKTme6Lq6h0CC3EmiUHWEzlxi--RAYcBAk718HYK6wJ2wYmdXZIvVlGjll9Mj1_2UFZXCjF73JcjZBGZE2IKfD_xXfboiRkDMVwW7ouPxqpPU-be4lhcIvgHKK3-ChPvMYnHAOv273c9WOx7xiqGiietLnTNmsPoTuA19cQk01UZLswN00cwemyCeCOR1dOGQUPpm24tWejV_K1PWzR6H5fvO1HGi3sG5mSU5um-j9bVcVlyJbN2MZxHy26niDkbet0Y52jvE78hd6fZT4dqgrZ2SKdRwpEWnGNZ2uphU0mtXVPJX0PfNhFh5Fi2cUBoXKvPItlpYMMId2eY',
            'x-clienttype': 'online',
            'x-dealerid': 'bosak-kia',
            'x-uar-client-codename': 'web',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-datadog-origin': 'rum',
            'x-datadog-parent-id': '2115577716541833193',
            'x-datadog-sampling-priority': '1',
            'x-datadog-trace-id': '630402098913793062',
          },
        }
      )

      response = http.options(
        'https://testing-autoretail-api.upstart.com/byo/trims/af3898c2-9e69-4d7e-80c6-ef7aa6070298/combined-colors',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'authorization,x-clienttype,x-datadog-origin,x-datadog-parent-id,x-datadog-sampling-priority,x-datadog-trace-id,x-dealerid,x-uar-client-codename',
            'access-control-request-method': 'GET',
            origin: 'https://web-testing.upstart.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )

      response = http.put(
        'https://testing-autoretail-api.upstart.com/byo/deals/812c5834-0dde-4eca-8314-838f248fa97b',
        '{"car":{"exteriorColorId":"4SS"}}',
        {
          headers: {
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MTJjNTgzNC0wZGRlLTRlY2EtODMxNC04MzhmMjQ4ZmE5N2IiLCJpc3MiOiJiYWNrZW5kIiwiY2xhaW1zIjpbeyJ0eXBlIjoiZGVhbCIsImRlYWxJZCI6IjgxMmM1ODM0LTBkZGUtNGVjYS04MzE0LTgzOGYyNDhmYTk3YiJ9XSwiaWF0IjoxNjkzOTAyMDczLCJleHAiOjE2OTM5MDM4NzN9.gsncYr541UTuNW37Xt3r1t4fOJs8wYJqssLFMzkZXiK42tj6EgFxlMPO74P7jraHLsbXN2l1i_tu77NFLKjbyU95DA7ObM4FT5avz3J92yUd4Z08I7n9Eor647QIN4Ebp4oSXBm5NHkw88KwukMp-aNRQuzMtTSFi0oSewxgqsu5M5zpO7ylZv3sd8JPji1jMIJnXBw8kTxoSNOsgXUaQ9IMRr9tKQF-qM1yIwsGNJP7K42_x5fuaxZO6yuNDE0oaUNRlzRmsteuj9gyO6zRainvBfYgOnZD5lHCawcMQw7buoc-A7DQsK2vAxNYYkUf2NRJ57MBfTh9UoGUOGOKoAUgcsKdKTme6Lq6h0CC3EmiUHWEzlxi--RAYcBAk718HYK6wJ2wYmdXZIvVlGjll9Mj1_2UFZXCjF73JcjZBGZE2IKfD_xXfboiRkDMVwW7ouPxqpPU-be4lhcIvgHKK3-ChPvMYnHAOv273c9WOx7xiqGiietLnTNmsPoTuA19cQk01UZLswN00cwemyCeCOR1dOGQUPpm24tWejV_K1PWzR6H5fvO1HGi3sG5mSU5um-j9bVcVlyJbN2MZxHy26niDkbet0Y52jvE78hd6fZT4dqgrZ2SKdRwpEWnGNZ2uphU0mtXVPJX0PfNhFh5Fi2cUBoXKvPItlpYMMId2eY',
            'content-type': 'application/json',
            'x-clienttype': 'online',
            'x-dealerid': 'bosak-kia',
            'x-uar-client-codename': 'web',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-datadog-origin': 'rum',
            'x-datadog-parent-id': '8327718498921123749',
            'x-datadog-sampling-priority': '1',
            'x-datadog-trace-id': '3314768362118882787',
          },
        }
      )

      response = http.put(
        'https://testing-autoretail-api.upstart.com/byo/deals/812c5834-0dde-4eca-8314-838f248fa97b',
        '{"car":{"interiorColorId":"GYT"}}',
        {
          headers: {
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MTJjNTgzNC0wZGRlLTRlY2EtODMxNC04MzhmMjQ4ZmE5N2IiLCJpc3MiOiJiYWNrZW5kIiwiY2xhaW1zIjpbeyJ0eXBlIjoiZGVhbCIsImRlYWxJZCI6IjgxMmM1ODM0LTBkZGUtNGVjYS04MzE0LTgzOGYyNDhmYTk3YiJ9XSwiaWF0IjoxNjkzOTAyMDczLCJleHAiOjE2OTM5MDM4NzN9.gsncYr541UTuNW37Xt3r1t4fOJs8wYJqssLFMzkZXiK42tj6EgFxlMPO74P7jraHLsbXN2l1i_tu77NFLKjbyU95DA7ObM4FT5avz3J92yUd4Z08I7n9Eor647QIN4Ebp4oSXBm5NHkw88KwukMp-aNRQuzMtTSFi0oSewxgqsu5M5zpO7ylZv3sd8JPji1jMIJnXBw8kTxoSNOsgXUaQ9IMRr9tKQF-qM1yIwsGNJP7K42_x5fuaxZO6yuNDE0oaUNRlzRmsteuj9gyO6zRainvBfYgOnZD5lHCawcMQw7buoc-A7DQsK2vAxNYYkUf2NRJ57MBfTh9UoGUOGOKoAUgcsKdKTme6Lq6h0CC3EmiUHWEzlxi--RAYcBAk718HYK6wJ2wYmdXZIvVlGjll9Mj1_2UFZXCjF73JcjZBGZE2IKfD_xXfboiRkDMVwW7ouPxqpPU-be4lhcIvgHKK3-ChPvMYnHAOv273c9WOx7xiqGiietLnTNmsPoTuA19cQk01UZLswN00cwemyCeCOR1dOGQUPpm24tWejV_K1PWzR6H5fvO1HGi3sG5mSU5um-j9bVcVlyJbN2MZxHy26niDkbet0Y52jvE78hd6fZT4dqgrZ2SKdRwpEWnGNZ2uphU0mtXVPJX0PfNhFh5Fi2cUBoXKvPItlpYMMId2eY',
            'content-type': 'application/json',
            'x-clienttype': 'online',
            'x-dealerid': 'bosak-kia',
            'x-uar-client-codename': 'web',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-datadog-origin': 'rum',
            'x-datadog-parent-id': '935549146680844027',
            'x-datadog-sampling-priority': '1',
            'x-datadog-trace-id': '5091176809334392458',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW3Pha2SVqoo3y_W-x_lk8tNpUol7Z6Zr_ajI6IXu-8f_VAv5PPDkDRq_C1ER6ITGW6NBJU2p7c1_E_HZT4Dm5VxlclgExkcdXPkF2HJimWi-f-45aa711Za7VriQ9lGtlzDaeNQr-ioCe8jSUSYdWYBqigIbEMcjXs/cc_2022KIS100007_01_640_4SS.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW0qiD_L7kOk9seO4gR_csPRBtPqEs0HrYROeJIoRf79_K2em8MrSlx2f34rHyEMlriYAYnpVjtD1rWtET-6viwGOVYeuJw2gbOWObqyzB0-136qpmlaz9v3y5Bs0ieVomtgwuT0CRkbKt9pBNTq8FAteFag6cxChlA/cc_2022KIS100007_02_640_4SS.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW1SfVcwy9xhFHdijwjNhe9I6z0R4TjVUME8iaMJAz1LlbI1ix-MNrP1xg5H42diu81bw9Q4By-xS2GcvpFnrQALMPPcyZ9VaZQp6Qt4m2yDOb115dmwLHXPOeGC2VWYW9gKHnvC7YOZcqDrdg3e7CZey-af7wfNf7w/cc_2022KIS100007_03_640_4SS.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )
      sleep(6.6)

      response = http.put(
        'https://testing-autoretail-api.upstart.com/byo/deals/812c5834-0dde-4eca-8314-838f248fa97b',
        '{"car":{"exteriorColorId":"ABP","interiorColorId":"GYT"}}',
        {
          headers: {
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MTJjNTgzNC0wZGRlLTRlY2EtODMxNC04MzhmMjQ4ZmE5N2IiLCJpc3MiOiJiYWNrZW5kIiwiY2xhaW1zIjpbeyJ0eXBlIjoiZGVhbCIsImRlYWxJZCI6IjgxMmM1ODM0LTBkZGUtNGVjYS04MzE0LTgzOGYyNDhmYTk3YiJ9XSwiaWF0IjoxNjkzOTAyMDc0LCJleHAiOjE2OTM5MDM4NzR9.S-F1LcP584KUCwp1MYFz9xlzmvJy3uuP9YIgF7nWA_hELksIwtmjgIDtx70lOi_riFix-l6lNtmzpF767tKvhbR8lr0Lk0ptVeAyTviQjngYwaewWEvw9MaPn4M-6FxpmL0Hv5ddVDnJMrwFcovL-FOSs6DOb82tKmESFZUQBY3IqHUMIxWneutAGQwEnGyDdo3NE4pgsuhIms4h48VrN72W_kOa-JjOeLGoyVW0gIdIBTgu5ATR5SblzyPyVbgMBcJCBisvpJQA5dzf3mZcZJW9SFn-SXz9yK22diSz8zhMidSQyOHk6U6-jpiRbHM_wf_Yqq9STTSqWh6pkin_lbKqMq-dLQyObzBOeaoWmWtclESur2Uj84mofSqDm8qlXoKgxL0WEz5NooUnQ7XfL83GgR_Q0WAW81bfwLixWslfPbS-sQfsSOIg9aew0PXgbidNPC1MDba2pUnInmvZBQ5NHubAwHC8P3xGHLm0WFlfGuSvz0bo2y7w8kTOdO_qrF6sUfStgBbYpTHB8ziC99I6Q7-eEvn5omP8EVhOl4-JTDV9B6HFAFWqh4KiTHVqQCNZ11AF2dXGREVsczkoTPYQYockTwv4NbxEgHD-uqZm0MBtJxYA1pfatwF7WLYarNpoV_iu9f4bpGR8mS7B9ew0D7ejadg_KMUI2ZC-JV4',
            'content-type': 'application/json',
            'x-clienttype': 'online',
            'x-dealerid': 'bosak-kia',
            'x-uar-client-codename': 'web',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-datadog-origin': 'rum',
            'x-datadog-parent-id': '4107906381495989148',
            'x-datadog-sampling-priority': '1',
            'x-datadog-trace-id': '7203406777692265668',
          },
        }
      )

      response = http.options(
        'https://testing-autoretail-api.upstart.com/byo/deals/812c5834-0dde-4eca-8314-838f248fa97b',
        null,
        {
          headers: {
            accept: '*/*',
            'access-control-request-headers':
              'authorization,content-type,x-clienttype,x-datadog-origin,x-datadog-parent-id,x-datadog-sampling-priority,x-datadog-trace-id,x-dealerid,x-uar-client-codename',
            'access-control-request-method': 'PUT',
            origin: 'https://web-testing.upstart.com',
            'sec-fetch-mode': 'cors',
          },
        }
      )
      sleep(1.2)

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW3Pha2SVqoo3y_W-x_lk8tNpUol7Z6Zr_bbYWopWhd4r2LEl9_Js3gyRQIFXQyc5pf9ZBp9NXAocpRwRsBRIukvCNrrg5BWZz7gu6xMpq8Jt-zytkhWJ3G3WSEdcB0i9UToKr-490yYdOJqjjJ1f2HPLen_67j0DoU/cc_2022KIS100002_01_640_ABP.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW0qiD_L7kOk9seO4gR_csPRBtPqEs0HrYTEfNKuooNlbHHlmfKRc6z1k9U_WNrxlGyAedOYeBiS1j5rbqtqvuuYl7my3iDOGhGtcqxf3CWQpnLunQ_rBhJeQwrSAuhj3DRwHN9e56TKjWbipR3sLY8DH3P4e4DV5G4/cc_2022KIS100002_02_640_ABP.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW1SfVcwy9xhFHdijwjNhe9I6z0R4TjVUMEgU4b4GImpH0iFBaxjU9n0CYBwrorufeUMF5jMoyTRIwwrHwfHYWXENzMPmLbn7vOyyzFWiPMWoRn7qU3lhUfvKLRhyS4IGCtArw1WUhgSRwA4HEHcxPQE-l4fLZ3b2oo/cc_2022KIS100002_03_640_ABP.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.put(
        'https://testing-autoretail-api.upstart.com/byo/deals/812c5834-0dde-4eca-8314-838f248fa97b',
        '{"car":{"exteriorColorId":"ABP","interiorColorId":"GYT"}}',
        {
          headers: {
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MTJjNTgzNC0wZGRlLTRlY2EtODMxNC04MzhmMjQ4ZmE5N2IiLCJpc3MiOiJiYWNrZW5kIiwiY2xhaW1zIjpbeyJ0eXBlIjoiZGVhbCIsImRlYWxJZCI6IjgxMmM1ODM0LTBkZGUtNGVjYS04MzE0LTgzOGYyNDhmYTk3YiJ9XSwiaWF0IjoxNjkzOTAyMDgxLCJleHAiOjE2OTM5MDM4ODF9.coM8dMdiQtuuIBvgFzceFLlHwJOVyudazA6a7_J1D8FxbeOSYaaxRoxfLjevOB7LZdqu5FE-jc_bU1eRrA-6FyZv49Gck2SGxvR3v6JmRWWrHFNwlR4h2p252fgDSTS984tki-qFD2ULM2LwWfxvprxEjl4w_0Juu8qum36XD_XmVhTKNW6uRANUIvwYjw2NpPS27hps44YfCQBwx_fak4SlI3GwZlWY-yZYVIISPCMSgH2dEiL8kqFXU_r-CaP-KqDh8P_FjO-Q8Ir5OuyBa4axxXj380O8WYQ1KLEm6UYiZoEorbWB4DOkCnuhZyXq6I4lz52_WhvoocT2ze2dZlEVRELrKMkAOQofhKTtDlT41JpX7Gr-arlEIZT-5k-qgMZ50VCtCY12RRBoJL6lUK0hIAXqdxd-2BmJfwsoj3TUrMXa_QeR7ftsEqDxoJOti1pyeb2kaQsxTv5kgIe2VP_AfdDRmTJPEBsST3aPr6LaKlLHkLAATqaq21nsbZb7csuP3tVoNV92WI7WH6wIWVQOc0QOY3LuFWhkHtUUaAtxs4w3uK-Zx5b8-FTAce9gzVpcXn6P-kaeFz7m6Rf57XXSHBhBo0DlPVPe_eX14fL-9h-EcpKAUcaDiLKwr_eyLYU4KD0SaZ69fmsMBVqJgb58H5dJuwPShCBad4qB1Kw',
            'content-type': 'application/json',
            'x-clienttype': 'online',
            'x-dealerid': 'bosak-kia',
            'x-uar-client-codename': 'web',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-datadog-origin': 'rum',
            'x-datadog-parent-id': '8623008098261138187',
            'x-datadog-sampling-priority': '1',
            'x-datadog-trace-id': '3171130098921665003',
          },
        }
      )
      sleep(1)

      response = http.get(
        'https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW3Pha2SVqoo3y_W-x_lk8tNpUol7Z6Zr_bbYWopWhd4r9NGyVRGV36CiqpMjmIcsdFC83MTWK0ReAfBv_STXqFEpm8r2dddQ-2CJJ7dffngyZ_7ln6Mlx7tSC1aS6Yx81C4P786ZFsXq5ez8Y1Oe9a3N7VOIyXuKZ8/cc_2022KIS100002_01_320_ABP.png',
        {
          headers: {
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
          },
        }
      )

      response = http.post(
        'https://testing-autoretail-api.upstart.com/cars',
        `{"id":"PDGY1693902034125","stock":null,"name":null,"year":2022,"make":"Kia","model":"Sorento Plug-In Hybrid","trim":"SX","modelCode":null,"body":"SUV","condition":"New","fuelEfficiency":{},"engine":"1.6L 261hp 4 Cylinder Engine","engineDisplacement":"1.6","driveTrain":"All Wheel Drive","fuelType":null,"weight":4537,"gvwr":5953,"horsePower":261,"cylinders":4,"extColor":"Aurora Black","intColor":"Gray, SynTex Artificial Leather Seat Trim","images":[{"shotCode":"01","category":"exterior","alt":"exterior front","defaultUrl":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW3Pha2SVqoo3y_W-x_lk8tNpUol7Z6Zr_bbYWopWhd4r9NGyVRGV36CiqpMjmIcsdFC83MTWK0ReAfBv_STXqFEpm8r2dddQ-2CJJ7dffngyZ_7ln6Mlx7tSC1aS6Yx81C4P786ZFsXq5ez8Y1Oe9a3N7VOIyXuKZ8/cc_2022KIS100002_01_320_ABP.png","url_med":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW3Pha2SVqoo3y_W-x_lk8tNpUol7Z6Zr_bbYWopWhd4r2LEl9_Js3gyRQIFXQyc5pf9ZBp9NXAocpRwRsBRIukvCNrrg5BWZz7gu6xMpq8Jt-zytkhWJ3G3WSEdcB0i9UToKr-490yYdOJqjjJ1f2HPLen_67j0DoU/cc_2022KIS100002_01_640_ABP.png","url_large":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW3Pha2SVqoo3y_W-x_lk8tNpUol7Z6Zr_bbYWopWhd4rxO0dMC4DZK3wHTS6kGLW-EQBaMpB8rf1O7faecoN4N4PV4N4G8LFxjm2QOpDqGHZT9M5EyckmWRGJ2f-Pw_diScp-nqEQM3AfGyZ_R7yqBlC4yDB5Mw0CWWhFSyTYusAg/cc_2022KIS100002_01_1280_ABP.png"},{"shotCode":"02","category":"exterior","alt":"exterior rear","defaultUrl":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW0qiD_L7kOk9seO4gR_csPRBtPqEs0HrYTEfNKuooNlbAqvvGl50tPCeibtIZkJI5LEot5F4c6Xyxz5Nexi-4-5iqoecwy0R6XhDOHCK0FW0NAT0XGCT9d2xLmcISDPpBtZpyzL5MeGtnYFId9JKlBUMO6EsPeQu_M/cc_2022KIS100002_02_320_ABP.png","url_med":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW0qiD_L7kOk9seO4gR_csPRBtPqEs0HrYTEfNKuooNlbHHlmfKRc6z1k9U_WNrxlGyAedOYeBiS1j5rbqtqvuuYl7my3iDOGhGtcqxf3CWQpnLunQ_rBhJeQwrSAuhj3DRwHN9e56TKjWbipR3sLY8DH3P4e4DV5G4/cc_2022KIS100002_02_640_ABP.png","url_large":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW0qiD_L7kOk9seO4gR_csPRBtPqEs0HrYTEfNKuooNlbGPe8E2zF8N1z50On2bhrmn0D8TDXwKTkNeUvozbzr45NklwZiEFhlT0IwWMMcc4Wz8THTr8X_1wfYImkEYPvWAHI2eCnUDCh5ZDoisKtQB3RRJWG5e7mmAGOE0EJ6yd8Q/cc_2022KIS100002_02_1280_ABP.png"},{"shotCode":"03","category":"exterior","alt":"${vars['alt1']}","defaultUrl":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW1SfVcwy9xhFHdijwjNhe9I6z0R4TjVUMEgU4b4GImpH2htpImXpqgEAbGVS87A2WJRI_NlAY_SQlYQFMsaJEhlNGxzWEOVDzGIBJwoTme5NLLrEvz_Ra5hnjyrOdTQZJkIqxyoH0GDFeyOF6Mn8eDXpqtQIZ__z8o/cc_2022KIS100002_03_320_ABP.png","url_med":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW1SfVcwy9xhFHdijwjNhe9I6z0R4TjVUMEgU4b4GImpH0iFBaxjU9n0CYBwrorufeUMF5jMoyTRIwwrHwfHYWXENzMPmLbn7vOyyzFWiPMWoRn7qU3lhUfvKLRhyS4IGCtArw1WUhgSRwA4HEHcxPQE-l4fLZ3b2oo/cc_2022KIS100002_03_640_ABP.png","url_large":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW1SfVcwy9xhFHdijwjNhe9I6z0R4TjVUMEgU4b4GImpH7QmRsmskjnsv8WRmXx8fq2hRc5KWvTSm76LNRbJH1ZfQu1ZvAyz_71-f5Si5_c0-c4vSygk_lGr4o5gc_6K5AsHCLJX1yjxaIaz4ZlOU9jzi-Zg6H1ObhA/cc_2022KIS100002_03_1280_ABP.png"},{"shotCode":"12","category":"interior","alt":"${vars['alt2']}","defaultUrl":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh7iaBz9l42DIt3prHQlTrBJmaFeQKlD6yiO4nLtkfDkrHf0ZAmSkBM1glFbl9Nfj-UgDXDRnK5grI55Iogkf_kfGQIYO15v5RMdHPzqaFsV0/2022KIS100008_320_12.png","url_med":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh1dKhbbzCfeglvkcB4HZgCSMohgwDgfDuJ-AWHf3CPKRlU7DLnmY3T6AWNhq6_pWzEsRU-RQq5EdoaBukWoDMdMcNHCEgQBqciehG6P2igQ8/2022KIS100008_640_12.png","url_large":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh7YQy4dfEFvKH82Gn8eXisXr8y5wqXwmIsqN96YI2v4BJ5V0MqIp2ZYrBMW0A8cAV5wGpgHS-m6Ze9CTXtoxY8dwyP-QpHcYGGvUYSqps1qVQ5HGk-FQvUA/2022KIS100008_1280_12.png"},{"shotCode":"13","category":"interior","alt":"${vars['alt3']}","defaultUrl":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshOYC6IKtq1QwRxnRaELoeQQ-axsYrrKh53PwvzwAocAYVCJ3JZ-WaF0zM9PfIvXB0-GsmT4NAp1bSWkKsLXTkVBdEV7cwe_okzGrhZAht0bk/2022KIS100016_320_13.png","url_med":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh05XvpHD7cs82m1A0Nu2MNIi97BOmhw6HZhaxiV35BZV-8wHUgUzoZgBj9BSvonX-7_-RQpVBaA-gfOQJXWse5GHTYNzZ-RYc1NlvYNItj60/2022KIS100016_640_13.png","url_large":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshgyKd_TwIP7zLNE4HwHO2-dqXQAcHxNbKHsmlT6H-Le-eJVE77LlOy-B9kgwqlXU3ONQwvLSs-lASjf_uHLaJqHhYDt0gvtANqwnvVPxmWh71t0PtNwZK0A/2022KIS100016_1280_13.png"},{"shotCode":"25","category":"interior","alt":"engine shot feature","defaultUrl":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh4ljzC70nvJDpiq5ypiGYXFg-yL9kHFNbBVO5Y7Qu30b3oEU2sTlRhNjd43bbbU22-1s1byOQq3e4Qof9yFHIOzlE3qVDKrnDjBmhE9tj_I0/2022KIS100051_320_25.png","url_med":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh4TJc2KcjtfmmWeDLmKsSQja7kcaJDJejc3vaYKLaUJGkF23hmsAetbiQ2u6GYCOUQ-aO-4iV1VtQ6VPY7pI-EqNQusqx8NuTAN_AhlTyc80/2022KIS100051_640_25.png","url_large":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshlujGGPzeTSEqjSkXXO510CBZZOYoMrvXZvPtUXu_eqObSgiY1GXnYKbFYD08Qf4gkBuohboRt60SA6Y_y6IqRWSqD1wtZpgSsLfxtImYfgE_OYiElPYSig/2022KIS100051_1280_25.png"},{"shotCode":"28","category":"interior","alt":"rear seats","defaultUrl":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshHxXJr612lCuyY_-vvtPFs3PDzlSGUBNCw55v_H3lSaCeCtszsvfjS24x0U8tG8pTXmGgPqjteaMxiPGKFGzMcu9a9WwquI48hvUGq2x_4og/2022KIS100052_320_28.png","url_med":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshXUEdCsLJ9VOU3VjzzieCHDbdaBysH1bR1YgUwbzhM0gbauUl4s3XOZMByoxmuKuUA1Yqij-B9vMX6YlVBZ5W-Rt74c-J2dpBC6kddFOs1mk/2022KIS100052_640_28.png","url_large":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh8m2qA0QahLFAsliLL76XJo5QlswtBFMQSlhvFhf0c3ycgTXCVxnrVt0E1pqx4ppqTv2yWokwAl9UduI7DTRngKuIPfm7PlmQqNUS8ar5WjAcehjwMXj4lw/2022KIS100052_1280_28.png"},{"shotCode":"43","category":"interior","alt":"${vars['alt4']}","defaultUrl":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh__zaXJg-E_zCrZfy-oPGF7wEWkly6Et15KEY5lqc_JnKaLDj26HrG1CfwdVsDqVFzKaDqlOG13VeKtwyELBY6kdylrAxxjBJyezehE1MeI4/2022KIS100053_320_43.png","url_med":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshAay53ELVUagPaAX2wBCOCWnJu7cmy7r47wPaLeTbaQzadzHLqNZb5N_DOerWnQ-UV6rvXMgTHu4GgIGpQKgqrqIdKrwSiw_d29zHEOYrMC0/2022KIS100053_640_43.png","url_large":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh9KH3vIx6FP3qYDFVe73hcYeBYLiiIHXQoiGNwhHlbS6cvoulQ4JzZr6RkgGUqAHnMt8O3GI_amBKnXcCF1PkxjTU3fgMDXxz4WeC9P_uxDmkKImPMx5JKw/2022KIS100053_1280_43.png"},{"shotCode":"44","category":"interior","alt":"passenger dash","defaultUrl":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshQDbzBVEUpwDkJrreIhzffH14hVyySKmZq4-oUefN8rA1qE2m0Yg_qowN77Un-eWH3Nj8ORZ-LfRlo_z46X8-uGGgGWcXC_dLRJxtDvd_X6U/2022KIS100054_320_44.png","url_med":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshCU2fglPvrmXCBE6ChVhmgwkYpOVtjSui1u2gJAS7TDq3LbJO3ixfgZ73zwQS6J_UQAi2HA4jLTNuZhkSulSq5627Mz-5ozGP5UohMpWjwkU/2022KIS100054_640_44.png","url_large":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshplm6MmwZINwK0CDrOICJgtb6EcBXAmfk5LTA2B8HGQN6WvtR-1VBKGWQO-ZFZYh1tWD9RyhmJ4VIj2vTiirfstTqHt80oYa_N7WqHAtZxysHu4uePGhPng/2022KIS100054_1280_44.png"}],"extColorHex":"","intColorHex":null,"humanColor":null,"filterExteriorColor":null,"filterInteriorColor":null,"mileage":null,"price":46485,"msrp":45190,"invoice":null,"bookValue":null,"cost":null,"oemOffers":null,"incentiveOffers":null,"residualValues":null,"mrm":null,"mrmAdjustments":null,"features":["3rd Row Seating","Backup Camera","Bluetooth","Navigation","4 Cylinders","Automatic","Power Tailgate","Lumbar Support","Power Drivers Seat","Keyless Ignition","Keyless Entry","Multi-zone Climate Control","Front Collision Mitigation","Rear Collision Mitigation","Automatic Emergency Braking","Lane Assist","Cruise Control","Heated Seats","AWD","Blind Spot Detection","CarPlay/Android Auto"],"options":null,"carImg":null,"dealerImgList":null,"mediaImgs":[{"url":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW3Pha2SVqoo3y_W-x_lk8tNpUol7Z6Zr_bbYWopWhd4r9NGyVRGV36CiqpMjmIcsdFC83MTWK0ReAfBv_STXqFEpm8r2dddQ-2CJJ7dffngyZ_7ln6Mlx7tSC1aS6Yx81C4P786ZFsXq5ez8Y1Oe9a3N7VOIyXuKZ8/cc_2022KIS100002_01_320_ABP.png"},{"url":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW0qiD_L7kOk9seO4gR_csPRBtPqEs0HrYTEfNKuooNlbAqvvGl50tPCeibtIZkJI5LEot5F4c6Xyxz5Nexi-4-5iqoecwy0R6XhDOHCK0FW0NAT0XGCT9d2xLmcISDPpBtZpyzL5MeGtnYFId9JKlBUMO6EsPeQu_M/cc_2022KIS100002_02_320_ABP.png"},{"url":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/Dh7SBu9ZPW1SfVcwy9xhFHdijwjNhe9I6z0R4TjVUMEgU4b4GImpH2htpImXpqgEAbGVS87A2WJRI_NlAY_SQlYQFMsaJEhlNGxzWEOVDzGIBJwoTme5NLLrEvz_Ra5hnjyrOdTQZJkIqxyoH0GDFeyOF6Mn8eDXpqtQIZ__z8o/cc_2022KIS100002_03_320_ABP.png"},{"url":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh7iaBz9l42DIt3prHQlTrBJmaFeQKlD6yiO4nLtkfDkrHf0ZAmSkBM1glFbl9Nfj-UgDXDRnK5grI55Iogkf_kfGQIYO15v5RMdHPzqaFsV0/2022KIS100008_320_12.png"},{"url":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshOYC6IKtq1QwRxnRaELoeQQ-axsYrrKh53PwvzwAocAYVCJ3JZ-WaF0zM9PfIvXB0-GsmT4NAp1bSWkKsLXTkVBdEV7cwe_okzGrhZAht0bk/2022KIS100016_320_13.png"},{"url":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh4ljzC70nvJDpiq5ypiGYXFg-yL9kHFNbBVO5Y7Qu30b3oEU2sTlRhNjd43bbbU22-1s1byOQq3e4Qof9yFHIOzlE3qVDKrnDjBmhE9tj_I0/2022KIS100051_320_25.png"},{"url":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshHxXJr612lCuyY_-vvtPFs3PDzlSGUBNCw55v_H3lSaCeCtszsvfjS24x0U8tG8pTXmGgPqjteaMxiPGKFGzMcu9a9WwquI48hvUGq2x_4og/2022KIS100052_320_28.png"},{"url":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBsh__zaXJg-E_zCrZfy-oPGF7wEWkly6Et15KEY5lqc_JnKaLDj26HrG1CfwdVsDqVFzKaDqlOG13VeKtwyELBY6kdylrAxxjBJyezehE1MeI4/2022KIS100053_320_43.png"},{"url":"https://media.chromedata.com/MediaGallery/media/MzA0OTA1Xk1lZGlhIEdhbGxlcnk/FV06ySd-YN3aGMeIt8KDXemXB8KMHBshQDbzBVEUpwDkJrreIhzffH14hVyySKmZq4-oUefN8rA1qE2m0Yg_qowN77Un-eWH3Nj8ORZ-LfRlo_z46X8-uGGgGWcXC_dLRJxtDvd_X6U/2022KIS100054_320_44.png"}],"equipment":{"safety":["Highway Driving Assist (HDA)","Side Impact Beams","Dual Stage Driver And Passenger Seat-Mounted Side Airbags","Parking Distance Warning - Forward & Reverse (PDW-F&R) Front And Rear Parking Sensors","Blind-Spot Collision-Avoidance Assist-Rear (BCA-R) & Parallel Exit Blind Spot","Forward Collision-Avoidance Assist-Ped/Cyclist","Collision Mitigation-Front","Driver Monitoring-Alert","Collision Mitigation-Rear","Tire Specific Low Tire Pressure Warning","Dual Stage Driver And Passenger Front Airbags","Curtain 1st And 2nd Row Airbags","Airbag Occupancy Sensor","Driver Knee Airbag","Power Rear Child Safety Locks","Outboard Front Lap And Shoulder Safety Belts -inc: Rear Center 3 Point, Height Adjusters and Pretensioners","Back-Up Camera"],"mechanical":["261 Horsepower","258 ft-lbs of torque @ undefined rpm","Engine: 1.6L Turbocharged GDI","Transmission: 6-Speed Automatic -inc: paddle shifters","Axle Ratio: 3.648","GVWR: 5,953 lbs","Engine Auto Stop-Start Feature","Transmission w/Driver Selectable Mode","Electronic Transfer Case","Automatic Full-Time All-Wheel","60-Amp/Hr 600CCA Maintenance-Free Battery w/Run Down Protection","Hybrid Electric Motor 150 Amp Alternator","Gas-Pressurized Shock Absorbers","Front And Rear Anti-Roll Bars","Electric Power-Assist Speed-Sensing Steering","17.7 Gal. Fuel Tank","Single Stainless Steel Exhaust","Permanent Locking Hubs","Strut Front Suspension w/Coil Springs","Multi-Link Rear Suspension w/Coil Springs","Regenerative 4-Wheel Disc Brakes w/4-Wheel ABS, Front Vented Discs, Brake Assist, Hill Descent Control, Hill Hold Control and Electric Parking Brake","Lithium Polymer Traction Battery 14 kWh Capacity"],"exterior":["Wheels: 19\\" Machine-Finished Alloy","Tires: 235/55R19","Steel Spare Wheel","Compact Spare Tire Stored Underbody w/Crankdown","Clearcoat Paint","Body-Colored Front Bumper w/Metal-Look Bumper Insert","Body-Colored Rear Bumper w/Black Rub Strip/Fascia Accent and Metal-Look Bumper Insert","Black Bodyside Insert and Black Wheel Well Trim","Chrome Side Windows Trim and Black Front Windshield Trim","Body-Colored Door Handles","Body-Colored Power Heated Side Mirrors w/Manual Folding and Turn Signal Indicator","Fixed Rear Window w/Fixed Interval Wiper and Defroster","Deep Tinted Glass","Variable Intermittent Wipers","Fully Galvanized Steel Panels","Lip Spoiler","Black Grille w/Chrome Surround","Roof Rack Rails Only","Auto On/Off Projector Beam Led Low/High Beam Daytime Running Auto High-Beam Headlamps w/Delay-Off","Front Fog Lamps","Perimeter/Approach Lights","LED Brakelights","Headlights-Automatic Highbeams"],"entertainment":["Radio: 10.25\\" Touchscreen Navigation w/SiriusXM -inc: Bluetooth, Android Auto, Apple CarPlay, voice recognition, telematics, modem, 6 speakers and 8 USB connections","Radio w/Seek-Scan, Clock, Speed Compensated Volume Control, Steering Wheel Controls and Radio Data System","Fixed Antenna","2 LCD Monitors In The Front"],"interior":["8-Way Driver Seat","Passenger Seat","Front Center Armrest and Rear Seat Mounted Armrest","Manual Tilt/Telescoping Steering Column","Fixed 50-50 Split-Bench 3rd Row Seat Front, Manual Fold Into Floor, 2 Power and Adjustable Head Restraints","Leather Steering Wheel","Front Cupholder","Rear Cupholder","Cruise Control w/Steering Wheel Controls","Distance Pacing w/Traffic Stop-Go","HVAC -inc: Underseat Ducts, Headliner/Pillar Ducts and Console Ducts","Illuminated Locking Glove Box","Driver Foot Rest","Interior Trim -inc: Metal-Look Console Insert and Piano Black/Metal-Look Interior Accents","Full Cloth Headliner","Day-Night Rearview Mirror","Driver And Passenger Visor Vanity Mirrors w/Driver And Passenger Illumination, Driver And Passenger Auxiliary Mirror","Full Floor Console w/Covered Storage, Mini Overhead Console w/Storage and 2 12V DC Power Outlets","Front And Rear Map Lights","Fade-To-Off Interior Lighting","Full Carpet Floor Covering","Carpet Floor Trim","Trunk/Hatch Auto-Latch","Cargo Area Concealed Storage","Cargo Space Lights","Driver / Passenger And Rear Door Bins","Delayed Accessory Power","Systems Monitor","Redundant Digital Speedometer","Outside Temp Gauge","Analog Appearance","Manual Adjustable Front Head Restraints and Manual Adjustable Rear Head Restraints","2 Seatback Storage Pockets","Perimeter Alarm","Immobilizer","2 12V DC Power Outlets","Air Filtration"]},"upgrades":[],"factoryCodes":null,"optionCodes":null,"status":"byo","inTransit":false,"feed_id":null,"dealer_id":null,"incentiveHash":null,"cachedPrices":null,"dateInStock":null,"ratings":null,"manuallyEnteredSource":null,"atcTaxesAndFees":null,"aep":null,"overMileage":null,"optionalAccessories":null,"lowestPrice":null,"priceBreakdown":{"parts":[{"category":"Vehicle Cost","name":"Base MSRP","value":45190},{"category":"Vehicle Cost","name":"Destination and Delivery","value":1295},{"category":"Exterior Color","name":"Aurora Black","value":0},{"category":"Interior Color","name":"Gray, SynTex Artificial Leather Seat Trim","value":0}],"startingPrice":45190,"total":46485},"byoSelectedOptionCodes":null,"pricingMatrixModel":null,"isShift":false,"createdAt":"2023-09-05T08:20:34.126Z","updatedAt":"2023-09-05T08:21:21.777Z"}`,
        {
          headers: {
            accept: 'application/json',
            authorization:
              'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI4MTJjNTgzNC0wZGRlLTRlY2EtODMxNC04MzhmMjQ4ZmE5N2IiLCJpc3MiOiJiYWNrZW5kIiwiY2xhaW1zIjpbeyJ0eXBlIjoiZGVhbCIsImRlYWxJZCI6IjgxMmM1ODM0LTBkZGUtNGVjYS04MzE0LTgzOGYyNDhmYTk3YiJ9XSwiaWF0IjoxNjkzOTAyMDg1LCJleHAiOjE2OTM5MDM4ODV9.VD8TlIEQiuYiapSP76nUYA6NjJKhlJ18lRzgcV-foSz275UhosapfgLIOV64qlpZXr-NxYzhDCr9oAR9cfesRb9TER2g77f2UonRNgapO2Th6x4uT-nJe44thONHeQKxkt3Eg2GQCyrb1qg9ZRDOriYHSVUib0gyuQtbjhFTh-blTtzPG8vPrEuupQJoUAsNOPirYCcprQv7unnzt_iozSqtmGHwyKtxrACFPzIQW5uUQxwpdXAQUH_ShdlVExTYyeT7deghVfWxbsnAHhMN6BqMZXTTAz5dThIy29kIJmgfUQxEFizDkGH2h57Gm-Mch7b_YNoxr7n4I44hMKsvRlJif57okCXiVkRaMyjZ1QRF6ZTIMW_kLaaMfnE1nPCFU7uV5GzDGnNxLDiKEBVAMnUiZLm2XyASzY0uxJfu38DBvVwgMFyYZfQeJ4oVZIaU_F_VwwW-A_nqICvdmP2MfHq7Ca3yX7YLRcc-eFBET3vxYrjHWD2UHw8-hH4O4fq2mWjnG2OscK-HHHfGYs33fBF0E7nQniW6CEDIZcmVDlW9l9xXdS4q50FW50uWJNknKCuOKTVfk9q2x1gFxZLsmFKCOT3ABr-SekLSBEFzkyr_tfzWHaLaDwUl29sTCyIBCVu1IJ3sH3dmYEZxiDxUVQTqri8Lmd-cJQslZbVhUr0',
            'content-type': 'application/json',
            'x-clienttype': 'online',
            'x-dealerid': 'bosak-kia',
            'x-uar-client-codename': 'web',
            'sec-ch-ua': '"Chromium";v="116", "Not)A;Brand";v="24", "Google Chrome";v="116"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'x-datadog-origin': 'rum',
            'x-datadog-parent-id': '2451910060805580287',
            'x-datadog-sampling-priority': '1',
            'x-datadog-trace-id': '7965595863279669701',
          },
        }
      )

      response = http.options('https://testing-autoretail-api.upstart.com/cars', null, {
        headers: {
          accept: '*/*',
          'access-control-request-headers':
            'authorization,content-type,x-clienttype,x-datadog-origin,x-datadog-parent-id,x-datadog-sampling-priority,x-datadog-trace-id,x-dealerid,x-uar-client-codename',
          'access-control-request-method': 'POST',
          origin: 'https://web-testing.upstart.com',
          'sec-fetch-mode': 'cors',
        },
      })

     
      
    }
  )
}
