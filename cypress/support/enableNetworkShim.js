import NetworkShim from './NetworkShim.js'
import { isDisabledMode, isCaptureMode, getApiBaseUrl } from './utils.js'
import visitWithUnfetchOverwriteFn from './visitWithUnfetchOverwriteFn.js'

export function enableNetworkShim(hosts = [getApiBaseUrl()]) {
    // Replace window.fetch with unfetch, which uses XHR and cypress can work with this
    Cypress.Commands.overwrite('visit', visitWithUnfetchOverwriteFn)

    // No need to stub anything when disabled
    if (isDisabledMode()) {
        return
    }

    const networkShim = new NetworkShim(hosts)

    before(() => {
        if (isCaptureMode()) {
            networkShim.initCaptureMode()
        } else {
            networkShim.initStubMode()
        }
    })

    beforeEach(() => {
        if (isCaptureMode()) {
            networkShim.captureRequestsAndResponses()
        } else {
            networkShim.createStubRoutes()
        }
    })

    after(() => {
        if (isCaptureMode()) {
            networkShim.writeFile()
        }
    })
}
