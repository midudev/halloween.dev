import { HandlerContext, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

import { State, TimelineImage, User } from "🛠️/types.ts";
import { getUserBySession, listGlobalTimelineImage } from "🛠️/db.ts";
import { Breadcrumbs, Page } from "🧱/Breadcrumbs.tsx";

import { Header } from "🧱/Header.tsx";
import { Landing } from "🧱/Landing.tsx";
import { APP_NAME } from "🛠️/const.ts";
import { Timeline } from "🧱/Gallery.tsx";
import { Metas } from "🧱/Meta.tsx";

interface Data {
  user: User | null;
  images: TimelineImage[];
}

export async function handler(_req: Request, ctx: HandlerContext<Data, State>) {
  const images = await listGlobalTimelineImage(true);

  if (!ctx.state.session) {
    return ctx.render({ user: null, images });
  }
  const user = await getUserBySession(ctx.state.session);
  if (!user) {
    return ctx.render({ user: null, images });
  }

  return ctx.render({ user, images });
}

const pages = [{
  name: "Home",
  href: "/",
  current: true,
}] as Page[];

export default function Home(props: PageProps<Data>) {
  return (
    <>
      <Head>
        <title>{APP_NAME}</title>

        <Metas
          name="halloween.dev"
          description="Explica tus historias de terror en programación"
          image="https://halloween.dev/og.jpg"
          image_alt="halloween.dev"
          account="@midudev"
        />
      </Head>

      <Landing />

      {/* <Header user={props.data?.user ?? null} /> */}

      {/* <Top {...props.data} /> */}
    </>
  );
}

function Top(props: Data) {
  return (
    <>
      <div class="mt-4">
        <Breadcrumbs pages={pages} />
      </div>
      <Timeline images={props.images} />
    </>
  );
}
