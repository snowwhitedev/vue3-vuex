import { createStore } from 'vuex'
// import createLogger from 'vuex/dist/logger'
import journey from './journey'

// const debug = process.env.NODE_ENV !== 'production'
// const plugins = debug ? [createLogger({})] : []

export default createStore({
  modules: {
    journey
  }
})
