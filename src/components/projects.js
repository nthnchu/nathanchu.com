import * as React from 'react'
import styles from '../css/projects.module.css'
import { Card, ImageCard } from './cards'
import { StaticImage } from 'gatsby-plugin-image'
import { aProps } from '../utilities'

const projects = [
  {
    title: 'My Website',
    website: 'https://nathanchu.com/',
    repo: 'nathanchu/website',
    description: "The website you're looking at right now! It's built using Gatsby, and hosted on Vercel. It's highly customizable if you want to do that, too!",
    image: <StaticImage src="../images/projects/website.png" />
  },
  {
    title: 'Weather App',
    repo: 'Ryyn-Sd/weather',
    website: 'https://weather.rayyansaidi.com/',
    description: "A weather app I worked on using openweathermap and React. It detects your location through your ip, but also allows you to change your zip code.",
    image: <StaticImage src="../images/projects/weather.png" />
  }
]

const Projects = () => {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      {
        projects.map(({title, repo, website, description, image}) => (
          <div className={styles.project}>
            <Card>
              <h2><a {...aProps} href={website}>{title}</a> (<a {...aProps} href={`https://github.com/${repo}`}>{repo}</a>)</h2>
              <br />
              <p>{description}</p>
            </Card>
            <ImageCard><a {...aProps} href={website}>{image}</a></ImageCard>
          </div>
        ))
      }
    </div>
  )
}

export default Projects
