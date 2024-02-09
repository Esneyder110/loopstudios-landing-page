import { type FC } from 'react'

import { Links } from './links'
import { Socials } from './socials'

export const Footer: FC = () => {
  return (
    <footer className="px-6 lg:px-40 py-12 lg:py-7 flex flex-col lg:flex-row gap-12 justify-center lg:justify-between items-center bg-accentPrimary text-primary">
      {/* links */}
      <Links />
      {/* socials */}
      <Socials />
    </footer>
  )
}
