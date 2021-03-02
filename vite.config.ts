import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],

  // This will fix it, but...why is it needed?
  // resolve: {
  //   alias: [
  //     {
  //       find: "@okta/okta-auth-js",
  //       replacement: require.resolve(
  //         "@okta/okta-auth-js/dist/okta-auth-js.umd.js"
  //       ),
  //     },
  //   ],
  // },
});
