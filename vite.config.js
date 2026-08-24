import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        fredericksburg: resolve(__dirname, "private-chef-fredericksburg-va/index.html"),
        stafford: resolve(__dirname, "private-chef-stafford-va/index.html"),
        spotsylvania: resolve(__dirname, "private-chef-spotsylvania-va/index.html"),
        lakeAnna: resolve(__dirname, "private-chef-lake-anna-va/index.html"),
        northernVirginia: resolve(__dirname, "private-chef-northern-virginia/index.html")
      }
    }
  }
});
