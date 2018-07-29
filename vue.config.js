var PrerenderSpaPlugin = require('prerender-spa-plugin')
const Renderer = require('@prerenderer/renderer-jsdom')
var path = require('path')

const prerenderPages = [
  '/hakkimizda/amac-ilke-deger',
  '/hakkimizda/yonetim-kurulu',
  '/hakkimizda/denetim-kurulu',
  '/hakkimizda/kurucular',
  '/hakkimizda/tuzugumuz',
  '/arabuluculuk/arabuluculuk-nedir',
  '/arabuluculuk/sss',
  '/arabuluculuk/arabuluculuk-kitapligi',
  '/mevzuat/ucretlendirme',
  '/uyelik/kosullar',
  '/uyelik/banka-bilgileri',
  '/faaliyetlerimiz/ziyaret',
  '/faaliyetlerimiz/etkinlik',
  '/faaliyetlerimiz/makaleler',
  '/faaliyetlerimiz/egitim-sunumlari',
  '/basin/tv-programlari',
  '/basin/radyo-programlari',
  '/basin/yazili-basin',
  '/iletisim',
  '/duyurular'
]


module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    if (process.env.NODE_ENV !== 'production') return

    return {
      plugins: [
        new PrerenderSpaPlugin(
          // Absolute path to compiled SPA
          path.resolve(__dirname, 'dist'),
          // List of routes to prerender
          prerenderPages,
          {
              renderer: new Renderer()
          }
        ),
      ]
    }
  }
}