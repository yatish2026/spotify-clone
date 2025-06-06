import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: '/spotify-clone/', // 👈 Add this line
    plugins: [react()],
})