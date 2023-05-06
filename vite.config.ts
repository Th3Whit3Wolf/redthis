import solid from "solid-start/vite";
import { defineConfig } from "vite";
import Icons from 'unplugin-icons/vite'

export default defineConfig({
  plugins: [
    solid({
      ssr: true
    }),
    Icons({ 
      compiler: 'solid' 
  })
  ],
  ssr: {
    noExternal: ["@kobalte/core"],
  }
});
