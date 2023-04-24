/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
const navigation = {
    About: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership', href: '/about/leadership' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'News & Events', href: '/about/news-events' },
    ],
   Solutions: [
      { name: 'Hospiatals', href: '/solutions/hospitals' },
      { name: 'NY Physicians', href: '/solutions/ny-physicians' },
     
    ],
   StayInTouch: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Blog', href: '/blog' },
      { name: 'Careers', href: '/about/careers' },
      { name: 'Agent/Broker Portal', href: 'https://prodthedoctors.b2clogin.com/prodthedoctors.onmicrosoft.com/b2c_1a_signinsignup/oauth2/v2.0/authorize?client_id=68a79e4f-e905-429a-a9af-b18af2d460c6&redirect_uri=https%3A%2F%2Fsecure.thedoctors.com%2Fcommon%2Fsecurity%2Fredirect.aspx&response_mode=form_post&response_type=id_token&scope=openid' },
      { name: 'Tools and Publications for Agents', href: 'https://www.thedoctors.com/agent-broker-area/' },
    ]
 
  }
  
  export default function Footer() {
    return (
      <footer className="bg-slate-700 w-screen" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="grid grid-cols-2 gap-8 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-white">Solutions</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.Solutions?.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-12 md:mt-0">
                  <h3 className="text-base font-medium text-white">About</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.About?.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                  <h3 className="text-base font-medium text-white">Stay In Touch</h3>
                  <ul role="list" className="mt-4 space-y-4">
                    {navigation.StayInTouch?.map((item) => (
                      <li key={item.name}>
                        <a href={item.href} className="text-base text-gray-300 hover:text-white">
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
             
              </div>
            </div>
            <div className="mt-8 xl:mt-0">
              <h3 className="text-base font-medium text-white">Subscribe to our newsletter</h3>
              <p className="mt-4 text-base text-gray-300">
                The latest news, articles, and resources, sent to your inbox weekly.
              </p>
              <form className="mt-4 sm:flex sm:max-w-md">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 appearance-none rounded-md border border-transparent bg-white py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:border-white focus:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 py-2 px-4 text-base font-medium text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
         
        </div>
      </footer>
    )
  }
  