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
  link: [{ rel: 'icon', type: 'image/png', href: '/favicon-32x32.png' }],
  link: [{ rel: 'stylesheet', href: 'https://cdn.linearicons.com/free/1.0.0/icon-font.min.css' }],
  link: [{ rel: 'stylesheet', href: 'https://trusting-bassi-1284fb.netlify.app/mainnew2.css' }],
  script: [
    {
      src: 'https://identity.netlify.com/v1/netlify-identity-widget.js',
      defer: true,
      id: 'netlify-identity-widget-script'
    }
  ],
  __dangerouslyDisableSanitizers: ['script']
  /*script: [
    {
      hid: 'gtm-script1',
      innerHTML: `
      </script><script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript">
      `,
    },
    {
      hid: 'gtm-script2',
      innerHTML: `
      Calendly.initInlineWidget({
        url: 'https://calendly.com/nhuber?hide_landing_page_details=1',
        parentElement: document.getElementById('nickscalendly'),
        prefill: {},
        utm: {}
       });
      `,
      type: 'text/javascript',
        charset: 'utf-8'
    }
  ]*/
}
