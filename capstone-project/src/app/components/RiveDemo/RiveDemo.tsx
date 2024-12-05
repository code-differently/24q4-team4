import dynamic from 'next/dynamic';
import { RiveNoSSR } from '../RiveNoSSR/RiveNoSSR';


export const RiveDemo = () => (
  <div style={{ width: "400px", height: "400px" }}>
    <RiveNoSSR src="/isometric_marketing_agency_interior_animation.riv" stateMachines="TTTAFYK 2" />
  </div>
);

export default RiveDemo;