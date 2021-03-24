
const mobileScreen = 767
const tabScreen = 1024

export const IS_MOBILE_SCREEN = `@media only screen and (max-width:${mobileScreen}px)`
export const IS_TAB_SCREEN = `@media only screen and (min-width:${mobileScreen}px) and (max-width:${tabScreen}px)`
export const IS_DESKTOP_SCREEN = `@media only screen and (min-width:${mobileScreen}px)`