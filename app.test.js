import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { fetchUser } from './app'

const server = setupServer(
  /**
   * @note Here I"m describing which request to capture.
   * This is the resource that my "fetchUser" if requesting.
   */
  rest.get('https://example.com/user', (req, res, ctx) => {
    return res(
      // Here, I'm returning a mocked JSON response.
      ctx.json({
        name: 'John',
      })
    )
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

test('fetches resource from the server', async () => {
  // Finally, execute the function and assert the returned response.
  // Note that no actual network requests will be made despite us
  // not changing/stubbing/touching the "fetchUser" function in any way.
  expect(await fetchUser()).toEqual({
    name: 'John',
  })
})
