import dynamic from 'next/dynamic';

export const RiveNoSSR = dynamic(() => import('@rive-app/react-canvas'), { ssr: false });