import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"

const SERVER_PORT = 4321;
const LOCALHOST_URL = `http://localhost:${SERVER_PORT}`
const LIVE_URL = "https://agslz.github.io";


export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  server: {port: SERVER_PORT},
  site: LIVE_URL
})
