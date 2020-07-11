// Utilities
import {
    camelCase,
    upperFirst,
} from 'lodash'

// eslint-disable-next-line space-before-function-paren
export default function(sections = []) {
    return {
        name: 'LoadSections',

        // Iterates the provide list of components
        // and returns a function that returns a
        // Promise.
        components: sections.reduce((acc, cur) => {
            const name = upperFirst(camelCase(cur))
            acc[`Section${name}`] = () =>
                // eslint-disable-next-line func-call-spacing
                import (`@/views/sections/${name}.vue`)
            return acc
        }, {}),

        data: () => ({ sections }),
    }
    // eslint-disable-next-line eol-last
}