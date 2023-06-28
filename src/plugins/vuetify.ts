import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

const icons = {
    defaultSet: 'mdi',
    aliases,
    sets: {
        mdi
    }
}

export default createVuetify({
    components,
    directives
})