import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar'

import Footer from './Footer'

import { useNavigate } from 'react-router-dom'

import rkauffman_img from '../assets/leadership_images/rkauffman.jpg'
import ndoelger_img from '../assets/leadership_images/ndoelger.jpg';
import dfeldman_img from '../assets/leadership_images/dfeldman.jpg';
import freddanback_img from '../assets/leadership_images/fred-danback.jpg';
import pkolbert_img from '../assets/leadership_images/pkolbert.jpg';
import richcaldwell_img from '../assets/leadership_images/richcaldwell.jpg';
import bdalton_img from '../assets/leadership_images/bdalton.jpg';
import vgrenon_img from '../assets/leadership_images/vgrenon.jpg';
import rosshess_img from '../assets/leadership_images/rosshess.jpg';
import melissajohnson_img from '../assets/leadership_images/melissajohnson.jpg';
import marclanzkowsky_img from '../assets/leadership_images/marclanzkowsky.jpg';
import michaelletang_img from '../assets/leadership_images/michaelletangv6.jpg';
import stevemac_img from '../assets/leadership_images/stevemacv2.jpg';
import duaneperricelli_img from '../assets/leadership_images/duaneperricelli.jpg';
import richstorey_img from '../assets/leadership_images/richstoreyv3.jpg';


const leaders = {
    '/about/leadership/robert-kauffman/':
        {name:'Robert A. Kauffman',
         image:rkauffman_img,
         occupation:'President', 
        content:
                ['Robert A. Kauffman is president of Healthcare Risk Advisors (HRA), leading the expansion of the company’s self-insurance and risk transfer solutions for large medical practices, hospitals, and health systems. Rob previously served as senior vice president, secretary, and general counsel of FOJP Service Corporation (“FOJP”) and Hospitals Insurance Company (“HIC”).', 
                 'Rob has built a distinguished career in insurance and risk management. Prior to his roles at FOJP and HIC, he was senior vice president, secretary, general counsel, and chief compliance officer at Harleysville Insurance. He was also a partner at Reed Smith, an international law firm specializing in complex litigation, strategic transactions, and regulatory matters.',
                 ' “These ratings from A.M. Best reflect the strength and stability of our company”, said Rob Kauffman, President. “We look forward to providing this same, best imaginable level of service to new clients as we open our program to hospitals and physician groups throughout New York."',
                 'In addition to his private sector experience, Rob served with distinction as an Assistant U.S. Attorney in the Criminal Division of the United States Attorney’s Office for the Eastern District of Pennsylvania.',
                 'Mr. Kauffman earned his Bachelor of Arts and Juris Doctor degrees from the University of Pennsylvania.'
                ],
        },

        '/about/leadership/noeleen-doelger/':
        {name:'Noeleen Doelger',
         image:ndoelger_img,
         occupation:'COO and CFO', 
        content:
                ['Noeleen Doelger has more than 30 years of financial services experience and is the chief operating and financial officer of HRA. Ms. Doelger previously served as senior vice president and chief financial officer of HIC and FOJP and directed the finance, audit, treasury, information technology, and human resources functions.', 
                 'Prior to her roles at HIC and FOJP, Ms. Doelger was a managing director in the global insurance services group of the forensic and litigation consulting practice at FTI Consulting, Inc., a global business advisory firm, and, before that, at Veris Consulting, Inc. Before joining Veris, she was a partner in the management advisory services practice at KPMG, where she began her career.',
                 ' Ms. Doelger’s career has been focused on serving the property-casualty insurance, life and health insurance and reinsurance industries. Her experience includes generally accepted accounting principles (GAAP) and statutory financial reporting, auditing, internal controls assessment, forensic accounting, fraud investigations, and litigation consulting.',
                 'She graduated from St. Peter’s College with a Bachelor of Science degree in accounting. She is a Certified Public Accountant (CPA) and is Certified in Financial Forensics (CFF).',
                ],
        },

        '/about/leadership/david-lfeldman/':
        {name:'David L. Feldman',
         image:dfeldman_img,
         occupation:'SVP and CMO', 
        content:
                ['David L. Feldman, MD, MBA, CPE, FAAPL, FACS, is an experienced healthcare leader, serving for many years as chief medical officer (CMO) of the HIC/FOJP hospitals in New York City. In addition to serving as chief medical officer of The Doctors Company and TDC Group, he is senior vice president and chief medical officer at HRA, a TDC Group company. Under Dr. Feldman’s leadership, HRA provides resources and a collaborative environment designed to minimize claims and lower premiums for HRA clients by preventing patient harm, enhancing teamwork and communication, and improving documentation.', 
                 'Prior to his position at HRA, Dr. Feldman was vice president for patient safety, vice president of perioperative services, and vice chairman of the department of surgery at Maimonides Medical Center in Brooklyn, New York. He implemented numerous patient safety initiatives including the use of the World Health Organization (WHO) Surgical Safety Checklist. As past president of the Maimonides medical staff, Dr. Feldman was instrumental in the creation and implementation of a hospital-wide Code of Mutual Respect, and physician peer review committee.',
                 'Dr. Feldman currently serves on the steering committee of the American College of Surgeons (ACS) for retraining and retooling of practicing surgeons. He served on the ACS committee on perioperative care and as vice chairman of the ACS collaborative task force for the development of high-performance teams in surgery. He also served as the ACS liaison to the Association of periOperative Registered Nurses recommended practices committee.',
                 'Dr. Feldman is a master TeamSTEPPSTM trainer and a certified trainer in Crucial Conversations® and Crucial Confrontations®. He received a Bachelor of Arts degree and Doctor of Medicine degree from Duke University, completed training in general surgery at the Roosevelt Hospital (now Mount Sinai West), and plastic surgery at Duke University Medical Center. He earned a Master of Business Administration degree from New York University.',
                ],
        },

        '/about/leadership/fred-danback/':
        {name:'Fred Danback',
         image:freddanback_img,
         occupation:'SVP and CIO', 
        content:
                ['Fred Danback is senior vice president, chief information officer, and chief information security officer, responsible for HRA’s information technology strategy and operations. Mr. Danback leads the machine learning and artificial intelligence strategy and execution for HRA with a focus on creating industry leading insights to reduce medical malpractice liability and improving patient care.', 
                 'Mr. Danback has over 30 years of experience in the insurance industry. Before joining HRA, Mr. Danback was senior vice president and chief information officer of Tokio Marine Management, the United States operation for Tokio Marine Nichido Fire, a global property and casualty carrier. Earlier, he was managing principal and chief information officer for Integro Insurance Brokers, and served as the head of global technology architecture with XL Capital and NAC Reinsurance.',
                 'Mr. Danback received a Bachelor of Business Administration degree magna cum laude in international management from Pace University. Mr. Danback is a certified information systems security professional having received his CISSP designation.',
                ],
        },

        '/about/leadership/peter-akolbert/':
        {name:'Peter A. Kolbert',
         image:pkolbert_img,
         occupation:'SVP, Claims and Litigation Management', 
        content:
                ['Peter A. Kolbert, JD, is HRA’s senior vice president for claim and litigation services, which manages and oversees the defense aspects of all professional and general liability claims covered by the company. Mr. Kolbert is also the enterprise COVID-19 coordinator responsible for overseeing and coordinating the COVID-19 claims across all the TDC Group strategic business units. He works with HRA’s risk management department helping clients mitigate and prevent losses. Mr. Kolbert also works directly with clients on legal and educational projects to improve risk prevention.', 
                 'Mr. Kolbert joined the company in 2010 after gaining more than 20 years experience defending medical malpractice cases in state and federal courts involving a wide array of medical specialties. As a partner with Wilson Elser, he managed a large volume of medical malpractice litigation from pretrial to trial, while overseeing a team of attorneys in one of the firm’s medical malpractice groups. In concert with his practice, Mr. Kolbert has lectured and published articles on medical malpractice–related topics ranging from informed consent to immunities applicable to COVID-19–related litigation, and from best charting practices to principles of legal risk management.',
                 'Prior to going into private practice, Mr. Kolbert was an assistant corporation counsel representing New York City and its many agencies including the New York Health and Hospitals Corporation, the NYPD, the NYFD, and the New York Board of Education in trying cases to verdict throughout New York City.',
                 'Mr. Kolbert has a Bachelor of Arts degree from the University of Massachusetts and a Juris Doctor degree from Brooklyn Law School. He is a visiting assistant professor for the Department of Medicine at Albert Einstein College of Medicine, Montefiore Medical Center. He also holds a New York State independent insurance adjuster license.'
                ],
        },
        
        '/about/leadership/rich-caldwell/':
        {name:'Rich Caldwell',
         image:richcaldwell_img,
         occupation:'VP, Finance & Underwriting', 
        content:
                ["Rich Caldwell currently serves as HRA's Vice President of Finance and Underwriting. He brings to the company 15 years of experience in the property-casualty insurance industry with a primary focus on medical malpractice.", 
                 'Prior to joining Health Risk Advisors in 2016, Mr. Caldwell was a senior director in the global insurance services group practice at FTI Consulting, Inc., a global business advisory firm.  However, his career began at Veris Consulting, Inc.',
                 'Throughout his career, Mr. Caldwell’s service has focused on property-casualty and life insurance industries. His experience includes healthcare systems underwriting and pricing, financial modeling, statutory financial reporting, forensic accounting, litigation consulting, and internal auditing.',
                 'Mr. Caldwell holds a Bachelor of Business Administration degree in accounting, and a Master of Accounting from the College of William and Mary, Mason School of Business. He is a Certified Public Accountant (CPA) serving on the audit committee of the Visiting Nurse Association Health Group, a non-profit home healthcare provider based in New Jersey.'
                ],
        },

    
    '/about/leadership/brian-dalton/':
        {name:'Brian Dalton',
         image:bdalton_img,
         occupation:'VP, Business Development', 
        content:
                ['Brian Dalton is Vice President of Business Development for the TDC Group of companies (TDC Group) in New York State. Mr. Dalton leads business development efforts in New York and manages the broker distribution network for both the Northeast region and Healthcare Risk Advisors (HRA). He also engages with national brokers to develop opportunities for HRA self-insurance products and serves as the New York liaison between the various business units of TDC Group and common sales channels in New York, and across the country where opportunities may exist for New York.', 
                 'Mr. Dalton began his career in the insurance industry with a New York admitted carrier. He began as an Assistant Director of Human Resources, before later being promoted to Director of Operations and culminating his time as Vice President for the Dental Business. In the latter role, Mr. Dalton oversaw all aspects of the business, during which time he doubled the business in policy count and premium, while improving the loss ratio by over 21 percent. He spent 13 years with this carrier prior to joining The Doctors Company in June 2017 as Assistant Vice President of Business Development.',
                 'Mr. Dalton earned his Bachelor of Arts degree in urban planning and education from Queens College. He went on to earn his Master of Science degree in school counseling from St. John’s University. In addition, Mr. Dalton earned a professional certificate in human resources development from Cornell University’s School of Industrial and Labor Relations.'
                ],
        },

        '/about/leadership/veronique-grenon/':
        {name:'Veronique Grenon',
         image:vgrenon_img,
         occupation:'VP Data Analytics', 
        content:
                ["Veronique Grenon is HRA’s Vice President of Data Analytics. She oversees a team of data scientists and statisticians who work on transforming data into actionable insights, using analytics to solve complex problems, and using technology to innovate the risk management field.", 
                 'Ms. Grenon joins Health Risk Advisors with over 20 years of experience in analytics and actuarial analysis.  Prior to joining the company, she was managing director of global InsurTech research at Guy Carpenter, and a vice president at Stanford Hospital and Clinics, leading the Stanford Risk Management Analytics Team.',
                 'Ms. Grenon is a Fellow of the Casualty Actuarial Society and holds a Bachelor of Science in Actuarial Mathematics from Concordia University, Montréal, Canada.',
                ],
        },
        
        '/about/leadership/ross-hess/':
        {name:'Ross Hess',
         image:rosshess_img,
         occupation:'VP, Underwriting and Physician Service', 
        content:
                ["Ross Hess HRA’s Vice President of Underwriting and Physician Services.  Prior to joining our company, Ross was President of Hess Consulting, LLC, where he provided consulting services to Med-Lantic Management Services, Inc. ", 
                 'Mr. Hess previously served as regional vice president of underwriting for ProAssurance, leading physician underwriting efforts across the Mid-Atlantic, New England, and New York.  His insurance career began at SCPIE, which is now part of The Doctors Company.',
                 'Mr. Hess is a licensed insurance producer and also holds the Chartered Property Casualty Underwriter (CPCU), and Registered Professional Liability Underwriter (RPLU) designations.',
                 "He holds a Bachelor of Arts degree from Georgetown University, and a Master of Arts degree from Syracuse University."
                ],
        },

        '/about/leadership/melissa-johnson/':
        {name:'Melissa Johnson',
         image:melissajohnson_img,
         occupation:'VP, Finance and Controller', 
        content:
                ["Melissa Johnson currently serves as HRA's Vice President of Finance and Controller. She has held many previous positions within the HIC and FOJP finance departments since joining the program in 2005. She brings to the company over 20 years of experience in finance and accounting.", 
                 'Her experience includes statutory financial reporting, audit coordination, and internal controls with a primary focus on medical malpractice insurance.',
                 'Ms. Johnson holds a Bachelor of Science degree in commerce with concentrations in finance, accounting, and economics from the University of Virginia. She is the Treasurer of Pets Alive, a nonprofit animal rescue based in New York. She also serves as Treasurer of the NYC Parks Mounted Auxiliary Unit.',
                ],
        },

        '/about/leadership/marc-lanzkowsky/':
        {name:'Marc Lanzkowsky',
         image:marclanzkowsky_img,
         occupation:'VP, Claims Operations', 
        content:
                ["Marc Lanzkowsky, JD, is HRA’s vice president of claims operations. He oversees claims administration, litigation management, investigations, and claims coding teams. Mr. Lanzkowsky helps drive the long-term strategic vision in support of the professional and liability claims professionals, and also helps to innovate claims data, and technology to lead our organization to claims operational excellence.", 
                 'After more than 25 years in the insurance industry, Mr. Lanzkowsky joined the company in 2021. His career began serving as a litigator in defending Long Island doctors and hospitals.  His pivot to insurance started with medical malpractice claims at Zurich North America where he held the positions of medical malpractice claims examiner, northeast regional claims manager for healthcare, and the director of operational innovation for the specialty claims group.',
                 'Mr. Lanzkowsky served as senior vice president of home office claims for Arch Insurance where, from its inception, he helped build the claims operations including the development of innovative claims technology, litigation management protocols, and claims administration.',
                 "Following his time at Arch Insurance, Mr. Lanzkowsky started his own claims consultancy. Next, he was managing director in the global insurance services group at FTI Consulting, Inc., a forensic and litigation consulting practice. He focused on assisting his clients to innovate and improve their claims organizations.",
                 "His most recent role was executive director of operations and administration for a small brokerage where he modernized their infrastructure, overseeing customer service, compliance, business continuity, information technology, and administration.",
                 "Mr. Lanzkowsky holds a Bachelor of Arts degree from New York University and a Juris Doctor degree from Pace University School of Law."
                ],
        },

        '/about/leadership/michael-letang/':
        {name:'Michael LeTang',
         image:michaelletang_img,
         occupation:'VP, Claims Operations', 
        content:
                ["Michael LeTang is a highly accomplished and experienced healthcare professional with over 20 years of experience in nursing and possesses a wealth of knowledge and expertise in the field.", 
                 "Prior to joining HRA, Mr. LeTang was Associate Director of Nursing Informatics at Memorial Sloan Kettering Cancer Center in New York City. He led and implemented numerous patient safety and care quality initiatives by leveraging innovative technical solutions and clinical system integrations. He has a Master's Degree and board certifications in nursing informatics and critical care nursing, and he is an adjunct professor at NYU in the graduate nursing informatics program. He was a finalist for the Nurse.com GEM Award for excellence in clinical nursing in 2016.",
                 "Specializing in critical care, post-anesthesia, and surgical nursing, Mr. LeTang has spent over seven years as a nursing informatics leader. Receiving multiple research grants and awards, he’s published work on leveraging technology to improve postoperative communication in patients undergoing head and neck surgery.",
                 "Mr. LeTang utilizes a data- and user-centered approach to improve care quality and minimize risk by integrating disparate clinical systems and implementing innovative solutions that support clinician workflow and operational requirements.",
                ],
        },
        
        '/about/leadership/steve-macaluso/':
        {name:'Steve Macaluso',
         image:stevemac_img,
         occupation:'VP, Client Management', 
        content:
                ["Steven Macaluso is Vice President, Client Management, at HRA. His role includes handling a wide array of contract, risk management, and coverage-related matters. In particular, Mr. Macaluso provides detailed insurance reviews of construction projects to achieve proper transfer of construction risk for HRA program hospitals and other clients.", 
                 "Prior to his current position at HRA, Mr. Macaluso was Vice President for Agency Services and Associate General Counsel of FOJP Services Corporation, which followed an in-house counsel position at Montefiore Medical Center and private law firm practice that included representation of hospitals and other healthcare entities.",
                 "Mr. Macaluso earned his Bachelor of Arts and Juris Doctor degrees from Harvard University.",
                ],
        },


        '/about/leadership/duane-perricelli/':
        {name:'Duane Perricelli',
         image:duaneperricelli_img,
         occupation:'Vice President, Insurance Services', 
        content:
                ["Duane Perricelli is HRA’s Vice President for Insurance Services. He is an insurance executive responsible for the risk identification and placement of domestic and international programs. In this role, he optimizes coverage, costs, and claim settlements, meeting risk transfer strategies for hospitals, long-term care, and social service clients.", 
                 "Mr. Perricelli directs the department’s risk management information system that manages client exposure and the certificate database. This ensures compliance with policies, terms, and conditions.  He directly manages the healthcare systems for two of our largest portfolios encompassing risk management and advisory services working with the hospital’s risk and finance teams.",
                 "Before joining Health Risk Advisors, much of Mr. Perricelli’s career was spent at top-tiered brokers such as Marsh & McLennan and Alliant with large account management and sales operations leadership roles, respectively.",
                 "He holds a Bachelor of Science from Fairleigh Dickenson University."
                ],
        },

        '/about/leadership/rich-storey/':
        {name:'Rich Storey',
         image:richstorey_img,
         occupation:'VP, Claim and Administration', 
        content:
                ["Rich Storey currently serves as HRA’s Vice President of Claim and Administration. His current responsibilities include claim operations, as well as oversight of the legal billing, regulatory reporting, and claim investigation teams.", 
                 "Prior to joining the company in 2005, Mr. Storey spent his career in the property-casualty insurance industry working for The Hanover Insurance Group and The Hartford, a Fortune 500 investment and insurance company. In his role at The Hartford, Rich was responsible for providing leadership oversight of claim operations located in Rockaway, NJ; Mount Lake Terrace, WA; and Lake Mary, FL.",
                 "His career experience spans claim management, legal case resolution, data governance/analytics, regulatory compliance, performance management, and internal claim and financial auditing.",
                 "Mr. Storey holds a Bachelor of Science degree in Business Management and a Master of Business Administration degree in Business Studies from The William Paterson University of New Jersey, Cotsakos College of Business."
                ],
        },
        
        

        
                }

function LeadershipDetails() {
    
        const [location, setLocation] = useState('')
    
    
        //gets current route (/risk-manger/med-mal)
        useEffect(() => {
            setLocation(window.location.href.split(window.location.origin)[1])
        
            }, [])
    
        //sets location state to current route and calls mockSignIn function
        
        
        
    return (
        <div className='pt-[103px]'>
        <div className="relative overflow-hidden bg-white py-16">
     <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full lg:[overflow-anchor:none]">
    
     </div>
     <div className="relative px-6 lg:px-8">
       <div className="mx-auto w-2/3 text-lg flex flex-col">
        <div className="flex flex-col items-center justify-center"><img src={leaders[location]?.image} className="h-150 w-191"></img></div>
        
       <h3 className="mt-6 text-3xl font-bold  text-center leading-8 tracking-tight text-gray-900 sm:text-4xl">{leaders[location]?.name}</h3>
       <h4 className="text-md  text-center leading-8 tracking-tight text-gray-600 sm:text-md">{leaders[location]?.occupation}</h4>

       {
        leaders[location]?.content.map((item, index) => {
            return (
                <p className="mt-8 text-xl leading-8 text-gray-500">{item}</p>
            )
        })
       }
  
        
       </div>
  
       
  
     </div>
   </div>
       <Navbar/>  
    
  <Footer/>
   </div>
    
    )
    }
    
    export default LeadershipDetails