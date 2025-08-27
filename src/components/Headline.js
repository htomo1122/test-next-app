import styles from '@/styles/Home.module.css'

export default function Headline(props) {
  return (
    <div>
      <h1 class="title">{props.page} Page</h1>
      <ol>
        <li>
          Get started by editing <code>src/pages/{props.page}.js</code>.
        </li>
        <li>Save and see your changes instantly.</li>
        <li>Hello!!</li>
      </ol>
    </div>
  )
}
