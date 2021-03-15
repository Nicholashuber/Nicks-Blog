export default {
  title: process.env.npm_package_name || '',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      hid: 'description',
      name: 'description',
      content: process.env.npm_package_description || ''
    }
  ],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  link: [{ rel: 'stylesheet', href: '/_nuxt/assets/scss/calwidget.css' }],
  script: [{ id: 'calendly-widgetjs', src: 'https://assets.calendly.com/assets/external/widget.js' }],
  script: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      defer: true,
      id: 'netlify-identity-widget-script'
    }
  ],
  script: [
    {
      src: 'https://assets.calendly.com/assets/external/widget.js',
      defer: true,
      id: 'calendly-widgetks'
    }
  ],
  __dangerouslyDisableSanitizers: ['script'],
  script: [{ id: 'calendly-widgetjs', src: 'https://assets.calendly.com/assets/external/widget.js' }],
  script: [
    {
      innerHTML: `
      <script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>
      `
    }
  ],
  script: [
    {
      innerHTML: `
      Calendly.initBadgeWidget({ url: 'https://calendly.com/nhuber?hide_landing_page_details=1', text: 'Schedule time with me', color: '#ffffff', textColor: '#040404', branding: false });
      `,
      type: 'text/javascript',
        charset: 'utf-8'
    }
  ]
}
