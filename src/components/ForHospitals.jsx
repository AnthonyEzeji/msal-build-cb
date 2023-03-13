import React from 'react'
import {VscPerson} from 'react-icons/vsc'
import {
    ArrowPathIcon,
    Bars3Icon,
    BookmarkSquareIcon,
    CalendarIcon,
    ChartBarIcon,
    CursorArrowRaysIcon,
    LifebuoyIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    Squares2X2Icon,
    XMarkIcon,
    BuildingOffice2Icon
  } from '@heroicons/react/24/outline'
  import {
    Link
  } from "react-router-dom";
  import { ChevronDownIcon, UserCircleIcon } from '@heroicons/react/20/solid'
  import { AiFillInsurance, AiOutlineMedicineBox } from 'react-icons/ai';
  import {BsBoxArrowInRight, BsFileText} from 'react-icons/bs'
function ForHospitals() {
  return (
    <div class="overflow-hidden ">
    <div class="mx-auto max-w-7xl bg-slate-100 py-24 px-6 sm:py-32 lg:px-8 lg:py-10">
      <svg class="absolute top-0 left-full -translate-x-1/2 -translate-y-3/4 transform lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4 " width="404" height="784" fill="none" viewBox="0 0 404 784" aria-hidden="true">
        <defs>
          <pattern id="8b1b5f72-e944-4457-af67-0c6d15a99f38" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="4" height="4" class="text-red-300" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="404" height="784" fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
      </svg>
  
      <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-12 xl:gap-x-16">
        <div class="lg:col-span-1">
          <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Solutions for Hospitals</h2>
        </div>
        <dl class="mt-20 grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-x-12 lg:col-span-2 lg:mt-0">
          <div>
            <dt>
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                {/*<!-- Heroicon name: outline/globe-alt -->*/}
               <ChartBarIcon className="h-8 w-8"/>
              </div>
              <p class="mt-6 text-lg font-semibold leading-8 text-gray-900">Analytics</p>
            </dt>
            <dd class="mt-2 text-base text-gray-600">Leveraging claims, risk, and clinical data in support of patient safety initiatives.</dd>
          </div>
  
          <div>
            <dt>
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                {/*<!-- Heroicon name: outline/scale -->*/}
                <CursorArrowRaysIcon className="h-8 w-8"/>
              </div>
              <p class="mt-6 text-lg font-semibold leading-8 text-gray-900">Risk Management</p>
            </dt>
            <dd class="mt-2 text-base text-gray-600">Education, training, and risk management best practices.</dd>
          </div>
  
          <div>
            <dt>
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                {/*<!-- Heroicon name: outline/bolt -->*/}
                <ShieldCheckIcon className="h-8 w-8"/>
              </div>
              <p class="mt-6 text-lg font-semibold leading-8 text-gray-900">Risk Transfer</p>
            </dt>
            <dd class="mt-2 text-base text-gray-600">Professional and General Liability Coverage.</dd>
          </div>
  
          <div>
            <dt>
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                {/*<!-- Heroicon name: outline/envelope -->*/}
                <Squares2X2Icon className="h-8 w-8"/>
              </div>
              <p class="mt-6 text-lg font-semibold leading-8 text-gray-900">Claims and Litigation</p>
            </dt>
            <dd class="mt-2 text-base text-gray-600">Over 30 years experience handling hospital claims.</dd>
          </div>
          <div>
            <dt>
              <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500 text-white">
                {/*<!-- Heroicon name: outline/envelope -->*/}
                <VscPerson className="h-8 w-8"/>
              </div>
              <p class="mt-6 text-lg font-semibold leading-8 text-gray-900">Self Insurance</p>
            </dt>
            <dd class="mt-2 text-base text-gray-600">Design, setup and self-insurance administration services​.</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
  )
}

export default ForHospitals