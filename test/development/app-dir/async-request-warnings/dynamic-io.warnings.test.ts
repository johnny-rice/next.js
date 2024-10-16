import { nextTestSetup } from 'e2e-utils'

describe('dynamic-requests warnings', () => {
  const { next } = nextTestSetup({
    files: __dirname,
  })

  it('warnings on sync cookie access', async () => {
    const nextDevBootstrapOutputIndex = next.cliOutput.length

    const browser = await next.browser('/request/cookies')

    const browserLogsserLogs = await browser.log()
    const browserConsoleErrors = browserLogsserLogs
      .filter((log) => log.source === 'error')
      .map((log) => log.message)
    const terminalOutput = next.cliOutput.slice(nextDevBootstrapOutputIndex)
    const terminalCookieErrors = terminalOutput.split('\n').filter((line) => {
      return line.includes('In route /request/cookies')
    })
    expect({ browserConsoleErrors, terminalCookieErrors }).toEqual({
      browserConsoleErrors: [
        expect.stringContaining(
          "In route /request/cookies a cookie property was accessed directly with `cookies().get('page')`."
        ),
        expect.stringContaining(
          "In route /request/cookies a cookie property was accessed directly with `cookies().get('component')`."
        ),
        expect.stringContaining(
          "In route /request/cookies a cookie property was accessed directly with `cookies().has('component')`."
        ),
        expect.stringContaining(
          'In route /request/cookies cookies were iterated over'
        ),
      ],
      terminalCookieErrors: [
        expect.stringContaining(
          "In route /request/cookies a cookie property was accessed directly with `cookies().get('page')`."
        ),
        expect.stringContaining(
          "In route /request/cookies a cookie property was accessed directly with `cookies().get('component')`."
        ),
        expect.stringContaining(
          "In route /request/cookies a cookie property was accessed directly with `cookies().has('component')`."
        ),
        expect.stringContaining(
          'In route /request/cookies cookies were iterated over'
        ),
      ],
    })
  })

  it('warnings on sync draftMode access', async () => {
    const nextDevBootstrapOutputIndex = next.cliOutput.length

    const browser = await next.browser('/request/draftMode')

    const browserLogsserLogs = await browser.log()
    const browserConsoleErrors = browserLogsserLogs
      .filter((log) => log.source === 'error')
      .map((log) => log.message)
    const terminalOutput = next.cliOutput.slice(nextDevBootstrapOutputIndex)
    const terminalCookieErrors = terminalOutput.split('\n').filter((line) => {
      return line.includes('In route /request/draftMode')
    })
    expect({ browserConsoleErrors, terminalCookieErrors }).toEqual({
      browserConsoleErrors: [
        expect.stringContaining(
          'In route /request/draftMode a `draftMode()` property was accessed directly with `draftMode().isEnabled`.'
        ),
        expect.stringContaining(
          'In route /request/draftMode a `draftMode()` property was accessed directly with `draftMode().isEnabled`.'
        ),
        expect.stringContaining(
          'In route /request/draftMode a `draftMode()` property was accessed directly with `draftMode().enable()`.'
        ),
        expect.stringContaining(
          'In route /request/draftMode a `draftMode()` property was accessed directly with `draftMode().isEnabled`.'
        ),
      ],
      terminalCookieErrors: [
        expect.stringContaining(
          'In route /request/draftMode a `draftMode()` property was accessed directly with `draftMode().isEnabled`.'
        ),
        expect.stringContaining(
          'In route /request/draftMode a `draftMode()` property was accessed directly with `draftMode().isEnabled`.'
        ),
        expect.stringContaining(
          'In route /request/draftMode a `draftMode()` property was accessed directly with `draftMode().enable()`.'
        ),
        expect.stringContaining(
          'In route /request/draftMode a `draftMode()` property was accessed directly with `draftMode().isEnabled`.'
        ),
      ],
    })
  })

  it('warnings on sync headers access', async () => {
    const nextDevBootstrapOutputIndex = next.cliOutput.length

    const browser = await next.browser('/request/headers')

    const browserLogsserLogs = await browser.log()
    const browserConsoleErrors = browserLogsserLogs
      .filter((log) => log.source === 'error')
      .map((log) => log.message)
    const terminalOutput = next.cliOutput.slice(nextDevBootstrapOutputIndex)
    const terminalCookieErrors = terminalOutput.split('\n').filter((line) => {
      return line.includes('In route /request/headers')
    })
    expect({ browserConsoleErrors, terminalCookieErrors }).toEqual({
      browserConsoleErrors: [
        expect.stringContaining(
          "In route /request/headers a header property was accessed directly with `headers().get('page')`."
        ),
        expect.stringContaining(
          "In route /request/headers a header property was accessed directly with `headers().get('component')`."
        ),
        expect.stringContaining(
          "In route /request/headers a header property was accessed directly with `headers().has('component')`."
        ),
        expect.stringContaining(
          'In route /request/headers headers were iterated over'
        ),
      ],
      terminalCookieErrors: [
        expect.stringContaining(
          "In route /request/headers a header property was accessed directly with `headers().get('page')`."
        ),
        expect.stringContaining(
          "In route /request/headers a header property was accessed directly with `headers().get('component')`."
        ),
        expect.stringContaining(
          "In route /request/headers a header property was accessed directly with `headers().has('component')`."
        ),
        expect.stringContaining(
          'In route /request/headers headers were iterated over'
        ),
      ],
    })
  })

  it('warnings on sync params access', async () => {
    const nextDevBootstrapOutputIndex = next.cliOutput.length

    const browser = await next.browser('/request/params/[slug]')

    const browserLogsserLogs = await browser.log()
    const browserConsoleErrors = browserLogsserLogs
      .filter((log) => log.source === 'error')
      .map((log) => log.message)
    const terminalOutput = next.cliOutput.slice(nextDevBootstrapOutputIndex)
    const terminalCookieErrors = terminalOutput.split('\n').filter((line) => {
      return line.includes('In route /request/params/[slug]')
    })
    expect({ browserConsoleErrors, terminalCookieErrors }).toEqual({
      browserConsoleErrors: [
        expect.stringContaining(
          'In route /request/params/[slug] a param property was accessed directly with `params.slug`.'
        ),
        expect.stringContaining(
          'In route /request/params/[slug] a param property was accessed directly with `params.slug`.'
        ),
        expect.stringContaining(
          'In route /request/params/[slug] a param property was accessed directly with `params.slug`.'
        ),
        expect.stringContaining(
          'In route /request/params/[slug] params are being enumerated'
        ),
      ],
      terminalCookieErrors: [
        expect.stringContaining(
          'In route /request/params/[slug] a param property was accessed directly with `params.slug`.'
        ),
        expect.stringContaining(
          'In route /request/params/[slug] a param property was accessed directly with `params.slug`.'
        ),
        expect.stringContaining(
          'In route /request/params/[slug] a param property was accessed directly with `params.slug`.'
        ),
        expect.stringContaining(
          'In route /request/params/[slug] params are being enumerated'
        ),
      ],
    })
  })

  it('warnings on sync searchParams access', async () => {
    const nextDevBootstrapOutputIndex = next.cliOutput.length

    const browser = await next.browser('/request/searchParams')

    const browserLogsserLogs = await browser.log()
    const browserConsoleErrors = browserLogsserLogs
      .filter((log) => log.source === 'error')
      .map((log) => log.message)
    const terminalOutput = next.cliOutput.slice(nextDevBootstrapOutputIndex)
    const terminalCookieErrors = terminalOutput.split('\n').filter((line) => {
      return line.includes('In route /request/searchParams')
    })
    expect({ browserConsoleErrors, terminalCookieErrors }).toEqual({
      browserConsoleErrors: [
        expect.stringContaining(
          'In route /request/searchParams a searchParam property was accessed directly with `searchParams.slug`.'
        ),
        expect.stringContaining(
          'In route /request/searchParams a searchParam property was accessed directly with `searchParams.slug`.'
        ),
        expect.stringContaining(
          'In route /request/searchParams a searchParam property was accessed directly with `searchParams.slug`.'
        ),
        expect.stringContaining(
          'In route /request/searchParams searchParams are being enumerated'
        ),
      ],
      terminalCookieErrors: [
        expect.stringContaining(
          'In route /request/searchParams a searchParam property was accessed directly with `searchParams.slug`.'
        ),
        expect.stringContaining(
          'In route /request/searchParams a searchParam property was accessed directly with `searchParams.slug`.'
        ),
        expect.stringContaining(
          'In route /request/searchParams a searchParam property was accessed directly with `searchParams.slug`.'
        ),
        expect.stringContaining(
          'In route /request/searchParams searchParams are being enumerated'
        ),
      ],
    })
  })
})
