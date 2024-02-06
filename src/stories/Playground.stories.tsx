 import { Button } from '../Button';

function Playground() {
  return (
    <>
      <p>I don't care. I'll start my own group. Rejection from society is what created X-Men!</p>
      <Button color="blue.100">Hello 🐼!</Button>
      {/* <Button userSuppliedColor="red.100">Hello 🐼!</Button> */}
    </>
  );
}

export default {
  component: Playground,
  title: 'Playground',
};

export const Default = {
  args: {},
};





// import { css } from 'styled-system/css';
// import { center } from 'styled-system/patterns';
// import { token } from 'styled-system/tokens';

// export const App = () => {
//   return (
//     <div className={center({ h: 'full' })}>
//       <WillNotWorkThing userColor="green" />
//       <IsOkThing color="red.200" />
//       <IsAlsoOkThing userColor="blue.200" />
//       <AnotherOkThing userColor="yellow.200" />
//     </div>
//   );
// };


// const WillNotWorkThing = ({userColor}) => {
//   return (
//     <div
//       className={css({
//         color: userColor,
//       })}
//     >Heydeeee</div>
//   )
// }

// const IsOkThing = ({color}) => {
//   return (
//     <div
//       className={css({
//         color,
//       })}
//     >Heydeeee</div>
//   )
// }


// const IsAlsoOkThing = ({userColor}) => {
//   return (
//     <div
//       style={({
//         color: token('colors.' + userColor),
//       })}
//     >Heydeeee</div>
//   )
// }

// const AnotherOkThing = ({userColor}) => {
//   return (
//     <div
//       style={({
//         color: token.var('colors.' + userColor),
//       })}
//     >Heydeeee</div>
//   )
// }