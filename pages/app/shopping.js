import Head from "next/head";
import { Dashboard } from "@/components/layouts";

export default function Index() {
  return (
    <Dashboard>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
      </Head>
      <div className='top-0 bottom-0 right-0 left-0 border-0'>
        <iframe
          id='typeform-full'
          frameBorder='0'
          allow='camera; microphone; autoplay; encrypted-media;'
          src='https://form.typeform.com/to/zPSbYm1B?#email=ingeniero@jorgeolarte.com&typeform-medium=embed-snippet'
          className='min-w-full min-h-screen'
        ></iframe>
        <script
          type='text/javascript'
          src='https://embed.typeform.com/embed.js'
        ></script>
      </div>
    </Dashboard>
  );
}
