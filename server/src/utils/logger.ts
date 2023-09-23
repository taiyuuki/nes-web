import { red, yellow, green } from 'kolorist'

const info = function (str: string) {
    console.log(green(str))
}

const warn = function (str: string) {
    console.log(yellow(str))
}

const error = function (str: string) {
    console.log(red(str))
    process.exit(0)
}

const nestLine = function () {
    console.log()
}

export {
    info,
    warn,
    error,
    nestLine,
}
