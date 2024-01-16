// (function() {
//     interface Props {
//         id:string,
//         children:number[]
//     }
//     // 将所有的属性都设置为可选属性
//     type PartialProps=Partial<Props>
//     let p1:Props={
//         id:'',
//         children: [1]
//     }
//     let p2:PartialProps={
//         id:''
//     }
// })
// (function() {
//     // 将所有的属性声明为只读属性
//     interface Props {
//         id:string
//         children:number[]
//     }
//     type ReadonlyProps=Readonly<Props>
//     let p1:ReadonlyProps={
//         id:'12',
//         children:[1]
//     }
// })
// (function() {
//     interface Props {
//         id:string
//         name:string
//         children:number[]
//     }
//     type PickProps=Pick<Props,'id'|'name'>
//     let p2:PickProps={
//         id:'sanye',
//         name:'sanye'
//     }
// })

import {Props} from './test'

let p1:Props={x:12,y:15}

