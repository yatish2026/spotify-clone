import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/spotify-clone/', // <--- ADD THIS LINE
    plugins: [react()],
})