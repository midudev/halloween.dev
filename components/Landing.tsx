import Widget from "../islands/widget.tsx";

export function Landing() {
  return (
    <section class="antialiased pb-20 w-full px-10 min-h-screen flex flex-col justify-between pt-20">
      <div class="fixed -z-10 left-0 top-0 w-full opacity-25 bottom-0 h-full">
        <video
          src="/thunder.mp4"
          loop
          autoPlay
          muted
          class="w-full h-auto"
        >
        </video>
      </div>
      <picture class="relative">
        <img
          class="object-contain w-full h-auto shadow-2xl"
          src="/image.webp"
          alt="Book cover"
        />
        <div class="absolute bottom-0 bg-gradient-to-t from-black to-transparent w-full h-32 z-10">
        </div>
        <img
          src="/logo.png"
          alt="Halloween.dev"
          class="w-2/3 h-auto z-20 absolute -bottom-10 left-0 right-0 mx-auto"
        />
      </picture>

      <header class="mt-16 flex justify-center items-center flex-col gap-4 pb-24">
        <h2 class="text-3xl text-center font-extrabold leading-none tracking-tight text-white">
          Explica tu historia de terror en programación
        </h2>

        <h3 class="text-orange-100 text-center text-lg max-w-2xl [text-wrap:balance] flex justify-center items-center">
          Envía un mensaje de audio explicando tu peor historia de terror que
          has pasado trabajando en el mundo de la programación. ¡Tienes 120
          segundos!
        </h3>

        <div class="flex justify-center items-center pt-8 ">
          <a
            href="https://www.speakpipe.com/midudev"
            target={"_blank"}
            rel={"noopener noreferrer"}
            class="text-white bg-[#ff6b00] hover:bg-[#ff6b00]/80 focus:ring-4 focus:outline-none focus:ring-[#ff6b00]/50 font-bold rounded-lg text-2xl px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2"
          >
            <svg
              class="w-8 h-8 mr-2 -ml-1"
              aria-hidden="true"
              focusable="false"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M7 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M17 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
              <path d="M7 15l10 0"></path>
            </svg>
            ¡Enviar mensaje de voz!
          </a>
        </div>
      </header>
      <footer class="flex justify-center items-center">
        <p class="flex items-center gap-2 mt-4 mb-10 text-sm text-white">
          Es una iniciativa de<a
            class="px-1 bg-white rounded-3xl"
            href="https://midu.dev"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://midu.dev/logo.png"
              width="92"
              height="28"
              loading="lazy"
            />
          </a>
        </p>
      </footer>
    </section>
  );
}
