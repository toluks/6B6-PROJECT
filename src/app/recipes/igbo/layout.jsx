import React from 'react'

export const metadata = {
    title: 'Toluks | All Igbo Dishes',
    description: 'Igbo food recipes across Nigeria',
  }

export default function layout({children}) {
  return (
    <div>
        {children}
    </div>
  )
}