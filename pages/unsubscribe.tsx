import Head from 'next/head';
import unsubscribeCard from '@/components/unsubsribeCard';

export default function Unsubscribe() {
    return (
        // here we want to add unsubscribe card with padding aligned center
        <div className="flex flex-col justify-center items-center">
            <div className="w-100">
                {unsubscribeCard()}
            </div>
        </div>    
    )
    }
