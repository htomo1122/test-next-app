import Image from 'next/image'
import classes from './Main.module.css'
import { Links } from '@/components/Links'
import { Headline } from '@/components/Headline'

export function Main(props) {
  return (
    <main className={classes.main}>
      <Image
        className={classes.logo}
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <Headline page={props.page}>
        <code>src/pages/{props.page}.js</code>
      </Headline>

      <Links />
    </main>
  )
}
