import React from 'react'

export const metadata = {
    title: 'Toluks | All Hausa Dishes',
    description: 'Hausa food recipes across Nigeria',
  }

export default function layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}