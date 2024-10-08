'use client'

import { experimental_useFormState } from 'react-dom'
import { appendName } from './actions'
import { useEffect, useState } from 'react'

export default function Page() {
  const [state, appendNameFormAction] = experimental_useFormState(
    appendName,
    'initial-state'
  )

  const [hydrated, setHydrated] = useState(false)
  useEffect(() => {
    setHydrated(true)
  }, [])

  return (
    <>
      <form id="form-state-form" action={appendNameFormAction}>
        <p id="form-state">{state}</p>
        <input id="name-input" name="name" />
        <button id="submit-form" type="submit">
          log
        </button>
      </form>
      {hydrated ? <p id="hydrated">hydrated</p> : null}
    </>
  )
}
