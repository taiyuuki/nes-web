import { red, yellow, green } from 'kolorist'

export const info = function (str: string) {
    console.log(green(str))
}

export const warn = function (str: string) {
    console.log(yellow(str))
}

export const error = function (str: string) {
    console.log(red(str))
    process.exit(0)
}

export const nestLine = function () {
    console.log()
}

export default {
    info, warn, error,
}
