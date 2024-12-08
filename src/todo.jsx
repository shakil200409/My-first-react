// export default function Todo({task, isDone}){
//      return(
//          <li>Work on: {task}</li>
//      )
//  }
 

// Conditional Rendaring: Option-1
// export default function Todo({task, isDone}){
//     if(isDone === true){
//         return(
//             <li>Finished: {task}</li>
//         )
//     }
//     else{
//         return (
//             <li>Work on: {task} </li>
//         )
//     }
// }

// Conditional Rendaring: Option-2
// export default function Todo({task, isDone}){
//     if(isDone){
//         return <li>Finished: {task}</li>
//     }
//     return <li>Work on: {task}</li>
// }

// // Conditional Rendaring: Option-3 Tarnery Operator
// export default function Todo({task, isDone}){
//     return(
//         <li> {isDone ? 'Finished' : 'Work on'} : {task} </li>
//     )
// }

// // Conditional Rendaring: Option-4 With and operator- &&
// export default function Todo({task, isDone}){
//     return(
//         <li> {task}: {isDone && ' Done'} </li>
//     )
// }

// Conditional Rendaring: Option-5 With or operator- ||
export default function Todo({task, isDone}){
    return(
        <li> {task}: {isDone || ' Do it'} </li>
    )
}