import { AppProps } from "$fresh/server.ts";
import BrandGithub from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/brand-github.tsx";

export default function App({ Component }: AppProps) {
  return (
    <body class="bg-black min-h-screen flex flex-col">
      <div class="px-4 pt-8 mx-auto w-full max-w-screen-md flex-1">
        <Component />
      </div>
    </body>
  );
}
