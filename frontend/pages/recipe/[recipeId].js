import { useRouter } from 'next/router'

export default function Page() {
  const router = useRouter()
  const recipeId = router.query.recipeId

  return <>
    TODO: Show recipe with id {recipeId}
  </>
}

