import {
    configureStore
} from '@reduxjs/toolkit'

import mailsReducer from './mailsSlice'

export default configureStore({
    reducer: {
        mails: mailsReducer,
    },
})