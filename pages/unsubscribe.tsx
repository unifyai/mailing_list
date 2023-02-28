import Head from 'next/head';
import unsubscribeCard from '@/components/unsubsribeCard';

export default function Unsubscribe() {
    return (
        <div>
            <Head>
                <title>Ivy Newsletter - Unsubscribe</title>
            </Head>
            <div className="flex flex-col justify-center items-center">
                <div className="w-100">
                    {unsubscribeCard()}
                </div>
            </div>
        </div>       
    )
    }
