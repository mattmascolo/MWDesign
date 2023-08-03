import { BeakerIcon, ComputerDesktopIcon, TrashIcon, UsersIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Personalized Design',
    description:
      'We tailor our design process to your unique needs, ensuring your website not only looks great but also serves your business goals.',
    href: '#',
    icon: ComputerDesktopIcon,
  },
  {
    name: 'Collaborative Approach',
    description:
      'Our dedicated team collaborates with you every step of the way, turning your vision into a reality with a client-focused design approach.',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: 'Future-Ready Websites',
    description:
      'We build websites with the future in mind, ensuring they are adaptable, scalable, and able to grow with your business needs.',
    href: '#',
    icon: BeakerIcon,
  },
]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32" id='approach'>
      <div className="mx-auto max-w-7xl px-3">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Our Unique Approach
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Discover the distinguishing elements of our web design and development process. We&aposre committed to providing personalized, collaborative, and future-focused solutions tailored to your business needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                  <p className="mt-6">
                    <a href={feature.href} className="text-sm font-semibold leading-6 text-blue-600">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
