import { Link } from "react-router-dom"
import BlogImg1 from '../assets/blog images/malpractice-lawsuits-data--400x250.jpg'
import BlogImg2 from '../assets/blog images/bigstock-modern-medical-technologies-c-3825074062.jpg'
import BlogImg3 from '../assets/blog images/bigstock-business-people-shake-hands-to-371829652-400x250.jpg'
const posts = [
    {
      title: 'How Data Can Reduce the Chance for Medical Malpractice Lawsuits',
      href: '/firstblog',
      category: { name: 'Article', href: '#' },
      description:
        'When it comes to understanding risk profiles for medical malpractice insurance, organizations have long been limited to little more than the data which comes only after an adverse event or lawsuit has been filed...',
      date: 'Jan 6, 2022',
      datetime: '2020-01-06',
      imageUrl:
        BlogImg1,
      readingTime: '6 min',
      author: {
        name: 'Healthcare Risk Advisors',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Healthcare’s Digital Revolution: (Finally) a Time for Optimism” Webinar Presented by HRA',
      href: '/firstblog',
      category: { name: 'Article', href: '#' },
      description:
        'Recently, I was fortunate enough to host an HRA webinar featuring Robert M. Wachter, MD—Professor and Chair of the Department of Medicine at the University of California, San Francisco (UCSF)...',
      date: 'Jun 9, 2021',
      datetime: '2021-06-09',
      imageUrl:
        BlogImg2,
      readingTime: '4 min',
      author: {
        name: 'Healthcare Risk Advisors',
        href: '/firstblog',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Communication is the Key to Prevail in a Medical Lawsuit',
      href: '#',
      category: { name: 'Article', href: '#' },
      description:
        'Recently, HRA Senior Vice President and Chief Claims Officer Peter Kolbert joined in a discussion about risk management in healthcare...',
      date: 'Feb 12, 2020',
      datetime: '2021-05-17',
      imageUrl:
       BlogImg3,
      readingTime: '11 min',
      author: {
        name: 'Healthcare Risk Advisors',
        href: '#',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
  
  export default function BlogList() {
    return (
      <div className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 flex flex-col items center">
        <div className="absolute inset-0 relative">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blogs</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque, ducimus sed.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-white p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                  <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                      <a href={post.author.href}>
                        <span className="sr-only">{post.author.name}</span>
                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                      </a>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-900">
                        <a href={post.author.href} className="hover:underline">
                          {post.author.name}
                        </a>
                      </p>
                      <div className="flex space-x-1 text-sm text-gray-500">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span aria-hidden="true">&middot;</span>
                        <span>{post.readingTime} read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to='/blog' className =' w-full text-center py-2 text-white bg-indigo-600 mt-5 rounded-sm absolute'>More</Link>
        </div>
      
      </div>
    )
  }
  