import { Button } from "../../../button"

export const DesktopNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/save-user">
            <Button buttonType="secondary" label="Crie seu projeto" />
          </a>
        </li>
      </ul>
    </nav>
  )
}
