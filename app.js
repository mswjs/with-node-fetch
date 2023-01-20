/**
 * @note I'm using "node-fetch@2" because v3 ships as ESM only,
 * which Jest doesn't support right now. You may be able to use
 * it with other testing frameworks, like Vite. This doesn't affect
 * the API mocking in any way, it's about module distribution.
 */
import fetch from 'node-fetch'

export async function fetchUser() {
  const res = await fetch('https://example.com/user')
  return res.json()
}
