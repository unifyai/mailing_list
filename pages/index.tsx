import Head from 'next/head';
import subscribeCard from '../components/subscribeCard';
import prisma from '../lib/prisma';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ivy Newsletter - Subsribe</title>
      </Head>
      {/* add subscribe card with padding aligned center */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-100">
          {subscribeCard()}
        </div>
      </div>
      {/* add green link to unsubcribe */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-100">
          {/* paragraph with link in the same line links to unsubscribe page*/}
          <p className="text-center">Unsubscribe from our mailing list <Link href="/unsubscribe" className="text-green-500">here</Link></p>
        </div>
      </div>
    </div> 
  
  )
}
