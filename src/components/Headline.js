import styles from '@/styles/Home.module.css'

export function Headline(props) {
  return (
    <div>
      <h1 class="title">{props.page} Page</h1>
      <ol>
        <li>Get started by editing. {props.children}</li>
        <li>Save and see your changes instantly.</li>
        <li>Hello!!</li>
      </ol>
    </div>
  )
}
