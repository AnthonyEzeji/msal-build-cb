import { Link } from "react-router-dom"
import BlogImg1 from '../assets/blog images/malpractice-lawsuits-data--400x250.jpg'
import BlogImg2 from '../assets/blog images/bigstock-modern-medical-technologies-c-3825074062.jpg'
import BlogImg3 from '../assets/blog images/bigstock-business-people-shake-hands-to-371829652-400x250.jpg'
import BlogImg4 from '../assets/blog images/DukeUniversityThreeGoodThings.png'
import BlogImg5 from '../assets/blog images/UsingMedicalMalpracticeData.jpeg'
import BlogImg6 from '../assets/blog images/ReasonForOptimismRegarding.jpg'
import BlogImg7 from '../assets/blog images/BeforeCovid19OutlierMedical.jpg'
import BlogImg8 from '../assets/blog images/FearOfCovidCreatesItsOwnRisk.jpg'
import BlogImg9 from '../assets/blog images/OpenNotesApracticeComplianceRequirement.jpg'
import BlogImg10 from '../assets/blog images/HowRemotePatientMonitoringWillAffect.jpg'
import BlogCard from "./BlogCard"

import { useEffect } from "react"
import { useState } from "react"
const posts = [
    {
      title: 'How Data Can Reduce the Chance for Medical Malpractice Lawsuits',
      href: '/blog/how-data-can-reduce-the-chance-for-medical-malpractice-lawsuits',
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
        href: './',
        imageUrl:
          'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Healthcare’s Digital Revolution: (Finally) a Time for Optimism” Webinar Presented by HRA',
      href: '/blog/healthcares-digital-revolution-finally-a-time-for-optimism-webinar-presented-by-hra',
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
        href: './',
        imageUrl:
          'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Communication is the Key to Prevail in a Medical Lawsuit',
      href: '/blog/communication-is-the-key-to-prevail-in-a-medical-lawsuit',
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
        href: './',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Duke University “Three Good Things” Program on Addressing Physician & Staff Burnout Presented by HRA',
      href: '/blog/duke-university-three-good-things-program-on-addressing-physician--staff-burnout-presented-by-hra',
      category: { name: 'Article', href: '#' },
      description:
        'In April, I had the pleasure of hosting an HRA webinar with my colleague, Dr. Bryan Sexton, Director of the Duke Center for Healthcare Safety and Quality at the Duke University Medical...',
      date: 'May 12, 2021',
      datetime: '2021-05-21',
      imageUrl:
       BlogImg4,
      readingTime: '11 min',
      author: {
        name: 'Healthcare Risk Advisors',
        href: './',
        imageUrl:
          './assets/blog images/DukeUniversityThreeGoodThings.png',
      },
    },
    {
      title: 'Using Medical Malpractice Data to Improve Patient Safety',
      href: '/blog/using-medical-malpractice-data-to-improve-patient-safety',
      category: { name: 'Article', href: '#' },
      description:
        'While patient safety as a concept has long been a priority in the medical field, as a discipline it is relatively...',
      date: 'May 4, 2021',
      datetime: '2021-05-04',
      imageUrl:
       BlogImg5,
      readingTime: '11 min',
      author: {
        name: 'Healthcare Risk Advisors',
        href: './',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Reason for Optimism Regarding COVID-Related Lawsuits Against Practitioners in New York',
      href: '/blog/reason-for-optimism-regarding-covid-related-lawsuits-against-practitioners-in-new-york',
      category: { name: 'Article', href: '#' },
      description:
        'As physicians know better than anyone, COVID-19 has upended, restructured, and forced change and anxiety in every aspect of healthcare, from...',
      date: 'Apr 27, 2021',
      datetime: '2021-04-27',
      imageUrl:
       BlogImg6,
      readingTime: '11 min',
      author: {
        name: 'Healthcare Risk Advisors',
        href: './',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Before COVID-19, Outlier Medical Malpractice Verdicts Were Rising—What’s Next?',
      href: '/blog/before-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-nextbefore-covid-19-outlier-medical-malpractice-verdicts-were-risingwhats-next',
      category: { name: 'Article', href: '#' },
      description:
        'Severity—the average cost of a medical malpractice claim—continues its relentless increase. Though severity...',
      date: 'Mar 11, 2021',
      datetime: '2021-03-11',
      imageUrl:
       BlogImg7,
      readingTime: '11 min',
      author: {
        name: 'Healthcare Risk Advisors',
        href: './',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'Fear of Covid-19 Creates Its Own Risks for Cardiologists',
      href: '/blog/fear-of-covid-19-creates-its-own-risks-for-cardiologists',
      category: { name: 'Article', href: '#' },
      description:
        'This past winter, The Doctors Company (the parent company of Healthcare Risk Advisors) published a report on its Cardiology Closed Claims Study...',
      date: 'Mar 11, 2021',
      datetime: '2021-03-11',
      imageUrl:
       BlogImg8,
      readingTime: '11 min',
      author: {
        name: 'Healthcare Risk Advisors',
        href: './',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'OpenNotes: A Practice Compliance Requirement Affecting Group Practices, VAPs and Hospitals in Spring 2021',
      href: '/blog/opennotes-a-practice-compliance-requirement-affecting-group-practices-vaps-and-hospitals-in-spring-2021',
      category: { name: 'Article', href: '#' },
      description:
        'Group practices, Voluntary Attending Physicians, and hospitals of all sizes should take note of a fast-approaching federal...',
      date: ' Feb 19, 2021',
      datetime: '2021-02-19',
      imageUrl:
       BlogImg9,
      readingTime: '11 min',
      author: {
        name: 'Healthcare Risk Advisors',
        href: './',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
    {
      title: 'How Remote Patient Monitoring Will Affect Medical Liability',
      href: '/blog/how-remote-patient-monitoring-will-affect-medical-liability',
      category: { name: 'Article', href: '#' },
      description:
        'Remote patient monitoring (RPM) is one of the most talked-about areas of innovation in healthcare today, and for good reason: many consider RPM...',
      date: ' Feb 19, 2021',
      datetime: '2021-02-19',
      imageUrl:
       BlogImg10,
      readingTime: '11 min',
      author: {
        name: 'Healthcare Risk Advisors',
        href: './',
        imageUrl:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    },
  ]
 
  export default function BlogList() {
  const [onBlogPage, setOnBlogPage] = useState(false)
    useEffect(() => {
     if(window.location.toString().includes('/blog')){
      setOnBlogPage(true)
     }
    
      
    }, [])
    
    return (
      <div className="relative  px-10  xl:px-32 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28 flex flex-col items center bg-slate-100">
        <div className="absolute inset-0 relative">
          <div className="h-1/3 bg-white sm:h-2/3" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Blogs</h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">

            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
            <BlogCard post = {post} />
            ))}
          </div>
          {!onBlogPage&&<Link to='/blog' className ='font-semibold w-full text-center py-3 text-white bg-red-600 mt-5 rounded-md absolute border-[1px] hover:border-red-600 hover:bg-transparent hover:text-red-600'>More</Link>}
        </div>
      
      </div>
    )
  }
  