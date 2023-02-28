import Head from 'next/head';
import subscribeCard from '../components/subscribeCard';
import link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ivy - Newsletter</title>
      </Head>
      {/* add subscribe card with padding aligned center */}/
      <div className="flex flex-col justify-center items-center">
        <div className="w-100">
          {subscribeCard()}
        </div>
      </div>
      {/* add green link to unsubcribe */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-100">
          {/* paragraph with link in the same line links to unsubscribe page*/}
          <p className="text-center">Unsubscribe from our newsletter <a href="/unsubscribe" className="text-green-500">here</a></p>
        </div>
      </div>
    </div> 
  
  )
}
