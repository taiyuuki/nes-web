import tky from '@taiyuuki/eslint-config'

export default tky({
    ts: true,
    vue: true,
    rules: {
        "no-undef": "off",
    },
    ignores: ['**/*.scss']
})
