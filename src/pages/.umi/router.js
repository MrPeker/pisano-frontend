import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from '/Users/mrpeker/development/GitHub/pisano-frontend/src/pages/.umi/LocaleWrapper.jsx'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "component": dynamic({ loader: () => import('../../layouts/UserLayout'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
    "routes": [
      {
        "path": "/user",
        "redirect": "/user/login",
        "exact": true
      },
      {
        "path": "/user/login",
        "component": dynamic({ loader: () => import('../User/Login'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
        "exact": true
      },
      {
        "path": "/user/register",
        "component": dynamic({ loader: () => import('../User/Register'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
        "exact": true
      },
      {
        "path": "/user/register-result",
        "component": dynamic({ loader: () => import('../User/RegisterResult'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import('../../layouts/BasicLayout'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
    "Routes": [require('../Authorized').default],
    "authority": [
      "admin",
      "user"
    ],
    "routes": [
      {
        "path": "/",
        "redirect": "/dashboard/urunAra",
        "exact": true
      },
      {
        "path": "/dashboard",
        "name": "dashboard",
        "icon": "dropbox",
        "routes": [
          {
            "path": "/dashboard/urunAra",
            "name": "urunAra",
            "component": dynamic({ loader: () => import('../Dashboard/urunAra'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/dashboard/kaydedilenler",
            "name": "kaydedilenler",
            "component": dynamic({ loader: () => import('../Dashboard/kaydedilenler'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/dashboard/ziyaretEdilenler",
            "name": "ziyaretEdilenler",
            "component": dynamic({ loader: () => import('../Dashboard/ziyaretEdilenler'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/dashboard/okutulmusUrunler",
            "name": "okutulmusUrunler",
            "component": dynamic({ loader: () => import('../Dashboard/okutulmusUrunler'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/Notlar",
        "icon": "form",
        "name": "Notlar",
        "routes": [
          {
            "path": "/Notlar/Listeler",
            "name": "Listeler",
            "component": dynamic({ loader: () => import('../Notlar/Listeler'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/Notlar/ekrangoruntu",
            "name": "ekrangoruntu",
            "component": dynamic({ loader: () => import('../Notlar/ekrangoruntu'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/TrendlerAp",
        "icon": "slack",
        "name": "trendler",
        "routes": [
          {
            "path": "/TrendlerAp/trendler",
            "name": "trendler",
            "component": dynamic({ loader: () => import('../TrendlerAp/trendler'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/GoogleAp",
        "icon": "google",
        "name": "google",
        "routes": [
          {
            "path": "/GoogleAp/google",
            "name": "google",
            "component": dynamic({ loader: () => import('../GoogleAp/google'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/SozlukAp",
        "icon": "aliyun",
        "name": "sozluk",
        "routes": [
          {
            "path": "/SozulukAp/sozluk",
            "name": "Sozluk",
            "component": dynamic({ loader: () => import('../SozlukAp/sozluk'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/TranslateAp",
        "icon": "reload",
        "name": "translate",
        "routes": [
          {
            "path": "/TranslateAp/translate",
            "name": "translate",
            "component": dynamic({ loader: () => import('../TranslateAp/translate'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/KisiAp",
        "icon": "user",
        "name": "kisi",
        "routes": [
          {
            "path": "/KisiAp/kisi",
            "name": "kisi",
            "component": dynamic({ loader: () => import('../KisiAp/kisi'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/VikipediaAp",
        "icon": "book",
        "name": "vikipedia",
        "routes": [
          {
            "path": "/VikipediaAp/vikipedia",
            "name": "vikipedia",
            "component": dynamic({ loader: () => import('../VikipediaAp/vikipedia'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/form",
        "icon": "form",
        "name": "form",
        "routes": [
          {
            "path": "/form/basic-form",
            "name": "basicform",
            "component": dynamic({ loader: () => import('../Forms/BasicForm'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/form/step-form",
            "name": "stepform",
            "component": dynamic({ loader: () => import('../Forms/StepForm'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "hideChildrenInMenu": true,
            "routes": [
              {
                "path": "/form/step-form",
                "name": "stepform",
                "redirect": "/form/step-form/info",
                "exact": true
              },
              {
                "path": "/form/step-form/info",
                "name": "info",
                "component": dynamic({ loader: () => import('../Forms/StepForm/Step1'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "path": "/form/step-form/confirm",
                "name": "confirm",
                "component": dynamic({ loader: () => import('../Forms/StepForm/Step2'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "path": "/form/step-form/result",
                "name": "result",
                "component": dynamic({ loader: () => import('../Forms/StepForm/Step3'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/form/advanced-form",
            "name": "advancedform",
            "authority": [
              "admin"
            ],
            "component": dynamic({ loader: () => import('../Forms/AdvancedForm'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/list",
        "icon": "table",
        "name": "list",
        "routes": [
          {
            "path": "/list/table-list",
            "name": "searchtable",
            "component": dynamic({ loader: () => import('../List/TableList'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/list/basic-list",
            "name": "basiclist",
            "component": dynamic({ loader: () => import('../List/BasicList'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/list/card-list",
            "name": "cardlist",
            "component": dynamic({ loader: () => import('../List/CardList'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/list/search",
            "name": "searchlist",
            "component": dynamic({ loader: () => import('../List/List'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "routes": [
              {
                "path": "/list/search",
                "redirect": "/list/search/articles",
                "exact": true
              },
              {
                "path": "/list/search/articles",
                "name": "articles",
                "component": dynamic({ loader: () => import('../List/Articles'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "path": "/list/search/projects",
                "name": "projects",
                "component": dynamic({ loader: () => import('../List/Projects'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "path": "/list/search/applications",
                "name": "applications",
                "component": dynamic({ loader: () => import('../List/Applications'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "path": "/profile",
        "name": "profile",
        "icon": "profile",
        "routes": [
          {
            "path": "/profile/basic",
            "name": "basic",
            "component": dynamic({ loader: () => import('../Profile/BasicProfile'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/profile/advanced",
            "name": "advanced",
            "authority": [
              "admin"
            ],
            "component": dynamic({ loader: () => import('../Profile/AdvancedProfile'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "name": "result",
        "icon": "check-circle-o",
        "path": "/result",
        "routes": [
          {
            "path": "/result/success",
            "name": "success",
            "component": dynamic({ loader: () => import('../Result/Success'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/result/fail",
            "name": "fail",
            "component": dynamic({ loader: () => import('../Result/Error'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "name": "exception",
        "icon": "warning",
        "path": "/exception",
        "routes": [
          {
            "path": "/exception/403",
            "name": "not-permission",
            "component": dynamic({ loader: () => import('../Exception/403'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/exception/404",
            "name": "not-find",
            "component": dynamic({ loader: () => import('../Exception/404'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/exception/500",
            "name": "server-error",
            "component": dynamic({ loader: () => import('../Exception/500'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "path": "/exception/trigger",
            "name": "trigger",
            "hideInMenu": true,
            "component": dynamic({ loader: () => import('../Exception/TriggerException'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "exact": true
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "name": "account",
        "icon": "user",
        "path": "/account",
        "routes": [
          {
            "path": "/account/center",
            "name": "center",
            "component": dynamic({ loader: () => import('../Account/Center/Center'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "routes": [
              {
                "path": "/account/center",
                "redirect": "/account/center/articles",
                "exact": true
              },
              {
                "path": "/account/center/articles",
                "component": dynamic({ loader: () => import('../Account/Center/Articles'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "path": "/account/center/applications",
                "component": dynamic({ loader: () => import('../Account/Center/Applications'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "path": "/account/center/projects",
                "component": dynamic({ loader: () => import('../Account/Center/Projects'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "path": "/account/settings",
            "name": "settings",
            "component": dynamic({ loader: () => import('../Account/Settings/Info'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
            "routes": [
              {
                "path": "/account/settings",
                "redirect": "/account/settings/base",
                "exact": true
              },
              {
                "path": "/account/settings/base",
                "component": dynamic({ loader: () => import('../Account/Settings/BaseView'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "path": "/account/settings/security",
                "component": dynamic({ loader: () => import('../Account/Settings/SecurityView'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "path": "/account/settings/binding",
                "component": dynamic({ loader: () => import('../Account/Settings/BindingView'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "path": "/account/settings/notification",
                "component": dynamic({ loader: () => import('../Account/Settings/NotificationView'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
                "exact": true
              },
              {
                "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
              }
            ]
          },
          {
            "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import('../404'), loading: require('/Users/mrpeker/development/GitHub/pisano-frontend/src/components/PageLoading/index').default  }),
        "exact": true
      },
      {
        "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
      }
    ]
  },
  {
    "component": () => React.createElement(require('/Users/mrpeker/development/GitHub/pisano-frontend/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true })
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
