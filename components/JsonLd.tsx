import React from 'react'

export function JsonLd() {
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'Raji Tuition Centre',
    'alternateName': 'Raji Tuition Classes Tuticorin',
    'url': 'https://rajituitioncentre.com',
    'logo': 'https://rajituitioncentre.com/RTC%20Logo.png',
    'image': 'https://rajituitioncentre.com/raji-students.png',
    'description': 'Raji Tuition Centre is a tuition centre in Tuticorin offering personalised tuition classes from LKG to 12th Standard with individual attention, regular tests and concept-based learning.',
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': 'Tuticorin',
      'addressRegion': 'Tamil Nadu',
      'addressCountry': 'IN'
    },
    'geo': {
      '@type': 'GeoCoordinates',
      'latitude': '8.7642',
      'longitude': '78.1348'
    },
    'telephone': '+918940868181',
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        'opens': '17:30',
        'closes': '21:00'
      }
    ],
    'hasOfferCatalog': {
      '@type': 'OfferCatalog',
      'name': 'School Tuition Courses',
      'itemListElement': [
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Course',
            'name': 'LKG to 5th Standard Primary Tuition',
            'description': 'Simple, engaging and concept-based learning to build strong academic foundations.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Course',
            'name': '6th to 8th Standard Middle School Tuition',
            'description': 'Strengthen core concepts across school subjects with regular practice and personalised guidance.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Course',
            'name': '9th & 10th Standard Secondary Tuition in Tuticorin',
            'description': 'Focused 10th Standard tuition in Tuticorin with regular assessments and examination preparation.'
          }
        },
        {
          '@type': 'Offer',
          'itemOffered': {
            '@type': 'Course',
            'name': '11th & 12th Standard Higher Secondary Tuition in Tuticorin',
            'description': 'Subject-focused academic guidance and 12th Standard tuition in Tuticorin for board exams.'
          }
        }
      ]
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  )
}
