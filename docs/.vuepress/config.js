module.exports = {
    title: 'badminton',
    description: '羽你同行+ 小程序（多平台）',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/start.html' },
            { text: 'Components', link: '/components/prefix-gallery.html' },
            { text: 'Tools', link: '/tools/api.html' },
            { text: 'Assets', link: '/assets/host.html' }
        ],
        sidebar: {
            '/components/': [
                'prefix-gallery'
            ],
            '/pages/': [],
            '/tools/': [
                'api'
            ],
            '/assets/': [
                'host'
            ]
        }
    }
}