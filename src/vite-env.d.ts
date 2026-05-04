// vite.config.ts – helyes beállítás custom domainhez
export default defineConfig({
  base: "/",          // ← custom domainnel ez kell, NEM a repo neve
  plugins: [react()],
  // ...
})
