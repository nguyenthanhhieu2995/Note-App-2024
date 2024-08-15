import { useRouteError } from "react-router-dom"

interface Error {
  statusText?: string
  message?: string
}

function ErrorPage() {
  const error = useRouteError() as Error
  console.log(error)
  return (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p><i>{error.statusText || error.message}</i></p>
    </div>
  )
}

export default ErrorPage