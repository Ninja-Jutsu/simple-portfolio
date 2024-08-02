
import Image from 'next/image'
import Book_it_1 from '../../public/projects/book-it-1.png'
import Book_it_2 from '../../public/projects/book-it-2.png'
import Trace_it_1 from '../../public/projects/trace-it-1.png'
import Trace_it_2 from '../../public/projects/trace-it-2.png'
import styles from '../styles/components/ProjectsSection.module.scss'

import Button from './Button'
import SectionHeader from './SectionHeader'
import SkillTag from './SkillTag'


function ProjectsSection() {
  function openLinkInNewTab(link) {
    window.open(link, '_blank')
  }

  return (
    <div className={styles.container}>
      <SectionHeader
        title='Featured Projects'
        align='left'
      />
      <div className={styles.projectsContainer}>
        <div
          key='Book-it'
          className={styles.projectWrapper}
        >
          <div className={styles.imagesWrapper}>
            <Image
              className={styles.desktopOnly}
              src={Book_it_2}
              alt='Preview pic'
              style={{ width: '100%' }}
            />
            <Image
              className={styles.desktopOnly}
              src={Book_it_1}
              alt='Preview pic'
              style={{ width: '100%' }}
            />
          </div>

          <div className={styles.projectDetails}>
            <h1>Book-it</h1>

            <div className={styles.skillsContainer}>
              {['NextJS', 'React', 'MySQL', 'TypeScript', 'Supabase', 'Stripe', 'Prisma'].map((tool) => {
                return (
                  <SkillTag
                    key={tool}
                    skillName={tool}
                  />
                )
              })}
            </div>
            <p>
              A Booking service built using Next.js 14. This web application is responsive and suitable for all devices.
              Blazing fast, this app is built with statically generated pages from pre-fetched, optimized API data using
              NextJS.
            </p>

            <div className={styles.buttonsWrapper}>
              <Button
                onClick={() => {
                  openLinkInNewTab('https://github.com/Ninja-Jutsu/Book-it')
                }}
                type='button'
                text='Review the code'
                isPrimary={false}
              ></Button>

              <Button
                onClick={() => {
                  openLinkInNewTab('https://book-it-iota.vercel.app/')
                }}
                type='button'
                text='See it live'
                isPrimary
              ></Button>
            </div>
          </div>
        </div>
      </div>

      {/* Second project */}
      <div className={styles.projectsContainer}>
        <div
          key='Trace-it'
          className={styles.projectWrapper}
        >
          <div className={styles.imagesWrapper}>
            <Image
              className={styles.desktopOnly}
              src={Trace_it_2}
              alt='Preview pic'
              style={{ width: '100%' }}
            />
            <Image
              className={styles.desktopOnly}
              src={Trace_it_1}
              alt='Preview pic'
              style={{ width: '100%' }}
            />
          </div>

          <div className={styles.projectDetails}>
            <h1>Trace-it</h1>

            <div className={styles.skillsContainer}>
              {['NextJS', 'React', 'Radix UI', 'Next Auth', 'MySQL', 'TypeScript', 'Supabase', 'Stripe', 'Prisma'].map(
                (tool) => {
                  return (
                    <SkillTag
                      key={tool}
                      skillName={tool}
                    />
                  )
                }
              )}
            </div>
            <p>
              An Issue Tracker built using NextJs 14, it allows the users to create projects and Issues to solve. Issues
              can be assigned to a specific user. This web application is responsive and suitable for all devices. A
              Booking service built using Next.js 14. This web application is responsive and suitable for all devices.
              optimized using NextJS Power.
            </p>

            <div className={styles.buttonsWrapper}>
              <Button
                onClick={() => {
                  openLinkInNewTab('https://github.com/Ninja-Jutsu/trace-it-v2')
                }}
                type='button'
                text='Review the code'
                isPrimary={false}
              ></Button>

              <Button
                onClick={() => {
                  openLinkInNewTab('https://trace-it-v2.vercel.app/')
                }}
                type='button'
                text='See it live'
                isPrimary
              ></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsSection
